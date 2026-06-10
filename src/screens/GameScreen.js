import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { doc, increment, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/gameStyles";

const DIFFICULTY_CONFIG = {
  easy:   { max: 5,  divMax: 5,  points: 1, label: "קל" },
  medium: { max: 10, divMax: 9,  points: 2, label: "בינוני" },
  hard:   { max: 20, divMax: 15, points: 3, label: "קשה" },
};

export default function GameScreen() {
  const { operation, difficulty = "medium" } = useLocalSearchParams();
  const { user } = useAuth();
  const config = DIFFICULTY_CONFIG[difficulty] ?? DIFFICULTY_CONFIG.medium;

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [sessionScore, setSessionScore] = useState(0);

  const generateQuestion = () => {
    const { max, divMax } = config;
    let x, y;

    if (operation === "/") {
      const num1 = Math.floor(Math.random() * (divMax - 1)) + 2;
      const num2 = Math.floor(Math.random() * (divMax - 1)) + 2;
      x = num1 * num2;
      y = num1;
    } else {
      x = Math.floor(Math.random() * max) + 1;
      y = Math.floor(Math.random() * max) + 1;
      if (operation === "-" && y > x) [x, y] = [y, x];
    }

    setA(x);
    setB(y);
    setInput("");
    setMessage("");
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const getAnswer = () => {
    switch (operation) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      case "/": return Math.floor(a / (b || 1));
      default:  return 0;
    }
  };

  const getSymbol = () => {
    switch (operation) {
      case "*": return "×";
      case "/": return "÷";
      case "-": return "−";
      default:  return "+";
    }
  };

  const handleInput = async (text) => {
    const clean = text.replace(/[^0-9]/g, "");
    setInput(clean);

    const answer = String(getAnswer());

    if (clean.length === answer.length && clean.length > 0) {
      if (clean === answer) {
        setMessage("✔️ תשובה נכונה");
        setSessionScore((prev) => prev + config.points);

        if (user) {
          try {
            await updateDoc(doc(db, "users", user.uid), {
              totalScore: increment(config.points),
            });
          } catch (_) {}
        }

        setTimeout(() => generateQuestion(), 1000);
      } else {
        setMessage("❌ תשובה שגויה");
        setTimeout(() => {
          setMessage("");
          setInput("");
        }, 1000);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.gameWrapper}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity onPress={() => router.back()} style={styles.backTopButton}>
          <Text style={styles.backTopText}>← Back</Text>
        </TouchableOpacity>

        <View style={styles.sessionScoreBox}>
          <Text style={styles.sessionScoreLabel}>ניקוד משחק</Text>
          <Text style={styles.sessionScoreValue}>⭐ {sessionScore}</Text>
          <Text style={styles.difficultyBadge}>{config.label} · +{config.points} לתשובה</Text>
        </View>

        <View style={styles.gameCard}>
          <Text style={styles.gameTitle}>פתור את התרגיל</Text>

          <Text style={styles.questionModern}>
            {a} {getSymbol()} {b}
          </Text>

          <Text style={styles.equal}>=</Text>

          <TextInput
            value={input}
            onChangeText={handleInput}
            keyboardType="numeric"
            style={styles.modernInput}
            autoFocus
          />

          {message !== "" && (
            <Text style={styles.modernMessage}>{message}</Text>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

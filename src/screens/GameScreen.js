import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import styles from "../styles/gameStyles";

import { router, useLocalSearchParams } from "expo-router";

export default function GameScreen() {

  const { operation } = useLocalSearchParams();

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const generateQuestion = () => {

  let x;
  let y;

  if (operation === "/") {

    const num1 = Math.floor(Math.random() * 9) + 2;
    const num2 = Math.floor(Math.random() * 9) + 2;

    x = num1 * num2;
    y = num1;

  } else {

    x = Math.floor(Math.random() * 10) + 1;
    y = Math.floor(Math.random() * 10) + 1;

    if (operation === "-" && y > x) {
      [x, y] = [y, x];
    }
  }

  setA(x);
  setB(y);
  setInput("");
  setMessage("");
};ר

  useEffect(() => {
    generateQuestion();
  }, []);

  const getAnswer = () => {
    switch (operation) {
      case "+":
        return a + b;

      case "-":
        return a - b;

      case "*":
        return a * b;

      case "/":
        return Math.floor(a / (b || 1));

      default:
        return 0;
    }
  };

  const getSymbol = () => {

  switch (operation) {

    case "*":
      return "×";

    case "/":
      return "÷";

    case "-":
      return "−";

    default:
      return "+";
  }
};

  const handleInput = (text) => {

    const clean = text.replace(/[^0-9]/g, "");

    setInput(clean);

    const answer = String(getAnswer());

    if (clean.length === answer.length && clean.length > 0) {

      if (clean === answer) {

        setMessage("✔️ תשובה נכונה");

        setTimeout(() => {
          generateQuestion();
        }, 1000);

      } else {

        setMessage("❌ תשובה שגויה");

        setTimeout(() => {
          setMessage("");
        }, 1000);
      }

      setInput("");
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
          <TouchableOpacity
  onPress={() => router.back()}
  style={styles.backTopButton}
>
  <Text style={styles.backTopText}>
    ← Back
  </Text>
</TouchableOpacity>
      <View style={styles.gameCard}>

        <Text style={styles.gameTitle}>
          Solve the exercise
        </Text>

        <Text style={styles.questionModern}>
          {a} {getSymbol()} {b}
        </Text>

        <Text style={styles.equal}>
          =
        </Text>

        <TextInput
          value={input}
          onChangeText={handleInput}
          keyboardType="numeric"
          style={styles.modernInput}
          autoFocus
        />

        {message !== "" && (
          <Text style={styles.modernMessage}>
            {message}
          </Text>
        )}
      </View>

    </ScrollView>

  </KeyboardAvoidingView>
);
}



import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/homeStyles";

const OPERATIONS = [
  { label: "+", op: "+", color: "#4CAF50" },
  { label: "-", op: "-", color: "#FF9800" },
  { label: "×", op: "*", color: "#2196F3" },
  { label: "÷", op: "/", color: "#E91E63" },
];

const DIFFICULTIES = [
  { label: "קל", value: "easy", color: "#4CAF50" },
  { label: "בינוני", value: "medium", color: "#FF9800" },
  { label: "קשה", value: "hard", color: "#f44336" },
];

export default function HomeScreen() {
  const { user, profile } = useAuth();
  const [difficulty, setDifficulty] = useState("medium");

  useEffect(() => {
    if (user === null) {
      router.replace("/login");
    }
  }, [user]);

  const handleLogout = async () => {
    await signOut(auth);
    router.replace("/login");
  };

  if (user === undefined) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
      </View>
    );
  }

  const firstName = profile?.firstName ?? "";
  const totalScore = profile?.totalScore ?? 0;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>יציאה</Text>
      </TouchableOpacity>

      <Text style={styles.greeting}>
        {firstName ? `שלום, ${firstName}! 👋` : "שלום! 👋"}
      </Text>

      <Text style={styles.title}>Math Exercises</Text>

      <View style={styles.scoreBox}>
        <Text style={styles.scoreLabel}>הניקוד שלך</Text>
        <Text style={styles.scoreValue}>⭐ {totalScore}</Text>
      </View>

      <Text style={styles.sectionLabel}>רמת קושי</Text>
      <View style={styles.difficultyRow}>
        {DIFFICULTIES.map((d) => (
          <TouchableOpacity
            key={d.value}
            style={[
              styles.difficultyBtn,
              difficulty === d.value && { backgroundColor: d.color },
            ]}
            onPress={() => setDifficulty(d.value)}
          >
            <Text
              style={[
                styles.difficultyText,
                difficulty === d.value && styles.difficultyTextActive,
              ]}
            >
              {d.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.leaderboardButton}
        onPress={() => router.push("/leaderboard")}
      >
        <Text style={styles.leaderboardButtonText}>🏆 לוח תוצאות</Text>
      </TouchableOpacity>

      <Text style={styles.sectionLabel}>בחר תרגיל</Text>
      <View style={styles.grid}>
        {OPERATIONS.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={[styles.box, { backgroundColor: item.color }]}
            activeOpacity={0.8}
            onPress={() =>
              router.push({
                pathname: "/game",
                params: { operation: item.op, difficulty },
              })
            }
          >
            <Text style={styles.boxText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

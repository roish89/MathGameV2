import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";
import { collection, orderBy, query, limit, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/leaderboardStyles";

const MEDALS = ["🥇", "🥈", "🥉"];

export default function LeaderboardScreen() {
  const { user } = useAuth();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const q = query(
          collection(db, "users"),
          orderBy("totalScore", "desc"),
          limit(20)
        );
        const snap = await getDocs(q);
        const data = snap.docs.map((doc) => ({
          uid: doc.id,
          ...doc.data(),
        }));
        setEntries(data);
      } catch (_) {
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>← חזרה</Text>
      </TouchableOpacity>

      <Text style={styles.title}>🏆 לוח תוצאות</Text>
      <Text style={styles.subtitle}>20 המשתמשים המובילים</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#4a90e2" style={{ marginTop: 40 }} />
      ) : (
        <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
          {entries.map((entry, index) => {
            const isMe = entry.uid === user?.uid;
            return (
              <View
                key={entry.uid}
                style={[styles.row, isMe && styles.rowMe]}
              >
                <Text style={styles.rank}>
                  {index < 3 ? MEDALS[index] : `#${index + 1}`}
                </Text>

                <View style={styles.nameCol}>
                  <Text style={[styles.name, isMe && styles.nameMe]}>
                    {entry.firstName || "משתמש"}
                    {entry.lastName ? ` ${entry.lastName}` : ""}
                    {isMe ? " (אתה)" : ""}
                  </Text>
                </View>

                <Text style={[styles.score, isMe && styles.scoreMe]}>
                  ⭐ {entry.totalScore ?? 0}
                </Text>
              </View>
            );
          })}

          {entries.length === 0 && (
            <Text style={styles.empty}>אין עדיין תוצאות</Text>
          )}
        </ScrollView>
      )}
    </View>
  );
}

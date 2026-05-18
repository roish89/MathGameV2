
import { router } from "expo-router";
import {
  Text,
  TouchableOpacity,
  View
} from "react-native";
import styles from "../styles/homeStyles";

export default function HomeScreen() {

  const items = [
    { label: "+", op: "+", color: "#4CAF50" },
    { label: "-", op: "-", color: "#FF9800" },
    { label: "×", op: "*", color: "#2196F3" },
    { label: "÷", op: "/", color: "#E91E63" },
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Math Exercises
      </Text>

      <Text style={styles.subtitle}>
        Choose your exercise
      </Text>

      <View style={styles.grid}>
        {items.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={[
              styles.box,
              { backgroundColor: item.color }
            ]}
            activeOpacity={0.8}
            onPress={() =>
            router.push({
                pathname: "/game",
                params: {
                operation: item.op,
                },
            })
            }
          >
            <Text style={styles.boxText}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

        <TouchableOpacity
  style={styles.loginTempButton}
  onPress={() => router.push("/login")}
>

  <Text style={styles.loginTempText}>
    Go To Login
  </Text>

</TouchableOpacity>
    </View>
  );
}
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/loginStyles";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  }, [user]);

  const login = async () => {
    if (!email || !password) {
      alert("נא למלא אימייל וסיסמה");
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/");
    } catch (e) {
      switch (e.code) {
        case "auth/invalid-email":
          alert("כתובת האימייל לא תקינה");
          break;
        case "auth/user-not-found":
          alert("החשבון לא קיים");
          break;
        case "auth/wrong-password":
          alert("הסיסמה שגויה");
          break;
        case "auth/invalid-credential":
          alert("אימייל או סיסמה שגויים");
          break;
        default:
          alert("אירעה שגיאה בהתחברות");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.loginContainer}>
        <View style={styles.logoArea}>
          <Text style={styles.logoEmoji}>🧮</Text>
          <Text style={styles.loginTitle}>Math Exercises</Text>
          <Text style={styles.loginSubtitle}>התחבר לחשבון שלך</Text>
        </View>

        <View style={styles.loginCard}>
          <TextInput
            placeholder="אימייל"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            style={styles.loginInput}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            placeholder="סיסמה"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.loginInput}
          />

          <TouchableOpacity
            style={[styles.loginButton, loading && { opacity: 0.7 }]}
            onPress={login}
            disabled={loading}
          >
            {loading
              ? <ActivityIndicator color="white" />
              : <Text style={styles.loginButtonText}>התחבר</Text>
            }
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>או</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => router.push("/register")}
          >
            <Text style={styles.registerButtonText}>צור חשבון חדש</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

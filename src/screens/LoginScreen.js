import { router } from "expo-router";
import { useState } from "react";

import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import styles from "../styles/loginStyles";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    onLogin();
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
  }
};

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.loginContainer}
      >
        <View style={styles.loginCard}>
          <Text style={styles.loginTitle}>
            Math Exercises
          </Text>

          <Text style={styles.loginSubtitle}>
            Login or create account
          </Text>

          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.loginInput}
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.loginInput}
          />

          <TouchableOpacity
            style={styles.loginButton}
            onPress={login}
          >
            <Text style={styles.loginButtonText}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => router.push("/register")}
          >
            <Text style={styles.loginButtonText}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}


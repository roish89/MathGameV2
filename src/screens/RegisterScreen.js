import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import app, { db } from "../../firebase";
import styles from "../styles/registerStyles";

export default function RegisterScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [loading, setLoading] = useState(false);

  const auth = getAuth(app);

  const register = async () => {
    if (!firstName || !email || !password) {
      alert("נא למלא שם פרטי, אימייל וסיסמה");
      return;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        phone,
        birthDate: birthDate.toISOString(),
        email,
        totalScore: 0,
        createdAt: new Date().toISOString(),
      });

      router.replace("/");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>יצירת חשבון</Text>
          <Text style={styles.subtitle}>הצטרף למשחק</Text>

          <TextInput
            placeholder="שם פרטי *"
            placeholderTextColor="#aaa"
            value={firstName}
            onChangeText={setFirstName}
            style={styles.input}
          />

          <TextInput
            placeholder="שם משפחה"
            placeholderTextColor="#aaa"
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
          />

          <TextInput
            placeholder="מספר טלפון"
            placeholderTextColor="#aaa"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
            keyboardType="phone-pad"
          />

          <TouchableOpacity
            style={[styles.input, styles.dateButton]}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.dateText}>
              📅 {birthDate.toLocaleDateString("he-IL")}
            </Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={birthDate}
              mode="date"
              display="default"
              onChange={(_event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) setBirthDate(selectedDate);
              }}
            />
          )}

          <TextInput
            placeholder="אימייל *"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            placeholder="סיסמה *"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />

          <TouchableOpacity
            style={[styles.button, loading && { opacity: 0.7 }]}
            onPress={register}
            disabled={loading}
          >
            {loading
              ? <ActivityIndicator color="white" />
              : <Text style={styles.buttonText}>הירשם</Text>
            }
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.backText}>חזרה להתחברות</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

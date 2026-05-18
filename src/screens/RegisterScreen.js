import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { router } from "expo-router";

import styles from "../styles/registerStyles";

export default function RegisterScreen() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [phone, setPhone] = useState("");
const [birthDate, setBirthDate] = useState("");
const [showDatePicker, setShowDatePicker] = useState(false);
const [date, setDate] = useState(new Date());

  const register = () => {

    alert("Registered!");

    router.back();
  };

  return (

    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

      <ScrollView
        contentContainerStyle={styles.container}
      >

        <View style={styles.card}>

          <Text style={styles.title}>
            Create Account
          </Text>

          <Text style={styles.subtitle}>
            Register new user
          </Text>

        <TextInput
  placeholder="First Name"
  value={firstName}
  onChangeText={setFirstName}
  style={styles.input}
/>
<TextInput
  placeholder="Last Name"
  value={lastName}
  onChangeText={setLastName}
  style={styles.input}
/>
<TextInput
  placeholder="Last Name"
  value={lastName}
  onChangeText={setLastName}
  style={styles.input}
/>
<TouchableOpacity
  style={styles.input}
  onPress={() => setShowDatePicker(true)}
>

  <Text>
    {date.toLocaleDateString()}
  </Text>

</TouchableOpacity>

{showDatePicker && (
  <DateTimePicker
    value={date}
    mode="date"
    display="default"
    onChange={(event, selectedDate) => {

      setShowDatePicker(false);

      if (selectedDate) {
        setDate(selectedDate);
      }
    }}
  />
)}
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={register}
          >

            <Text style={styles.buttonText}>
              Register
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.back()}
          >

            <Text style={styles.backText}>
              Back to Login
            </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

    </KeyboardAvoidingView>
  );
}
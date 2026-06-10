import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f6ff",
    padding: 24,
  },

  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 25,
    padding: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
    color: "#4a90e2",
  },

  subtitle: {
    textAlign: "center",
    marginBottom: 24,
    color: "#888",
    fontSize: 15,
  },

  input: {
    borderWidth: 1.5,
    borderColor: "#e0e6f0",
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#fafbff",
    color: "#333",
  },

  dateButton: {
    justifyContent: "center",
  },

  dateText: {
    fontSize: 16,
    color: "#555",
  },

  button: {
    backgroundColor: "#4CAF50",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 8,
  },

  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },

  backText: {
    marginTop: 18,
    textAlign: "center",
    color: "#4a90e2",
    fontWeight: "bold",
    fontSize: 15,
  },

});

export default styles;

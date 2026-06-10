import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  loginContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f6ff",
    padding: 24,
  },

  logoArea: {
    alignItems: "center",
    marginBottom: 30,
  },

  logoEmoji: {
    fontSize: 60,
    marginBottom: 8,
  },

  loginTitle: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#4a90e2",
    marginBottom: 6,
  },

  loginSubtitle: {
    fontSize: 16,
    color: "#888",
  },

  loginCard: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 25,
    padding: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  loginInput: {
    borderWidth: 1.5,
    borderColor: "#e0e6f0",
    borderRadius: 14,
    padding: 15,
    marginBottom: 14,
    fontSize: 16,
    backgroundColor: "#fafbff",
    color: "#333",
  },

  loginButton: {
    backgroundColor: "#4a90e2",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 6,
  },

  loginButtonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#e8e8e8",
  },

  dividerText: {
    marginHorizontal: 12,
    color: "#aaa",
    fontSize: 14,
  },

  registerButton: {
    borderWidth: 1.5,
    borderColor: "#4a90e2",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  registerButtonText: {
    color: "#4a90e2",
    fontSize: 17,
    fontWeight: "bold",
  },

});

export default styles;

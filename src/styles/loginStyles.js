import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  loginContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f6ff",
    padding: 20,
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

  loginTitle: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#4a90e2",
  },

  loginSubtitle: {
    textAlign: "center",
    marginBottom: 30,
    color: "gray",
    fontSize: 16,
  },

  loginInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    fontSize: 18,
    backgroundColor: "#fafafa",
  },

  loginButton: {
    backgroundColor: "#4a90e2",
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },

  registerButton: {
    backgroundColor: "#50c878",
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 15,
  },

  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

});

export default styles;
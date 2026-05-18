import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f6ff",
    padding: 20,
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
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#4a90e2",
  },

  subtitle: {
    textAlign: "center",
    marginBottom: 30,
    color: "gray",
    fontSize: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    fontSize: 18,
    backgroundColor: "#fafafa",
  },

  button: {
    backgroundColor: "#50c878",
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  backText: {
    marginTop: 20,
    textAlign: "center",
    color: "#4a90e2",
    fontWeight: "bold",
  },

});

export default styles;
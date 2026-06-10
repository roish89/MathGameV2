import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f4f7ff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  backButton: {
    alignSelf: "flex-start",
    backgroundColor: "#4a90e2",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 20,
  },

  backText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4a90e2",
    textAlign: "center",
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 14,
    color: "#aaa",
    textAlign: "center",
    marginBottom: 24,
  },

  list: {
    flex: 1,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },

  rowMe: {
    backgroundColor: "#e8f0fe",
    borderWidth: 1.5,
    borderColor: "#4a90e2",
  },

  rank: {
    fontSize: 22,
    width: 44,
    textAlign: "center",
  },

  nameCol: {
    flex: 1,
    paddingHorizontal: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },

  nameMe: {
    color: "#4a90e2",
  },

  score: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#555",
  },

  scoreMe: {
    color: "#4a90e2",
  },

  empty: {
    textAlign: "center",
    color: "#aaa",
    fontSize: 16,
    marginTop: 40,
  },

});

export default styles;

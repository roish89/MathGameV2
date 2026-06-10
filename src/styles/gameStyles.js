import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  gameWrapper: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f7ff",
    padding: 20,
    paddingTop: 80,
  },

  backTopButton: {
    position: "absolute",
    top: 55,
    left: 20,
    backgroundColor: "#4a90e2",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
    zIndex: 20,
  },

  backTopText: {
    color: "white",
    fontWeight: "bold",
  },

  sessionScoreBox: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 18,
    padding: 16,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  sessionScoreLabel: {
    fontSize: 13,
    color: "#999",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  sessionScoreValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4a90e2",
    marginVertical: 2,
  },

  difficultyBadge: {
    fontSize: 13,
    color: "#aaa",
    marginTop: 2,
  },

  gameCard: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 30,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },

  gameTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4a90e2",
    marginBottom: 24,
  },

  questionModern: {
    fontSize: 55,
    fontWeight: "bold",
    color: "#333",
  },

  equal: {
    fontSize: 40,
    marginVertical: 10,
    color: "#555",
  },

  modernInput: {
    width: 150,
    borderWidth: 2,
    borderColor: "#4a90e2",
    borderRadius: 20,
    padding: 15,
    textAlign: "center",
    fontSize: 35,
    backgroundColor: "#fafafa",
    color: "#333",
  },

  modernMessage: {
    marginTop: 25,
    fontSize: 22,
    fontWeight: "bold",
  },

});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f7ff",
  },

  container: {
    flex: 1,
    backgroundColor: "#f4f7ff",
    alignItems: "center",
    padding: 20,
    paddingTop: 60,
  },

  logoutButton: {
    position: "absolute",
    top: 55,
    right: 20,
    backgroundColor: "#ff4d4d",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
  },

  logoutText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },

  greeting: {
    fontSize: 18,
    color: "#555",
    marginTop: 10,
    alignSelf: "flex-start",
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#4a90e2",
    marginTop: 4,
    alignSelf: "flex-start",
  },

  scoreBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 16,
    width: "100%",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  scoreLabel: {
    fontSize: 16,
    color: "#666",
    fontWeight: "600",
  },

  scoreValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4a90e2",
  },

  sectionLabel: {
    alignSelf: "flex-start",
    fontSize: 15,
    fontWeight: "600",
    color: "#888",
    marginTop: 20,
    marginBottom: 10,
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  difficultyRow: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
    marginBottom: 4,
  },

  difficultyBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
    backgroundColor: "#e8edf5",
  },

  difficultyText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#888",
  },

  difficultyTextActive: {
    color: "white",
  },

  leaderboardButton: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 4,
    marginBottom: 8,
    borderWidth: 1.5,
    borderColor: "#4a90e2",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },

  leaderboardButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4a90e2",
  },

  grid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  box: {
    width: "47%",
    height: 150,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },

  boxText: {
    fontSize: 55,
    color: "white",
    fontWeight: "bold",
  },

});

export default styles;

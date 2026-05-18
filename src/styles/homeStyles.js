import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f4f7ff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#4a90e2",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: "gray",
    marginBottom: 40,
  },

  grid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  box: {
    width: "47%",
    height: 170,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,

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

  loginTempButton: {
    marginTop: 20,
    backgroundColor: "#333",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 15,
  },

  loginTempText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

});

export default styles;
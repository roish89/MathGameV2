import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "40%",
    height: "35%",
    margin: 10,
    backgroundColor: "#4a90e2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  boxText: {
    fontSize: 40,
    color: "white",
  },
  gameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    fontSize: 32,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    width: 120,
    fontSize: 28,
    textAlign: "center",
    borderRadius: 10,
    padding: 10,
  },
  message: {
    marginTop: 20,
    fontSize: 22,
  },
  back: {
    marginTop: 40,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
  },
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
homeWrapper: {
  flex: 1,
  backgroundColor: "#f4f7ff",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
},

mainTitle: {
  fontSize: 38,
  fontWeight: "bold",
  color: "#4a90e2",
  marginBottom: 10,
},

subTitle: {
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

modernBox: {
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

modernBoxText: {
  fontSize: 55,
  color: "white",
  fontWeight: "bold",
},
gameWrapper: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f4f7ff",
  padding: 20,
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
  fontSize: 28,
  fontWeight: "bold",
  color: "#4a90e2",
  marginBottom: 30,
},

questionModern: {
  fontSize: 55,
  fontWeight: "bold",
  color: "#333",
},

equal: {
  fontSize: 40,
  marginVertical: 10,
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
},

modernMessage: {
  marginTop: 25,
  fontSize: 24,
  fontWeight: "bold",
},

backModern: {
  marginTop: 40,
  backgroundColor: "#4a90e2",
  paddingVertical: 15,
  paddingHorizontal: 40,
  borderRadius: 20,
},

backModernText: {
  color: "white",
  fontSize: 18,
  fontWeight: "bold",
},
backTopButton: {
  position: "absolute",
  top: 60,
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
logoutButton: {
  position: "absolute",
  top: 60,
  left: 20,
  backgroundColor: "#ff4d4d",
  paddingVertical: 8,
  paddingHorizontal: 15,
  borderRadius: 15,
},

logoutText: {
  color: "white",
  fontWeight: "bold",
},
});

export default styles;
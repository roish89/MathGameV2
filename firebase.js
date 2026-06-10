import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_WBV1MnCd_M9n4-ruWb2nqCdRk6V9xiQ",
  authDomain: "mathgamev2-7fcf4.firebaseapp.com",
  projectId: "mathgamev2-7fcf4",
  storageBucket: "mathgamev2-7fcf4.firebasestorage.app",
  messagingSenderId: "379444162090",
  appId: "1:379444162090:web:df0716bba90d4b543a5d53",
  measurementId: "G-7DR7CN704P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
export default app;
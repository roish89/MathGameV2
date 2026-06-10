import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined);
  const [profile, setProfile] = useState(null);

  const loadProfile = async (firebaseUser) => {
    if (!firebaseUser) {
      setProfile(null);
      return;
    }
    const snap = await getDoc(doc(db, "users", firebaseUser.uid));
    if (snap.exists()) setProfile(snap.data());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser ?? null);
      loadProfile(firebaseUser);
    });
    return unsubscribe;
  }, []);

  const refreshProfile = () => loadProfile(user);

  return (
    <AuthContext.Provider value={{ user, profile, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

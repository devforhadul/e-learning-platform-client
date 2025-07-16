import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/firebase.init";
import axios from "axios";

// eslint-disable-next-line
export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   Signin with email and pass
  const signinWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Create account
  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in with google
  const signinWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   logout
  const logOut = async () => {
    setLoading(true);
    return signOut(auth);
  };

  //   Auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // jwt
      if (currentUser?.email) {
        axios
          .post(`${import.meta.env.VITE_API_URL}/jwt`, {
            email: currentUser?.email,
          })
          .then((res) => localStorage.setItem("token", res?.data?.token));
      }

      setLoading(false);
    });

    return () => {
      return unSubscribe();
    };
  }, []);

  const userInfo = {
    signinWithGoogle,
    loading,
    user,
    logOut,
    createAccount,
    signinWithEmail,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;

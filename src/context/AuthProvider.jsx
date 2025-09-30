import React, { useContext, useState, useEffect } from "react";
import AuthContext from "./AuthContext.js";
import { onAuthStateChanged } from "firebase/auth";
import { auth, login, signUp, logOut } from "../firebase/firebase.js";
import App from "../App.jsx";

const AuthProvider = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isClick_profile, setIsClick_profile] = useState(false);
  const [isclickLogin, setIsClickLogin] = useState(false);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signUp,
        logOut,
        isclickLogin,
        setIsClickLogin,
        isClick_profile,
        setIsClick_profile,
      }}
    >
      {!loading && <App />}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;

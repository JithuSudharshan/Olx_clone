import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext.js";
import App from "../App.jsx";

const AuthProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClick_profile, setIsClick_profile] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, isClick_profile, setIsClick_profile }}
    >
      <App />
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}

export default AuthProvider;

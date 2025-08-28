import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext.js";
import App from "../App.jsx";

const AuthProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClick_profile, setIsClick_profile] = useState(false);
  const [isclickLogin, setIsClickLogin] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isClick_profile,
        setIsClick_profile,
        isclickLogin,
        setIsClickLogin,
      }}
    >
      <App />
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;

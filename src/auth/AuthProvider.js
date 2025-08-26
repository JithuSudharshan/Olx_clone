import React, { useState } from "react";
import AuthContext from "../auth/AuthContext.js";
import App from "../App.jsx";

const AuthProvider = () => {
 

  
  return (
    <AuthContext.Provider value={{ }}>
      <App />
    </AuthContext.Provider>
  );
};

export default AuthProvider;

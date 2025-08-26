import React, { useState } from "react";
import "../Login/Login.css";
import olx_logo from "../../assets/olx_logo.svg";

const Login = () => {
  const [loggedState, setLoggedState] = useState("Sign Up");
  return (
    <div className="login-modal">
      <img src={olx_logo} alt="" />
      <div className="login-form">
        <h1>{loggedState}</h1>
        <form>
            {loggedState === "Sign Up" ? <input type="text" placeholder="Enter your name" />: <></>}
          
          <input type="text" placeholder="Enter your Email" />
          <input type="text" placeholder="Enter your password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-switch">
        {loggedState === "Sign Up" ? (
          <p>
            Already have an account
            <span onClick={() => setLoggedState("Sign In")}>Sign In</span>
          </p>
        ) : (
          <p>
            New to OLX{" "}
            <span onClick={() => setLoggedState("Sign Up")}>Sign UP</span>{" "}
          </p>
        )}
      </div>
      <div className="card-text">
        <p>All your personal deatils are safe with us.</p>
        <p>
          if you continue, you are accepting OLX terms and conditions and
          privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;

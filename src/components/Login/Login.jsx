import React, { useState } from "react";
import "../Login/Login.css";
import olx_logo from "../../assets/Images/Card_image/olx_logo.svg";
import { signUp, login } from "../../firebase/firebase";
import Cross_icon from "../../assets/Images/profile page-icons/x-button.png";
import { useAuth } from "../../context/AuthProvider";
import eye_icon from "../../assets/eye.png"
import hidden_icon from "../../assets/hidden.png"

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedState, setLoggedState] = useState("Sign In");
  const [eyeClick, setEyeClick] = useState(false)

  const { setIsClickLogin } = useAuth();

  //Authentication on FormData using Firebase
  const user_auth = async (event) => {
    event.preventDefault();
    try {
      if (loggedState === "Sign In") {
        await login(email, password);
        setIsClickLogin(false);
      } else {
        await signUp(name, email, password);
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="login-modal">
      <img
        onClick={() => setIsClickLogin(false)}
        className="cancel"
        src={Cross_icon}
        alt=""
      />
      <img src={olx_logo} alt="" />
      <div className="login-form">
        <h1>{loggedState}</h1>

        {/* FORM Skelton */}
        <form>
          {loggedState === "Sign Up" ? (
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}

          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <div className="password-container">
            <input
              type={eyeClick ? "password" : "text"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
            <span
              className="toggle-icon"
              onClick={() => setEyeClick((prev) => !prev)}
            >
              {eyeClick ? <img src={eye_icon} alt="" /> : <img src={hidden_icon} alt="" />}
            </span>
          </div>

          <button onClick={user_auth} type="submit">
            {loggedState}
          </button>
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

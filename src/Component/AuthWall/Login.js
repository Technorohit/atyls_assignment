import Logo from "../../Asset/Logo.svg";
import React from "react";
import "./Auth.css";
import Eye from "../../Asset/eye.svg";

export default function Login(props) {
  const {setShowLogin} = props;
  return (
    <div className="container">
      <div className="Logo">
        <img src={Logo} alt={"brandLogo"} />
      </div>
      <div className="containerWrapper">
        <div className="LoginFormContainer">
          <div className="loginHeaderSection">
            <p className="welcomeHeader">WELCOME BACK</p>
            <p className="loginHeader">Log into your account</p>
          </div>
          <div className="loginBodySection">
            <div className="email-field">
              <div className="Email_Label">
                <label>Email or Username</label>
              </div>
              <input
                type={"text"}
                className="emailInput"
                placeholder="Enter your email or username"
              />
            </div>
            <div className="password-field">
              <div className="Password_Label">
                <label>Password</label>
                <label className="forgotPassword">Forgot password?</label>
              </div>
              <div className="passwordWrapper">
                <input
                  type={"text"}
                  className="passwordInput"
                  placeholder="Enter your password"
                />
                <img className="showHidePassword" src={Eye} />
              </div>
            </div>
          </div>
          <div className="loginWrapper">
            <div className="loginCTA">Login now</div>
            <div className="RegisterCTA">
              Not registered yet? <span onClick={()=>setShowLogin(false)}>Register &#8594; </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

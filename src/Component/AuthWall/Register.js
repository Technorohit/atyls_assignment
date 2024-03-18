import React from "react";
import "./Auth.css";
import Eye from "../../Asset/eye.svg";
import CloseBtn from "../../Asset/Closebtn.svg";
import Login from "./Login";


export default function Register(props) {
    const {showAuthWall, setShowAuthWall} = props;
    const [showLogin, setShowLogin] = React.useState(false);

  if(showLogin){
    return <Login setShowLogin={setShowLogin}/>
  }  
  return (
    <div className="container">
      {/* <div className="Logo">
        <img src={Logo} alt={"brandLogo"} />
      </div> */}
      <div className="containerWrapper">
        <div className="LoginFormContainer">
            <div className="closeBtn" onClick={()=>setShowAuthWall(false)}><img src={CloseBtn}/></div>
          <div className="loginHeaderSection">
            <p className="welcomeHeader">SIGN UP</p>
            <p className="loginHeader">Create an account to continue</p>
          </div>
          <div className="loginBodySection">
            <div className="email-field">
              <div className="Email_Label">
                <label>Email</label>
              </div>
              <input
                type={"text"}
                className="emailInput"
                placeholder="Enter your email"
              />
            </div>
            <div className="username-field">
              <div className="Username_Label">
                <label>Username</label>
              </div>
              <input
                type={"text"}
                className="emailInput"
                placeholder="Choose a preferred username"
              />
            </div>
            <div className="password-field">
              <div className="Password_Label">
                <label>Password</label>
                {/* <label className="forgotPassword">Forgot password?</label> */}
              </div>
              <div className="passwordWrapper">
                <input
                  type={"text"}
                  className="passwordInput"
                  placeholder="Choose a strong password"
                />
                <img className="showHidePassword" src={Eye} />
              </div>
            </div>
          </div>
          <div className="loginWrapper">
            <div className="loginCTA">Continue</div>
            <div className="RegisterCTA">
             Already have an account? <span onClick={()=>setShowLogin(true)}>Login &#8594; </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

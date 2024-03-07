import React from "react";
import "./LoginPage.css";
import {
  Container,
  GoogleIcon,
  Input,
  PasswordIcon,
  PersonOutlineIcon
} from "../../exports/exports";
function LoginPage() {
  return (
    <Container className="loginContainer">
      <div className="login">
        <div className="loginHeader">
          <h2>Log in</h2>
        </div>
        <form action="" className="loginForm">
          <div className="loginInputContainer">
            <PersonOutlineIcon className="loginIcon" />
            <Input placeholder="user / email address" className="loginInput" />
          </div>
          <div className="loginInputContainer">
            <PasswordIcon className="loginIcon" />
            <Input placeholder="password" className="loginInput" />
          </div>

          <div className="loginInputContainerCheckbox">
            <button className="forgotPasswordButton">Forgot Password</button>
          </div>
          <button className="loginButton">Log In</button>
        </form>
        <button className="loginWithGoogleButton">
          <GoogleIcon className="loginIcon" />
          Log In with Google
        </button>
        <p className="navigateToCreateAccountFromloginPage">
          Don't have an account? <span>Create Account</span>
        </p>
      </div>
    </Container>
  );
}

export default LoginPage;

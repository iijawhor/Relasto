import React from "react";
import "./CreateAccount.css";
import {
  Container,
  Input,
  PasswordIcon,
  PersonOutlineIcon
} from "../../exports/exports";
function CreateAccount() {
  return (
    <Container className="createAccountContainer">
      <div className="createAccount">
        <div className="createAccountHeader">
          <h1>Create Account</h1>
        </div>
        <form action="" className="createAccountForm">
          <div className="createAccountInputContainer">
            <PersonOutlineIcon />
            <Input placeholder="Full name" className="createAccountInput" />
          </div>
          <div className="createAccountInputContainer">
            <PersonOutlineIcon />
            <Input
              placeholder="user / email address"
              className="createAccountInput"
            />
          </div>
          <div className="createAccountInputContainer">
            <PersonOutlineIcon />
            <Input
              placeholder="Create Password"
              className="createAccountInput"
            />
          </div>
          <button className="createAccountButton">Create Account</button>
        </form>
        <button className="createAccountWithGoogle">
          Create Account with Google
        </button>
        <p className="navigateToLoginFromCreateAccount">
          Already have an account? <span>Log In</span>
        </p>
      </div>
    </Container>
  );
}

export default CreateAccount;

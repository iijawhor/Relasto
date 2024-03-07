import React from "react";
import "./OTP.css";
import { Container } from "../../exports/exports";
function OTP() {
  return (
    <Container className="OtpContainer">
      <div className="otp">
        <div className="otpHeader">
          <h1>Enter OTP</h1>
          <p>Please check your mail,We sent an OTP code</p>
        </div>
        <ul className="otpContainer">
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
        </ul>
        <button className="otpConfirmButton">Confirm</button>
        <button className="requestOtpButton">Request OTP Again</button>
        <p className="optToNavigateToLoginButton">
          Already have an account? <span>Log in</span>
        </p>
      </div>
    </Container>
  );
}

export default OTP;

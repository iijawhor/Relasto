import React from "react";
import "./Error.css";
import { Container } from "../../exports/exports";
function Error() {
  return (
    <Container className="errorContainer">
      <div className="error">
        <div className="errorDetails">
          <h1>404</h1>
          <p>Something went wrong!</p>
        </div>
        <button className="errorNaviagteToHomePageButton">Home Page</button>
      </div>
    </Container>
  );
}

export default Error;

import React from "react";
import { useNavigate } from "react-router-dom";
function Logo() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        fontSize: "30px",
        fontWeight: "600",
        color: "#fd650b",
        letterSpacing: "1px",
        fontFamily: "system-ui",
        cursor: "pointer",
        width: "fit-content"
      }}
      onClick={() => navigate("/")}
    >
      Relasto
    </div>
  );
}

export default Logo;

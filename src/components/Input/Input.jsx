import React, { forwardRef } from "react";
import "./Input.css";
const Input = forwardRef(
  ({ onChange, className, type = "text", value, ...restProps }, ref) => {
    return (
      <input
        onChange={onChange}
        value={value}
        type={type}
        {...restProps}
        className={`inputComponent ${className}`}
      />
    );
  }
);

export default Input;

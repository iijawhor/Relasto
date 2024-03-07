import React from "react";

function Button({
  children,
  name,
  className,
  onClick,
  rightIcon,
  leftIcon,
  ...restProps
}) {
  return (
    <button className={`${className}`} onClick={onClick} {...restProps}>
      {!leftIcon && leftIcon}
      {name}
      {!rightIcon && rightIcon}
    </button>
  );
}

export default Button;

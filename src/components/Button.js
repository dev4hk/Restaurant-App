import React from "react";

const Button = (props) => {
  return (
    <div
      className={props.className}
      onClick={props.onClick ? props.onClick : () => {}}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </div>
  );
};

export default Button;

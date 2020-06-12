import React from "react";

const constants = {
  level: { secondary: "g-button--secondary", warning: "g-button--warning" }
};

const Button = ({ disabled, level, name, type, onClick, children }) => (
  <button
    className={`g-button${disabled ? " g-button--disabled" : ""}${
      constants.level[level] !== undefined ? " " + constants.level[level] : ""
    }`}
    disabled={
      disabled !== undefined ? disabled.toString() === "true" : undefined
    }
    type={type}
    name={name}
    onClick={onClick}
  >
    {" "}
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment> Example text </React.Fragment>
    )}{" "}
  </button>
);

export default Button;

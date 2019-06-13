import React from "react";

const constants = {
  level: { secondary: "g-button--secondary", warning: "g-button--warning" },
  type: { Submit: "submit", Reset: "reset", Button: "button" }
};

const Button = ({ disabled, level, name, type, onClick, children }) => (
  <button
    aria-disabled={disabled}
    className={`g-button${disabled ? " g-button--disabled" : ""}${
      constants.level[level] !== undefined ? " " + constants.level[level] : ""
    }`}
    disabled={disabled}
    type={constants.type[type]}
    name={name}
    onClick={onClick}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </button>
);
Button.props = ["disabled", "level", "name", "type", "onClick", "children"];
export default Button;

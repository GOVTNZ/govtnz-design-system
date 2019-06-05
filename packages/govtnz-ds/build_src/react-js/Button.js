import React from "react";

const constants = {
  kind: { secondary: "g-button--secondary", warning: "g-button--warning" },
  type: { Submit: "submit", Reset: "reset", Button: "button" }
};

const Button = ({ disabled, kind, name, type, children }) => (
  <button
    aria-disabled={disabled}
    className={`g-button${disabled ? " g-button--disabled" : ""}${
      constants.kind[kind] !== undefined ? " " + constants.kind[kind] : ""
    }`}
    disabled={disabled}
    type={constants.type[type]}
    name={name}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </button>
);
Button.props = ["disabled", "kind", "name", "type", "children"];
export default Button;

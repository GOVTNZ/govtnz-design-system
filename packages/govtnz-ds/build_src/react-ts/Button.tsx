import * as React from "react";

type Props = {
  disabled?: boolean | undefined;
  name?: string | undefined;
  type?: "Submit" | "Reset" | "Button" | undefined;
  children?: React.ReactNode;
};

const constants = {
  type: { Submit: "submit", Reset: "reset", Button: "button" }
};

const Button = ({ disabled, name, type, children }: Props) => (
  <button
    aria-disabled={disabled}
    className={`g-button${disabled ? " g-button--disabled" : ""}`}
    disabled={disabled}
    type={constants.type[type] as any}
    name={name}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </button>
);
Button.props = ["disabled", "name", "type", "children"];
export default Button;

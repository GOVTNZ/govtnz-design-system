import React from "react";

type Props = {
  disabled?: boolean;
  level: "secondary" | "warning";
  name?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  children?: React.ReactNode;
};

const constants = {
  level: { secondary: "g-button--secondary", warning: "g-button--warning" }
};

const Button = ({ disabled, level, name, type, onClick, children }: Props) => (
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
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment> Example text </React.Fragment>
    )}
  </button>
);

export default Button;

import * as React from "react";

type Props = {
  disabled?: boolean;
  level: "secondary" | "warning";
  name?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick: any;
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
    disabled={disabled}
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

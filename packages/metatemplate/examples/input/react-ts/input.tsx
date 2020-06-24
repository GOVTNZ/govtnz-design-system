import React from "react";

type Props = {
  hasError: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  name: string;
  value?: string;
  min?: number;
  max?: number;
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  spellCheck?: boolean;
  maxLength?: number;
  autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  onChange?: React.RefObject<HTMLInputElement>;
  ref?: React.RefObject<HTMLInputElement>;
};

const Input = ({
  hasError,
  disabled,
  readOnly,
  autoFocus,
  name,
  value,
  min,
  max,
  type,
  spellCheck,
  maxLength,
  autoComplete,
  onChange,
  ref
}: Props) => (
  <input
    className={hasError ? "error" : ""}
    disabled={disabled}
    readOnly={readOnly}
    autoFocus={autoFocus}
    name={name}
    value={value}
    min={min}
    max={max}
    type={type}
    spellCheck={spellCheck}
    maxLength={maxLength}
    autoComplete={autoComplete}
    onChange={onChange}
    ref={ref}
  />
);

export default Input;

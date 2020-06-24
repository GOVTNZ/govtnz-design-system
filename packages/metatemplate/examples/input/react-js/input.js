import React from "react";

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
}) => (
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

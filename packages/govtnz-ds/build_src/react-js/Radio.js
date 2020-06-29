import React from "react";

const Radio = ({
  id,
  hintId,
  required,
  disabled,
  readOnly,
  autoFocus,
  name,
  value,
  checked,
  onChange,
  ref
}) => (
  <input
    aria-describedby={hintId}
    className="g-radios__input"
    id={id}
    name={name}
    type="radio"
    required={required}
    disabled={
      disabled !== undefined ? disabled.toString() === "true" : undefined
    }
    readOnly={readOnly}
    autoFocus={autoFocus}
    value={value}
    checked={checked}
    onChange={onChange}
    ref={ref}
  />
);

export default Radio;

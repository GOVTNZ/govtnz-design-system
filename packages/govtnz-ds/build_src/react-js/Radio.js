import React from "react";

const Radio = ({
  id,
  hintId,
  name,
  disabled,
  readOnly,
  autoFocus,
  value,
  checked,
  onChange
}) => (
  <input
    aria-describedby={hintId}
    className="g-radios__input"
    id={id}
    name={name}
    type="radio"
    disabled={disabled}
    readOnly={readOnly}
    autoFocus={autoFocus}
    value={value}
    checked={checked}
    onChange={onChange}
  />
);

export default Radio;

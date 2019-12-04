import React from "react";

const Checkbox = ({
  checkboxId,
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
    className="g-checkboxes__input"
    id={checkboxId}
    type="checkbox"
    name={name}
    disabled={disabled}
    readOnly={readOnly}
    autoFocus={autoFocus}
    value={value}
    checked={checked}
    onChange={onChange}
  />
);

export default Checkbox;

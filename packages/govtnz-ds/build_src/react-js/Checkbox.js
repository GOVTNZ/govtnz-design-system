import React from "react";

const Checkbox = ({
  id,
  hintId,
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
    className="g-checkboxes__input"
    id={id}
    type="checkbox"
    disabled={
      disabled !== undefined ? disabled.toString() === "true" : undefined
    }
    readOnly={readOnly}
    autoFocus={autoFocus}
    name={name}
    value={value}
    checked={checked}
    onChange={onChange}
    ref={ref}
  />
);

export default Checkbox;

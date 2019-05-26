import React from "react";

const Radio = ({
  fakeFocus,
  gov1,
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
    className={`g-radios__input${fakeFocus ? " :focus" : ""}`}
    id={gov1}
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
Radio.props = [
  "fakeFocus",
  "gov1",
  "hintId",
  "name",
  "disabled",
  "readOnly",
  "autoFocus",
  "value",
  "checked",
  "onChange"
];
export default Radio;

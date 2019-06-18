import React from "react";

const RadioBlock = ({
  fakeFocus,
  radioId,
  hintId,
  name,
  disabled,
  readOnly,
  autoFocus,
  value,
  checked,
  onChange,
  label
}) => (
  <div className="g-radios__item">
    <input
      aria-describedby={hintId}
      className={`g-radios__input${fakeFocus ? " :focus" : ""}`}
      id={radioId}
      name={name}
      type="radio"
      disabled={disabled}
      readOnly={readOnly}
      autoFocus={autoFocus}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <label className="g-radios-label g-radios__label" htmlFor={radioId}>
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Label text</React.Fragment>
      )}
    </label>
  </div>
);

export default RadioBlock;

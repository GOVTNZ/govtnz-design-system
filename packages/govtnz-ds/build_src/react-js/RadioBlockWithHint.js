import React from "react";

const RadioBlockWithHint = ({
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
  label,
  hint
}) => (
  <div className="g-radios__item">
    <input
      aria-describedby={hintId}
      className={`g-radios__input${fakeFocus ? " :focus" : ""}`}
      id={radioId}
      type="radio"
      name={name}
      disabled={disabled}
      readOnly={readOnly}
      autoFocus={autoFocus}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <label
      className="g-radioBlockWithHint-label g-radios__label"
      htmlFor={radioId}
    >
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Label text</React.Fragment>
      )}
    </label>
    <div className="g-radioBlockWithHint-hint g-radios__hint" id={hintId}>
      {hint !== undefined ? hint : <React.Fragment>Hint text</React.Fragment>}
    </div>
  </div>
);

export default RadioBlockWithHint;

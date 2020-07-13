import React from "react";

const RadioBlock = ({
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
  ref,
  label,
  hint
}) => (
  <div className="g-radios__item">
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
    <label className="g-radios__label" htmlFor={id}>
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Label text</React.Fragment>
      )}
    </label>
    {hintId ? (
      <React.Fragment>
        <div className="g-radios__hint" id={hintId}>
          {hint !== undefined ? (
            hint
          ) : (
            <React.Fragment>Hint text</React.Fragment>
          )}
        </div>
      </React.Fragment>
    ) : (
      ""
    )}
  </div>
);

export default RadioBlock;

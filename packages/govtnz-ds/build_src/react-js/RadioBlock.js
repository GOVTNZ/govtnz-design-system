import React from "react";

const RadioBlock = ({
  errorId,
  id,
  hintId,
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
  <div className={`g-radios__item${errorId ? " g-form-group--error" : ""}`}>
    {" "}
    <input
      aria-describedby={hintId}
      className="g-radios__input"
      id={id}
      name={name}
      type="radio"
      disabled={
        disabled !== undefined ? disabled.toString() === "true" : undefined
      }
      readOnly={readOnly}
      autoFocus={autoFocus}
      value={value}
      checked={checked}
      onChange={onChange}
      ref={ref}
    />{" "}
    <label className="g-label g-radios__label" htmlFor={id}>
      {" "}
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Label text</React.Fragment>
      )}{" "}
    </label>{" "}
    {hintId !== undefined ? (
      <React.Fragment>
        {" "}
        <div className="g-hint g-checkboxes__hint" id={hintId}>
          {" "}
          {hint !== undefined ? (
            hint
          ) : (
            <React.Fragment>Hint text</React.Fragment>
          )}{" "}
        </div>{" "}
      </React.Fragment>
    ) : (
      ""
    )}{" "}
  </div>
);

export default RadioBlock;

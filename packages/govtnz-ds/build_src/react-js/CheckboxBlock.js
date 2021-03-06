import React from "react";

const CheckboxBlock = ({
  errorId,
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
  hint,
  error
}) => (
  <div className={`g-checkboxes__item${errorId ? " g-form-group--error" : ""}`}>
    <input
      aria-describedby={hintId}
      className="g-checkboxes__input"
      id={id}
      type="checkbox"
      required={required}
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
    <label className="g-checkboxes__label" htmlFor={id}>
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Label text</React.Fragment>
      )}
    </label>
    {hintId ? (
      <React.Fragment>
        <div className="g-checkboxes__hint" id={hintId}>
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
    {errorId ? (
      <React.Fragment>
        <div className="g-error-message" id={errorId}>
          <span className="g-visually-hidden">Error:</span>
          {error !== undefined ? (
            error
          ) : (
            <React.Fragment>Error text</React.Fragment>
          )}
        </div>
      </React.Fragment>
    ) : (
      ""
    )}
  </div>
);

export default CheckboxBlock;

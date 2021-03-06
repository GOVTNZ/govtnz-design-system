import React from "react";

const constants = {
  width: {
    "2": "g-textareaBlock-textarea--width-2",
    "3": "g-textareaBlock-textarea--width-3",
    "4": "g-textareaBlock-textarea--width-4",
    "5": "g-textareaBlock-textarea--width-5",
    "10": "g-textareaBlock-textarea--width-10",
    "20": "g-textareaBlock-textarea--width-20",
    "30": "g-textareaBlock-textarea--width-30"
  }
};

const TextareaBlock = ({
  errorId,
  id,
  label,
  hintId,
  hint,
  error,
  width,
  name,
  required,
  disabled,
  readOnly,
  rows,
  cols,
  autoFocus,
  spellCheck,
  autoComplete,
  maxLength,
  value,
  onChange,
  ref
}) => (
  <div
    className={`g-textareaBlock-form-group${
      errorId ? " g-textareaBlock-form-group--error" : ""
    }`}
  >
    <label className="g-textareaBlock-label" htmlFor={id}>
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Label text</React.Fragment>
      )}
    </label>
    {hintId ? (
      <React.Fragment>
        <div className="g-textareaBlock-hint" id={hintId}>
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
        <div className="g-textareaBlock-error-message" id={errorId}>
          <span className="g-textareaBlock-visually-hidden">Error:</span>
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
    <textarea
      aria-describedby={
        hintId !== undefined || errorId !== undefined
          ? `${hintId ? hintId : ""}${errorId ? " " + errorId : ""}`
          : undefined
      }
      className={`g-textareaBlock-textarea${
        constants.width[width] !== undefined ? " " + constants.width[width] : ""
      }`}
      id={id}
      name={name}
      rows={rows}
      required={required}
      disabled={
        disabled !== undefined ? disabled.toString() === "true" : undefined
      }
      readOnly={readOnly}
      cols={cols}
      autoFocus={autoFocus}
      spellCheck={spellCheck}
      autoComplete={autoComplete}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      ref={ref}
    />
  </div>
);

export default TextareaBlock;

import * as React from "react";

type Props = {
  error?: boolean;
  inputId?: string;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  hintId?: string;
  errorId?: string;
  width?: "30" | "20" | "10" | "5" | "4" | "3" | "2";
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  name: string;
  value?: string;
  min?: number;
  max?: number;
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  spellCheck?: boolean;
  maxLength?: number;
  autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  onChange: any;
};

const constants = {
  width: {
    "2": "g-inputBlock-input--width-2",
    "3": "g-inputBlock-input--width-3",
    "4": "g-inputBlock-input--width-4",
    "5": "g-inputBlock-input--width-5",
    "10": "g-inputBlock-input--width-10",
    "20": "g-inputBlock-input--width-20",
    "30": "g-inputBlock-input--width-30"
  }
};

const InputBlock = ({
  error,
  inputId,
  label,
  hint,
  hintId,
  errorId,
  width,
  disabled,
  readOnly,
  autoFocus,
  name,
  value,
  min,
  max,
  type,
  spellCheck,
  maxLength,
  autoComplete,
  onChange
}: Props) => (
  <div
    className={`g-inputBlock-form-group${
      error ? " g-inputBlock-form-group--error" : ""
    }`}
  >
    <label className="g-inputBlock-label" htmlFor={inputId}>
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Example text</React.Fragment>
      )}
    </label>
    {hint !== undefined ? (
      <React.Fragment>
        <div className="g-inputBlock-hint" id={hintId}>
          {hint !== undefined ? (
            hint
          ) : (
            <React.Fragment>Example text</React.Fragment>
          )}
        </div>
      </React.Fragment>
    ) : (
      ""
    )}
    {errorId !== undefined ? (
      <React.Fragment>
        <div className="g-inputBlock-error-message" id={errorId}>
          <span className="g-inputBlock-visually-hidden">Error: </span>
          {error !== undefined ? (
            error
          ) : (
            <React.Fragment>Example text</React.Fragment>
          )}
        </div>
      </React.Fragment>
    ) : (
      ""
    )}
    <input
      aria-describedby={
        hintId !== undefined || errorId !== undefined
          ? `${hintId ? hintId : ""}${errorId ? " " + errorId : ""}`
          : undefined
      }
      className={`g-inputBlock-input${
        constants.width[width] !== undefined ? " " + constants.width[width] : ""
      }${error ? " g-inputBlock-input--error" : ""}`}
      id={inputId}
      name={name}
      disabled={disabled}
      readOnly={readOnly}
      autoFocus={autoFocus}
      value={value}
      min={min}
      max={max}
      type={type}
      spellCheck={spellCheck}
      maxLength={maxLength}
      autoComplete={autoComplete}
      onChange={onChange}
    />
  </div>
);

export default InputBlock;

import React from "react";

type Props = {
  errorId?: string;
  hintId?: string;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: boolean;
  id?: string;
  dayId?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  dayName: string;
  value?: string;
  spellCheck?: boolean;
  autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
  ref?: React.RefObject<HTMLInputElement>;
  monthId?: string;
  yearName: string;
  value2?: string;
  onChange2?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
  ref2?: React.RefObject<HTMLInputElement>;
  yearId?: string;
  value3?: string;
  onChange3?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
  ref3?: React.RefObject<HTMLInputElement>;
};

const DateInput = ({
  errorId,
  hintId,
  label,
  hint,
  error,
  id,
  dayId,
  required,
  disabled,
  readOnly,
  autoFocus,
  dayName,
  value,
  spellCheck,
  autoComplete,
  onChange,
  ref,
  monthId,
  yearName,
  value2,
  onChange2,
  ref2,
  yearId,
  value3,
  onChange3,
  ref3
}: Props) => (
  <div
    className={`g-dateInput-form-group${
      errorId ? " g-dateInput-form-group--error" : ""
    }`}
  >
    <fieldset
      aria-describedby={
        hintId !== undefined || errorId !== undefined
          ? `${hintId ? hintId : ""}${errorId ? " " + errorId : ""}`
          : undefined
      }
      className="g-dateInput-fieldset"
      role="group"
    >
      <legend className="g-dateInput-fieldset__legend">
        {label !== undefined ? (
          label
        ) : (
          <React.Fragment>Example label</React.Fragment>
        )}
      </legend>
      <span className="g-dateInput-hint" id={hintId}>
        {hint !== undefined ? (
          hint
        ) : (
          <React.Fragment>Example hint</React.Fragment>
        )}
      </span>
      {errorId !== undefined ? (
        <React.Fragment>
          <span className="g-dateInput-error-message" id={errorId}>
            <span className="g-dateInput-visually-hidden">Error: </span>
            {error !== undefined ? (
              error
            ) : (
              <React.Fragment>Example error</React.Fragment>
            )}
          </span>
        </React.Fragment>
      ) : (
        ""
      )}
      <div className="g-dateInput" id={id}>
        <div className="g-dateInput__item">
          <div className="g-dateInput-form-group">
            <label
              className="g-dateInput-label g-dateInput__label"
              htmlFor={dayId}
            >
              Day
            </label>
            <input
              className={`g-dateInput-input g-dateInput__input g-dateInput-input--width-2${
                error ? " g-dateInput-input--error" : ""
              }`}
              id={dayId}
              maxLength={2}
              name={dayName}
              pattern="[0-9]*"
              type="text"
              value={value}
              required={required}
              disabled={
                disabled !== undefined
                  ? disabled.toString() === "true"
                  : undefined
              }
              readOnly={readOnly}
              autoFocus={autoFocus}
              spellCheck={spellCheck}
              autoComplete={autoComplete}
              onChange={onChange}
              ref={ref}
            />
          </div>
        </div>
        <div className="g-dateInput__item">
          <div className="g-dateInput-form-group">
            <label
              className="g-dateInput-label g-dateInput__label"
              htmlFor={monthId}
            >
              Month
            </label>
            <input
              className={`g-dateInput-input g-dateInput__input g-dateInput-input--width-2${
                error ? " g-dateInput-input--error" : ""
              }`}
              id={monthId}
              maxLength={2}
              name={yearName}
              pattern="[0-9]*"
              type="text"
              value={value2}
              required={required}
              disabled={
                disabled !== undefined
                  ? disabled.toString() === "true"
                  : undefined
              }
              readOnly={readOnly}
              autoFocus={autoFocus}
              spellCheck={spellCheck}
              autoComplete={autoComplete}
              onChange={onChange2}
              ref={ref2}
            />
          </div>
        </div>
        <div className="g-dateInput__item">
          <div className="g-dateInput-form-group">
            <label
              className="g-dateInput-label g-dateInput__label"
              htmlFor={yearId}
            >
              Year
            </label>
            <input
              className={`g-dateInput-input g-dateInput__input g-dateInput-input--width-4${
                error ? " g-dateInput-input--error" : ""
              }`}
              id={yearId}
              maxLength={4}
              name={yearName}
              pattern="[0-9]*"
              type="text"
              value={value3}
              required={required}
              disabled={
                disabled !== undefined
                  ? disabled.toString() === "true"
                  : undefined
              }
              readOnly={readOnly}
              autoFocus={autoFocus}
              spellCheck={spellCheck}
              autoComplete={autoComplete}
              onChange={onChange3}
              ref={ref3}
            />
          </div>
        </div>
      </div>
    </fieldset>
  </div>
);

export default DateInput;

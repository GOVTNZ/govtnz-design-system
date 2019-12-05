import * as React from "react";

type Props = {
  errorId?: string;
  hintId?: string;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: boolean;
  id?: string;
  dayId?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  dayName: string;
  value?: string;
  spellCheck?: boolean;
  autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  onChange: any;
  monthId?: string;
  yearName: string;
  yearId?: string;
};

const DateInput = ({
  errorId,
  hintId,
  label,
  hint,
  error,
  id,
  dayId,
  disabled,
  readOnly,
  autoFocus,
  dayName,
  value,
  spellCheck,
  autoComplete,
  onChange,
  monthId,
  yearName,
  yearId
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
      className="g-fieldset"
      role="group"
    >
      <legend className="g-fieldset__legend g-fieldset__legend--xl">
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
      <div className="g-date-input" id={id}>
        <div className="g-date-input__item">
          <div className="g-dateInput-form-group">
            <label
              className="g-dateInput-label g-date-input__label"
              htmlFor={dayId}
            >
              Day
            </label>
            <input
              className={`g-dateInput-input g-date-input__input g-dateInput-input--width-2${
                error ? " g-dateInput-input--error" : ""
              }`}
              id={dayId}
              maxLength={2}
              name={dayName}
              pattern="[0-9]*"
              type="text"
              disabled={disabled}
              readOnly={readOnly}
              autoFocus={autoFocus}
              value={value}
              spellCheck={spellCheck}
              autoComplete={autoComplete}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="g-date-input__item">
          <div className="g-dateInput-form-group">
            <label
              className="g-dateInput-label g-date-input__label"
              htmlFor={monthId}
            >
              Month
            </label>
            <input
              className={`g-dateInput-input g-date-input__input g-dateInput-input--width-2${
                error ? " g-dateInput-input--error" : ""
              }`}
              id={monthId}
              maxLength={2}
              name={yearName}
              pattern="[0-9]*"
              type="text"
              disabled={disabled}
              readOnly={readOnly}
              autoFocus={autoFocus}
              value={value}
              spellCheck={spellCheck}
              autoComplete={autoComplete}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="g-date-input__item">
          <div className="g-dateInput-form-group">
            <label
              className="g-dateInput-label g-date-input__label"
              htmlFor={yearId}
            >
              Year
            </label>
            <input
              className={`g-dateInput-input g-date-input__input g-dateInput-input--width-4${
                error ? " g-dateInput-input--error" : ""
              }`}
              id={yearId}
              maxLength={4}
              name={yearName}
              pattern="[0-9]*"
              type="text"
              disabled={disabled}
              readOnly={readOnly}
              autoFocus={autoFocus}
              value={value}
              spellCheck={spellCheck}
              autoComplete={autoComplete}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </fieldset>
  </div>
);

export default DateInput;

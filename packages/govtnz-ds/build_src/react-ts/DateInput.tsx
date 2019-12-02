import * as React from "react";

type Props = {
  error?: boolean | undefined;
  hintId?: string | undefined;
  errorId?: string | undefined;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  id?: string | undefined;
  dayId?: string | undefined;
  name: string;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  autoFocus?: boolean | undefined;
  value?: string | undefined;
  spellCheck?: boolean | undefined;
  autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  onChange: any;
  monthId?: string | undefined;
  name2: string;
  disabled2?: boolean | undefined;
  readOnly2?: boolean | undefined;
  autoFocus2?: boolean | undefined;
  value2?: string | undefined;
  spellCheck2?: boolean | undefined;
  autoComplete2: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  onChange2: any;
  yearId?: string | undefined;
  name3: string;
  disabled3?: boolean | undefined;
  readOnly3?: boolean | undefined;
  autoFocus3?: boolean | undefined;
  value3?: string | undefined;
  spellCheck3?: boolean | undefined;
  autoComplete3: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  onChange3: any;
};

const DateInput = ({
  error,
  hintId,
  errorId,
  label,
  hint,
  id,
  dayId,
  name,
  disabled,
  readOnly,
  autoFocus,
  value,
  spellCheck,
  autoComplete,
  onChange,
  monthId,
  name2,
  disabled2,
  readOnly2,
  autoFocus2,
  value2,
  spellCheck2,
  autoComplete2,
  onChange2,
  yearId,
  name3,
  disabled3,
  readOnly3,
  autoFocus3,
  value3,
  spellCheck3,
  autoComplete3,
  onChange3
}: Props) => (
  <div
    className={`g-dateInput-form-group${
      error ? " g-dateInput-form-group--error" : ""
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
      {error !== undefined ? (
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
              name={name}
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
              name={name2}
              pattern="[0-9]*"
              type="text"
              disabled={disabled2}
              readOnly={readOnly2}
              autoFocus={autoFocus2}
              value={value2}
              spellCheck={spellCheck2}
              autoComplete={autoComplete2}
              onChange={onChange2}
            />
          </div>
        </div>
        <div className="g-date-input__item">
          <div className="g-dateInput-form-group">
            <label
              className="g-dateInput-label govuk-date-input__label"
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
              name={name3}
              pattern="[0-9]*"
              type="text"
              disabled={disabled3}
              readOnly={readOnly3}
              autoFocus={autoFocus3}
              value={value3}
              spellCheck={spellCheck3}
              autoComplete={autoComplete3}
              onChange={onChange3}
            />
          </div>
        </div>
      </div>
    </fieldset>
  </div>
);

export default DateInput;

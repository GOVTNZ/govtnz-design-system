import * as React from "react";

type Props = {
  errorId?: boolean;
  id?: string;
  hintId?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  name: string;
  value?: string;
  checked?: boolean;
  onChange: any;
  label?: React.ReactNode;
  hint?: React.ReactNode;
};

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
  label,
  hint
}: Props) => (
  <div
    className={`g-radios__item${
      errorId ? " g-radioBlock-form-group--error" : ""
    }`}
  >
    <input
      aria-describedby={hintId}
      className="g-radios__input"
      id={id}
      name={name}
      type="radio"
      disabled={disabled}
      readOnly={readOnly}
      autoFocus={autoFocus}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <label className="g-radioBlock-label g-radios__label" htmlFor={id}>
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Label text</React.Fragment>
      )}
    </label>
    {hintId !== undefined ? (
      <React.Fragment>
        <div className="g-radioBlock-hint g-checkboxes__hint" id={hintId}>
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

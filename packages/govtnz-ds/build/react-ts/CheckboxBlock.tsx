import * as React from "react";

type Props = {
  checkboxId?: string;
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

const CheckboxBlock = ({
  checkboxId,
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
  <div className="g-checkboxes__item">
    <input
      aria-describedby={hintId}
      className="g-checkboxes__input"
      id={checkboxId}
      type="checkbox"
      disabled={disabled}
      readOnly={readOnly}
      autoFocus={autoFocus}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <label
      className="g-checkboxBlock-label g-checkboxes__label"
      htmlFor={checkboxId}
    >
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Label text</React.Fragment>
      )}
    </label>
    {hintId !== undefined ? (
      <React.Fragment>
        <div className="g-checkboxBlock-hint g-checkboxes__hint" id={hintId}>
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

export default CheckboxBlock;

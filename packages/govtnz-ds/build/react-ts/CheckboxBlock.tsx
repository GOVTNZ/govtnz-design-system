import * as React from "react";

type Props = {
  checkboxId?: string | undefined;
  hintId?: string | undefined;
  name: string;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  autoFocus?: boolean | undefined;
  value?: string | undefined;
  checked?: boolean | undefined;
  onChange: any;
  label?: React.ReactNode;
  hint?: React.ReactNode;
};

const CheckboxBlock = ({
  checkboxId,
  hintId,
  name,
  disabled,
  readOnly,
  autoFocus,
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
      name={name}
      disabled={disabled}
      readOnly={readOnly}
      autoFocus={autoFocus}
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

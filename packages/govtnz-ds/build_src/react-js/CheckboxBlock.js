import React from "react";

const CheckboxBlock = ({
  fakeFocus,
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
}) => (
  <div className="g-checkboxes__item">
    <input
      aria-describedby={hintId}
      className={`g-checkboxes__input${fakeFocus ? " :focus" : ""}`}
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
CheckboxBlock.props = [
  "fakeFocus",
  "checkboxId",
  "hintId",
  "name",
  "disabled",
  "readOnly",
  "autoFocus",
  "value",
  "checked",
  "onChange",
  "label",
  "hint"
];
export default CheckboxBlock;

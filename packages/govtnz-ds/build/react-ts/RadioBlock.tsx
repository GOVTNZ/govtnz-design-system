import * as React from "react";

type Props = {
  fakeFocus?: boolean | undefined;
  radioId?: string | undefined;
  hintId?: string | undefined;
  name: string;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  autoFocus?: boolean | undefined;
  value?: string | undefined;
  checked?: boolean | undefined;
  onChange: any;
  label?: React.ReactNode;
};

const RadioBlock = ({
  fakeFocus,
  radioId,
  hintId,
  name,
  disabled,
  readOnly,
  autoFocus,
  value,
  checked,
  onChange,
  label
}: Props) => (
  <div className="g-radios__item">
    <input
      aria-describedby={hintId}
      className={`g-radios__input${fakeFocus ? " :focus" : ""}`}
      id={radioId}
      name={name}
      type="radio"
      disabled={disabled}
      readOnly={readOnly}
      autoFocus={autoFocus}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <label className="g-radios-label g-radios__label" htmlFor={radioId}>
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Label text</React.Fragment>
      )}
    </label>
  </div>
);
RadioBlock.props = [
  "fakeFocus",
  "radioId",
  "hintId",
  "name",
  "disabled",
  "readOnly",
  "autoFocus",
  "value",
  "checked",
  "onChange",
  "label"
];
export default RadioBlock;

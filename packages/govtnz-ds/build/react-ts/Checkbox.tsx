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
};

const Checkbox = ({
  checkboxId,
  hintId,
  disabled,
  readOnly,
  autoFocus,
  name,
  value,
  checked,
  onChange
}: Props) => (
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
);

export default Checkbox;

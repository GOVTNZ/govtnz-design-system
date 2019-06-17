import * as React from "react";

type Props = {
  fakeFocus?: boolean | undefined;
  checkboxId?: string | undefined;
  hintId?: string | undefined;
  name: string;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  autoFocus?: boolean | undefined;
  value?: string | undefined;
  checked?: boolean | undefined;
  onChange: any;
};

const Checkbox = ({
  fakeFocus,
  checkboxId,
  hintId,
  name,
  disabled,
  readOnly,
  autoFocus,
  value,
  checked,
  onChange
}: Props) => (
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
);

export default Checkbox;

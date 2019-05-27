import * as React from "react";

type Props = {
  fakeFocus?: boolean | undefined;
  gov1?: string | undefined;
  hintId?: string | undefined;
  name: string;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  autoFocus?: boolean | undefined;
  value?: string | undefined;
  checked?: boolean | undefined;
  onChange: any;
};

const Radio = ({
  fakeFocus,
  gov1,
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
    className={`g-radios__input${fakeFocus ? " :focus" : ""}`}
    id={gov1}
    name={name}
    type="radio"
    disabled={disabled}
    readOnly={readOnly}
    autoFocus={autoFocus}
    value={value}
    checked={checked}
    onChange={onChange}
  />
);
Radio.props = [
  "fakeFocus",
  "gov1",
  "hintId",
  "name",
  "disabled",
  "readOnly",
  "autoFocus",
  "value",
  "checked",
  "onChange"
];
export default Radio;

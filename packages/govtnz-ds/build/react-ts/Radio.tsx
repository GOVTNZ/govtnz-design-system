import * as React from "react";

type Props = {
  id?: string;
  hintId?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  name: string;
  value?: string;
  checked?: boolean;
  onChange: any;
};

const Radio = ({
  id,
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
);

export default Radio;

import React from "react";

type Props = {
  id?: string;
  hintId?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  name: string;
  value?: string;
  checked?: boolean;
  onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
  ref?: React.RefObject<HTMLInputElement>;
};

const Checkbox = ({
  id,
  hintId,
  disabled,
  readOnly,
  autoFocus,
  name,
  value,
  checked,
  onChange,
  ref
}: Props) => (
  <input
    aria-describedby={hintId}
    className="g-checkboxes__input"
    id={id}
    type="checkbox"
    disabled={
      disabled !== undefined ? disabled.toString() === "true" : undefined
    }
    readOnly={readOnly}
    autoFocus={autoFocus}
    name={name}
    value={value}
    checked={checked}
    onChange={onChange}
    ref={ref}
  />
);

export default Checkbox;

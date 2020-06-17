import React from "react";

type Props = {
  width?: "30" | "20" | "10" | "5" | "4" | "3" | "2";
  error?: boolean;
  id?: string;
  describedBy?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  name: string;
  value?: string;
  spellCheck?: boolean;
  maxLength?: number;
  autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
  ref?: React.RefObject<HTMLInputElement>;
};

const constants = {
  width: {
    "2": "g-input--width-2",
    "3": "g-input--width-3",
    "4": "g-input--width-4",
    "5": "g-input--width-5",
    "10": "g-input--width-10",
    "20": "g-input--width-20",
    "30": "g-input--width-30"
  }
};

const Input = ({
  width,
  error,
  id,
  describedBy,
  required,
  disabled,
  readOnly,
  autoFocus,
  name,
  value,
  spellCheck,
  maxLength,
  autoComplete,
  onChange,
  ref
}: Props) => (
  <input
    aria-describedby={describedBy}
    className={`g-input${
      constants.width[width] !== undefined ? " " + constants.width[width] : ""
    }${error ? " g-input--error" : ""}`}
    id={id}
    name={name}
    type="text"
    required={required}
    disabled={
      disabled !== undefined ? disabled.toString() === "true" : undefined
    }
    readOnly={readOnly}
    autoFocus={autoFocus}
    value={value}
    spellCheck={spellCheck}
    maxLength={maxLength}
    autoComplete={autoComplete}
    onChange={onChange}
    ref={ref}
  />
);

export default Input;

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
  label?: React.ReactNode;
  hint?: React.ReactNode;
};

const RadioBlock = ({
  id,
  hintId,
  disabled,
  readOnly,
  autoFocus,
  name,
  value,
  checked,
  onChange,
  ref,
  label,
  hint
}: Props) => (
  <div className="g-radios__item">
    {" "}
    <input
      aria-describedby={hintId}
      className="g-radios__input"
      id={id}
      name={name}
      type="radio"
      disabled={
        disabled !== undefined ? disabled.toString() === "true" : undefined
      }
      readOnly={readOnly}
      autoFocus={autoFocus}
      value={value}
      checked={checked}
      onChange={onChange}
      ref={ref}
    />{" "}
    <label className="g-radios__label" htmlFor={id}>
      {" "}
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Label text</React.Fragment>
      )}{" "}
    </label>{" "}
    {hintId !== undefined ? (
      <React.Fragment>
        {" "}
        <div className="g-radios__hint" id={hintId}>
          {" "}
          {hint !== undefined ? (
            hint
          ) : (
            <React.Fragment>Hint text</React.Fragment>
          )}{" "}
        </div>{" "}
      </React.Fragment>
    ) : (
      ""
    )}{" "}
  </div>
);

export default RadioBlock;

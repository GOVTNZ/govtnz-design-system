import React from "react";

type Props = {
  errorId?: string;
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
  error?: React.ReactNode;
};

const CheckboxBlock = ({
  errorId,
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
  hint,
  error
}: Props) => (
  <div className={`g-checkboxes__item${errorId ? " g-form-group--error" : ""}`}>
    {" "}
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
    />{" "}
    <label className="g-checkboxes__label" htmlFor={id}>
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Label text</React.Fragment>
      )}
    </label>{" "}
    {hintId !== undefined ? (
      <React.Fragment>
        {" "}
        <div className="g-checkboxes__hint" id={hintId}>
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
    {errorId !== undefined ? (
      <React.Fragment>
        {" "}
        <div className="g-error-message" id={errorId}>
          {" "}
          <span className="g-visually-hidden"> Error: </span>{" "}
          {error !== undefined ? (
            error
          ) : (
            <React.Fragment>Error text</React.Fragment>
          )}{" "}
        </div>{" "}
      </React.Fragment>
    ) : (
      ""
    )}{" "}
  </div>
);

export default CheckboxBlock;

import React from "react";

type Props = {
  errorId?: string;
  id?: string;
  label?: React.ReactNode;
  hintId?: string;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  name: string;
  disabled?: boolean;
  readOnly?: boolean;
  rows?: number;
  cols?: number;
  autoFocus?: boolean;
  spellCheck?: boolean;
  autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  maxLength?: number;
  value?: string;
  onChange?: React.TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"];
  ref?: React.RefObject<HTMLTextAreaElement>;
};

const TextareaBlock = ({
  errorId,
  id,
  label,
  hintId,
  hint,
  error,
  name,
  disabled,
  readOnly,
  rows,
  cols,
  autoFocus,
  spellCheck,
  autoComplete,
  maxLength,
  value,
  onChange,
  ref
}: Props) => (
  <div
    className={`g-textareaBlock-form-group${
      errorId ? " g-textareaBlock-form-group--error" : ""
    }`}
  >
    <label className="g-textareaBlock-label" htmlFor={id}>
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Label text</React.Fragment>
      )}
    </label>
    {hintId !== undefined ? (
      <React.Fragment>
        <div className="g-textareaBlock-hint" id={hintId}>
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
    {errorId !== undefined ? (
      <React.Fragment>
        <div className="g-textareaBlock-error-message" id={errorId}>
          <span className="g-textareaBlock-visually-hidden">Error:</span>
          {error !== undefined ? (
            error
          ) : (
            <React.Fragment>Error text</React.Fragment>
          )}
        </div>
      </React.Fragment>
    ) : (
      ""
    )}
    <textarea
      aria-describedby={
        hintId !== undefined || errorId !== undefined
          ? `${hintId ? hintId : ""}${errorId ? " " + errorId : ""}`
          : undefined
      }
      className="g-textareaBlock-textarea"
      id={id}
      name={name}
      rows={rows}
      disabled={
        disabled !== undefined ? disabled.toString() === "true" : undefined
      }
      readOnly={readOnly}
      cols={cols}
      autoFocus={autoFocus}
      spellCheck={spellCheck}
      autoComplete={autoComplete}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      ref={ref}
    />
  </div>
);

export default TextareaBlock;

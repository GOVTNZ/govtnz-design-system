import * as React from "react";

type Props = {
  id?: string;
  label?: React.ReactNode;
  hintId?: string;
  hint?: React.ReactNode;
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
  onChange: any;
};

const TextareaBlock = ({
  id,
  label,
  hintId,
  hint,
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
  onChange
}: Props) => (
  <div className="g-textareaBlock-form-group">
    <label className="g-textareaBlock-label" htmlFor={id}>
      {label !== undefined ? label : <React.Fragment></React.Fragment>}
    </label>
    <span className="g-textareaBlock-hint" id={hintId}>
      {hint !== undefined ? hint : <React.Fragment></React.Fragment>}
    </span>
    <textarea
      aria-describedby={hintId}
      className="g-textareaBlock-textarea"
      id={id}
      name={name}
      rows={rows}
      disabled={disabled}
      readOnly={readOnly}
      cols={cols}
      autoFocus={autoFocus}
      spellCheck={spellCheck}
      autoComplete={autoComplete}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default TextareaBlock;

import React from "react";

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
}) => (
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

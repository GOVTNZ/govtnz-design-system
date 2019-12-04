import React from "react";

const Textarea = ({
  id,
  describedById,
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
  <textarea
    aria-describedby={describedById}
    className="g-textarea"
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
);

export default Textarea;

import React from "react";

const Textarea = ({
  id,
  describedById,
  name,
  required,
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
}) => (
  <textarea
    aria-describedby={describedById}
    className="g-textarea"
    id={id}
    name={name}
    rows={rows}
    required={required}
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
);

export default Textarea;

import React from "react";

const Textarea = ({
  moreDetail,
  moreDetailHint,
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
  <div className="g-textarea-form-group">
    <label className="g-textarea-label" htmlFor={moreDetail}>
      Can you provide more detail?
    </label>
    <span className="g-textarea-hint" id={moreDetailHint}>
      Don't include personal or financial information, eg your National
      Insurance number or credit card details.
    </span>
    <textarea
      aria-describedby={moreDetailHint}
      className="g-textarea"
      id={moreDetail}
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

export default Textarea;

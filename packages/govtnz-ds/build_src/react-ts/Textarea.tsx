import * as React from "react";

type Props = {
  moreDetail?: string | undefined;
  moreDetailHint?: string | undefined;
  name: string;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  rows?: number | undefined;
  cols?: number | undefined;
  autoFocus?: boolean | undefined;
  spellCheck?: boolean | undefined;
  autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  maxLength?: number | undefined;
  value?: string | undefined;
  onChange: any;
};

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
}: Props) => (
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

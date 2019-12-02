import * as React from "react";

type Props = {
  id?: string | undefined;
  describedById?: string | undefined;
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
}: Props) => (
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

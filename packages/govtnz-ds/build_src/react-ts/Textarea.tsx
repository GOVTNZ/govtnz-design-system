import React from "react";

type Props = {
  id?: string;
  describedById?: string;
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
  onChange,
  ref
}: Props) => (
  <textarea
    aria-describedby={describedById}
    className="g-textarea"
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
);

export default Textarea;

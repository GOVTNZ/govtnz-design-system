import * as React from "react";
import * as styled from "styled-components";

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

const StyledTextarea = styled.textarea`
  margin-bottom: 5px;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  box-sizing: border-box;
  display: block;
  width: 100%;
  min-height: 40px;
  margin-bottom: 20px;
  padding: 5px;
  resize: vertical;
  border: 2px solid #0b0c0c;
  border-radius: 0;
  -webkit-appearance: none;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.25;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  margin-top: 0px;
`;

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
  <StyledTextarea
    aria-describedby={describedById}
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

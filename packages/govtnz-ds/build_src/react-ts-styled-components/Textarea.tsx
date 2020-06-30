import React from "react";
import styled from "styled-components";

type Props = {
  id?: string;
  describedById?: string;
  name: string;
  required?: boolean;
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

const StyledTextarea = styled.textarea`
  margin-bottom: 5px;
  font-family: g-theme-font-family;
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
  border: 1px solid g-theme-form-border-color;
  border-radius: 0;
  -webkit-appearance: none;
  background-color: g-theme-form-background-color;
  color: g-theme-form-color;
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :valid,
  :invalid {
    background-color: g-theme-form-background-color;
    -webkit-text-fill-color: g-theme-color !important;
    color: g-theme-color;
    border: 1px solid g-theme-form-border-color;
    box-shadow: 0 0 0px 1000px g-theme-form-background-color inset;
    -webkit-box-shadow: 0 0 0px 1000px g-theme-form-background-color inset;
  }
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
    outline: 3px solid g-theme-focus-ring-color;
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
}: Props) => (
  <StyledTextarea
    aria-describedby={describedById}
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

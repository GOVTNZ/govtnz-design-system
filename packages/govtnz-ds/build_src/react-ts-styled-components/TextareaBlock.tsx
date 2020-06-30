import React from "react";
import styled from "styled-components";

type Props = {
  errorId?: string;
  id?: string;
  label?: React.ReactNode;
  hintId?: string;
  hint?: React.ReactNode;
  error?: React.ReactNode;
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

const StyledDiv = styled.div<Pick<Props, "errorId">>`
  margin-bottom: 20px;
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  :last-of-type {
    margin-bottom: 0;
  }
  ${props =>
    props.errorId &&
    styled.css`
      padding-left: 15px;
      border-left: 5px solid g-theme-error-border-color;
    `}
  padding: 0;
  border: 0;
  margin-top: 0px;
`;

const StyledLabel = styled.label`
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.25;
  color: g-theme-color;
  display: block;
  margin-bottom: 5px;
  @media print {
    font-family: sans-serif;
    font-size: 14pt;
    line-height: 1.15;
    color: g-theme-print-color;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
  margin-top: 0px;
`;

const StyledDiv2 = styled.div`
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-bottom: 15px;
  color: g-theme-hint-color;
  @media print {
    font-family: sans-serif;
    font-size: 14pt;
    line-height: 1.15;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
  margin-top: -5px;
  margin-top: 0px;
`;

const StyledDiv3 = styled.div`
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-bottom: 15px;
  clear: both;
  color: g-theme-error-color;
  @media print {
    font-family: sans-serif;
    font-size: 14pt;
    line-height: 1.15;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
  margin-top: 0px;
`;

const StyledSpan = styled.span`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  border: 0 !important;
  white-space: nowrap !important;
  margin-top: 0px;
`;

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
  color: g-theme-color;
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

const TextareaBlock = ({
  errorId,
  id,
  label,
  hintId,
  hint,
  error,
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
  <StyledDiv errorId={errorId}>
    <StyledLabel htmlFor={id}>
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Label text</React.Fragment>
      )}
    </StyledLabel>
    {hintId !== undefined ? (
      <React.Fragment>
        <StyledDiv2 id={hintId}>
          {hint !== undefined ? (
            hint
          ) : (
            <React.Fragment>Hint text</React.Fragment>
          )}
        </StyledDiv2>
      </React.Fragment>
    ) : (
      ""
    )}
    {errorId !== undefined ? (
      <React.Fragment>
        <StyledDiv3 id={errorId}>
          <StyledSpan>Error:</StyledSpan>
          {error !== undefined ? (
            error
          ) : (
            <React.Fragment>Error text</React.Fragment>
          )}
        </StyledDiv3>
      </React.Fragment>
    ) : (
      ""
    )}
    <StyledTextarea
      aria-describedby={
        hintId !== undefined || errorId !== undefined
          ? `${hintId ? hintId : ""}${errorId ? " " + errorId : ""}`
          : undefined
      }
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
  </StyledDiv>
);

export default TextareaBlock;

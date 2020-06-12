import React from "react";
import styled from "styled-components";

type Props = {
  errorId?: string;
  id?: string;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  hintId?: string;
  error?: boolean;
  width?: "30" | "20" | "10" | "5" | "4" | "3" | "2";
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  name: string;
  value?: string;
  min?: number;
  max?: number;
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  spellCheck?: boolean;
  maxLength?: number;
  autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
  ref?: React.RefObject<HTMLInputElement>;
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
      border-left: 5px solid #b10e1e;
    `}
  padding: 0;
  border: 0;
  margin-top: 0px;
`;

const StyledLabel = styled.label`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.25;
  color: #2a2a2a;
  display: block;
  margin-bottom: 5px;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.15;
  }
  @media print {
    color: #000000;
  }
  margin-top: 0px;
`;

const StyledDiv2 = styled.div`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-bottom: 15px;
  color: #595959;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.15;
  }
  margin-top: -5px;
  margin-top: 0px;
`;

const StyledDiv3 = styled.div`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-bottom: 15px;
  clear: both;
  color: #b10e1e;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.15;
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

const StyledInput = styled.input<
  Pick<Props, "error" | "width">
>`font-family: Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
font-weight: 400;
font-size: 1rem;
line-height: 1.25;
box-sizing: border-box;
width: 100%;
height: 40px;
margin-top: 0;
padding: 0.5rem;
border: 1px solid #2a2a2a;
border-radius: 0;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
@media print{
font-family: sans-serif;;
}
@media (min-width: 40.0625em){
font-size: 1.1875rem;
line-height: 1.31579;;
}
@media print{
font-size: 14pt;
line-height: 1.15;;
}
:focus{
outline: 3px solid #b53cde;
outline-offset: 0;
}
::-webkit-outer-spin-button,::-webkit-inner-spin-button{
margin: 0;
-webkit-appearance: none;
}
${props =>
  props.error &&
  styled.css`
    border: 1px solid #b10e1e;
  `}
${props =>
  props.width === "30" &&
  styled.css`
    max-width: 59ex;
  `}
${props =>
  props.width === "20" &&
  styled.css`
    max-width: 41ex;
  `}
${props =>
  props.width === "10" &&
  styled.css`
    max-width: 23ex;
  `}
${props =>
  props.width === "5" &&
  styled.css`
    max-width: 10.8ex;
  `}
${props =>
  props.width === "4" &&
  styled.css`
    max-width: 9ex;
  `}
${props =>
  props.width === "3" &&
  styled.css`
    max-width: 7.2ex;
  `}
${props =>
  props.width === "2" &&
  styled.css`
    max-width: 5.4ex;
  `}
margin-top: 0px;`;

const InputBlock = ({
  errorId,
  id,
  label,
  hint,
  hintId,
  error,
  width,
  disabled,
  readOnly,
  autoFocus,
  name,
  value,
  min,
  max,
  type,
  spellCheck,
  maxLength,
  autoComplete,
  onChange,
  ref
}: Props) => (
  <StyledDiv errorId={errorId}>
    {" "}
    <StyledLabel htmlFor={id}>
      {" "}
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Example text</React.Fragment>
      )}{" "}
    </StyledLabel>{" "}
    {hint !== undefined ? (
      <React.Fragment>
        {" "}
        <StyledDiv2 id={hintId}>
          {" "}
          {hint !== undefined ? (
            hint
          ) : (
            <React.Fragment>Example text</React.Fragment>
          )}{" "}
        </StyledDiv2>{" "}
      </React.Fragment>
    ) : (
      ""
    )}{" "}
    {errorId !== undefined ? (
      <React.Fragment>
        {" "}
        <StyledDiv3 id={errorId}>
          {" "}
          <StyledSpan>Error: </StyledSpan>{" "}
          {error !== undefined ? (
            error
          ) : (
            <React.Fragment>Example text</React.Fragment>
          )}{" "}
        </StyledDiv3>{" "}
      </React.Fragment>
    ) : (
      ""
    )}{" "}
    <StyledInput
      width={width}
      error={error}
      aria-describedby={
        hintId !== undefined || errorId !== undefined
          ? `${hintId ? hintId : ""}${errorId ? " " + errorId : ""}`
          : undefined
      }
      id={id}
      name={name}
      disabled={
        disabled !== undefined ? disabled.toString() === "true" : undefined
      }
      readOnly={readOnly}
      autoFocus={autoFocus}
      value={value}
      min={min}
      max={max}
      type={type}
      spellCheck={spellCheck}
      maxLength={maxLength}
      autoComplete={autoComplete}
      onChange={onChange}
      ref={ref}
    />{" "}
  </StyledDiv>
);

export default InputBlock;

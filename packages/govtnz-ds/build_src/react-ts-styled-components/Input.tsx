import * as React from "react";
import * as styled from "styled-components";

type Props = {
  width?: "30" | "20" | "10" | "5" | "4" | "3" | "2" | undefined;
  error?: boolean | undefined;
  id?: string | undefined;
  describedBy?: string | undefined;
  name: string;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  autoFocus?: boolean | undefined;
  value?: string | undefined;
  spellCheck?: boolean | undefined;
  maxLength?: number | undefined;
  autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  onChange: any;
};

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
padding: .5rem;
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
outline: 3px solid #ffbf47;
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

const Input = ({
  width,
  error,
  id,
  describedBy,
  name,
  disabled,
  readOnly,
  autoFocus,
  value,
  spellCheck,
  maxLength,
  autoComplete,
  onChange
}: Props) => (
  <StyledInput
    width={width}
    error={error}
    aria-describedby={describedBy}
    id={id}
    name={name}
    type="text"
    disabled={disabled}
    readOnly={readOnly}
    autoFocus={autoFocus}
    value={value}
    spellCheck={spellCheck}
    maxLength={maxLength}
    autoComplete={autoComplete}
    onChange={onChange}
  />
);

export default Input;

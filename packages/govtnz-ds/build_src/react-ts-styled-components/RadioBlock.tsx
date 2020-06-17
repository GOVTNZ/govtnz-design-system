import React from "react";
import styled from "styled-components";

type Props = {
  id?: string;
  hintId?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  name: string;
  value?: string;
  checked?: boolean;
  onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
  ref?: React.RefObject<HTMLInputElement>;
  label?: React.ReactNode;
  hint?: React.ReactNode;
};

const StyledDiv = styled.div`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  position: relative;
  min-height: 30px;
  margin-bottom: 16px;
  padding: 0 0 0 30px;
  clear: left;
  min-height: 40px;
  padding: 0 0 0 40px;
  margin-bottom: 10px;
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
  :last-child,
  :last-of-type {
    margin-bottom: 0;
  }
  margin-right: 0;
  display: inline-block;
  @media (min-width: 40.0625em) {
    margin-right: 20px;
  }
`;

const StyledInput = styled.input`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin: 0;
  opacity: 0;
  width: 40px;
  height: 40px;
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
  display: inline-block;
  margin-bottom: 0;
  padding: 0px 10px 5px 5px;
  cursor: pointer;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  padding: 8px 15px 5px 15px;
  ::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    border: 2px solid currentColor;
    border-radius: 50%;
    background: transparent;
  }
  ::before {
    width: 40px;
    height: 40px;
  }
  ::after {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    width: 0;
    height: 0;
    border: 6px solid currentColor;
    border-radius: 50%;
    opacity: 0;
    background: currentColor;
  }
  ::after {
    top: 10px;
    left: 10px;
    border-width: 10px;
  }
  :focus + .g-radios__label::before,
  :focus + .g-radios__label::before {
    outline: 3px solid transparent;
    outline-offset: 3px;
    box-shadow: 0 0 0 4px #b53cde;
  }
  :checked + .g-radios__label::after,
  :checked + .g-radios__label::after {
    opacity: 1;
  }
  :disabled + .g-radios__label,
  :disabled + .g-radios__label {
    cursor: default;
  }
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
  display: block;
  padding-right: 15px;
  padding-left: 7px;
  padding-right: 15px;
  padding-left: 15px;
`;

const RadioBlock = ({
  id,
  hintId,
  required,
  disabled,
  readOnly,
  autoFocus,
  name,
  value,
  checked,
  onChange,
  ref,
  label,
  hint
}: Props) => (
  <StyledDiv>
    <StyledInput
      aria-describedby={hintId}
      id={id}
      name={name}
      type="radio"
      required={required}
      disabled={
        disabled !== undefined ? disabled.toString() === "true" : undefined
      }
      readOnly={readOnly}
      autoFocus={autoFocus}
      value={value}
      checked={checked}
      onChange={onChange}
      ref={ref}
    />
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
  </StyledDiv>
);

export default RadioBlock;

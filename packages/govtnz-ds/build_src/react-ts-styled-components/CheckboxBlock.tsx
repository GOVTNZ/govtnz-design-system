import React from "react";
import styled from "styled-components";

type Props = {
  errorId?: string;
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
  error?: React.ReactNode;
};

const StyledDiv = styled.div`
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  position: relative;
  min-height: 40px;
  margin-bottom: 16px;
  padding: 0 0 0 40px;
  clear: left;
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
  margin-top: 0px;
`;

const StyledInput = styled.input`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin: 0;
  opacity: 0;
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
    color: g-theme-print-color;
  }
  display: inline-block;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  cursor: pointer;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  ::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border: 2px solid currentColor;
    background-color: g-theme-form-background-color;
  }
  ::after {
    content: "";
    position: absolute;
    top: 11px;
    left: 9px;
    width: 18px;
    height: 7px;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    border: solid;
    border-width: 0 0 5px 5px;
    border-top-color: transparent;
    opacity: 0;
    background: transparent;
  }
  :focus + .g-checkboxes__label::before,
  :focus + .g-checkboxes__label::before {
    outline: 3px solid transparent;
    outline-offset: 3px;
    box-shadow: 0 0 0 3px g-theme-focus-ring-color;
  }
  :checked + .g-checkboxes__label::after,
  :checked + .g-checkboxes__label::after {
    opacity: 1;
  }
  :disabled + .g-checkboxes__label,
  :disabled + .g-checkboxes__label {
    cursor: default;
  }
  :disabled + .g-checkboxes__label,
  :disabled + .g-checkboxes__label {
    opacity: 0.5;
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
  padding-left: 15px;
  margin-top: 0px;
`;

const StyledDiv3 = styled.div`
  margin-top: 0px;
`;

const StyledSpan = styled.span`
  margin-top: 0px;
`;

const CheckboxBlock = ({
  errorId,
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
  hint,
  error
}: Props) => (
  <StyledDiv errorId={errorId}>
    <StyledInput
      aria-describedby={hintId}
      id={id}
      type="checkbox"
      required={required}
      disabled={
        disabled !== undefined ? disabled.toString() === "true" : undefined
      }
      readOnly={readOnly}
      autoFocus={autoFocus}
      name={name}
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
  </StyledDiv>
);

export default CheckboxBlock;

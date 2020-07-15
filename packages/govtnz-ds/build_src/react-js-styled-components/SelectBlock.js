import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
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

const StyledSelect = styled.select`
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  padding: 0.4rem 2.5rem 0.5rem 0.6rem;
  border: 1px solid g-theme-form-border-color;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  border-radius: 0;
  background-position: right 0.7em top 50%;
  background-color: g-theme-select-background-color;
  color: g-theme-form-color;
  background-size: 1rem auto;
  background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='14' height='8.5' viewBox='0 0 16 10.5'%3E%3Cpath d='M1 1 L8 8.5 L15 1' stroke-width='3' stroke='currentColor' fill='transparent' /%3E%3C/svg%3E");
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :valid,
  :invalid {
    background-color: g-theme-form-background-color;
    -webkit-text-fill-color: g-theme-color !important;
    color: g-theme-color;
    border: 1px solid g-theme-form-border-color;
  }
  @media print {
    font-family: sans-serif;
    font-size: 14pt;
    line-height: 1.25;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.25;
  }
  :focus {
    outline: 3px solid g-theme-focus-ring-color;
    outline-offset: 0;
  }
  ${props =>
    props.error &&
    styled.css`
      border: 1px solid g-theme-error-border-color;
    `}
  ::-ms-expand {
    display: none;
  }
  margin-top: 0px;
`;

const SelectBlock = ({
  errorId,
  selectId,
  label,
  error,
  name,
  required,
  multiple,
  onChange,
  ref,
  children
}) => (
  <StyledDiv errorId={errorId}>
    <StyledLabel htmlFor={selectId}>
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Example label text</React.Fragment>
      )}
    </StyledLabel>
    <StyledSelect
      error={error}
      id={selectId}
      name={name}
      required={required}
      multiple={multiple}
      onChange={onChange}
      ref={ref}
    >
      {children !== undefined ? (
        children
      ) : (
        <React.Fragment>
          <option>Options</option>
        </React.Fragment>
      )}
    </StyledSelect>
  </StyledDiv>
);

export default SelectBlock;

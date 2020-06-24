import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-bottom: 20px;
  :after {
    content: "";
    display: block;
    clear: both;
  }
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
  margin-bottom: 5px;
  margin-top: 0px;
`;

const StyledFieldset = styled.fieldset`
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
  :after {
    content: "";
    display: block;
    clear: both;
  }
  margin-top: 0px;
`;

const StyledLegend = styled.legend`
  margin-top: 0px;
`;

const StyledSpan = styled.span`
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
  margin-top: 0px;
`;

const StyledSpan2 = styled.span`
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

const StyledSpan3 = styled.span`
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

const StyledDiv2 = styled.div`
  margin-top: 0px;
`;

const StyledDiv3 = styled.div`
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 0;
  margin-top: 0px;
`;

const StyledDiv4 = styled.div`
  margin-bottom: 20px;
  :after {
    content: "";
    display: block;
    clear: both;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  :last-of-type {
    margin-bottom: 0;
  }
  padding: 0;
  border: 0;
  margin-bottom: 5px;
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
    color: g-theme-print-color;
  }
  display: block;
  margin-top: 0px;
`;

const StyledInput = styled.input`
  font-family: g-theme-font-family;
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
  border: 1px solid g-theme-form-border-color;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: g-theme-form-background-color;
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
  :focus {
    outline: 3px solid g-theme-focus-ring-color;
    outline-offset: 0;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
  ${props =>
    props.error &&
    styled.css`
      border: 1px solid g-theme-error-border-color;
    `}
  max-width: 5.4ex;
  margin-bottom: 0;
  margin-top: 0px;
`;

const StyledDiv5 = styled.div`
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 0;
  margin-top: 0px;
`;

const StyledDiv6 = styled.div`
  margin-bottom: 20px;
  :after {
    content: "";
    display: block;
    clear: both;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  :last-of-type {
    margin-bottom: 0;
  }
  padding: 0;
  border: 0;
  margin-bottom: 5px;
  margin-top: 0px;
`;

const StyledLabel2 = styled.label`
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
    color: g-theme-print-color;
  }
  display: block;
  margin-top: 0px;
`;

const StyledInput2 = styled.input`
  font-family: g-theme-font-family;
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
  border: 1px solid g-theme-form-border-color;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: g-theme-form-background-color;
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
  :focus {
    outline: 3px solid g-theme-focus-ring-color;
    outline-offset: 0;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
  ${props =>
    props.error &&
    styled.css`
      border: 1px solid g-theme-error-border-color;
    `}
  max-width: 5.4ex;
  margin-bottom: 0;
  margin-top: 0px;
`;

const StyledDiv7 = styled.div`
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 0;
  margin-top: 0px;
`;

const StyledDiv8 = styled.div`
  margin-bottom: 20px;
  :after {
    content: "";
    display: block;
    clear: both;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  :last-of-type {
    margin-bottom: 0;
  }
  padding: 0;
  border: 0;
  margin-bottom: 5px;
  margin-top: 0px;
`;

const StyledLabel3 = styled.label`
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
    color: g-theme-print-color;
  }
  display: block;
  margin-top: 0px;
`;

const StyledInput3 = styled.input`
  font-family: g-theme-font-family;
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
  border: 1px solid g-theme-form-border-color;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: g-theme-form-background-color;
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
  :focus {
    outline: 3px solid g-theme-focus-ring-color;
    outline-offset: 0;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
  ${props =>
    props.error &&
    styled.css`
      border: 1px solid g-theme-error-border-color;
    `}
  max-width: 9ex;
  margin-bottom: 0;
  margin-top: 0px;
`;

const DateInput = ({
  errorId,
  hintId,
  label,
  hint,
  error,
  id,
  dayId,
  required,
  disabled,
  readOnly,
  autoFocus,
  dayName,
  value,
  spellCheck,
  autoComplete,
  onChange,
  ref,
  monthId,
  yearName,
  value2,
  onChange2,
  ref2,
  yearId,
  value3,
  onChange3,
  ref3
}) => (
  <StyledDiv errorId={errorId}>
    <StyledFieldset
      aria-describedby={
        hintId !== undefined || errorId !== undefined
          ? `${hintId ? hintId : ""}${errorId ? " " + errorId : ""}`
          : undefined
      }
      role="group"
    >
      <StyledLegend>
        {label !== undefined ? (
          label
        ) : (
          <React.Fragment>Example label</React.Fragment>
        )}
      </StyledLegend>
      <StyledSpan id={hintId}>
        {hint !== undefined ? (
          hint
        ) : (
          <React.Fragment>Example hint</React.Fragment>
        )}
      </StyledSpan>
      {errorId !== undefined ? (
        <React.Fragment>
          <StyledSpan2 id={errorId}>
            <StyledSpan3>Error: </StyledSpan3>
            {error !== undefined ? (
              error
            ) : (
              <React.Fragment>Example error</React.Fragment>
            )}
          </StyledSpan2>
        </React.Fragment>
      ) : (
        ""
      )}
      <StyledDiv2 id={id}>
        <StyledDiv3>
          <StyledDiv4>
            <StyledLabel htmlFor={dayId}>Day</StyledLabel>
            <StyledInput
              error={error}
              id={dayId}
              maxLength={2}
              name={dayName}
              pattern="[0-9]*"
              type="text"
              value={value}
              required={required}
              disabled={
                disabled !== undefined
                  ? disabled.toString() === "true"
                  : undefined
              }
              readOnly={readOnly}
              autoFocus={autoFocus}
              spellCheck={spellCheck}
              autoComplete={autoComplete}
              onChange={onChange}
              ref={ref}
            />
          </StyledDiv4>
        </StyledDiv3>
        <StyledDiv5>
          <StyledDiv6>
            <StyledLabel2 htmlFor={monthId}>Month</StyledLabel2>
            <StyledInput2
              error={error}
              id={monthId}
              maxLength={2}
              name={yearName}
              pattern="[0-9]*"
              type="text"
              value={value2}
              required={required}
              disabled={
                disabled !== undefined
                  ? disabled.toString() === "true"
                  : undefined
              }
              readOnly={readOnly}
              autoFocus={autoFocus}
              spellCheck={spellCheck}
              autoComplete={autoComplete}
              onChange={onChange2}
              ref={ref2}
            />
          </StyledDiv6>
        </StyledDiv5>
        <StyledDiv7>
          <StyledDiv8>
            <StyledLabel3 htmlFor={yearId}>Year</StyledLabel3>
            <StyledInput3
              error={error}
              id={yearId}
              maxLength={4}
              name={yearName}
              pattern="[0-9]*"
              type="text"
              value={value3}
              required={required}
              disabled={
                disabled !== undefined
                  ? disabled.toString() === "true"
                  : undefined
              }
              readOnly={readOnly}
              autoFocus={autoFocus}
              spellCheck={spellCheck}
              autoComplete={autoComplete}
              onChange={onChange3}
              ref={ref3}
            />
          </StyledDiv8>
        </StyledDiv7>
      </StyledDiv2>
    </StyledFieldset>
  </StyledDiv>
);

export default DateInput;

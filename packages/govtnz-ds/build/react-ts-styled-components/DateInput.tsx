import * as React from "react";
import * as styled from "styled-components";

type Props = {
  error?: boolean | undefined;
  hintId?: string | undefined;
  errorId?: string | undefined;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  id?: string | undefined;
  dayId?: string | undefined;
  name: string;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  autoFocus?: boolean | undefined;
  value?: string | undefined;
  spellCheck?: boolean | undefined;
  autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  onChange: any;
  monthId?: string | undefined;
  yearId?: string | undefined;
};

const StyledDiv = styled.div<Pick<Props, "error">>`
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
    props.error &&
    styled.css`
      padding-left: 15px;
      border-left: 5px solid #b10e1e;
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
  @media not (caret-color: auto) {
    display: table-cell;
  }
  margin-top: 0px;
`;

const StyledLegend = styled.legend`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  box-sizing: border-box;
  display: table;
  max-width: 100%;
  margin-bottom: 0px;
  padding: 0;
  overflow: hidden;
  white-space: normal;
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
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.09375;
  margin-bottom: 15px;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 3rem;
    line-height: 1.04167;
  }
  @media print {
    font-size: 32pt;
    line-height: 1.15;
  }
  margin-top: 0px;
`;

const StyledSpan = styled.span`
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
  margin-bottom: 10px;
  margin-top: -5px;
  margin-top: 0px;
`;

const StyledSpan2 = styled.span`
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
  font-size: 0;
  :after {
    content: "";
    display: block;
    clear: both;
  }
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
  display: block;
  margin-top: 0px;
`;

const StyledInput = styled.input<Pick<Props, "error">>`
  font-family: Arial, sans-serif;
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
    outline: 3px solid #ffbf47;
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
      border: 1px solid #b10e1e;
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
  display: block;
  margin-top: 0px;
`;

const StyledInput2 = styled.input<Pick<Props, "error">>`
  font-family: Arial, sans-serif;
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
    outline: 3px solid #ffbf47;
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
      border: 1px solid #b10e1e;
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
  display: block;
  margin-top: 0px;
`;

const StyledInput3 = styled.input<Pick<Props, "error">>`
  font-family: Arial, sans-serif;
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
    outline: 3px solid #ffbf47;
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
      border: 1px solid #b10e1e;
    `}
  max-width: 9ex;
  margin-bottom: 0;
  margin-top: 0px;
`;

const DateInput = ({
  error,
  hintId,
  errorId,
  label,
  hint,
  id,
  dayId,
  name,
  disabled,
  readOnly,
  autoFocus,
  value,
  spellCheck,
  autoComplete,
  onChange,
  monthId,
  yearId
}: Props) => (
  <StyledDiv error={error}>
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
      {error !== undefined ? (
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
              name={name}
              pattern="[0-9]*"
              type="text"
              disabled={disabled}
              readOnly={readOnly}
              autoFocus={autoFocus}
              value={value}
              spellCheck={spellCheck}
              autoComplete={autoComplete}
              onChange={onChange}
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
              name={name}
              pattern="[0-9]*"
              type="text"
              disabled={disabled}
              readOnly={readOnly}
              autoFocus={autoFocus}
              value={value}
              spellCheck={spellCheck}
              autoComplete={autoComplete}
              onChange={onChange}
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
              name={name}
              pattern="[0-9]*"
              type="text"
              disabled={disabled}
              readOnly={readOnly}
              autoFocus={autoFocus}
              value={value}
              spellCheck={spellCheck}
              autoComplete={autoComplete}
              onChange={onChange}
            />
          </StyledDiv8>
        </StyledDiv7>
      </StyledDiv2>
    </StyledFieldset>
  </StyledDiv>
);

export default DateInput;

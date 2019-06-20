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
    props.hasError &&
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

const StyledH1 = styled.h1`
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
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

const StyledInput = styled.input`
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
  -moz-appearance: textfield;
  ${props =>
    props.hasError &&
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

const StyledInput2 = styled.input`
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
  -moz-appearance: textfield;
  ${props =>
    props.hasError &&
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
  margin-top: 0px;
`;

const StyledInput3 = styled.input`
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
  -moz-appearance: textfield;
  ${props =>
    props.hasError &&
    styled.css`
      border: 1px solid #b10e1e;
    `}
  max-width: 9ex;
  margin-bottom: 0;
  margin-top: 0px;
`;

const constants = {
  autoComplete: {
    Off: "off",
    On: "on",
    Name: "name",
    "Honorific: Prefix": "honorific-prefix",
    "Given Name": "given-name",
    "Additional Name": "additional-name",
    "Family Name": "family-name",
    "Honorific: Suffix": "honorific-suffix",
    Nickname: "nickname",
    Email: "email",
    Username: "username",
    "New Password": "new-password",
    "Current Password": "current-password",
    "Organization Title": "organization-title",
    Organization: "organization",
    "Street Address": "street-address",
    "Address Line 1": "address-line1",
    "Address Line 2": "address-line2",
    "Address Line 3": "address-line3",
    "Address Level 4": "address-level4",
    "Address Level 3": "address-level3",
    "Address Level 2": "address-level2",
    "Address Level 1": "address-level1",
    Country: "country",
    "Country Name": "country-name",
    "Postal Code": "postal-code",
    "Credit Card: Name": "cc-name",
    "Credit Card: Given Name": "cc-given-name",
    "Credit Card: Additional Name": "cc-additional-name",
    "Credit Card: Family Name": "cc-family-name",
    "Credit Card: Number": "cc-number",
    "Credit Card: Expiry": "cc-exp",
    "Credit Card: Expiry Month": "cc-exp-month",
    "Credit Card: Expiry Year": "cc-exp-year",
    "Credit Card: CSC": "cc-csc",
    "Credit Card: Type": "cc-type",
    "Transaction: Currency": "transaction-currency",
    "Transaction: Amount": "transaction-amount",
    Language: "language",
    Birthday: "bday",
    "Birthday: Day": "bday-day",
    "Birthday: Month": "bday-month",
    "Birthday: Year": "bday-year",
    Sex: "sex",
    Telephone: "tel",
    "Telephone: Country Code": "tel-country-code",
    "Telephone: National": "tel-national",
    "Telephone: Area Code": "tel-area-code",
    "Telephone: Local": "tel-local",
    "Telephone: Extension": "tel-extension",
    IMPP: "impp",
    URL: "url",
    Photo: "photo"
  },
  type: {
    Button: "button",
    Checkbox: "checkbox",
    Color: "color",
    Date: "date",
    "DateTime: Local": "datetime-local",
    Email: "email",
    File: "file",
    Hidden: "hidden",
    Image: "image",
    Month: "month",
    Number: "number",
    Password: "password",
    Radio: "radio",
    Range: "range",
    Reset: "reset",
    Search: "search",
    Submit: "submit",
    Telephone: "tel",
    Text: "text",
    Time: "time",
    URL: "url",
    Week: "week"
  },
  autoComplete2: {
    Off: "off",
    On: "on",
    Name: "name",
    "Honorific: Prefix": "honorific-prefix",
    "Given Name": "given-name",
    "Additional Name": "additional-name",
    "Family Name": "family-name",
    "Honorific: Suffix": "honorific-suffix",
    Nickname: "nickname",
    Email: "email",
    Username: "username",
    "New Password": "new-password",
    "Current Password": "current-password",
    "Organization Title": "organization-title",
    Organization: "organization",
    "Street Address": "street-address",
    "Address Line 1": "address-line1",
    "Address Line 2": "address-line2",
    "Address Line 3": "address-line3",
    "Address Level 4": "address-level4",
    "Address Level 3": "address-level3",
    "Address Level 2": "address-level2",
    "Address Level 1": "address-level1",
    Country: "country",
    "Country Name": "country-name",
    "Postal Code": "postal-code",
    "Credit Card: Name": "cc-name",
    "Credit Card: Given Name": "cc-given-name",
    "Credit Card: Additional Name": "cc-additional-name",
    "Credit Card: Family Name": "cc-family-name",
    "Credit Card: Number": "cc-number",
    "Credit Card: Expiry": "cc-exp",
    "Credit Card: Expiry Month": "cc-exp-month",
    "Credit Card: Expiry Year": "cc-exp-year",
    "Credit Card: CSC": "cc-csc",
    "Credit Card: Type": "cc-type",
    "Transaction: Currency": "transaction-currency",
    "Transaction: Amount": "transaction-amount",
    Language: "language",
    Birthday: "bday",
    "Birthday: Day": "bday-day",
    "Birthday: Month": "bday-month",
    "Birthday: Year": "bday-year",
    Sex: "sex",
    Telephone: "tel",
    "Telephone: Country Code": "tel-country-code",
    "Telephone: National": "tel-national",
    "Telephone: Area Code": "tel-area-code",
    "Telephone: Local": "tel-local",
    "Telephone: Extension": "tel-extension",
    IMPP: "impp",
    URL: "url",
    Photo: "photo"
  },
  type2: {
    Button: "button",
    Checkbox: "checkbox",
    Color: "color",
    Date: "date",
    "DateTime: Local": "datetime-local",
    Email: "email",
    File: "file",
    Hidden: "hidden",
    Image: "image",
    Month: "month",
    Number: "number",
    Password: "password",
    Radio: "radio",
    Range: "range",
    Reset: "reset",
    Search: "search",
    Submit: "submit",
    Telephone: "tel",
    Text: "text",
    Time: "time",
    URL: "url",
    Week: "week"
  },
  autoComplete3: {
    Off: "off",
    On: "on",
    Name: "name",
    "Honorific: Prefix": "honorific-prefix",
    "Given Name": "given-name",
    "Additional Name": "additional-name",
    "Family Name": "family-name",
    "Honorific: Suffix": "honorific-suffix",
    Nickname: "nickname",
    Email: "email",
    Username: "username",
    "New Password": "new-password",
    "Current Password": "current-password",
    "Organization Title": "organization-title",
    Organization: "organization",
    "Street Address": "street-address",
    "Address Line 1": "address-line1",
    "Address Line 2": "address-line2",
    "Address Line 3": "address-line3",
    "Address Level 4": "address-level4",
    "Address Level 3": "address-level3",
    "Address Level 2": "address-level2",
    "Address Level 1": "address-level1",
    Country: "country",
    "Country Name": "country-name",
    "Postal Code": "postal-code",
    "Credit Card: Name": "cc-name",
    "Credit Card: Given Name": "cc-given-name",
    "Credit Card: Additional Name": "cc-additional-name",
    "Credit Card: Family Name": "cc-family-name",
    "Credit Card: Number": "cc-number",
    "Credit Card: Expiry": "cc-exp",
    "Credit Card: Expiry Month": "cc-exp-month",
    "Credit Card: Expiry Year": "cc-exp-year",
    "Credit Card: CSC": "cc-csc",
    "Credit Card: Type": "cc-type",
    "Transaction: Currency": "transaction-currency",
    "Transaction: Amount": "transaction-amount",
    Language: "language",
    Birthday: "bday",
    "Birthday: Day": "bday-day",
    "Birthday: Month": "bday-month",
    "Birthday: Year": "bday-year",
    Sex: "sex",
    Telephone: "tel",
    "Telephone: Country Code": "tel-country-code",
    "Telephone: National": "tel-national",
    "Telephone: Area Code": "tel-area-code",
    "Telephone: Local": "tel-local",
    "Telephone: Extension": "tel-extension",
    IMPP: "impp",
    URL: "url",
    Photo: "photo"
  },
  type3: {
    Button: "button",
    Checkbox: "checkbox",
    Color: "color",
    Date: "date",
    "DateTime: Local": "datetime-local",
    Email: "email",
    File: "file",
    Hidden: "hidden",
    Image: "image",
    Month: "month",
    Number: "number",
    Password: "password",
    Radio: "radio",
    Range: "range",
    Reset: "reset",
    Search: "search",
    Submit: "submit",
    Telephone: "tel",
    Text: "text",
    Time: "time",
    URL: "url",
    Week: "week"
  }
};

const DateInput = ({
  hasError,
  hintId,
  errorId,
  label,
  hint,
  error,
  id,
  dayId,
  name,
  disabled,
  readOnly,
  autoFocus,
  value,
  type,
  spellCheck,
  maxLength,
  autoComplete,
  onChange,
  monthId,
  name2,
  disabled2,
  readOnly2,
  autoFocus2,
  value2,
  type2,
  spellCheck2,
  maxLength2,
  autoComplete2,
  onChange2,
  yearId,
  name3,
  disabled3,
  readOnly3,
  autoFocus3,
  value3,
  type3,
  spellCheck3,
  maxLength3,
  autoComplete3,
  onChange3
}) => (
  <StyledDiv hasError={hasError}>
    <StyledFieldset
      aria-describedby={
        hintId !== undefined || errorId !== undefined
          ? `${hintId ? hintId : ""}${errorId ? " " + errorId : ""}`
          : undefined
      }
      role="group"
    >
      <StyledLegend>
        <StyledH1>
          {label !== undefined ? (
            label
          ) : (
            <React.Fragment>Example label</React.Fragment>
          )}
        </StyledH1>
      </StyledLegend>
      <StyledSpan id={hintId}>
        {hint !== undefined ? (
          hint
        ) : (
          <React.Fragment>Example hint</React.Fragment>
        )}
      </StyledSpan>
      {hasError !== undefined ? (
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
              hasError={hasError}
              autoComplete={constants.autoComplete[autoComplete]}
              id={dayId}
              name={name}
              pattern="[0-9]*"
              type={constants.type[type]}
              value={value}
              disabled={disabled}
              readOnly={readOnly}
              autoFocus={autoFocus}
              spellCheck={spellCheck}
              maxLength={maxLength}
              onChange={onChange}
            />
          </StyledDiv4>
        </StyledDiv3>
        <StyledDiv5>
          <StyledDiv6>
            <StyledLabel2 htmlFor={monthId}>Month</StyledLabel2>
            <StyledInput2
              hasError={hasError}
              autoComplete={constants.autoComplete2[autoComplete2]}
              id={monthId}
              name={name2}
              pattern="[0-9]*"
              type={constants.type2[type2]}
              value={value2}
              disabled={disabled2}
              readOnly={readOnly2}
              autoFocus={autoFocus2}
              spellCheck={spellCheck2}
              maxLength={maxLength2}
              onChange={onChange2}
            />
          </StyledDiv6>
        </StyledDiv5>
        <StyledDiv7>
          <StyledDiv8>
            <StyledLabel3 htmlFor={yearId}>Year</StyledLabel3>
            <StyledInput3
              hasError={hasError}
              autoComplete={constants.autoComplete3[autoComplete3]}
              id={yearId}
              name={name3}
              pattern="[0-9]*"
              type={constants.type3[type3]}
              value={value3}
              disabled={disabled3}
              readOnly={readOnly3}
              autoFocus={autoFocus3}
              spellCheck={spellCheck3}
              maxLength={maxLength3}
              onChange={onChange3}
            />
          </StyledDiv8>
        </StyledDiv7>
      </StyledDiv2>
    </StyledFieldset>
  </StyledDiv>
);

export default DateInput;

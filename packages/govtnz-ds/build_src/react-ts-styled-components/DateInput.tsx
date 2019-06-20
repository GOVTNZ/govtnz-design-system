import * as React from "react";
import * as styled from "styled-components";

type Props = {
  dobHint?: string | undefined;
  dob?: string | undefined;
  dobDay?: string | undefined;
  name: string;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  autoFocus?: boolean | undefined;
  value?: string | undefined;
  type:
    | "Button"
    | "Checkbox"
    | "Color"
    | "Date"
    | "DateTime: Local"
    | "Email"
    | "File"
    | "Hidden"
    | "Image"
    | "Month"
    | "Number"
    | "Password"
    | "Radio"
    | "Range"
    | "Reset"
    | "Search"
    | "Submit"
    | "Telephone"
    | "Text"
    | "Time"
    | "URL"
    | "Week";
  spellCheck?: boolean | undefined;
  maxLength?: number | undefined;
  autoComplete:
    | "Off"
    | "On"
    | "Name"
    | "Honorific: Prefix"
    | "Given Name"
    | "Additional Name"
    | "Family Name"
    | "Honorific: Suffix"
    | "Nickname"
    | "Email"
    | "Username"
    | "New Password"
    | "Current Password"
    | "Organization Title"
    | "Organization"
    | "Street Address"
    | "Address Line 1"
    | "Address Line 2"
    | "Address Line 3"
    | "Address Level 4"
    | "Address Level 3"
    | "Address Level 2"
    | "Address Level 1"
    | "Country"
    | "Country Name"
    | "Postal Code"
    | "Credit Card: Name"
    | "Credit Card: Given Name"
    | "Credit Card: Additional Name"
    | "Credit Card: Family Name"
    | "Credit Card: Number"
    | "Credit Card: Expiry"
    | "Credit Card: Expiry Month"
    | "Credit Card: Expiry Year"
    | "Credit Card: CSC"
    | "Credit Card: Type"
    | "Transaction: Currency"
    | "Transaction: Amount"
    | "Language"
    | "Birthday"
    | "Birthday: Day"
    | "Birthday: Month"
    | "Birthday: Year"
    | "Sex"
    | "Telephone"
    | "Telephone: Country Code"
    | "Telephone: National"
    | "Telephone: Area Code"
    | "Telephone: Local"
    | "Telephone: Extension"
    | "IMPP"
    | "URL"
    | "Photo";
  onChange: any;
  dobMonth?: string | undefined;
  name2: string;
  disabled2?: boolean | undefined;
  readOnly2?: boolean | undefined;
  autoFocus2?: boolean | undefined;
  value2?: string | undefined;
  type2:
    | "Button"
    | "Checkbox"
    | "Color"
    | "Date"
    | "DateTime: Local"
    | "Email"
    | "File"
    | "Hidden"
    | "Image"
    | "Month"
    | "Number"
    | "Password"
    | "Radio"
    | "Range"
    | "Reset"
    | "Search"
    | "Submit"
    | "Telephone"
    | "Text"
    | "Time"
    | "URL"
    | "Week";
  spellCheck2?: boolean | undefined;
  maxLength2?: number | undefined;
  autoComplete2:
    | "Off"
    | "On"
    | "Name"
    | "Honorific: Prefix"
    | "Given Name"
    | "Additional Name"
    | "Family Name"
    | "Honorific: Suffix"
    | "Nickname"
    | "Email"
    | "Username"
    | "New Password"
    | "Current Password"
    | "Organization Title"
    | "Organization"
    | "Street Address"
    | "Address Line 1"
    | "Address Line 2"
    | "Address Line 3"
    | "Address Level 4"
    | "Address Level 3"
    | "Address Level 2"
    | "Address Level 1"
    | "Country"
    | "Country Name"
    | "Postal Code"
    | "Credit Card: Name"
    | "Credit Card: Given Name"
    | "Credit Card: Additional Name"
    | "Credit Card: Family Name"
    | "Credit Card: Number"
    | "Credit Card: Expiry"
    | "Credit Card: Expiry Month"
    | "Credit Card: Expiry Year"
    | "Credit Card: CSC"
    | "Credit Card: Type"
    | "Transaction: Currency"
    | "Transaction: Amount"
    | "Language"
    | "Birthday"
    | "Birthday: Day"
    | "Birthday: Month"
    | "Birthday: Year"
    | "Sex"
    | "Telephone"
    | "Telephone: Country Code"
    | "Telephone: National"
    | "Telephone: Area Code"
    | "Telephone: Local"
    | "Telephone: Extension"
    | "IMPP"
    | "URL"
    | "Photo";
  onChange2: any;
  dobYear?: string | undefined;
  name3: string;
  disabled3?: boolean | undefined;
  readOnly3?: boolean | undefined;
  autoFocus3?: boolean | undefined;
  value3?: string | undefined;
  type3:
    | "Button"
    | "Checkbox"
    | "Color"
    | "Date"
    | "DateTime: Local"
    | "Email"
    | "File"
    | "Hidden"
    | "Image"
    | "Month"
    | "Number"
    | "Password"
    | "Radio"
    | "Range"
    | "Reset"
    | "Search"
    | "Submit"
    | "Telephone"
    | "Text"
    | "Time"
    | "URL"
    | "Week";
  spellCheck3?: boolean | undefined;
  maxLength3?: number | undefined;
  autoComplete3:
    | "Off"
    | "On"
    | "Name"
    | "Honorific: Prefix"
    | "Given Name"
    | "Additional Name"
    | "Family Name"
    | "Honorific: Suffix"
    | "Nickname"
    | "Email"
    | "Username"
    | "New Password"
    | "Current Password"
    | "Organization Title"
    | "Organization"
    | "Street Address"
    | "Address Line 1"
    | "Address Line 2"
    | "Address Line 3"
    | "Address Level 4"
    | "Address Level 3"
    | "Address Level 2"
    | "Address Level 1"
    | "Country"
    | "Country Name"
    | "Postal Code"
    | "Credit Card: Name"
    | "Credit Card: Given Name"
    | "Credit Card: Additional Name"
    | "Credit Card: Family Name"
    | "Credit Card: Number"
    | "Credit Card: Expiry"
    | "Credit Card: Expiry Month"
    | "Credit Card: Expiry Year"
    | "Credit Card: CSC"
    | "Credit Card: Type"
    | "Transaction: Currency"
    | "Transaction: Amount"
    | "Language"
    | "Birthday"
    | "Birthday: Day"
    | "Birthday: Month"
    | "Birthday: Year"
    | "Sex"
    | "Telephone"
    | "Telephone: Country Code"
    | "Telephone: National"
    | "Telephone: Area Code"
    | "Telephone: Local"
    | "Telephone: Extension"
    | "IMPP"
    | "URL"
    | "Photo";
  onChange3: any;
};

const StyledDiv = styled.div`
  margin-bottom: 20px;
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

const StyledFieldset = styled.fieldset`
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
  max-width: 9ex;
  margin-bottom: 0;
  margin-top: 0px;
`;

const constants = {
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
  }
};

const DateInput = ({
  dobHint,
  dob,
  dobDay,
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
  dobMonth,
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
  dobYear,
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
}: Props) => (
  <StyledDiv>
    <StyledFieldset aria-describedby={dobHint} role="group">
      <StyledLegend>What is your date of birth?</StyledLegend>
      <StyledSpan id={dobHint}>For example, 31 3 1980</StyledSpan>
      <StyledDiv2 id={dob}>
        <StyledDiv3>
          <StyledDiv4>
            <StyledLabel htmlFor={dobDay}>Day</StyledLabel>
            <StyledInput
              id={dobDay}
              name={name}
              pattern="[0-9]*"
              type={constants.type[type] as any}
              disabled={disabled}
              readOnly={readOnly}
              autoFocus={autoFocus}
              value={value}
              spellCheck={spellCheck}
              maxLength={maxLength}
              autoComplete={constants.autoComplete[autoComplete]}
              onChange={onChange}
            />
          </StyledDiv4>
        </StyledDiv3>
        <StyledDiv5>
          <StyledDiv6>
            <StyledLabel2 htmlFor={dobMonth}>Month</StyledLabel2>
            <StyledInput2
              id={dobMonth}
              name={name2}
              pattern="[0-9]*"
              type={constants.type2[type2] as any}
              disabled={disabled2}
              readOnly={readOnly2}
              autoFocus={autoFocus2}
              value={value2}
              spellCheck={spellCheck2}
              maxLength={maxLength2}
              autoComplete={constants.autoComplete2[autoComplete2]}
              onChange={onChange2}
            />
          </StyledDiv6>
        </StyledDiv5>
        <StyledDiv7>
          <StyledDiv8>
            <StyledLabel3 htmlFor={dobYear}>Year</StyledLabel3>
            <StyledInput3
              id={dobYear}
              name={name3}
              pattern="[0-9]*"
              type={constants.type3[type3] as any}
              disabled={disabled3}
              readOnly={readOnly3}
              autoFocus={autoFocus3}
              value={value3}
              spellCheck={spellCheck3}
              maxLength={maxLength3}
              autoComplete={constants.autoComplete3[autoComplete3]}
              onChange={onChange3}
            />
          </StyledDiv8>
        </StyledDiv7>
      </StyledDiv2>
    </StyledFieldset>
  </StyledDiv>
);

export default DateInput;

import * as React from "react";

type Props = {
  hasError?: boolean | undefined;
  hintId?: string | undefined;
  errorId?: string | undefined;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  id?: string | undefined;
  dayId?: string | undefined;
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
  monthId?: string | undefined;
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
  yearId?: string | undefined;
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
}: Props) => (
  <div
    className={`g-dateInput-form-group${
      hasError ? " g-dateInput-form-group--error" : ""
    }`}
  >
    <fieldset
      aria-describedby={
        hintId !== undefined || errorId !== undefined
          ? `${hintId ? hintId : ""}${errorId ? " " + errorId : ""}`
          : undefined
      }
      className="g-dateInput-fieldset"
      role="group"
    >
      <legend className="g-dateInput-fieldset__legend g-dateInput-fieldset__legend--xl">
        <h1 className="g-dateInput-fieldset__heading">
          {label !== undefined ? (
            label
          ) : (
            <React.Fragment>Example label</React.Fragment>
          )}
        </h1>
      </legend>
      <span className="g-dateInput-hint" id={hintId}>
        {hint !== undefined ? (
          hint
        ) : (
          <React.Fragment>Example hint</React.Fragment>
        )}
      </span>
      {hasError !== undefined ? (
        <React.Fragment>
          <span className="g-dateInput-error-message" id={errorId}>
            <span className="g-dateInput-visually-hidden">Error: </span>
            {error !== undefined ? (
              error
            ) : (
              <React.Fragment>Example error</React.Fragment>
            )}
          </span>
        </React.Fragment>
      ) : (
        ""
      )}

      <div className="g-dateInput-date-input" id={id}>
        <div className="g-dateInput-date-input__item">
          <div className="g-dateInput-form-group">
            <label
              className="g-dateInput-label g-dateInput-date-input__label"
              htmlFor={dayId}
            >
              Day
            </label>
            <input
              autoComplete={constants.autoComplete[autoComplete]}
              className={`g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2${
                hasError ? " g-dateInput-input--error" : ""
              }`}
              id={dayId}
              name={name}
              pattern="[0-9]*"
              type={constants.type[type] as any}
              value={value}
              disabled={disabled}
              readOnly={readOnly}
              autoFocus={autoFocus}
              spellCheck={spellCheck}
              maxLength={maxLength}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="g-dateInput-date-input__item">
          <div className="g-dateInput-form-group">
            <label
              className="g-dateInput-label g-dateInput-date-input__label"
              htmlFor={monthId}
            >
              Month
            </label>
            <input
              autoComplete={constants.autoComplete2[autoComplete2]}
              className={`g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2${
                hasError ? " g-dateInput-input--error" : ""
              }`}
              id={monthId}
              name={name2}
              pattern="[0-9]*"
              type={constants.type2[type2] as any}
              value={value2}
              disabled={disabled2}
              readOnly={readOnly2}
              autoFocus={autoFocus2}
              spellCheck={spellCheck2}
              maxLength={maxLength2}
              onChange={onChange2}
            />
          </div>
        </div>
        <div className="g-dateInput-date-input__item">
          <div className="g-dateInput-form-group">
            <label
              className="g-dateInput-label govuk-date-input__label"
              htmlFor={yearId}
            >
              Year
            </label>
            <input
              autoComplete={constants.autoComplete3[autoComplete3]}
              className={`g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-4${
                hasError ? " g-dateInput-input--error" : ""
              }`}
              id={yearId}
              name={name3}
              pattern="[0-9]*"
              type={constants.type3[type3] as any}
              value={value3}
              disabled={disabled3}
              readOnly={readOnly3}
              autoFocus={autoFocus3}
              spellCheck={spellCheck3}
              maxLength={maxLength3}
              onChange={onChange3}
            />
          </div>
        </div>
      </div>
    </fieldset>
  </div>
);

export default DateInput;

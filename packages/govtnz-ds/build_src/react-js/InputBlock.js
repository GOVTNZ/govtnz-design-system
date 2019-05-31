import React from "react";

const constants = {
  width: {
    "2": "g-inputBlock-input--width-2",
    "3": "g-inputBlock-input--width-3",
    "4": "g-inputBlock-input--width-4",
    "5": "g-inputBlock-input--width-5",
    "10": "g-inputBlock-input--width-10",
    "20": "g-inputBlock-input--width-20",
    "30": "g-inputBlock-input--width-30"
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
  }
};

const InputBlock = ({
  hasError,
  inputId,
  label,
  hintId,
  hint,
  errorId,
  error,
  width,
  fakeFocus,
  name,
  disabled,
  readOnly,
  autoFocus,
  value,
  type,
  spellCheck,
  autoComplete,
  onChange
}) => (
  <div
    className={`g-inputBlock-form-group${
      hasError ? " g-inputBlock-form-group--error" : ""
    }`}
  >
    <label className="g-inputBlock-label" htmlFor={inputId}>
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Example text</React.Fragment>
      )}
    </label>
    <div className="g-inputBlock-hint" id={hintId}>
      {hint !== undefined ? (
        hint
      ) : (
        <React.Fragment>Example text</React.Fragment>
      )}
    </div>
    {hasError !== undefined ? (
      <React.Fragment>
        <div className="g-inputBlock-error-message" id={errorId}>
          <span className="g-inputBlock-visually-hidden">Error: </span>
          {error !== undefined ? (
            error
          ) : (
            <React.Fragment>Example text</React.Fragment>
          )}
        </div>
      </React.Fragment>
    ) : (
      ""
    )}
    <input
      aria-describedby={
        hintId !== undefined || errorId !== undefined
          ? `${hintId ? hintId : ""}${errorId ? " " + errorId : ""}`
          : undefined
      }
      className={`g-inputBlock-input${
        constants.width[width] !== undefined ? " " + constants.width[width] : ""
      }${hasError ? " g-inputBlock-input--error" : ""}${
        fakeFocus ? " :focus" : ""
      }`}
      id={inputId}
      name={name}
      type={constants.type[type]}
      disabled={disabled}
      readOnly={readOnly}
      autoFocus={autoFocus}
      value={value}
      spellCheck={spellCheck}
      autoComplete={constants.autoComplete[autoComplete]}
      onChange={onChange}
    />
  </div>
);
InputBlock.props = [
  "hasError",
  "inputId",
  "label",
  "hintId",
  "hint",
  "errorId",
  "error",
  "width",
  "fakeFocus",
  "name",
  "disabled",
  "readOnly",
  "autoFocus",
  "value",
  "type",
  "spellCheck",
  "autoComplete",
  "onChange"
];
export default InputBlock;

import React from "react";

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
  name2,
  disabled2,
  readOnly2,
  autoFocus2,
  value2,
  spellCheck2,
  autoComplete2,
  onChange2,
  yearId,
  name3,
  disabled3,
  readOnly3,
  autoFocus3,
  value3,
  spellCheck3,
  autoComplete3,
  onChange3
}) => (
  <div
    className={`g-dateInput-form-group${
      error ? " g-dateInput-form-group--error" : ""
    }`}
  >
    <fieldset
      aria-describedby={
        hintId !== undefined || errorId !== undefined
          ? `${hintId ? hintId : ""}${errorId ? " " + errorId : ""}`
          : undefined
      }
      className="g-fieldset"
      role="group"
    >
      <legend className="g-fieldset__legend g-fieldset__legend--xl">
        {label !== undefined ? (
          label
        ) : (
          <React.Fragment>Example label</React.Fragment>
        )}
      </legend>
      <span className="g-dateInput-hint" id={hintId}>
        {hint !== undefined ? (
          hint
        ) : (
          <React.Fragment>Example hint</React.Fragment>
        )}
      </span>
      {error !== undefined ? (
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

      <div className="g-date-input" id={id}>
        <div className="g-date-input__item">
          <div className="g-dateInput-form-group">
            <label
              className="g-dateInput-label g-date-input__label"
              htmlFor={dayId}
            >
              Day
            </label>
            <input
              className={`g-dateInput-input g-date-input__input g-dateInput-input--width-2${
                error ? " g-dateInput-input--error" : ""
              }`}
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
              autoComplete={constants.autoComplete[autoComplete]}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="g-date-input__item">
          <div className="g-dateInput-form-group">
            <label
              className="g-dateInput-label g-date-input__label"
              htmlFor={monthId}
            >
              Month
            </label>
            <input
              className={`g-dateInput-input g-date-input__input g-dateInput-input--width-2${
                error ? " g-dateInput-input--error" : ""
              }`}
              id={monthId}
              maxLength={2}
              name={name2}
              pattern="[0-9]*"
              type="text"
              disabled={disabled2}
              readOnly={readOnly2}
              autoFocus={autoFocus2}
              value={value2}
              spellCheck={spellCheck2}
              autoComplete={constants.autoComplete2[autoComplete2]}
              onChange={onChange2}
            />
          </div>
        </div>
        <div className="g-date-input__item">
          <div className="g-dateInput-form-group">
            <label
              className="g-dateInput-label g-date-input__label"
              htmlFor={yearId}
            >
              Year
            </label>
            <input
              className={`g-dateInput-input g-date-input__input g-dateInput-input--width-4${
                error ? " g-dateInput-input--error" : ""
              }`}
              id={yearId}
              maxLength={4}
              name={name3}
              pattern="[0-9]*"
              type="text"
              disabled={disabled3}
              readOnly={readOnly3}
              autoFocus={autoFocus3}
              value={value3}
              spellCheck={spellCheck3}
              autoComplete={constants.autoComplete3[autoComplete3]}
              onChange={onChange3}
            />
          </div>
        </div>
      </div>
    </fieldset>
  </div>
);

export default DateInput;

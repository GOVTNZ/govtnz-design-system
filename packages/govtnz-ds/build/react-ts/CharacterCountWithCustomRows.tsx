import * as React from "react";

type Props = {
  id?: string | undefined;
  name: string;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  rows?: number | undefined;
  cols?: number | undefined;
  autoFocus?: boolean | undefined;
  spellCheck?: boolean | undefined;
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
  maxLength?: number | undefined;
  value?: string | undefined;
  onChange: any;
  remainingCharacters?: React.ReactNode;
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
  }
};

const CharacterCountWithCustomRows = ({
  id,
  name,
  disabled,
  readOnly,
  rows,
  cols,
  autoFocus,
  spellCheck,
  autoComplete,
  maxLength,
  value,
  onChange,
  remainingCharacters
}: Props) => (
  <div className="g-characterCountWithCustomRows-character-count">
    <div className="g-characterCountWithCustomRows-form-group">
      <label className="g-characterCountWithCustomRows-label" htmlFor={id}>
        Full address
      </label>
      <textarea
        className="g-characterCountWithCustomRows-textarea"
        id={id}
        name={name}
        rows={rows}
        disabled={disabled}
        readOnly={readOnly}
        cols={cols}
        autoFocus={autoFocus}
        spellCheck={spellCheck}
        autoComplete={constants.autoComplete[autoComplete]}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
      />
      <span
        aria-atomic="true"
        aria-live="polite"
        className="g-characterCountWithCustomRows-hint g-characterCountWithCustomRows-character-count__message"
      >
        You have{" "}
        {remainingCharacters !== undefined ? (
          remainingCharacters
        ) : (
          <React.Fragment />
        )}{" "}
        characters remaining
      </span>
    </div>
  </div>
);

const CharacterCountWithCustomRows__calculated = (
  props: Pick<
    Props,
    | "id"
    | "name"
    | "disabled"
    | "readOnly"
    | "rows"
    | "cols"
    | "autoFocus"
    | "spellCheck"
    | "autoComplete"
    | "maxLength"
    | "value"
    | "onChange"
  >
) =>
  React.createElement(CharacterCountWithCustomRows, {
    ...props,
    remainingCharacters: (props => {
      return props.value !== undefined && props.maxLength !== undefined
        ? parseInt(props.maxLength.toString(), 10) - props.value.length
        : props.maxLength;
    })(props)
  });

export { CharacterCountWithCustomRows };

export default CharacterCountWithCustomRows__calculated;

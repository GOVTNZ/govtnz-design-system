import * as React from "react";
declare type Props = {
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
    autoComplete: "Off" | "On" | "Name" | "Honorific: Prefix" | "Given Name" | "Additional Name" | "Family Name" | "Honorific: Suffix" | "Nickname" | "Email" | "Username" | "New Password" | "Current Password" | "Organization Title" | "Organization" | "Street Address" | "Address Line 1" | "Address Line 2" | "Address Line 3" | "Address Level 4" | "Address Level 3" | "Address Level 2" | "Address Level 1" | "Country" | "Country Name" | "Postal Code" | "Credit Card: Name" | "Credit Card: Given Name" | "Credit Card: Additional Name" | "Credit Card: Family Name" | "Credit Card: Number" | "Credit Card: Expiry" | "Credit Card: Expiry Month" | "Credit Card: Expiry Year" | "Credit Card: CSC" | "Credit Card: Type" | "Transaction: Currency" | "Transaction: Amount" | "Language" | "Birthday" | "Birthday: Day" | "Birthday: Month" | "Birthday: Year" | "Sex" | "Telephone" | "Telephone: Country Code" | "Telephone: National" | "Telephone: Area Code" | "Telephone: Local" | "Telephone: Extension" | "IMPP" | "URL" | "Photo";
    onChange: any;
    monthId?: string | undefined;
    name2: string;
    disabled2?: boolean | undefined;
    readOnly2?: boolean | undefined;
    autoFocus2?: boolean | undefined;
    value2?: string | undefined;
    spellCheck2?: boolean | undefined;
    autoComplete2: "Off" | "On" | "Name" | "Honorific: Prefix" | "Given Name" | "Additional Name" | "Family Name" | "Honorific: Suffix" | "Nickname" | "Email" | "Username" | "New Password" | "Current Password" | "Organization Title" | "Organization" | "Street Address" | "Address Line 1" | "Address Line 2" | "Address Line 3" | "Address Level 4" | "Address Level 3" | "Address Level 2" | "Address Level 1" | "Country" | "Country Name" | "Postal Code" | "Credit Card: Name" | "Credit Card: Given Name" | "Credit Card: Additional Name" | "Credit Card: Family Name" | "Credit Card: Number" | "Credit Card: Expiry" | "Credit Card: Expiry Month" | "Credit Card: Expiry Year" | "Credit Card: CSC" | "Credit Card: Type" | "Transaction: Currency" | "Transaction: Amount" | "Language" | "Birthday" | "Birthday: Day" | "Birthday: Month" | "Birthday: Year" | "Sex" | "Telephone" | "Telephone: Country Code" | "Telephone: National" | "Telephone: Area Code" | "Telephone: Local" | "Telephone: Extension" | "IMPP" | "URL" | "Photo";
    onChange2: any;
    yearId?: string | undefined;
    name3: string;
    disabled3?: boolean | undefined;
    readOnly3?: boolean | undefined;
    autoFocus3?: boolean | undefined;
    value3?: string | undefined;
    spellCheck3?: boolean | undefined;
    autoComplete3: "Off" | "On" | "Name" | "Honorific: Prefix" | "Given Name" | "Additional Name" | "Family Name" | "Honorific: Suffix" | "Nickname" | "Email" | "Username" | "New Password" | "Current Password" | "Organization Title" | "Organization" | "Street Address" | "Address Line 1" | "Address Line 2" | "Address Line 3" | "Address Level 4" | "Address Level 3" | "Address Level 2" | "Address Level 1" | "Country" | "Country Name" | "Postal Code" | "Credit Card: Name" | "Credit Card: Given Name" | "Credit Card: Additional Name" | "Credit Card: Family Name" | "Credit Card: Number" | "Credit Card: Expiry" | "Credit Card: Expiry Month" | "Credit Card: Expiry Year" | "Credit Card: CSC" | "Credit Card: Type" | "Transaction: Currency" | "Transaction: Amount" | "Language" | "Birthday" | "Birthday: Day" | "Birthday: Month" | "Birthday: Year" | "Sex" | "Telephone" | "Telephone: Country Code" | "Telephone: National" | "Telephone: Area Code" | "Telephone: Local" | "Telephone: Extension" | "IMPP" | "URL" | "Photo";
    onChange3: any;
};
declare const DateInput: ({ error, hintId, errorId, label, hint, id, dayId, name, disabled, readOnly, autoFocus, value, spellCheck, autoComplete, onChange, monthId, name2, disabled2, readOnly2, autoFocus2, value2, spellCheck2, autoComplete2, onChange2, yearId, name3, disabled3, readOnly3, autoFocus3, value3, spellCheck3, autoComplete3, onChange3 }: Props) => JSX.Element;
export default DateInput;

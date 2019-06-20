/// <reference types="react" />
declare type Props = {
    noNiReason?: string | undefined;
    noNiReasonError?: string | undefined;
    name: string;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    rows?: number | undefined;
    cols?: number | undefined;
    autoFocus?: boolean | undefined;
    spellCheck?: boolean | undefined;
    autoComplete: "Off" | "On" | "Name" | "Honorific: Prefix" | "Given Name" | "Additional Name" | "Family Name" | "Honorific: Suffix" | "Nickname" | "Email" | "Username" | "New Password" | "Current Password" | "Organization Title" | "Organization" | "Street Address" | "Address Line 1" | "Address Line 2" | "Address Line 3" | "Address Level 4" | "Address Level 3" | "Address Level 2" | "Address Level 1" | "Country" | "Country Name" | "Postal Code" | "Credit Card: Name" | "Credit Card: Given Name" | "Credit Card: Additional Name" | "Credit Card: Family Name" | "Credit Card: Number" | "Credit Card: Expiry" | "Credit Card: Expiry Month" | "Credit Card: Expiry Year" | "Credit Card: CSC" | "Credit Card: Type" | "Transaction: Currency" | "Transaction: Amount" | "Language" | "Birthday" | "Birthday: Day" | "Birthday: Month" | "Birthday: Year" | "Sex" | "Telephone" | "Telephone: Country Code" | "Telephone: National" | "Telephone: Area Code" | "Telephone: Local" | "Telephone: Extension" | "IMPP" | "URL" | "Photo";
    maxLength?: number | undefined;
    value?: string | undefined;
    onChange: any;
};
declare const TextareaWithErrorMessage: ({ noNiReason, noNiReasonError, name, disabled, readOnly, rows, cols, autoFocus, spellCheck, autoComplete, maxLength, value, onChange }: Props) => JSX.Element;
export default TextareaWithErrorMessage;

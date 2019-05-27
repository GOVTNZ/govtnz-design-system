"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const styled = __importStar(require("styled-components"));
const StyledInput = styled.input `font-family: Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
font-weight: 400;
font-size: 1rem;
line-height: 1.25;
box-sizing: border-box;
width: 100%;
height: 40px;
margin-top: 0;
padding: .5rem;
border: 1px solid #2a2a2a;
border-radius: 0;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
@media print{
font-family: sans-serif;;
}
@media (min-width: 40.0625em){
font-size: 1.1875rem;
line-height: 1.31579;;
}
@media print{
font-size: 14pt;
line-height: 1.15;;
}
:focus,:focus{
outline: 3px solid #ffbf47;
outline-offset: 0;
}
::-webkit-outer-spin-button,::-webkit-inner-spin-button{
margin: 0;
-webkit-appearance: none;
}
${props => props.hasError &&
    styled.css `
    border: 1px solid #b10e1e;
  `}
${props => props.width === "30" &&
    styled.css `
    max-width: 59ex;
  `}
${props => props.width === "20" &&
    styled.css `
    max-width: 41ex;
  `}
${props => props.width === "10" &&
    styled.css `
    max-width: 23ex;
  `}
${props => props.width === "5" &&
    styled.css `
    max-width: 10.8ex;
  `}
${props => props.width === "4" &&
    styled.css `
    max-width: 9ex;
  `}
${props => props.width === "3" &&
    styled.css `
    max-width: 7.2ex;
  `}
${props => props.width === "2" &&
    styled.css `
    max-width: 5.4ex;
  `}`;
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
    }
};
const Input = ({ width, hasError, fakeFocus, inputId, describedBy, name, disabled, readOnly, autoFocus, value, type, spellCheck, autoComplete, onChange }) => (React.createElement(StyledInput, { width: width, hasError: hasError, fakeFocus: fakeFocus, "aria-describedby": describedBy, id: inputId, name: name, type: constants.type[type], disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, spellCheck: spellCheck, autoComplete: constants.autoComplete[autoComplete], onChange: onChange }));
Input.props = [
    "width",
    "hasError",
    "fakeFocus",
    "inputId",
    "describedBy",
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
exports.default = Input;
//# sourceMappingURL=Input.js.map
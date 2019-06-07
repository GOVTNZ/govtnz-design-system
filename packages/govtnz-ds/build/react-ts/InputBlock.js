"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var constants = {
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
var InputBlock = function (_a) {
    var hasError = _a.hasError, inputId = _a.inputId, label = _a.label, hintId = _a.hintId, hint = _a.hint, errorId = _a.errorId, error = _a.error, width = _a.width, fakeFocus = _a.fakeFocus, name = _a.name, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, value = _a.value, type = _a.type, spellCheck = _a.spellCheck, autoComplete = _a.autoComplete, onChange = _a.onChange;
    return (React.createElement("div", { className: "g-inputBlock-form-group" + (hasError ? " g-inputBlock-form-group--error" : "") },
        React.createElement("label", { className: "g-inputBlock-label", htmlFor: inputId }, label !== undefined ? (label) : (React.createElement(React.Fragment, null, "Example text"))),
        React.createElement("div", { className: "g-inputBlock-hint", id: hintId }, hint !== undefined ? (hint) : (React.createElement(React.Fragment, null, "Example text"))),
        hasError !== undefined ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "g-inputBlock-error-message", id: errorId },
                React.createElement("span", { className: "g-inputBlock-visually-hidden" }, "Error: "),
                error !== undefined ? (error) : (React.createElement(React.Fragment, null, "Example text"))))) : (""),
        React.createElement("input", { "aria-describedby": hintId !== undefined || errorId !== undefined
                ? "" + (hintId ? hintId : "") + (errorId ? " " + errorId : "")
                : undefined, className: "g-inputBlock-input" + (constants.width[width] !== undefined ? " " + constants.width[width] : "") + (hasError ? " g-inputBlock-input--error" : "") + (fakeFocus ? " :focus" : ""), id: inputId, name: name, type: constants.type[type], disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, spellCheck: spellCheck, autoComplete: constants.autoComplete[autoComplete], onChange: onChange })));
};
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
exports.default = InputBlock;
//# sourceMappingURL=InputBlock.js.map
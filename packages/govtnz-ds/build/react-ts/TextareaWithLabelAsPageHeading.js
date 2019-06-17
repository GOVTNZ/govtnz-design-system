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
var TextareaWithLabelAsPageHeading = function (_a) {
    var textareaWithPageHeading = _a.textareaWithPageHeading, name = _a.name, disabled = _a.disabled, readOnly = _a.readOnly, rows = _a.rows, cols = _a.cols, autoFocus = _a.autoFocus, spellCheck = _a.spellCheck, autoComplete = _a.autoComplete, value = _a.value, onChange = _a.onChange;
    return (React.createElement("div", { className: "g-textareaWithLabelAsPageHeading-form-group" },
        React.createElement("h1", { className: "g-textareaWithLabelAsPageHeading-label-wrapper" },
            React.createElement("label", { className: "g-textareaWithLabelAsPageHeading-label", htmlFor: textareaWithPageHeading }, "Full address")),
        React.createElement("textarea", { className: "g-textareaWithLabelAsPageHeading-textarea", id: textareaWithPageHeading, name: name, rows: rows, disabled: disabled, readOnly: readOnly, cols: cols, autoFocus: autoFocus, spellCheck: spellCheck, autoComplete: constants.autoComplete[autoComplete], value: value, onChange: onChange })));
};
exports.default = TextareaWithLabelAsPageHeading;
//# sourceMappingURL=TextareaWithLabelAsPageHeading.js.map
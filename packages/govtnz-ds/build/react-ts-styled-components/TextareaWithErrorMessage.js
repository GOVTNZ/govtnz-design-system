"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled = __importStar(require("styled-components"));
var StyledDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 20px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  padding-left: 15px;\n  border-left: 5px solid #b10e1e;\n  padding: 0;\n  border: 0;\n  margin-bottom: 5px;\n"], ["\n  margin-bottom: 20px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  padding-left: 15px;\n  border-left: 5px solid #b10e1e;\n  padding: 0;\n  border: 0;\n  margin-bottom: 5px;\n"])));
var StyledLabel = styled.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 500;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #2a2a2a;\n  display: block;\n  margin-bottom: 5px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 500;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #2a2a2a;\n  display: block;\n  margin-bottom: 5px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n"])));
var StyledSpan = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  margin-bottom: 15px;\n  clear: both;\n  color: #b10e1e;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  margin-bottom: 15px;\n  clear: both;\n  color: #b10e1e;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n"])));
var StyledTextarea = styled.textarea(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-bottom: 5px;\n  padding: 3px;\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  min-height: 40px;\n  margin-bottom: 20px;\n  padding: 5px;\n  resize: vertical;\n  border: 2px solid #0b0c0c;\n  border-radius: 0;\n  -webkit-appearance: none;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.25;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  border: 4px solid #b10e1e;\n"], ["\n  margin-bottom: 5px;\n  padding: 3px;\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  min-height: 40px;\n  margin-bottom: 20px;\n  padding: 5px;\n  resize: vertical;\n  border: 2px solid #0b0c0c;\n  border-radius: 0;\n  -webkit-appearance: none;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.25;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  border: 4px solid #b10e1e;\n"])));
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
var TextareaWithErrorMessage = function (_a) {
    var noNiReason = _a.noNiReason, noNiReasonError = _a.noNiReasonError, name = _a.name, disabled = _a.disabled, readOnly = _a.readOnly, rows = _a.rows, cols = _a.cols, autoFocus = _a.autoFocus, spellCheck = _a.spellCheck, autoComplete = _a.autoComplete, onChange = _a.onChange;
    return (React.createElement(StyledDiv, null,
        React.createElement(StyledLabel, { htmlFor: noNiReason }, "Why can't you provide a National Insurance number?"),
        React.createElement(StyledSpan, { id: noNiReasonError }, "You must provide an explanation"),
        React.createElement(StyledTextarea, { "aria-describedby": noNiReasonError, id: noNiReason, name: name, rows: rows, disabled: disabled, readOnly: readOnly, cols: cols, autoFocus: autoFocus, spellCheck: spellCheck, autoComplete: constants.autoComplete[autoComplete], onChange: onChange })));
};
TextareaWithErrorMessage.props = [
    "noNiReason",
    "noNiReasonError",
    "name",
    "disabled",
    "readOnly",
    "rows",
    "cols",
    "autoFocus",
    "spellCheck",
    "autoComplete",
    "onChange"
];
exports.default = TextareaWithErrorMessage;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=TextareaWithErrorMessage.js.map
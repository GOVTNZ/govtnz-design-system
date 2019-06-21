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
var StyledInput = styled.input(templateObject_9 || (templateObject_9 = __makeTemplateObject(["font-family: Arial, sans-serif;\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nfont-weight: 400;\nfont-size: 1rem;\nline-height: 1.25;\nbox-sizing: border-box;\nwidth: 100%;\nheight: 40px;\nmargin-top: 0;\npadding: .5rem;\nborder: 1px solid #2a2a2a;\nborder-radius: 0;\n-webkit-appearance: none;\n-moz-appearance: none;\nappearance: none;\n@media print{\nfont-family: sans-serif;;\n}\n@media (min-width: 40.0625em){\nfont-size: 1.1875rem;\nline-height: 1.31579;;\n}\n@media print{\nfont-size: 14pt;\nline-height: 1.15;;\n}\n:focus,:focus{\noutline: 3px solid #ffbf47;\noutline-offset: 0;\n}\n::-webkit-outer-spin-button,::-webkit-inner-spin-button{\nmargin: 0;\n-webkit-appearance: none;\n}\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\nmargin-top: 0px;"], ["font-family: Arial, sans-serif;\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nfont-weight: 400;\nfont-size: 1rem;\nline-height: 1.25;\nbox-sizing: border-box;\nwidth: 100%;\nheight: 40px;\nmargin-top: 0;\npadding: .5rem;\nborder: 1px solid #2a2a2a;\nborder-radius: 0;\n-webkit-appearance: none;\n-moz-appearance: none;\nappearance: none;\n@media print{\nfont-family: sans-serif;;\n}\n@media (min-width: 40.0625em){\nfont-size: 1.1875rem;\nline-height: 1.31579;;\n}\n@media print{\nfont-size: 14pt;\nline-height: 1.15;;\n}\n:focus,:focus{\noutline: 3px solid #ffbf47;\noutline-offset: 0;\n}\n::-webkit-outer-spin-button,::-webkit-inner-spin-button{\nmargin: 0;\n-webkit-appearance: none;\n}\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "\nmargin-top: 0px;"])), function (props) {
    return props.error && styled.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border: 1px solid #b10e1e;\n  "], ["\n    border: 1px solid #b10e1e;\n  "])));
}, function (props) {
    return props.width === "30" && styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    max-width: 59ex;\n  "], ["\n    max-width: 59ex;\n  "])));
}, function (props) {
    return props.width === "20" && styled.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    max-width: 41ex;\n  "], ["\n    max-width: 41ex;\n  "])));
}, function (props) {
    return props.width === "10" && styled.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    max-width: 23ex;\n  "], ["\n    max-width: 23ex;\n  "])));
}, function (props) {
    return props.width === "5" && styled.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    max-width: 10.8ex;\n  "], ["\n    max-width: 10.8ex;\n  "])));
}, function (props) {
    return props.width === "4" && styled.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    max-width: 9ex;\n  "], ["\n    max-width: 9ex;\n  "])));
}, function (props) {
    return props.width === "3" && styled.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    max-width: 7.2ex;\n  "], ["\n    max-width: 7.2ex;\n  "])));
}, function (props) {
    return props.width === "2" && styled.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    max-width: 5.4ex;\n  "], ["\n    max-width: 5.4ex;\n  "])));
});
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
var Input = function (_a) {
    var width = _a.width, error = _a.error, fakeFocus = _a.fakeFocus, inputId = _a.inputId, describedBy = _a.describedBy, name = _a.name, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, value = _a.value, spellCheck = _a.spellCheck, maxLength = _a.maxLength, autoComplete = _a.autoComplete, onChange = _a.onChange;
    return (React.createElement(StyledInput, { width: width, error: error, fakeFocus: fakeFocus, "aria-describedby": describedBy, id: inputId, name: name, type: "text", disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, spellCheck: spellCheck, maxLength: maxLength, autoComplete: constants.autoComplete[autoComplete], onChange: onChange }));
};
exports.default = Input;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=Input.js.map
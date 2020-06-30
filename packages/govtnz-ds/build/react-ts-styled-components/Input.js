"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledInput = styled_components_1.default.input(templateObject_9 || (templateObject_9 = __makeTemplateObject(["font-family: g-theme-font-family;\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nfont-weight: 400;\nfont-size: 1rem;\nline-height: 1.25;\nbox-sizing: border-box;\nwidth: 100%;\nheight: 40px;\nmargin-top: 0;\npadding: 0.5rem;\nborder: 1px solid g-theme-form-border-color;\nborder-radius: 0;\n-webkit-appearance: none;\n-moz-appearance: none;\nappearance: none;\nbackground-color: g-theme-form-background-color;\n:-webkit-autofill,:-webkit-autofill:hover,:-webkit-autofill:focus,:valid,:invalid{\n-webkit-text-fill-color: g-theme-color !important;\nbackground-color: g-theme-form-background-color;\ncolor: g-theme-color;\nborder: 1px solid g-theme-form-border-color;\nbox-shadow: 0 0 0px 1000px g-theme-form-background-color inset;\n-webkit-box-shadow: 0 0 0px 1000px g-theme-form-background-color inset;\n}\n@media print{\nfont-family: sans-serif;;\n}\n@media (min-width: 40.0625em){\nfont-size: 1.1875rem;\nline-height: 1.31579;;\n}\n@media print{\nfont-size: 14pt;\nline-height: 1.15;;\n}\n:focus{\noutline: 3px solid g-theme-focus-ring-color;\noutline-offset: 0;\n}\n::-webkit-outer-spin-button,::-webkit-inner-spin-button{\nmargin: 0;\n-webkit-appearance: none;\n}\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\nmargin-top: 0px;"], ["font-family: g-theme-font-family;\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nfont-weight: 400;\nfont-size: 1rem;\nline-height: 1.25;\nbox-sizing: border-box;\nwidth: 100%;\nheight: 40px;\nmargin-top: 0;\npadding: 0.5rem;\nborder: 1px solid g-theme-form-border-color;\nborder-radius: 0;\n-webkit-appearance: none;\n-moz-appearance: none;\nappearance: none;\nbackground-color: g-theme-form-background-color;\n:-webkit-autofill,:-webkit-autofill:hover,:-webkit-autofill:focus,:valid,:invalid{\n-webkit-text-fill-color: g-theme-color !important;\nbackground-color: g-theme-form-background-color;\ncolor: g-theme-color;\nborder: 1px solid g-theme-form-border-color;\nbox-shadow: 0 0 0px 1000px g-theme-form-background-color inset;\n-webkit-box-shadow: 0 0 0px 1000px g-theme-form-background-color inset;\n}\n@media print{\nfont-family: sans-serif;;\n}\n@media (min-width: 40.0625em){\nfont-size: 1.1875rem;\nline-height: 1.31579;;\n}\n@media print{\nfont-size: 14pt;\nline-height: 1.15;;\n}\n:focus{\noutline: 3px solid g-theme-focus-ring-color;\noutline-offset: 0;\n}\n::-webkit-outer-spin-button,::-webkit-inner-spin-button{\nmargin: 0;\n-webkit-appearance: none;\n}\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "\nmargin-top: 0px;"])), function (props) {
    return props.error && styled_components_1.default.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border: 1px solid g-theme-error-border-color;\n  "], ["\n    border: 1px solid g-theme-error-border-color;\n  "])));
}, function (props) {
    return props.width === "30" && styled_components_1.default.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    max-width: 59ex;\n  "], ["\n    max-width: 59ex;\n  "])));
}, function (props) {
    return props.width === "20" && styled_components_1.default.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    max-width: 41ex;\n  "], ["\n    max-width: 41ex;\n  "])));
}, function (props) {
    return props.width === "10" && styled_components_1.default.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    max-width: 23ex;\n  "], ["\n    max-width: 23ex;\n  "])));
}, function (props) {
    return props.width === "5" && styled_components_1.default.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    max-width: 10.8ex;\n  "], ["\n    max-width: 10.8ex;\n  "])));
}, function (props) {
    return props.width === "4" && styled_components_1.default.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    max-width: 9ex;\n  "], ["\n    max-width: 9ex;\n  "])));
}, function (props) {
    return props.width === "3" && styled_components_1.default.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    max-width: 7.2ex;\n  "], ["\n    max-width: 7.2ex;\n  "])));
}, function (props) {
    return props.width === "2" && styled_components_1.default.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    max-width: 5.4ex;\n  "], ["\n    max-width: 5.4ex;\n  "])));
});
var Input = function (_a) {
    var width = _a.width, error = _a.error, id = _a.id, describedBy = _a.describedBy, required = _a.required, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, name = _a.name, value = _a.value, spellCheck = _a.spellCheck, maxLength = _a.maxLength, autoComplete = _a.autoComplete, onChange = _a.onChange, ref = _a.ref;
    return (react_1.default.createElement(StyledInput, { width: width, error: error, "aria-describedby": describedBy, id: id, name: name, type: "text", required: required, disabled: disabled !== undefined ? disabled.toString() === "true" : undefined, readOnly: readOnly, autoFocus: autoFocus, value: value, spellCheck: spellCheck, maxLength: maxLength, autoComplete: autoComplete, onChange: onChange, ref: ref }));
};
exports.default = Input;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=Input.js.map
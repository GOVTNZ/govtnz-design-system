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
var StyledTextarea = styled_components_1.default.textarea(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 5px;\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  min-height: 40px;\n  margin-bottom: 20px;\n  padding: 5px;\n  resize: vertical;\n  border: 1px solid g-theme-form-border-color;\n  border-radius: 0;\n  -webkit-appearance: none;\n  background-color: g-theme-form-background-color;\n  color: g-theme-form-color;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.25;\n  }\n  :focus {\n    outline: 3px solid g-theme-focus-ring-color;\n    outline-offset: 0;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  margin-top: 0px;\n"], ["\n  margin-bottom: 5px;\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  min-height: 40px;\n  margin-bottom: 20px;\n  padding: 5px;\n  resize: vertical;\n  border: 1px solid g-theme-form-border-color;\n  border-radius: 0;\n  -webkit-appearance: none;\n  background-color: g-theme-form-background-color;\n  color: g-theme-form-color;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.25;\n  }\n  :focus {\n    outline: 3px solid g-theme-focus-ring-color;\n    outline-offset: 0;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  margin-top: 0px;\n"])));
var Textarea = function (_a) {
    var id = _a.id, describedById = _a.describedById, name = _a.name, required = _a.required, disabled = _a.disabled, readOnly = _a.readOnly, rows = _a.rows, cols = _a.cols, autoFocus = _a.autoFocus, spellCheck = _a.spellCheck, autoComplete = _a.autoComplete, maxLength = _a.maxLength, value = _a.value, onChange = _a.onChange, ref = _a.ref;
    return (react_1.default.createElement(StyledTextarea, { "aria-describedby": describedById, id: id, name: name, rows: rows, required: required, disabled: disabled !== undefined ? disabled.toString() === "true" : undefined, readOnly: readOnly, cols: cols, autoFocus: autoFocus, spellCheck: spellCheck, autoComplete: autoComplete, maxLength: maxLength, value: value, onChange: onChange, ref: ref }));
};
exports.default = Textarea;
var templateObject_1;
//# sourceMappingURL=Textarea.js.map
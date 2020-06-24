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
var StyledInput = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  margin: 0;\n  opacity: 0;\n  background-color: g-theme-form-background-color;\n  :disabled {\n    cursor: default;\n  }\n  margin-top: 0px;\n"], ["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  margin: 0;\n  opacity: 0;\n  background-color: g-theme-form-background-color;\n  :disabled {\n    cursor: default;\n  }\n  margin-top: 0px;\n"])));
var Checkbox = function (_a) {
    var id = _a.id, hintId = _a.hintId, required = _a.required, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, name = _a.name, value = _a.value, checked = _a.checked, onChange = _a.onChange, ref = _a.ref;
    return (react_1.default.createElement(StyledInput, { "aria-describedby": hintId, id: id, type: "checkbox", required: required, disabled: disabled !== undefined ? disabled.toString() === "true" : undefined, readOnly: readOnly, autoFocus: autoFocus, name: name, value: value, checked: checked, onChange: onChange, ref: ref }));
};
exports.default = Checkbox;
var templateObject_1;
//# sourceMappingURL=Checkbox.js.map
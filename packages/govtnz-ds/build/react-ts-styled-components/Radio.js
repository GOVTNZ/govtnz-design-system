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
var StyledInput = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  margin: 0;\n  opacity: 0;\n  :disabled {\n    cursor: default;\n  }\n"], ["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  margin: 0;\n  opacity: 0;\n  :disabled {\n    cursor: default;\n  }\n"])));
var Radio = function (_a) {
    var fakeFocus = _a.fakeFocus, gov1 = _a.gov1, hintId = _a.hintId, name = _a.name, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, value = _a.value, checked = _a.checked, onChange = _a.onChange;
    return (React.createElement(StyledInput, { fakeFocus: fakeFocus, "aria-describedby": hintId, id: gov1, name: name, type: "radio", disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, checked: checked, onChange: onChange }));
};
exports.default = Radio;
var templateObject_1;
//# sourceMappingURL=Radio.js.map
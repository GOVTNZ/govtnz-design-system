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
var RadioBlock = function (_a) {
    var fakeFocus = _a.fakeFocus, radioId = _a.radioId, hintId = _a.hintId, name = _a.name, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, value = _a.value, checked = _a.checked, onChange = _a.onChange, label = _a.label;
    return (React.createElement("div", { className: "g-radios__item" },
        React.createElement("input", { "aria-describedby": hintId, className: "g-radios__input" + (fakeFocus ? " :focus" : ""), id: radioId, name: name, type: "radio", disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, checked: checked, onChange: onChange }),
        React.createElement("label", { className: "g-radios-label g-radios__label", htmlFor: radioId }, label !== undefined ? (label) : (React.createElement(React.Fragment, null, "Label text")))));
};
exports.default = RadioBlock;
//# sourceMappingURL=RadioBlock.js.map
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
var CheckboxBlock = function (_a) {
    var checkboxId = _a.checkboxId, hintId = _a.hintId, name = _a.name, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, value = _a.value, checked = _a.checked, onChange = _a.onChange, label = _a.label, hint = _a.hint;
    return (React.createElement("div", { className: "g-checkboxes__item" },
        React.createElement("input", { "aria-describedby": hintId, className: "g-checkboxes__input", id: checkboxId, type: "checkbox", name: name, disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, checked: checked, onChange: onChange }),
        React.createElement("label", { className: "g-checkboxBlock-label g-checkboxes__label", htmlFor: checkboxId }, label !== undefined ? (label) : (React.createElement(React.Fragment, null, "Label text"))),
        hintId !== undefined ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "g-checkboxBlock-hint g-checkboxes__hint", id: hintId }, hint !== undefined ? (hint) : (React.createElement(React.Fragment, null, "Hint text"))))) : ("")));
};
exports.default = CheckboxBlock;
//# sourceMappingURL=CheckboxBlock.js.map
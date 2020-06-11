"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CheckboxBlock = function (_a) {
    var errorId = _a.errorId, id = _a.id, hintId = _a.hintId, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, name = _a.name, value = _a.value, checked = _a.checked, onChange = _a.onChange, ref = _a.ref, label = _a.label, hint = _a.hint, error = _a.error;
    return (react_1.default.createElement("div", { className: "g-checkboxes__item" + (errorId ? " g-form-group--error" : "") },
        " ",
        react_1.default.createElement("input", { "aria-describedby": hintId, className: "g-checkboxes__input", id: id, type: "checkbox", disabled: disabled !== undefined ? disabled.toString() === "true" : undefined, readOnly: readOnly, autoFocus: autoFocus, name: name, value: value, checked: checked, onChange: onChange, ref: ref }),
        " ",
        react_1.default.createElement("label", { className: "g-checkboxes__label", htmlFor: id }, label !== undefined ? (label) : (react_1.default.createElement(react_1.default.Fragment, null, "Label text"))),
        " ",
        hintId !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
            " ",
            react_1.default.createElement("div", { className: "g-checkboxes__hint", id: hintId },
                " ",
                hint !== undefined ? (hint) : (react_1.default.createElement(react_1.default.Fragment, null, "Hint text")),
                " "),
            " ")) : (""),
        " ",
        errorId !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
            " ",
            react_1.default.createElement("div", { className: "g-error-message", id: errorId },
                " ",
                react_1.default.createElement("span", { className: "g-visually-hidden" }, " Error: "),
                " ",
                error !== undefined ? (error) : (react_1.default.createElement(react_1.default.Fragment, null, "Error text")),
                " "),
            " ")) : (""),
        " "));
};
exports.default = CheckboxBlock;
//# sourceMappingURL=CheckboxBlock.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var constants = {
    width: {
        "2": "g-inputBlock-input--width-2",
        "3": "g-inputBlock-input--width-3",
        "4": "g-inputBlock-input--width-4",
        "5": "g-inputBlock-input--width-5",
        "10": "g-inputBlock-input--width-10",
        "20": "g-inputBlock-input--width-20",
        "30": "g-inputBlock-input--width-30"
    }
};
var InputBlock = function (_a) {
    var errorId = _a.errorId, id = _a.id, label = _a.label, hint = _a.hint, hintId = _a.hintId, error = _a.error, width = _a.width, required = _a.required, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, name = _a.name, value = _a.value, min = _a.min, max = _a.max, type = _a.type, spellCheck = _a.spellCheck, maxLength = _a.maxLength, autoComplete = _a.autoComplete, onChange = _a.onChange, ref = _a.ref;
    return (react_1.default.createElement("div", { className: "g-inputBlock-form-group" + (errorId ? " g-inputBlock-form-group--error" : "") },
        react_1.default.createElement("label", { className: "g-inputBlock-label", htmlFor: id }, label !== undefined ? (label) : (react_1.default.createElement(react_1.default.Fragment, null, "Example text"))),
        hint !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "g-inputBlock-hint", id: hintId }, hint !== undefined ? (hint) : (react_1.default.createElement(react_1.default.Fragment, null, "Example text"))))) : (""),
        errorId !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "g-inputBlock-error-message", id: errorId },
                react_1.default.createElement("span", { className: "g-inputBlock-visually-hidden" }, "Error: "),
                error !== undefined ? (error) : (react_1.default.createElement(react_1.default.Fragment, null, "Example text"))))) : (""),
        react_1.default.createElement("input", { "aria-describedby": hintId !== undefined || errorId !== undefined
                ? "" + (hintId ? hintId : "") + (errorId ? " " + errorId : "")
                : undefined, className: "g-inputBlock-input" + (constants.width[width] !== undefined ? " " + constants.width[width] : "") + (error ? " g-inputBlock-input--error" : ""), id: id, name: name, required: required, disabled: disabled !== undefined ? disabled.toString() === "true" : undefined, readOnly: readOnly, autoFocus: autoFocus, value: value, min: min, max: max, type: type, spellCheck: spellCheck, maxLength: maxLength, autoComplete: autoComplete, onChange: onChange, ref: ref })));
};
exports.default = InputBlock;
//# sourceMappingURL=InputBlock.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var constants = {
    width: {
        "2": "g-textareaBlock-textarea--width-2",
        "3": "g-textareaBlock-textarea--width-3",
        "4": "g-textareaBlock-textarea--width-4",
        "5": "g-textareaBlock-textarea--width-5",
        "10": "g-textareaBlock-textarea--width-10",
        "20": "g-textareaBlock-textarea--width-20",
        "30": "g-textareaBlock-textarea--width-30"
    }
};
var TextareaBlock = function (_a) {
    var errorId = _a.errorId, id = _a.id, label = _a.label, hintId = _a.hintId, hint = _a.hint, error = _a.error, width = _a.width, name = _a.name, required = _a.required, disabled = _a.disabled, readOnly = _a.readOnly, rows = _a.rows, cols = _a.cols, autoFocus = _a.autoFocus, spellCheck = _a.spellCheck, autoComplete = _a.autoComplete, maxLength = _a.maxLength, value = _a.value, onChange = _a.onChange, ref = _a.ref;
    return (react_1.default.createElement("div", { className: "g-textareaBlock-form-group" + (errorId ? " g-textareaBlock-form-group--error" : "") },
        react_1.default.createElement("label", { className: "g-textareaBlock-label", htmlFor: id }, label !== undefined ? (label) : (react_1.default.createElement(react_1.default.Fragment, null, "Label text"))),
        hintId !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "g-textareaBlock-hint", id: hintId }, hint !== undefined ? (hint) : (react_1.default.createElement(react_1.default.Fragment, null, "Hint text"))))) : (""),
        errorId !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "g-textareaBlock-error-message", id: errorId },
                react_1.default.createElement("span", { className: "g-textareaBlock-visually-hidden" }, "Error:"),
                error !== undefined ? (error) : (react_1.default.createElement(react_1.default.Fragment, null, "Error text"))))) : (""),
        react_1.default.createElement("textarea", { "aria-describedby": hintId !== undefined || errorId !== undefined
                ? "" + (hintId ? hintId : "") + (errorId ? " " + errorId : "")
                : undefined, className: "g-textareaBlock-textarea" + (constants.width[width] !== undefined ? " " + constants.width[width] : ""), id: id, name: name, rows: rows, required: required, disabled: disabled !== undefined ? disabled.toString() === "true" : undefined, readOnly: readOnly, cols: cols, autoFocus: autoFocus, spellCheck: spellCheck, autoComplete: autoComplete, maxLength: maxLength, value: value, onChange: onChange, ref: ref })));
};
exports.default = TextareaBlock;
//# sourceMappingURL=TextareaBlock.js.map
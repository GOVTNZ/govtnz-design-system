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
    var error = _a.error, inputId = _a.inputId, label = _a.label, hint = _a.hint, hintId = _a.hintId, errorId = _a.errorId, width = _a.width, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, name = _a.name, value = _a.value, min = _a.min, max = _a.max, type = _a.type, spellCheck = _a.spellCheck, maxLength = _a.maxLength, autoComplete = _a.autoComplete, onChange = _a.onChange;
    return (React.createElement("div", { className: "g-inputBlock-form-group" + (error ? " g-inputBlock-form-group--error" : "") },
        React.createElement("label", { className: "g-inputBlock-label", htmlFor: inputId }, label !== undefined ? (label) : (React.createElement(React.Fragment, null, "Example text"))),
        hint !== undefined ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "g-inputBlock-hint", id: hintId }, hint !== undefined ? (hint) : (React.createElement(React.Fragment, null, "Example text"))))) : (""),
        errorId !== undefined ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "g-inputBlock-error-message", id: errorId },
                React.createElement("span", { className: "g-inputBlock-visually-hidden" }, "Error: "),
                error !== undefined ? (error) : (React.createElement(React.Fragment, null, "Example text"))))) : (""),
        React.createElement("input", { "aria-describedby": hintId !== undefined || errorId !== undefined
                ? "" + (hintId ? hintId : "") + (errorId ? " " + errorId : "")
                : undefined, className: "g-inputBlock-input" + (constants.width[width] !== undefined ? " " + constants.width[width] : "") + (error ? " g-inputBlock-input--error" : ""), id: inputId, name: name, disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, min: min, max: max, type: type, spellCheck: spellCheck, maxLength: maxLength, autoComplete: autoComplete, onChange: onChange })));
};
exports.default = InputBlock;
//# sourceMappingURL=InputBlock.js.map
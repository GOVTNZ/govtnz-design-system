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
var TextareaBlock = function (_a) {
    var errorId = _a.errorId, id = _a.id, label = _a.label, hintId = _a.hintId, hint = _a.hint, error = _a.error, name = _a.name, disabled = _a.disabled, readOnly = _a.readOnly, rows = _a.rows, cols = _a.cols, autoFocus = _a.autoFocus, spellCheck = _a.spellCheck, autoComplete = _a.autoComplete, maxLength = _a.maxLength, value = _a.value, onChange = _a.onChange;
    return (React.createElement("div", { className: "g-textareaBlock-form-group" + (errorId ? " g-textareaBlock-form-group--error" : "") },
        React.createElement("label", { className: "g-textareaBlock-label", htmlFor: id }, label !== undefined ? (label) : (React.createElement(React.Fragment, null, "Label text"))),
        hintId !== undefined ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "g-textareaBlock-hint", id: hintId }, hint !== undefined ? (hint) : (React.createElement(React.Fragment, null, "Hint text"))))) : (""),
        errorId !== undefined ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "g-textareaBlock-error-message", id: errorId },
                React.createElement("span", { className: "g-textareaBlock-visually-hidden" }, "Error:"),
                error !== undefined ? (error) : (React.createElement(React.Fragment, null, "Error text"))))) : (""),
        React.createElement("textarea", { "aria-describedby": hintId, className: "g-textareaBlock-textarea", id: id, name: name, rows: rows, disabled: disabled, readOnly: readOnly, cols: cols, autoFocus: autoFocus, spellCheck: spellCheck, autoComplete: autoComplete, maxLength: maxLength, value: value, onChange: onChange })));
};
exports.default = TextareaBlock;
//# sourceMappingURL=TextareaBlock.js.map
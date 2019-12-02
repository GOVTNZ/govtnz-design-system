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
var Textarea = function (_a) {
    var moreDetail = _a.moreDetail, moreDetailHint = _a.moreDetailHint, name = _a.name, disabled = _a.disabled, readOnly = _a.readOnly, rows = _a.rows, cols = _a.cols, autoFocus = _a.autoFocus, spellCheck = _a.spellCheck, autoComplete = _a.autoComplete, maxLength = _a.maxLength, value = _a.value, onChange = _a.onChange;
    return (React.createElement("div", { className: "g-textarea-form-group" },
        React.createElement("label", { className: "g-textarea-label", htmlFor: moreDetail }, "Can you provide more detail?"),
        React.createElement("span", { className: "g-textarea-hint", id: moreDetailHint }, "Don't include personal or financial information, eg your National Insurance number or credit card details."),
        React.createElement("textarea", { "aria-describedby": moreDetailHint, className: "g-textarea", id: moreDetail, name: name, rows: rows, disabled: disabled, readOnly: readOnly, cols: cols, autoFocus: autoFocus, spellCheck: spellCheck, autoComplete: autoComplete, maxLength: maxLength, value: value, onChange: onChange })));
};
exports.default = Textarea;
//# sourceMappingURL=Textarea.js.map
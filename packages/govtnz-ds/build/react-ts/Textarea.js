"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Textarea = function (_a) {
    var id = _a.id, describedById = _a.describedById, name = _a.name, required = _a.required, disabled = _a.disabled, readOnly = _a.readOnly, rows = _a.rows, cols = _a.cols, autoFocus = _a.autoFocus, spellCheck = _a.spellCheck, autoComplete = _a.autoComplete, maxLength = _a.maxLength, value = _a.value, onChange = _a.onChange, ref = _a.ref;
    return (react_1.default.createElement("textarea", { "aria-describedby": describedById, className: "g-textarea", id: id, name: name, rows: rows, required: required, disabled: disabled !== undefined ? disabled.toString() === "true" : undefined, readOnly: readOnly, cols: cols, autoFocus: autoFocus, spellCheck: spellCheck, autoComplete: autoComplete, maxLength: maxLength, value: value, onChange: onChange, ref: ref }));
};
exports.default = Textarea;
//# sourceMappingURL=Textarea.js.map
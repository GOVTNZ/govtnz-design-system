"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const TextareaWithErrorMessage = ({ noNiReason, noNiReasonError, onChange }) => (React.createElement("div", { className: "g-textareaWithErrorMessage-form-group g-textareaWithErrorMessage-form-group--error" },
    React.createElement("label", { className: "g-textareaWithErrorMessage-label", htmlFor: noNiReason }, "Why can't you provide a National Insurance number?"),
    React.createElement("span", { className: "g-textareaWithErrorMessage-error-message", id: noNiReasonError }, "You must provide an explanation"),
    React.createElement("textarea", { "aria-describedby": noNiReasonError, className: "g-textareaWithErrorMessage-textarea g-textareaWithErrorMessage-textarea--error", id: noNiReason, name: "no-ni-reason", rows: "5", onChange: onChange })));
TextareaWithErrorMessage.props = ["noNiReason", "noNiReasonError", "onChange"];
exports.default = TextareaWithErrorMessage;
//# sourceMappingURL=TextareaWithErrorMessage.js.map
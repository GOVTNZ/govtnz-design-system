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
const TextareaWithOptionalFormGroupClasses = ({ textareaWithPageHeading, onChange }) => (React.createElement("div", { className: "g-textareaWithOptionalFormGroupClasses-form-group extra-class" },
    React.createElement("label", { className: "g-textareaWithOptionalFormGroupClasses-label", htmlFor: textareaWithPageHeading }, "Full address"),
    React.createElement("textarea", { className: "g-textareaWithOptionalFormGroupClasses-textarea", id: textareaWithPageHeading, name: "address", rows: "5", onChange: onChange })));
TextareaWithOptionalFormGroupClasses.props = [
    "textareaWithPageHeading",
    "onChange"
];
exports.default = TextareaWithOptionalFormGroupClasses;
//# sourceMappingURL=TextareaWithOptionalFormGroupClasses.js.map
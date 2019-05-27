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
const TextareaWithAutocompleteAttribute = ({ textareaWithAutocompleteAttribute, onChange }) => (React.createElement("div", { className: "g-textareaWithAutocompleteAttribute-form-group" },
    React.createElement("label", { className: "g-textareaWithAutocompleteAttribute-label", htmlFor: textareaWithAutocompleteAttribute }, "Full address"),
    React.createElement("textarea", { autoComplete: "street-address", className: "g-textareaWithAutocompleteAttribute-textarea", id: textareaWithAutocompleteAttribute, name: "address", rows: "5", onChange: onChange })));
TextareaWithAutocompleteAttribute.props = [
    "textareaWithAutocompleteAttribute",
    "onChange"
];
exports.default = TextareaWithAutocompleteAttribute;
//# sourceMappingURL=TextareaWithAutocompleteAttribute.js.map
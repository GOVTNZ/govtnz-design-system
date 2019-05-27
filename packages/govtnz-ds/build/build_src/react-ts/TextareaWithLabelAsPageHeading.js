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
const TextareaWithLabelAsPageHeading = ({ textareaWithPageHeading, onChange }) => (React.createElement("div", { className: "g-textareaWithLabelAsPageHeading-form-group" },
    React.createElement("h1", { className: "g-textareaWithLabelAsPageHeading-label-wrapper" },
        React.createElement("label", { className: "g-textareaWithLabelAsPageHeading-label", htmlFor: textareaWithPageHeading }, "Full address")),
    React.createElement("textarea", { className: "g-textareaWithLabelAsPageHeading-textarea", id: textareaWithPageHeading, name: "address", rows: "5", onChange: onChange })));
TextareaWithLabelAsPageHeading.props = ["textareaWithPageHeading", "onChange"];
exports.default = TextareaWithLabelAsPageHeading;
//# sourceMappingURL=TextareaWithLabelAsPageHeading.js.map
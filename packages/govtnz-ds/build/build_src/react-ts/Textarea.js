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
const Textarea = ({ moreDetail, moreDetailHint, onChange }) => (React.createElement("div", { className: "g-textarea-form-group" },
    React.createElement("label", { className: "g-textarea-label", htmlFor: moreDetail }, "Can you provide more detail?"),
    React.createElement("span", { className: "g-textarea-hint", id: moreDetailHint }, "Don't include personal or financial information, eg your National Insurance number or credit card details."),
    React.createElement("textarea", { "aria-describedby": moreDetailHint, className: "g-textarea", id: moreDetail, name: "more-detail", rows: "5", onChange: onChange })));
Textarea.props = ["moreDetail", "moreDetailHint", "onChange"];
exports.default = Textarea;
//# sourceMappingURL=Textarea.js.map
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
const TextareaWithDefaultValue = ({ fullAddress, onChange }) => (React.createElement("div", { className: "g-textareaWithDefaultValue-form-group" },
    React.createElement("label", { className: "g-textareaWithDefaultValue-label", htmlFor: fullAddress }, "Full address"),
    React.createElement("textarea", { className: "g-textareaWithDefaultValue-textarea", id: fullAddress, name: "address", rows: "5", onChange: onChange }, "221B Baker Street London NW1 6XE")));
TextareaWithDefaultValue.props = ["fullAddress", "onChange"];
exports.default = TextareaWithDefaultValue;
//# sourceMappingURL=TextareaWithDefaultValue.js.map
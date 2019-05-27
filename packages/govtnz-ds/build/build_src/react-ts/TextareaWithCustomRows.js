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
const TextareaWithCustomRows = ({ fullAddress, onChange }) => (React.createElement("div", { className: "g-textareaWithCustomRows-form-group" },
    React.createElement("label", { className: "g-textareaWithCustomRows-label", htmlFor: fullAddress }, "Full address"),
    React.createElement("textarea", { className: "g-textareaWithCustomRows-textarea", id: fullAddress, name: "address", rows: "8", onChange: onChange })));
TextareaWithCustomRows.props = ["fullAddress", "onChange"];
exports.default = TextareaWithCustomRows;
//# sourceMappingURL=TextareaWithCustomRows.js.map
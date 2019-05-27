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
const SelectBlock = ({ selectId, label, hasError, name, multiple, onChange, children }) => (React.createElement("div", null,
    React.createElement("label", { className: "g-selectBlock-label", htmlFor: selectId }, label !== undefined ? (label) : (React.createElement(React.Fragment, null, "Example label text"))),
    React.createElement("select", { className: `g-selectBlock-select${hasError ? " g-selectBlock-select--error" : ""}`, id: selectId, name: name, multiple: multiple, onChange: onChange }, children !== undefined ? (children) : (React.createElement(React.Fragment, null,
        React.createElement("option", null, "Options"))))));
SelectBlock.props = [
    "selectId",
    "label",
    "hasError",
    "name",
    "multiple",
    "onChange",
    "children"
];
exports.default = SelectBlock;
//# sourceMappingURL=SelectBlock.js.map
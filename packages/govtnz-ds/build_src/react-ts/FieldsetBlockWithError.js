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
const FieldsetBlockWithError = ({ hintId, errorId, legend, hint, error, children }) => (React.createElement("div", { className: "g-fieldsetBlockWithError-form-group g-fieldsetBlockWithError-form-group--error" },
    React.createElement("fieldset", { "aria-describedby": hintId !== undefined || errorId !== undefined
            ? `${hintId ? hintId : ""}${errorId ? " " + errorId : ""}`
            : undefined, className: "g-fieldset" },
        React.createElement("legend", { className: "g-fieldset__legend" }, legend !== undefined ? (legend) : (React.createElement(React.Fragment, null, "Legend text"))),
        React.createElement("div", { className: "g-fieldsetBlockWithError-hint", id: hintId }, hint !== undefined ? hint : React.createElement(React.Fragment, null, "Hint text")),
        React.createElement("div", { className: "g-fieldsetBlockWithError-error-message", id: errorId }, error !== undefined ? (error) : (React.createElement(React.Fragment, null, "Error text"))),
        React.createElement("div", { className: "g-fieldsetBlockWithError-children" }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Fieldset contents"))))));
FieldsetBlockWithError.props = [
    "hintId",
    "errorId",
    "legend",
    "hint",
    "error",
    "children"
];
exports.default = FieldsetBlockWithError;
//# sourceMappingURL=FieldsetBlockWithError.js.map
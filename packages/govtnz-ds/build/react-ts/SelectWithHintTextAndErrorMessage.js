"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var SelectWithHintTextAndErrorMessage = function (_a) {
    var select2 = _a.select2, select2Hint = _a.select2Hint, select2Error = _a.select2Error, name = _a.name, multiple = _a.multiple, onChange = _a.onChange;
    return (React.createElement("div", { className: "g-selectWithHintTextAndErrorMessage-form-group g-selectWithHintTextAndErrorMessage-form-group--error" },
        React.createElement("label", { className: "g-selectWithHintTextAndErrorMessage-label", htmlFor: select2 }, "Label text goes here"),
        React.createElement("span", { className: "g-selectWithHintTextAndErrorMessage-hint", id: select2Hint }, "Hint text goes here"),
        React.createElement("span", { className: "g-selectWithHintTextAndErrorMessage-error-message", id: select2Error }, "Error message goes here"),
        React.createElement("select", { "aria-describedby": select2Hint !== undefined || select2Error !== undefined
                ? "" + (select2Hint ? select2Hint : "") + (select2Error ? " " + select2Error : "")
                : undefined, className: "g-selectWithHintTextAndErrorMessage-select g-selectWithHintTextAndErrorMessage-select--error", id: select2, name: name, multiple: multiple, onChange: onChange }, "Govt.NZ frontend option 1 Govt.NZ frontend option 2 Govt.NZ frontend option 3")));
};
SelectWithHintTextAndErrorMessage.props = [
    "select2",
    "select2Hint",
    "select2Error",
    "name",
    "multiple",
    "onChange"
];
exports.default = SelectWithHintTextAndErrorMessage;
//# sourceMappingURL=SelectWithHintTextAndErrorMessage.js.map
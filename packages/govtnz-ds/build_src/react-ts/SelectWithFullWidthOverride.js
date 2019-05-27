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
const SelectWithFullWidthOverride = ({ select1, name, multiple, onChange, selected, selected2, selected3 }) => (React.createElement("div", { className: "g-selectWithFullWidthOverride-form-group" },
    React.createElement("label", { className: "g-selectWithFullWidthOverride-label", htmlFor: select1 }, "Label text goes here"),
    React.createElement("select", { className: "g-selectWithFullWidthOverride-select g-!-width-full", id: select1, name: name, multiple: multiple, onChange: onChange },
        React.createElement("option", { value: "1", selected: selected }, "Govt.NZ frontend option 1"),
        React.createElement("option", { selected: selected2, value: "2" }, "Govt.NZ frontend option 2"),
        React.createElement("option", { disabled: false, value: "3", selected: selected3 }, "Govt.NZ frontend option 3"))));
SelectWithFullWidthOverride.props = [
    "select1",
    "name",
    "multiple",
    "onChange",
    "selected",
    "selected2",
    "selected3"
];
exports.default = SelectWithFullWidthOverride;
//# sourceMappingURL=SelectWithFullWidthOverride.js.map
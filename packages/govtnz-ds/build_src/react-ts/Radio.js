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
const Radio = ({ fakeFocus, gov1, hintId, name, disabled, readOnly, autoFocus, value, checked, onChange }) => (React.createElement("input", { "aria-describedby": hintId, className: `g-radios__input${fakeFocus ? " :focus" : ""}`, id: gov1, name: name, type: "radio", disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, checked: checked, onChange: onChange }));
Radio.props = [
    "fakeFocus",
    "gov1",
    "hintId",
    "name",
    "disabled",
    "readOnly",
    "autoFocus",
    "value",
    "checked",
    "onChange"
];
exports.default = Radio;
//# sourceMappingURL=Radio.js.map
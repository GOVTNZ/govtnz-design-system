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
const Checkbox = ({ fakeFocus, checkboxId, hintId, name, disabled, readOnly, autoFocus, value, checked, onChange }) => (React.createElement("input", { "aria-describedby": hintId, className: `g-checkboxes__input${fakeFocus ? " :focus" : ""}`, id: checkboxId, type: "checkbox", name: name, disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, checked: checked, onChange: onChange }));
Checkbox.props = [
    "fakeFocus",
    "checkboxId",
    "hintId",
    "name",
    "disabled",
    "readOnly",
    "autoFocus",
    "value",
    "checked",
    "onChange"
];
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map
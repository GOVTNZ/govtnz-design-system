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
var Checkbox = function (_a) {
    var id = _a.id, hintId = _a.hintId, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, name = _a.name, value = _a.value, checked = _a.checked, onChange = _a.onChange;
    return (React.createElement("input", { "aria-describedby": hintId, className: "g-checkboxes__input", id: id, type: "checkbox", disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, name: name, value: value, checked: checked, onChange: onChange }));
};
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map
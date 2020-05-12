"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Radio = function (_a) {
    var id = _a.id, hintId = _a.hintId, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, name = _a.name, value = _a.value, checked = _a.checked, onChange = _a.onChange, ref = _a.ref;
    return (react_1.default.createElement("input", { "aria-describedby": hintId, className: "g-radios__input", id: id, name: name, type: "radio", disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, checked: checked, onChange: onChange, ref: ref }));
};
exports.default = Radio;
//# sourceMappingURL=Radio.js.map
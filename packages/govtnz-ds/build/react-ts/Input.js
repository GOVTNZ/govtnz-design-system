"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var constants = {
    width: {
        "2": "g-input--width-2",
        "3": "g-input--width-3",
        "4": "g-input--width-4",
        "5": "g-input--width-5",
        "10": "g-input--width-10",
        "20": "g-input--width-20",
        "30": "g-input--width-30"
    }
};
var Input = function (_a) {
    var width = _a.width, error = _a.error, id = _a.id, describedBy = _a.describedBy, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, name = _a.name, value = _a.value, spellCheck = _a.spellCheck, maxLength = _a.maxLength, autoComplete = _a.autoComplete, onChange = _a.onChange, ref = _a.ref;
    return (react_1.default.createElement("input", { "aria-describedby": describedBy, className: "g-input" + (constants.width[width] !== undefined ? " " + constants.width[width] : "") + (error ? " g-input--error" : ""), id: id, name: name, type: "text", disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, spellCheck: spellCheck, maxLength: maxLength, autoComplete: autoComplete, onChange: onChange, ref: ref }));
};
exports.default = Input;
//# sourceMappingURL=Input.js.map
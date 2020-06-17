"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DateInput = function (_a) {
    var errorId = _a.errorId, hintId = _a.hintId, label = _a.label, hint = _a.hint, error = _a.error, id = _a.id, dayId = _a.dayId, required = _a.required, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, dayName = _a.dayName, value = _a.value, spellCheck = _a.spellCheck, autoComplete = _a.autoComplete, onChange = _a.onChange, ref = _a.ref, monthId = _a.monthId, yearName = _a.yearName, value2 = _a.value2, onChange2 = _a.onChange2, ref2 = _a.ref2, yearId = _a.yearId, value3 = _a.value3, onChange3 = _a.onChange3, ref3 = _a.ref3;
    return (react_1.default.createElement("div", { className: "g-dateInput-form-group" + (errorId ? " g-dateInput-form-group--error" : "") },
        react_1.default.createElement("fieldset", { "aria-describedby": hintId !== undefined || errorId !== undefined
                ? "" + (hintId ? hintId : "") + (errorId ? " " + errorId : "")
                : undefined, className: "g-dateInput-fieldset", role: "group" },
            react_1.default.createElement("legend", { className: "g-dateInput-fieldset__legend" }, label !== undefined ? (label) : (react_1.default.createElement(react_1.default.Fragment, null, "Example label"))),
            react_1.default.createElement("span", { className: "g-dateInput-hint", id: hintId }, hint !== undefined ? (hint) : (react_1.default.createElement(react_1.default.Fragment, null, "Example hint"))),
            errorId !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("span", { className: "g-dateInput-error-message", id: errorId },
                    react_1.default.createElement("span", { className: "g-dateInput-visually-hidden" }, "Error: "),
                    error !== undefined ? (error) : (react_1.default.createElement(react_1.default.Fragment, null, "Example error"))))) : (""),
            react_1.default.createElement("div", { className: "g-dateInput", id: id },
                react_1.default.createElement("div", { className: "g-dateInput__item" },
                    react_1.default.createElement("div", { className: "g-dateInput-form-group" },
                        react_1.default.createElement("label", { className: "g-dateInput-label g-dateInput__label", htmlFor: dayId }, "Day"),
                        react_1.default.createElement("input", { className: "g-dateInput-input g-dateInput__input g-dateInput-input--width-2" + (error ? " g-dateInput-input--error" : ""), id: dayId, maxLength: 2, name: dayName, pattern: "[0-9]*", type: "text", value: value, required: required, disabled: disabled !== undefined
                                ? disabled.toString() === "true"
                                : undefined, readOnly: readOnly, autoFocus: autoFocus, spellCheck: spellCheck, autoComplete: autoComplete, onChange: onChange, ref: ref }))),
                react_1.default.createElement("div", { className: "g-dateInput__item" },
                    react_1.default.createElement("div", { className: "g-dateInput-form-group" },
                        react_1.default.createElement("label", { className: "g-dateInput-label g-dateInput__label", htmlFor: monthId }, "Month"),
                        react_1.default.createElement("input", { className: "g-dateInput-input g-dateInput__input g-dateInput-input--width-2" + (error ? " g-dateInput-input--error" : ""), id: monthId, maxLength: 2, name: yearName, pattern: "[0-9]*", type: "text", value: value2, required: required, disabled: disabled !== undefined
                                ? disabled.toString() === "true"
                                : undefined, readOnly: readOnly, autoFocus: autoFocus, spellCheck: spellCheck, autoComplete: autoComplete, onChange: onChange2, ref: ref2 }))),
                react_1.default.createElement("div", { className: "g-dateInput__item" },
                    react_1.default.createElement("div", { className: "g-dateInput-form-group" },
                        react_1.default.createElement("label", { className: "g-dateInput-label g-dateInput__label", htmlFor: yearId }, "Year"),
                        react_1.default.createElement("input", { className: "g-dateInput-input g-dateInput__input g-dateInput-input--width-4" + (error ? " g-dateInput-input--error" : ""), id: yearId, maxLength: 4, name: yearName, pattern: "[0-9]*", type: "text", value: value3, required: required, disabled: disabled !== undefined
                                ? disabled.toString() === "true"
                                : undefined, readOnly: readOnly, autoFocus: autoFocus, spellCheck: spellCheck, autoComplete: autoComplete, onChange: onChange3, ref: ref3 })))))));
};
exports.default = DateInput;
//# sourceMappingURL=DateInput.js.map
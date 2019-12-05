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
var DateInput = function (_a) {
    var error = _a.error, hintId = _a.hintId, errorId = _a.errorId, label = _a.label, hint = _a.hint, id = _a.id, dayId = _a.dayId, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, dayName = _a.dayName, value = _a.value, spellCheck = _a.spellCheck, autoComplete = _a.autoComplete, onChange = _a.onChange, monthId = _a.monthId, yearName = _a.yearName, yearId = _a.yearId;
    return (React.createElement("div", { className: "g-dateInput-form-group" + (error ? " g-dateInput-form-group--error" : "") },
        React.createElement("fieldset", { "aria-describedby": hintId !== undefined || errorId !== undefined
                ? "" + (hintId ? hintId : "") + (errorId ? " " + errorId : "")
                : undefined, className: "g-fieldset", role: "group" },
            React.createElement("legend", { className: "g-fieldset__legend g-fieldset__legend--xl" }, label !== undefined ? (label) : (React.createElement(React.Fragment, null, "Example label"))),
            React.createElement("span", { className: "g-dateInput-hint", id: hintId }, hint !== undefined ? (hint) : (React.createElement(React.Fragment, null, "Example hint"))),
            error !== undefined ? (React.createElement(React.Fragment, null,
                React.createElement("span", { className: "g-dateInput-error-message", id: errorId },
                    React.createElement("span", { className: "g-dateInput-visually-hidden" }, "Error: "),
                    error !== undefined ? (error) : (React.createElement(React.Fragment, null, "Example error"))))) : (""),
            React.createElement("div", { className: "g-date-input", id: id },
                React.createElement("div", { className: "g-date-input__item" },
                    React.createElement("div", { className: "g-dateInput-form-group" },
                        React.createElement("label", { className: "g-dateInput-label g-date-input__label", htmlFor: dayId }, "Day"),
                        React.createElement("input", { className: "g-dateInput-input g-date-input__input g-dateInput-input--width-2" + (error ? " g-dateInput-input--error" : ""), id: dayId, maxLength: 2, name: dayName, pattern: "[0-9]*", type: "text", disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, spellCheck: spellCheck, autoComplete: autoComplete, onChange: onChange }))),
                React.createElement("div", { className: "g-date-input__item" },
                    React.createElement("div", { className: "g-dateInput-form-group" },
                        React.createElement("label", { className: "g-dateInput-label g-date-input__label", htmlFor: monthId }, "Month"),
                        React.createElement("input", { className: "g-dateInput-input g-date-input__input g-dateInput-input--width-2" + (error ? " g-dateInput-input--error" : ""), id: monthId, maxLength: 2, name: yearName, pattern: "[0-9]*", type: "text", disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, spellCheck: spellCheck, autoComplete: autoComplete, onChange: onChange }))),
                React.createElement("div", { className: "g-date-input__item" },
                    React.createElement("div", { className: "g-dateInput-form-group" },
                        React.createElement("label", { className: "g-dateInput-label g-date-input__label", htmlFor: yearId }, "Year"),
                        React.createElement("input", { className: "g-dateInput-input g-date-input__input g-dateInput-input--width-4" + (error ? " g-dateInput-input--error" : ""), id: yearId, maxLength: 4, name: yearName, pattern: "[0-9]*", type: "text", disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, spellCheck: spellCheck, autoComplete: autoComplete, onChange: onChange })))))));
};
exports.default = DateInput;
//# sourceMappingURL=DateInput.js.map
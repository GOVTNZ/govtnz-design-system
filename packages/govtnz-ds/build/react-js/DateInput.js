"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var DateInput = function DateInput(_ref) {
  var error = _ref.error,
      hintId = _ref.hintId,
      errorId = _ref.errorId,
      label = _ref.label,
      hint = _ref.hint,
      id = _ref.id,
      dayId = _ref.dayId,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      dayName = _ref.dayName,
      value = _ref.value,
      spellCheck = _ref.spellCheck,
      autoComplete = _ref.autoComplete,
      onChange = _ref.onChange,
      monthId = _ref.monthId,
      yearName = _ref.yearName,
      yearId = _ref.yearId;
  return _react["default"].createElement("div", {
    className: "g-dateInput-form-group".concat(error ? " g-dateInput-form-group--error" : "")
  }, _react["default"].createElement("fieldset", {
    "aria-describedby": hintId !== undefined || errorId !== undefined ? "".concat(hintId ? hintId : "").concat(errorId ? " " + errorId : "") : undefined,
    className: "g-fieldset",
    role: "group"
  }, _react["default"].createElement("legend", {
    className: "g-fieldset__legend g-fieldset__legend--xl"
  }, label !== undefined ? label : _react["default"].createElement(_react["default"].Fragment, null, "Example label")), _react["default"].createElement("span", {
    className: "g-dateInput-hint",
    id: hintId
  }, hint !== undefined ? hint : _react["default"].createElement(_react["default"].Fragment, null, "Example hint")), error !== undefined ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("span", {
    className: "g-dateInput-error-message",
    id: errorId
  }, _react["default"].createElement("span", {
    className: "g-dateInput-visually-hidden"
  }, "Error: "), error !== undefined ? error : _react["default"].createElement(_react["default"].Fragment, null, "Example error"))) : "", _react["default"].createElement("div", {
    className: "g-date-input",
    id: id
  }, _react["default"].createElement("div", {
    className: "g-date-input__item"
  }, _react["default"].createElement("div", {
    className: "g-dateInput-form-group"
  }, _react["default"].createElement("label", {
    className: "g-dateInput-label g-date-input__label",
    htmlFor: dayId
  }, "Day"), _react["default"].createElement("input", {
    className: "g-dateInput-input g-date-input__input g-dateInput-input--width-2".concat(error ? " g-dateInput-input--error" : ""),
    id: dayId,
    maxLength: 2,
    name: dayName,
    pattern: "[0-9]*",
    type: "text",
    disabled: disabled,
    readOnly: readOnly,
    autoFocus: autoFocus,
    value: value,
    spellCheck: spellCheck,
    autoComplete: autoComplete,
    onChange: onChange
  }))), _react["default"].createElement("div", {
    className: "g-date-input__item"
  }, _react["default"].createElement("div", {
    className: "g-dateInput-form-group"
  }, _react["default"].createElement("label", {
    className: "g-dateInput-label g-date-input__label",
    htmlFor: monthId
  }, "Month"), _react["default"].createElement("input", {
    className: "g-dateInput-input g-date-input__input g-dateInput-input--width-2".concat(error ? " g-dateInput-input--error" : ""),
    id: monthId,
    maxLength: 2,
    name: yearName,
    pattern: "[0-9]*",
    type: "text",
    disabled: disabled,
    readOnly: readOnly,
    autoFocus: autoFocus,
    value: value,
    spellCheck: spellCheck,
    autoComplete: autoComplete,
    onChange: onChange
  }))), _react["default"].createElement("div", {
    className: "g-date-input__item"
  }, _react["default"].createElement("div", {
    className: "g-dateInput-form-group"
  }, _react["default"].createElement("label", {
    className: "g-dateInput-label g-date-input__label",
    htmlFor: yearId
  }, "Year"), _react["default"].createElement("input", {
    className: "g-dateInput-input g-date-input__input g-dateInput-input--width-4".concat(error ? " g-dateInput-input--error" : ""),
    id: yearId,
    maxLength: 4,
    name: yearName,
    pattern: "[0-9]*",
    type: "text",
    disabled: disabled,
    readOnly: readOnly,
    autoFocus: autoFocus,
    value: value,
    spellCheck: spellCheck,
    autoComplete: autoComplete,
    onChange: onChange
  }))))));
};

var _default = DateInput;
exports["default"] = _default;
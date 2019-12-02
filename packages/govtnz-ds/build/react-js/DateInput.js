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
      name = _ref.name,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      value = _ref.value,
      spellCheck = _ref.spellCheck,
      autoComplete = _ref.autoComplete,
      onChange = _ref.onChange,
      monthId = _ref.monthId,
      name2 = _ref.name2,
      disabled2 = _ref.disabled2,
      readOnly2 = _ref.readOnly2,
      autoFocus2 = _ref.autoFocus2,
      value2 = _ref.value2,
      spellCheck2 = _ref.spellCheck2,
      autoComplete2 = _ref.autoComplete2,
      onChange2 = _ref.onChange2,
      yearId = _ref.yearId,
      name3 = _ref.name3,
      disabled3 = _ref.disabled3,
      readOnly3 = _ref.readOnly3,
      autoFocus3 = _ref.autoFocus3,
      value3 = _ref.value3,
      spellCheck3 = _ref.spellCheck3,
      autoComplete3 = _ref.autoComplete3,
      onChange3 = _ref.onChange3;
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
    name: name,
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
    name: name2,
    pattern: "[0-9]*",
    type: "text",
    disabled: disabled2,
    readOnly: readOnly2,
    autoFocus: autoFocus2,
    value: value2,
    spellCheck: spellCheck2,
    autoComplete: autoComplete2,
    onChange: onChange2
  }))), _react["default"].createElement("div", {
    className: "g-date-input__item"
  }, _react["default"].createElement("div", {
    className: "g-dateInput-form-group"
  }, _react["default"].createElement("label", {
    className: "g-dateInput-label govuk-date-input__label",
    htmlFor: yearId
  }, "Year"), _react["default"].createElement("input", {
    className: "g-dateInput-input g-date-input__input g-dateInput-input--width-4".concat(error ? " g-dateInput-input--error" : ""),
    id: yearId,
    maxLength: 4,
    name: name3,
    pattern: "[0-9]*",
    type: "text",
    disabled: disabled3,
    readOnly: readOnly3,
    autoFocus: autoFocus3,
    value: value3,
    spellCheck: spellCheck3,
    autoComplete: autoComplete3,
    onChange: onChange3
  }))))));
};

var _default = DateInput;
exports["default"] = _default;
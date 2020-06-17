"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var DateInput = function DateInput(_ref) {
  var errorId = _ref.errorId,
      hintId = _ref.hintId,
      label = _ref.label,
      hint = _ref.hint,
      error = _ref.error,
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
      ref = _ref.ref,
      monthId = _ref.monthId,
      yearName = _ref.yearName,
      value2 = _ref.value2,
      onChange2 = _ref.onChange2,
      ref2 = _ref.ref2,
      yearId = _ref.yearId,
      value3 = _ref.value3,
      onChange3 = _ref.onChange3,
      ref3 = _ref.ref3;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-dateInput-form-group".concat(errorId ? " g-dateInput-form-group--error" : "")
  }, /*#__PURE__*/_react["default"].createElement("fieldset", {
    "aria-describedby": hintId !== undefined || errorId !== undefined ? "".concat(hintId ? hintId : "").concat(errorId ? " " + errorId : "") : undefined,
    className: "g-dateInput-fieldset",
    role: "group"
  }, /*#__PURE__*/_react["default"].createElement("legend", {
    className: "g-dateInput-fieldset__legend"
  }, label !== undefined ? label : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Example label")), /*#__PURE__*/_react["default"].createElement("span", {
    className: "g-dateInput-hint",
    id: hintId
  }, hint !== undefined ? hint : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Example hint")), errorId !== undefined ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "g-dateInput-error-message",
    id: errorId
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "g-dateInput-visually-hidden"
  }, "Error: "), error !== undefined ? error : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Example error"))) : "", /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-dateInput",
    id: id
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-dateInput__item"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-dateInput-form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "g-dateInput-label g-dateInput__label",
    htmlFor: dayId
  }, "Day"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "g-dateInput-input g-dateInput__input g-dateInput-input--width-2".concat(error ? " g-dateInput-input--error" : ""),
    id: dayId,
    maxLength: 2,
    name: dayName,
    pattern: "[0-9]*",
    type: "text",
    value: value,
    disabled: disabled !== undefined ? disabled.toString() === "true" : undefined,
    readOnly: readOnly,
    autoFocus: autoFocus,
    spellCheck: spellCheck,
    autoComplete: autoComplete,
    onChange: onChange,
    ref: ref
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-dateInput__item"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-dateInput-form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "g-dateInput-label g-dateInput__label",
    htmlFor: monthId
  }, "Month"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "g-dateInput-input g-dateInput__input g-dateInput-input--width-2".concat(error ? " g-dateInput-input--error" : ""),
    id: monthId,
    maxLength: 2,
    name: yearName,
    pattern: "[0-9]*",
    type: "text",
    value: value2,
    disabled: disabled !== undefined ? disabled.toString() === "true" : undefined,
    readOnly: readOnly,
    autoFocus: autoFocus,
    spellCheck: spellCheck,
    autoComplete: autoComplete,
    onChange: onChange2,
    ref: ref2
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-dateInput__item"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-dateInput-form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "g-dateInput-label g-dateInput__label",
    htmlFor: yearId
  }, "Year"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "g-dateInput-input g-dateInput__input g-dateInput-input--width-4".concat(error ? " g-dateInput-input--error" : ""),
    id: yearId,
    maxLength: 4,
    name: yearName,
    pattern: "[0-9]*",
    type: "text",
    value: value3,
    disabled: disabled !== undefined ? disabled.toString() === "true" : undefined,
    readOnly: readOnly,
    autoFocus: autoFocus,
    spellCheck: spellCheck,
    autoComplete: autoComplete,
    onChange: onChange3,
    ref: ref3
  }))))));
};

var _default = DateInput;
exports["default"] = _default;
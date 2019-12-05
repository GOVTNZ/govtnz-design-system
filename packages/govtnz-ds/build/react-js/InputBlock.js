"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  width: {
    "2": "g-inputBlock-input--width-2",
    "3": "g-inputBlock-input--width-3",
    "4": "g-inputBlock-input--width-4",
    "5": "g-inputBlock-input--width-5",
    "10": "g-inputBlock-input--width-10",
    "20": "g-inputBlock-input--width-20",
    "30": "g-inputBlock-input--width-30"
  }
};

var InputBlock = function InputBlock(_ref) {
  var error = _ref.error,
      inputId = _ref.inputId,
      label = _ref.label,
      hint = _ref.hint,
      hintId = _ref.hintId,
      errorId = _ref.errorId,
      width = _ref.width,
      name = _ref.name,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      value = _ref.value,
      min = _ref.min,
      max = _ref.max,
      type = _ref.type,
      spellCheck = _ref.spellCheck,
      maxLength = _ref.maxLength,
      autoComplete = _ref.autoComplete,
      onChange = _ref.onChange;
  return _react["default"].createElement("div", {
    className: "g-inputBlock-form-group".concat(error ? " g-inputBlock-form-group--error" : "")
  }, _react["default"].createElement("label", {
    className: "g-inputBlock-label",
    htmlFor: inputId
  }, label !== undefined ? label : _react["default"].createElement(_react["default"].Fragment, null, "Example text")), hint !== undefined ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "g-inputBlock-hint",
    id: hintId
  }, hint !== undefined ? hint : _react["default"].createElement(_react["default"].Fragment, null, "Example text"))) : "", errorId !== undefined ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "g-inputBlock-error-message",
    id: errorId
  }, _react["default"].createElement("span", {
    className: "g-inputBlock-visually-hidden"
  }, "Error: "), error !== undefined ? error : _react["default"].createElement(_react["default"].Fragment, null, "Example text"))) : "", _react["default"].createElement("input", {
    "aria-describedby": hintId !== undefined || errorId !== undefined ? "".concat(hintId ? hintId : "").concat(errorId ? " " + errorId : "") : undefined,
    className: "g-inputBlock-input".concat(constants.width[width] !== undefined ? " " + constants.width[width] : "").concat(error ? " g-inputBlock-input--error" : ""),
    id: inputId,
    name: name,
    disabled: disabled,
    readOnly: readOnly,
    autoFocus: autoFocus,
    value: value,
    min: min,
    max: max,
    type: type,
    spellCheck: spellCheck,
    maxLength: maxLength,
    autoComplete: autoComplete,
    onChange: onChange
  }));
};

var _default = InputBlock;
exports["default"] = _default;
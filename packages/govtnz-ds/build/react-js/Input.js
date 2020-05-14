"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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

var Input = function Input(_ref) {
  var width = _ref.width,
      error = _ref.error,
      id = _ref.id,
      describedBy = _ref.describedBy,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      name = _ref.name,
      value = _ref.value,
      spellCheck = _ref.spellCheck,
      maxLength = _ref.maxLength,
      autoComplete = _ref.autoComplete,
      onChange = _ref.onChange,
      ref = _ref.ref;
  return /*#__PURE__*/_react["default"].createElement("input", {
    "aria-describedby": describedBy,
    className: "g-input".concat(constants.width[width] !== undefined ? " " + constants.width[width] : "").concat(error ? " g-input--error" : ""),
    id: id,
    name: name,
    type: "text",
    disabled: disabled !== undefined && disabled.toString() === "true",
    readOnly: readOnly,
    autoFocus: autoFocus,
    value: value,
    spellCheck: spellCheck,
    maxLength: maxLength,
    autoComplete: autoComplete,
    onChange: onChange,
    ref: ref
  });
};

var _default = Input;
exports["default"] = _default;
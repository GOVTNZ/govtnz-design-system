"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var RadioBlock = function RadioBlock(_ref) {
  var radioId = _ref.radioId,
      hintId = _ref.hintId,
      name = _ref.name,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      value = _ref.value,
      checked = _ref.checked,
      onChange = _ref.onChange,
      label = _ref.label;
  return _react["default"].createElement("div", {
    className: "g-radios__item"
  }, _react["default"].createElement("input", {
    "aria-describedby": hintId,
    className: "g-radios__input",
    id: radioId,
    name: name,
    type: "radio",
    disabled: disabled,
    readOnly: readOnly,
    autoFocus: autoFocus,
    value: value,
    checked: checked,
    onChange: onChange
  }), _react["default"].createElement("label", {
    className: "g-radioBlock-label g-radios__label",
    htmlFor: radioId
  }, label !== undefined ? label : _react["default"].createElement(_react["default"].Fragment, null, "Label text")));
};

var _default = RadioBlock;
exports["default"] = _default;
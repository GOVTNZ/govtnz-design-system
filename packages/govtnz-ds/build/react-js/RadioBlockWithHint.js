"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var RadioBlockWithHint = function RadioBlockWithHint(_ref) {
  var fakeFocus = _ref.fakeFocus,
      radioId = _ref.radioId,
      hintId = _ref.hintId,
      name = _ref.name,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      value = _ref.value,
      checked = _ref.checked,
      onChange = _ref.onChange,
      label = _ref.label,
      hint = _ref.hint;
  return _react["default"].createElement("div", {
    className: "g-radios__item"
  }, _react["default"].createElement("input", {
    "aria-describedby": hintId,
    className: "g-radios__input".concat(fakeFocus ? " :focus" : ""),
    id: radioId,
    type: "radio",
    name: name,
    disabled: disabled,
    readOnly: readOnly,
    autoFocus: autoFocus,
    value: value,
    checked: checked,
    onChange: onChange
  }), _react["default"].createElement("label", {
    className: "g-radios-label g-radios__label",
    htmlFor: radioId
  }, label !== undefined ? label : _react["default"].createElement(_react["default"].Fragment, null, "Label text")), _react["default"].createElement("div", {
    className: "g-radios-hint g-radios__hint",
    id: hintId
  }, hint !== undefined ? hint : _react["default"].createElement(_react["default"].Fragment, null, "Hint text")));
};

RadioBlockWithHint.props = ["fakeFocus", "radioId", "hintId", "name", "disabled", "readOnly", "autoFocus", "value", "checked", "onChange", "label", "hint"];
var _default = RadioBlockWithHint;
exports["default"] = _default;
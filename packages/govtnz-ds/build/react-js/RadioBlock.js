"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var RadioBlock = function RadioBlock(_ref) {
  var id = _ref.id,
      hintId = _ref.hintId,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      name = _ref.name,
      value = _ref.value,
      checked = _ref.checked,
      onChange = _ref.onChange,
      label = _ref.label,
      hint = _ref.hint;
  return _react["default"].createElement("div", {
    className: "g-radios__item"
  }, _react["default"].createElement("input", {
    "aria-describedby": hintId,
    className: "g-radios__input",
    id: id,
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
    htmlFor: id
  }, label !== undefined ? label : _react["default"].createElement(_react["default"].Fragment, null, "Label text")), hintId !== undefined ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "g-radioBlock-hint g-checkboxes__hint",
    id: hintId
  }, hint !== undefined ? hint : _react["default"].createElement(_react["default"].Fragment, null, "Hint text"))) : "");
};

var _default = RadioBlock;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var RadioBlock = function RadioBlock(_ref) {
  var errorId = _ref.errorId,
      id = _ref.id,
      hintId = _ref.hintId,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      name = _ref.name,
      value = _ref.value,
      checked = _ref.checked,
      onChange = _ref.onChange,
      ref = _ref.ref,
      label = _ref.label,
      hint = _ref.hint;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-radios__item".concat(errorId ? " g-radioBlock-form-group--error" : "")
  }, /*#__PURE__*/_react["default"].createElement("input", {
    "aria-describedby": hintId,
    className: "g-radios__input",
    id: id,
    name: name,
    type: "radio",
    disabled: disabled !== undefined && disabled.toString() === "true",
    readOnly: readOnly,
    autoFocus: autoFocus,
    value: value,
    checked: checked,
    onChange: onChange,
    ref: ref
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "g-radioBlock-label g-radios__label",
    htmlFor: id
  }, label !== undefined ? label : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Label text")), hintId !== undefined ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-radioBlock-hint g-checkboxes__hint",
    id: hintId
  }, hint !== undefined ? hint : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Hint text"))) : "");
};

var _default = RadioBlock;
exports["default"] = _default;
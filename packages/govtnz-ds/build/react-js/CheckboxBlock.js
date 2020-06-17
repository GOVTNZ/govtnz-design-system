"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var CheckboxBlock = function CheckboxBlock(_ref) {
  var errorId = _ref.errorId,
      id = _ref.id,
      hintId = _ref.hintId,
      required = _ref.required,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      name = _ref.name,
      value = _ref.value,
      checked = _ref.checked,
      onChange = _ref.onChange,
      ref = _ref.ref,
      label = _ref.label,
      hint = _ref.hint,
      error = _ref.error;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-checkboxes__item".concat(errorId ? " g-form-group--error" : "")
  }, /*#__PURE__*/_react["default"].createElement("input", {
    "aria-describedby": hintId,
    className: "g-checkboxes__input",
    id: id,
    type: "checkbox",
    required: required,
    disabled: disabled !== undefined ? disabled.toString() === "true" : undefined,
    readOnly: readOnly,
    autoFocus: autoFocus,
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    ref: ref
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "g-checkboxes__label",
    htmlFor: id
  }, label !== undefined ? label : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Label text")), hintId !== undefined ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-checkboxes__hint",
    id: hintId
  }, hint !== undefined ? hint : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Hint text"))) : "", errorId !== undefined ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-error-message",
    id: errorId
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "g-visually-hidden"
  }, "Error:"), error !== undefined ? error : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Error text"))) : "");
};

var _default = CheckboxBlock;
exports["default"] = _default;
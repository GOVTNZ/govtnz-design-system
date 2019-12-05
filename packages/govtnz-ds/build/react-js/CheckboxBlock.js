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
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      name = _ref.name,
      value = _ref.value,
      checked = _ref.checked,
      onChange = _ref.onChange,
      label = _ref.label,
      hint = _ref.hint,
      error = _ref.error;
  return _react["default"].createElement("div", {
    className: "g-checkboxes__item".concat(errorId ? " g-checkboxBlock-form-group--error" : "")
  }, _react["default"].createElement("input", {
    "aria-describedby": hintId,
    className: "g-checkboxes__input",
    id: id,
    type: "checkbox",
    disabled: disabled,
    readOnly: readOnly,
    autoFocus: autoFocus,
    name: name,
    value: value,
    checked: checked,
    onChange: onChange
  }), _react["default"].createElement("label", {
    className: "g-checkboxBlock-label g-checkboxes__label",
    htmlFor: id
  }, label !== undefined ? label : _react["default"].createElement(_react["default"].Fragment, null, "Label text")), hintId !== undefined ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "g-checkboxBlock-hint g-checkboxes__hint",
    id: hintId
  }, hint !== undefined ? hint : _react["default"].createElement(_react["default"].Fragment, null, "Hint text"))) : "", errorId !== undefined ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "g-checkboxBlock-error-message",
    id: errorId
  }, _react["default"].createElement("span", {
    className: "g-checkboxBlock-visually-hidden"
  }, "Error:"), error !== undefined ? error : _react["default"].createElement(_react["default"].Fragment, null, "Error text"))) : "");
};

var _default = CheckboxBlock;
exports["default"] = _default;
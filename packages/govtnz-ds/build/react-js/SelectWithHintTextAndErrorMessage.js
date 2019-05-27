"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var SelectWithHintTextAndErrorMessage = function SelectWithHintTextAndErrorMessage(_ref) {
  var select2 = _ref.select2,
      select2Hint = _ref.select2Hint,
      select2Error = _ref.select2Error,
      name = _ref.name,
      multiple = _ref.multiple,
      onChange = _ref.onChange;
  return _react["default"].createElement("div", {
    className: "g-selectWithHintTextAndErrorMessage-form-group g-selectWithHintTextAndErrorMessage-form-group--error"
  }, _react["default"].createElement("label", {
    className: "g-selectWithHintTextAndErrorMessage-label",
    htmlFor: select2
  }, "Label text goes here"), _react["default"].createElement("span", {
    className: "g-selectWithHintTextAndErrorMessage-hint",
    id: select2Hint
  }, "Hint text goes here"), _react["default"].createElement("span", {
    className: "g-selectWithHintTextAndErrorMessage-error-message",
    id: select2Error
  }, "Error message goes here"), _react["default"].createElement("select", {
    "aria-describedby": select2Hint !== undefined || select2Error !== undefined ? "".concat(select2Hint ? select2Hint : "").concat(select2Error ? " " + select2Error : "") : undefined,
    className: "g-selectWithHintTextAndErrorMessage-select g-selectWithHintTextAndErrorMessage-select--error",
    id: select2,
    name: name,
    multiple: multiple,
    onChange: onChange
  }, "Govt.NZ frontend option 1 Govt.NZ frontend option 2 Govt.NZ frontend option 3"));
};

SelectWithHintTextAndErrorMessage.props = ["select2", "select2Hint", "select2Error", "name", "multiple", "onChange"];
var _default = SelectWithHintTextAndErrorMessage;
exports["default"] = _default;
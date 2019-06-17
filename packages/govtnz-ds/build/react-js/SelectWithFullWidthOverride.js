"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var SelectWithFullWidthOverride = function SelectWithFullWidthOverride(_ref) {
  var select1 = _ref.select1,
      name = _ref.name,
      multiple = _ref.multiple,
      onChange = _ref.onChange,
      selected = _ref.selected,
      selected2 = _ref.selected2,
      selected3 = _ref.selected3;
  return _react["default"].createElement("div", {
    className: "g-selectWithFullWidthOverride-form-group"
  }, _react["default"].createElement("label", {
    className: "g-selectWithFullWidthOverride-label",
    htmlFor: select1
  }, "Label text goes here"), _react["default"].createElement("select", {
    className: "g-selectWithFullWidthOverride-select g-!-width-full",
    id: select1,
    name: name,
    multiple: multiple,
    onChange: onChange
  }, _react["default"].createElement("option", {
    value: "1",
    selected: selected
  }, "Govt.NZ frontend option 1"), _react["default"].createElement("option", {
    selected: selected2,
    value: "2"
  }, "Govt.NZ frontend option 2"), _react["default"].createElement("option", {
    disabled: false,
    value: "3",
    selected: selected3
  }, "Govt.NZ frontend option 3")));
};

var _default = SelectWithFullWidthOverride;
exports["default"] = _default;
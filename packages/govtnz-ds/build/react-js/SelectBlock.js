"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var SelectBlock = function SelectBlock(_ref) {
  var selectId = _ref.selectId,
      label = _ref.label,
      error = _ref.error,
      name = _ref.name,
      multiple = _ref.multiple,
      onChange = _ref.onChange,
      children = _ref.children;
  return _react["default"].createElement("div", null, _react["default"].createElement("label", {
    className: "g-selectBlock-label",
    htmlFor: selectId
  }, label !== undefined ? label : _react["default"].createElement(_react["default"].Fragment, null, "Example label text")), _react["default"].createElement("select", {
    className: "g-selectBlock-select".concat(error ? " g-selectBlock-select--error" : ""),
    id: selectId,
    name: name,
    multiple: multiple,
    onChange: onChange
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("option", null, "Options"))));
};

var _default = SelectBlock;
exports["default"] = _default;
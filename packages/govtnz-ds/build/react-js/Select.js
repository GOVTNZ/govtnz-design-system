"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Select = function Select(_ref) {
  var selectId = _ref.selectId,
      name = _ref.name,
      multiple = _ref.multiple,
      onChange = _ref.onChange,
      ref = _ref.ref,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("select", {
    className: "g-select",
    id: selectId,
    name: name,
    multiple: multiple,
    onChange: onChange,
    ref: ref
  }, " ", children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("option", null, "Options")), " ");
};

var _default = Select;
exports["default"] = _default;
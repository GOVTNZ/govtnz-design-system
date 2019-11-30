"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var FormDivider = function FormDivider(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("div", {
    className: "g-form-divider"
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Example Text"));
};

var _default = FormDivider;
exports["default"] = _default;
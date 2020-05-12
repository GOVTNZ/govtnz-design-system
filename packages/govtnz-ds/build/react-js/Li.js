"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Li = function Li(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("li", null, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = Li;
exports["default"] = _default;
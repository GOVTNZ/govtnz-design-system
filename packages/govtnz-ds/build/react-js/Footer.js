"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Footer = function Footer(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("footer", {
    className: "g-footer",
    role: "contentinfo"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example footer content "));
};

var _default = Footer;
exports["default"] = _default;
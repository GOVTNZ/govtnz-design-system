"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var FooterLinks = function FooterLinks(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: "g-footer-links"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "example link list content"));
};

var _default = FooterLinks;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var FooterLink = function FooterLink(_ref) {
  var href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: "g-footer-link"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "g-footer-link__a",
    href: href,
    rel: rel,
    target: target,
    onClick: onClick
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example header content ")));
};

var _default = FooterLink;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var MainNavLink = function MainNavLink(_ref) {
  var ariaCurrent = _ref.ariaCurrent,
      href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: "g-main-nav__link"
  }, " ", /*#__PURE__*/_react["default"].createElement("a", {
    "aria-current": ariaCurrent,
    className: "g-main-nav__link__a".concat(ariaCurrent ? " g-main-nav__link__a--active" : ""),
    href: href,
    rel: rel,
    target: target,
    onClick: onClick
  }, " ", children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example item text "), " "), " ");
};

var _default = MainNavLink;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var MainNavItem = function MainNavItem(_ref) {
  var ariaCurrent = _ref.ariaCurrent,
      href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      children = _ref.children;
  return _react["default"].createElement("li", {
    className: "g-main-nav__item"
  }, _react["default"].createElement("a", {
    "aria-current": ariaCurrent ? ariaCurrent : "",
    href: href,
    rel: rel,
    target: target
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, " Example item text ")));
};

var _default = MainNavItem;
exports["default"] = _default;
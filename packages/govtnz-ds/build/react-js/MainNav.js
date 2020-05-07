"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var MainNav = function MainNav(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("nav", {
    "aria-label": "Main",
    className: "g-main-nav",
    role: "navigation"
  }, _react["default"].createElement("ul", null, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, " MainNavItem components go here ")));
};

var _default = MainNav;
exports["default"] = _default;
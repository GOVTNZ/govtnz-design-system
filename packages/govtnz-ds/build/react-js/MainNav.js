"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  isOpen: {
    "true": "g-main-nav--open",
    "false": "g-main-nav--closed"
  }
};

var MainNav = function MainNav(_ref) {
  var isOpen = _ref.isOpen,
      id = _ref.id,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("nav", {
    "aria-label": "Main",
    className: "g-main-nav".concat(constants.isOpen[isOpen] !== undefined ? " " + constants.isOpen[isOpen] : ""),
    id: id,
    role: "navigation"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "g-main-nav__ul"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " MainNavItem components go here ")));
};

var _default = MainNav;
exports["default"] = _default;
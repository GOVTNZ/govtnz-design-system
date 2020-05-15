"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  isOpen: {
    "true": "g-main-nav-mobile-menu--open",
    "false": "g-main-nav-mobile-menu--closed"
  }
};

var MainNavMobileMenu = function MainNavMobileMenu(_ref) {
  var isOpen = _ref.isOpen,
      navId = _ref.navId,
      name = _ref.name,
      type = _ref.type,
      onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("button", {
    "aria-controls": navId,
    "aria-expanded": isOpen !== undefined ? isOpen.toString() === "true" : undefined,
    className: "g-main-nav-mobile-menu".concat(constants.isOpen[isOpen] !== undefined ? " " + constants.isOpen[isOpen] : ""),
    name: name,
    type: type,
    onClick: onClick
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Menu (example text) "), /*#__PURE__*/_react["default"].createElement("svg", {
    className: "g-main-nav-mobile-menu__icon",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.992 9.55l5.6-5.6a1 1 0 0 1 1.415 0l.688.689a1 1 0 0 1 0 1.414L8.7 13.049a1 1 0 0 1-1.414 0L.29 6.053a1 1 0 0 1 0-1.414l.689-.689a1 1 0 0 1 1.414 0l5.6 5.6z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
};

var _default = MainNavMobileMenu;
exports["default"] = _default;
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
  var ariaExpanded = _ref.ariaExpanded,
      isOpen = _ref.isOpen,
      menuContainer = _ref.menuContainer,
      name = _ref.name,
      type = _ref.type,
      onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("button", {
    "aria-controls": menuContainer,
    "aria-expanded": ariaExpanded !== undefined && ariaExpanded.toString() === "true",
    className: "g-main-nav-mobile-menu".concat(constants.isOpen[isOpen] !== undefined ? " " + constants.isOpen[isOpen] : ""),
    name: name,
    type: type,
    onClick: onClick
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Menu (example text) "));
};

var _default = MainNavMobileMenu;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Header = function Header(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("header", {
    className: "g-header",
    role: "banner"
  }, " ", children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example header content "), " ");
};

var _default = Header;
exports["default"] = _default;
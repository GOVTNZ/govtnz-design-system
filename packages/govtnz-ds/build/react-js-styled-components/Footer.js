"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: g-theme-inverted-background-color;\n  color: g-theme-inverted-color;\n  fill: g-theme-inverted-color;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledFooter = _styledComponents["default"].footer(_templateObject());

var Footer = function Footer(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledFooter, {
    role: "contentinfo"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example footer content "));
};

var _default = Footer;
exports["default"] = _default;
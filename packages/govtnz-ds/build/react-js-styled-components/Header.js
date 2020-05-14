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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: var(--g-theme-inverted-background, #363636);\n  color: var(--g-theme-inverted-color, #ffffff);\n  fill: var(--g-theme-inverted-color, #ffffff);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledHeader = _styledComponents["default"].header(_templateObject());

var Header = function Header(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledHeader, {
    role: "header"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example header content "));
};

var _default = Header;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  padding: 0.6em 1em;\n  color: var(--g-theme-inverted-color, #ffffff);\n  font-weight: bold;\n  text-decoration: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  margin-right: 1em;\n  :last-child {\n    margin-right: 0px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledLi = _styledComponents["default"].li(_templateObject());

var StyledA = _styledComponents["default"].a(_templateObject2());

var MainNavItem = function MainNavItem(_ref) {
  var ariaCurrent = _ref.ariaCurrent,
      href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledLi, null, /*#__PURE__*/_react["default"].createElement(StyledA, {
    "aria-current": ariaCurrent,
    href: href,
    rel: rel,
    target: target,
    onClick: onClick
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example item text ")));
};

var _default = MainNavItem;
exports["default"] = _default;
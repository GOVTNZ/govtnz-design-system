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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: block;\n  padding: 0.7em 1em;\n  color: g-theme-inverted-link-color;\n  margin-left: -1em;\n  margin-right: -1em;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  @media only screen and (min-width: 48em) {\n    :first-child {\n      margin-left: -1em;\n    }\n    display: inline-block;\n    margin-right: 1em;\n    margin-top: 1.5em;\n    margin-bottom: 1.5em;\n  }\n  :hover {\n    color: g-theme-inverted-color;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: block;\n  @media only screen and (min-width: 48em) {\n    display: inline-block;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledLi = _styledComponents["default"].li(_templateObject());

var StyledA = _styledComponents["default"].a(_templateObject2());

var FooterLink = function FooterLink(_ref) {
  var href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledLi, null, /*#__PURE__*/_react["default"].createElement(StyledA, {
    href: href,
    rel: rel,
    target: target,
    onClick: onClick
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example header content ")));
};

var _default = FooterLink;
exports["default"] = _default;
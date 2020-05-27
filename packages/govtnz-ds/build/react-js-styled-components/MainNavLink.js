"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        border-left: none;\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      border-left: solid 0.2em var(--g-theme-inverted-brand, #24a882);\n      padding-left: 0.8em;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: block;\n  padding: 1em;\n  color: var(--g-theme-inverted-color, #ffffff);\n  text-decoration: none;\n  :hover {\n    text-decoration: underline;\n  }\n  ", "\n  :focus {\n    outline: 3px solid var(--color-theme-focus, #b53cde);\n  }\n  @media only screen and (min-width: 48em) {\n    position: relative;\n    display: inline-block;\n    padding: 0.6em 1em;\n    ", ";\n    ::after {\n      content: \"\";\n      position: absolute;\n      clear: both;\n      display: block;\n      bottom: 0px;\n      left: 1em;\n      right: 1em;\n      height: 4px;\n      background: #24a882;\n      background-color: var(--g-theme-inverted-brand, #24a882);\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: block;\n  margin-right: 0em;\n  margin-left: -0.9em;\n  font-family: sans-serif;\n  font-size: 18px;\n  color: #ffffff;\n  letter-spacing: 0;\n  line-height: 20px;\n  @media only screen and (min-width: 48em) {\n    display: inline-block;\n    margin-right: 1em;\n    margin-left: 0px;\n    margin-top: 4px;\n    :first-child {\n      margin-left: 0em;\n    }\n    :last-child {\n      margin-right: 0px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledLi = _styledComponents["default"].li(_templateObject());

var StyledA = _styledComponents["default"].a(_templateObject2(), function (props) {
  return props.ariaCurrent && _styledComponents["default"].css(_templateObject3());
}, function (props) {
  return props.ariaCurrent && _styledComponents["default"].css(_templateObject4());
});

var MainNavLink = function MainNavLink(_ref) {
  var ariaCurrent = _ref.ariaCurrent,
      href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledLi, null, /*#__PURE__*/_react["default"].createElement(StyledA, {
    ariaCurrent: ariaCurrent,
    "aria-current": ariaCurrent,
    href: href,
    rel: rel,
    target: target,
    onClick: onClick
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example item text ")));
};

var _default = MainNavLink;
exports["default"] = _default;
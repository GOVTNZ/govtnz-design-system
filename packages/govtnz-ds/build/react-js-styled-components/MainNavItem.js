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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  margin-right: 1em;\n  :last-child {\n    margin-right: 0px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledLi = _styledComponents["default"].li(_templateObject());

var MainNavItem = function MainNavItem(_ref) {
  var ariaCurrent = _ref.ariaCurrent,
      href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      children = _ref.children;
  return _react["default"].createElement(StyledLi, null, _react["default"].createElement("a", {
    "aria-current": ariaCurrent ? ariaCurrent : "",
    href: href,
    rel: rel,
    target: target
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, " Example item text ")));
};

var _default = MainNavItem;
exports["default"] = _default;
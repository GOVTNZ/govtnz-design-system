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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: g-theme-inverted-variant-background-color;\n  color: g-theme-inverted-color;\n  fill: g-theme-inverted-color;\n  min-height: 146px;\n  @media only screen and (min-width: 48em) {\n    min-height: 104px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledDiv = _styledComponents["default"].div(_templateObject());

var Subfooter = function Subfooter(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledDiv, null, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example subfooter content "));
};

var _default = Subfooter;
exports["default"] = _default;
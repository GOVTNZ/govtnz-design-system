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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledFooter = _styledComponents["default"].footer(_templateObject());

var FooterWrapper = function FooterWrapper(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(StyledFooter, null, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Content..."));
};

FooterWrapper.props = ["children"];
var _default = FooterWrapper;
exports["default"] = _default;
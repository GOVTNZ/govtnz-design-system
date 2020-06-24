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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1.125rem;\n  line-height: 1.11111;\n  display: block;\n  margin-bottom: 5px;\n  color: g-theme-caption-color;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.5rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 18pt;\n    line-height: 1.15;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 0;\n  }\n  margin-top: 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledSpan = _styledComponents["default"].span(_templateObject());

var CaptionL = function CaptionL(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledSpan, null, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = CaptionL;
exports["default"] = _default;
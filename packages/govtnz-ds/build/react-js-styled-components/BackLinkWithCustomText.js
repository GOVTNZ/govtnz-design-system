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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  display: inline-block;\n  position: relative;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  padding-left: 14px;\n  border-bottom: 1px solid #0b0c0c;\n  text-decoration: none;\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  @media print {\n    font-family: sans-serif;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n    background-color: #ffbf47;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active,\n  :focus {\n    color: #0b0c0c;\n  }\n  @media print {\n    :link,\n    :visited,\n    :hover,\n    :active,\n    :focus {\n      color: #000000;\n    }\n  }\n  :before {\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-color: transparent;\n    -webkit-clip-path: polygon(0% 50%, 100% 100%, 100% 0%);\n    clip-path: polygon(0% 50%, 100% 100%, 100% 0%);\n    border-width: 5px 6px 5px 0;\n    border-right-color: inherit;\n    content: \"\";\n    position: absolute;\n    top: -1px;\n    bottom: 1px;\n    left: 0;\n    margin: auto;\n  }\n  :before {\n    top: -1px;\n    bottom: 1px;\n  }\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n    background-color: #ffbf47;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledA = _styledComponents["default"].a(_templateObject());

var constants = {
  target: {
    Blank: "_blank",
    Top: "_top",
    Self: "_self",
    Parent: "_parent"
  }
};

var BackLinkWithCustomText = function BackLinkWithCustomText(_ref) {
  var href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      children = _ref.children;
  return _react["default"].createElement(StyledA, {
    href: href,
    rel: rel,
    target: constants.target[target]
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

BackLinkWithCustomText.props = ["href", "rel", "target", "children"];
var _default = BackLinkWithCustomText;
exports["default"] = _default;
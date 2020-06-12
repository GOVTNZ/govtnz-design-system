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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  @media print {\n    font-family: sans-serif;\n  }\n  :focus {\n    outline: 3px solid #b53cde;\n    outline-offset: 0;\n  }\n  :link {\n    color: #005ea5;\n  }\n  :visited {\n    color: #4c2c92;\n  }\n  :hover {\n    color: #2b8cc4;\n  }\n  :active {\n    color: #2b8cc4;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #6f777b;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledA = _styledComponents["default"].a(_templateObject());

var A = function A(_ref) {
  var isMuted = _ref.isMuted,
      href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledA, {
    isMuted: isMuted,
    href: href,
    rel: rel,
    target: target,
    onClick: onClick
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = A;
exports["default"] = _default;
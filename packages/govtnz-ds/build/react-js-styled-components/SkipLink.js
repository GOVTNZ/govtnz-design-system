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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 700;\n  :focus {\n    outline: 3px solid g-theme-focus-ring-color;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: g-theme-error-color;\n  }\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  margin: 0 !important;\n  overflow: hidden !important;\n  clip: rect(0 0 0 0) !important;\n  -webkit-clip-path: inset(50%) !important;\n  clip-path: inset(50%) !important;\n  white-space: nowrap !important;\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  display: block;\n  padding: 10px 15px;\n  :active,\n  :focus {\n    position: static !important;\n    width: auto !important;\n    height: auto !important;\n    margin: inherit !important;\n    overflow: visible !important;\n    clip: auto !important;\n    -webkit-clip-path: none !important;\n    clip-path: none !important;\n    white-space: inherit !important;\n  }\n  @media print {\n    font-family: sans-serif;\n  }\n  :focus {\n    outline: 3px solid g-theme-focus-ring-color;\n    outline-offset: 0;\n    background-color: g-theme-focus-ring-color;\n  }\n  @media print {\n    :link,\n    :visited,\n    :hover,\n    :active,\n    :focus {\n      color: g-theme-print-color;\n    }\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  margin-top: 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledA = _styledComponents["default"].a(_templateObject());

var SkipLink = function SkipLink(_ref) {
  var href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement(StyledA, {
    href: href,
    rel: rel,
    target: target,
    onClick: onClick
  }, "Skip to main content");
};

var _default = SkipLink;
exports["default"] = _default;
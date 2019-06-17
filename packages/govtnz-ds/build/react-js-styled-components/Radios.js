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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  @media (min-width: 40.0625em) {\n    :after {\n      content: \"\";\n      display: block;\n      clear: both;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledDiv = _styledComponents["default"].div(_templateObject());

var Radios = function Radios(_ref) {
  var inline = _ref.inline,
      children = _ref.children;
  return _react["default"].createElement(StyledDiv, {
    inline: inline
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Radio components"));
};

var _default = Radios;
exports["default"] = _default;
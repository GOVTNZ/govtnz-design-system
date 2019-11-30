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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledSpan = _styledComponents["default"].span(_templateObject());

var CaptionL = function CaptionL(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(StyledSpan, null, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = CaptionL;
exports["default"] = _default;
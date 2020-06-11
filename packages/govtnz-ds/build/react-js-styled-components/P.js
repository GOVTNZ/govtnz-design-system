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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 10px;\n  margin-top: 0;\n  margin-bottom: 20px;\n  margin-top: 0;\n  margin-bottom: 15px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 20px;\n  }\n  margin-top: 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledP = _styledComponents["default"].p(_templateObject());

var P = function P(_ref) {
  var styleSize = _ref.styleSize,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledP, {
    styleSize: styleSize
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = P;
exports["default"] = _default;
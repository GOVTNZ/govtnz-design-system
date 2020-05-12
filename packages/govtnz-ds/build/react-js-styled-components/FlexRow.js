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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  box-sizing: border-box;\n  display: flex;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledDiv = _styledComponents["default"].div(_templateObject());

var FlexRow = function FlexRow(_ref) {
  var alignXs = _ref.alignXs,
      alignSm = _ref.alignSm,
      alignMd = _ref.alignMd,
      alignLg = _ref.alignLg,
      isReversed = _ref.isReversed,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledDiv, {
    alignXs: alignXs,
    alignSm: alignSm,
    alignMd: alignMd,
    alignLg: alignLg,
    isReversed: isReversed
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Columns..."));
};

var _default = FlexRow;
exports["default"] = _default;
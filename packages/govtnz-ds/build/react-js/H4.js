"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  styleSize: {
    xlarge: "g-h4-heading-xl",
    large: "g-h4-heading-l",
    medium: "g-h4-heading-m",
    small: "g-h4-heading-s",
    xsmall: "g-h4-heading-xs",
    xxsmall: "g-h4-heading-xxs"
  }
};

var H4 = function H4(_ref) {
  var styleSize = _ref.styleSize,
      marginBottom8 = _ref.marginBottom8,
      marginBottom0 = _ref.marginBottom0,
      id = _ref.id,
      children = _ref.children;
  return _react["default"].createElement("h4", {
    className: "${constants.styleSize[styleSize] !== undefined ? \" \" +  constants.styleSize[styleSize] : \"\"}".concat(marginBottom8 ? " g-h4-heading-mb-8" : "").concat(marginBottom0 ? " g-h4-heading-mb-0" : ""),
    id: id
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = H4;
exports["default"] = _default;
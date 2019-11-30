"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  styleSize: {
    xlarge: "g-h6-heading-xl",
    large: "g-h6-heading-l",
    medium: "g-h6-heading-m",
    small: "g-h6-heading-s",
    xsmall: "g-h6-heading-xs",
    xxsmall: "g-h6-heading-xxs"
  }
};

var H6 = function H6(_ref) {
  var styleSize = _ref.styleSize,
      marginBottom8 = _ref.marginBottom8,
      marginBottom0 = _ref.marginBottom0,
      id = _ref.id,
      children = _ref.children;
  return _react["default"].createElement("h6", {
    className: "${constants.styleSize[styleSize] !== undefined ? \" \" +  constants.styleSize[styleSize] : \"\"}".concat(marginBottom8 ? " g-h6-heading-mb-8" : "").concat(marginBottom0 ? " g-h6-heading-mb-0" : ""),
    id: id
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = H6;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  styleSize: {
    xlarge: "g-heading-xl",
    large: "g-heading-l",
    medium: "g-heading-m",
    small: "g-heading-s",
    xsmall: "g-heading-xs",
    xxsmall: "g-heading-xxs"
  }
};

var H3 = function H3(_ref) {
  var styleSize = _ref.styleSize,
      marginBottom8 = _ref.marginBottom8,
      marginBottom0 = _ref.marginBottom0,
      id = _ref.id,
      children = _ref.children;
  return _react["default"].createElement("h3", {
    className: "".concat(constants.styleSize[styleSize] !== undefined ? constants.styleSize[styleSize] : "").concat(marginBottom8 ? " g-heading-mb-8" : "").concat(marginBottom0 ? " g-heading-mb-0" : ""),
    id: id
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = H3;
exports["default"] = _default;
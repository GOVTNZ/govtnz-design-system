"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  styleSize: {
    xlarge: "g-h1-heading-xl",
    large: "g-h1-heading-l",
    medium: "g-h1-heading-m",
    small: "g-h1-heading-s",
    xsmall: "g-h1-heading-xs",
    xxsmall: "g-h1-heading-xxs"
  }
};

var H1 = function H1(_ref) {
  var styleSize = _ref.styleSize,
      marginBottom8 = _ref.marginBottom8,
      marginBottom0 = _ref.marginBottom0,
      id = _ref.id,
      children = _ref.children;
  return _react["default"].createElement("h1", {
    className: "".concat(constants.styleSize[styleSize] !== undefined ? constants.styleSize[styleSize] : "").concat(marginBottom8 ? " g-h1-heading-mb-8" : "").concat(marginBottom0 ? " g-h1-heading-mb-0" : ""),
    id: id
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = H1;
exports["default"] = _default;
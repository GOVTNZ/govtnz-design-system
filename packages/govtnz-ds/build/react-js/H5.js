"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  styleSize: {
    xlarge: "g-h5-heading-xl",
    large: "g-h5-heading-l",
    medium: "g-h5-heading-m",
    small: "g-h5-heading-s",
    xsmall: "g-h5-heading-xs",
    xxsmall: "g-h5-heading-xxs"
  }
};

var H5 = function H5(_ref) {
  var styleSize = _ref.styleSize,
      marginBottom8 = _ref.marginBottom8,
      marginBottom0 = _ref.marginBottom0,
      id = _ref.id,
      children = _ref.children;
  return _react["default"].createElement("h5", {
    className: "".concat(constants.styleSize[styleSize] !== undefined ? constants.styleSize[styleSize] : "").concat(marginBottom8 ? " g-h5-heading-mb-8" : "").concat(marginBottom0 ? " g-h5-heading-mb-0" : ""),
    id: id
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = H5;
exports["default"] = _default;
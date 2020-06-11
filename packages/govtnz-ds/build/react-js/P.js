"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  styleSize: {
    large: "g-body-l",
    medium: "g-body-m",
    small: "g-body-s",
    "x-small": "g-body-xs"
  }
};

var P = function P(_ref) {
  var styleSize = _ref.styleSize,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("p", {
    className: constants.styleSize[styleSize] !== undefined ? constants.styleSize[styleSize] : ""
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = P;
exports["default"] = _default;
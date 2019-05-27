"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  styleSize: {
    large: "g-p-body-l",
    medium: "g-p-body-m",
    small: "g-p-body-s",
    "x-small": "g-p-body-xs"
  }
};

var P = function P(_ref) {
  var styleSize = _ref.styleSize,
      children = _ref.children;
  return _react["default"].createElement("p", {
    className: constants.styleSize[styleSize] !== undefined ? constants.styleSize[styleSize] : ""
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

P.props = ["styleSize", "children"];
var _default = P;
exports["default"] = _default;
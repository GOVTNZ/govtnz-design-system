"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var CaptionM = function CaptionM(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("span", {
    className: "g-caption-m"
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

CaptionM.props = ["children"];
var _default = CaptionM;
exports["default"] = _default;
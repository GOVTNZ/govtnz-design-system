"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var CaptionXl = function CaptionXl(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("span", {
    className: "g-caption-xl"
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

CaptionXl.props = ["children"];
var _default = CaptionXl;
exports["default"] = _default;
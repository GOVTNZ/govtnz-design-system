"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var CaptionL = function CaptionL(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "g-caption-l"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = CaptionL;
exports["default"] = _default;
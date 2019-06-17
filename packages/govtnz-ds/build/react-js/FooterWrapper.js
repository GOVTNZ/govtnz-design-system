"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var FooterWrapper = function FooterWrapper(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("footer", {
    className: "g-footer-wrapper"
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Content..."));
};

var _default = FooterWrapper;
exports["default"] = _default;
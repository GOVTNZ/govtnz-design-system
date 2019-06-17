"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  target: {
    Blank: "_blank",
    Top: "_top",
    Self: "_self",
    Parent: "_parent"
  }
};

var BackLinkWithCustomText = function BackLinkWithCustomText(_ref) {
  var href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      children = _ref.children;
  return _react["default"].createElement("a", {
    className: "g-backLinkWithCustomText-back-link",
    href: href,
    rel: rel,
    target: constants.target[target]
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = BackLinkWithCustomText;
exports["default"] = _default;
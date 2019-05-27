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

var A = function A(_ref) {
  var isMuted = _ref.isMuted,
      href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      children = _ref.children;
  return _react["default"].createElement("a", {
    className: "g-a-link".concat(isMuted ? " g-a-link--muted" : ""),
    href: href,
    rel: rel,
    target: constants.target[target]
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

A.props = ["isMuted", "href", "rel", "target", "children"];
var _default = A;
exports["default"] = _default;
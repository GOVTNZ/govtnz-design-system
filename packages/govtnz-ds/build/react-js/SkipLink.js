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

var SkipLink = function SkipLink(_ref) {
  var href = _ref.href,
      rel = _ref.rel,
      target = _ref.target;
  return _react["default"].createElement("a", {
    className: "g-skip-link",
    href: href,
    rel: rel,
    target: constants.target[target]
  }, "Skip to main content");
};

var _default = SkipLink;
exports["default"] = _default;
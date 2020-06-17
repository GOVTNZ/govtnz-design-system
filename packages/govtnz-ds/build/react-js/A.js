"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var A = function A(_ref) {
  var isMuted = _ref.isMuted,
      className = _ref.className,
      href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("a", {
    className: "g-link".concat(isMuted ? " g-link--muted" : "").concat(className ? " " + className : ""),
    href: href,
    rel: rel,
    target: target,
    onClick: onClick
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = A;
exports["default"] = _default;
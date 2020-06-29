"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var SkipLink = function SkipLink(_ref) {
  var href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("a", {
    className: "g-skip-link",
    href: href,
    rel: rel,
    target: target,
    onClick: onClick
  }, "Skip to main content");
};

var _default = SkipLink;
exports["default"] = _default;
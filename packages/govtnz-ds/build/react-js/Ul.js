"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Ul = function Ul(_ref) {
  var spacing = _ref.spacing,
      marginBottom0 = _ref.marginBottom0,
      noBullet = _ref.noBullet,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: "g-ul".concat(spacing ? " g-ul--spacing" : "").concat(marginBottom0 ? " g-ul--mb-0" : "").concat(noBullet ? " g-ul--no-bullet" : "")
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = Ul;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

var _react = _interopRequireDefault(require("react"));

var TagInactive = function TagInactive(_ref) {
  (0, _objectDestructuringEmpty2["default"])(_ref);
  return _react["default"].createElement("strong", {
    className: "g-tagInactive-tag g-tagInactive-tag--inactive"
  }, "alpha");
};

TagInactive.props = [];
var _default = TagInactive;
exports["default"] = _default;
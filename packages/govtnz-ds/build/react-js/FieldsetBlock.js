"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var FieldsetBlock = function FieldsetBlock(_ref) {
  var hintId = _ref.hintId,
      legend = _ref.legend,
      hint = _ref.hint,
      children = _ref.children;
  return _react["default"].createElement("div", {
    className: "g-fieldsetBlock-form-group"
  }, _react["default"].createElement("fieldset", {
    "aria-describedby": hintId,
    className: "g-fieldset"
  }, _react["default"].createElement("legend", {
    className: "g-fieldset__legend"
  }, legend !== undefined ? legend : _react["default"].createElement(_react["default"].Fragment, null, "Legend text")), hintId !== undefined ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "g-fieldsetBlock-hint",
    id: hintId
  }, hint !== undefined ? hint : _react["default"].createElement(_react["default"].Fragment, null, "Hint text"))) : "", _react["default"].createElement("div", null, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Fieldset contents"))));
};

FieldsetBlock.props = ["hintId", "legend", "hint", "children"];
var _default = FieldsetBlock;
exports["default"] = _default;
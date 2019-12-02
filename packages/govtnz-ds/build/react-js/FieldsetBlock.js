"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var FieldsetBlock = function FieldsetBlock(_ref) {
  var hintId = _ref.hintId,
      errorId = _ref.errorId,
      legend = _ref.legend,
      hint = _ref.hint,
      errorId2 = _ref.errorId2,
      error = _ref.error,
      children = _ref.children;
  return _react["default"].createElement("div", {
    className: "g-fieldsetBlock-form-group"
  }, _react["default"].createElement("fieldset", {
    "aria-describedby": hintId !== undefined || errorId !== undefined ? "".concat(hintId ? hintId : "").concat(errorId ? " " + errorId : "") : undefined,
    className: "g-fieldset"
  }, _react["default"].createElement("legend", {
    className: "g-fieldset__legend"
  }, legend !== undefined ? legend : _react["default"].createElement(_react["default"].Fragment, null, "Legend text")), hintId !== undefined ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "g-fieldsetBlock-hint",
    id: hintId
  }, hint !== undefined ? hint : _react["default"].createElement(_react["default"].Fragment, null, "Hint text"))) : "", errorId2 !== undefined ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "g-fieldsetBlock-error-message",
    id: errorId
  }, _react["default"].createElement("span", {
    className: "g-fieldsetBlock-visually-hidden"
  }, "Error:"), error !== undefined ? error : _react["default"].createElement(_react["default"].Fragment, null, "Error text"))) : "", _react["default"].createElement("div", null, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Fieldset contents"))));
};

var _default = FieldsetBlock;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var FieldsetBlock = function FieldsetBlock(_ref) {
  var errorId = _ref.errorId,
      hintId = _ref.hintId,
      legend = _ref.legend,
      hint = _ref.hint,
      error = _ref.error,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-fieldsetBlock-form-group".concat(errorId ? " g-fieldsetBlock-form-group--error" : "")
  }, /*#__PURE__*/_react["default"].createElement("fieldset", {
    "aria-describedby": hintId !== undefined || errorId !== undefined ? "".concat(hintId ? hintId : "").concat(errorId ? " " + errorId : "") : undefined,
    className: "g-fieldset"
  }, /*#__PURE__*/_react["default"].createElement("legend", {
    className: "g-fieldset__legend"
  }, legend !== undefined ? legend : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Legend text")), hintId !== undefined ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-fieldsetBlock-hint",
    id: hintId
  }, hint !== undefined ? hint : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Hint text"))) : "", errorId !== undefined ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-fieldsetBlock-error-message",
    id: errorId
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "g-fieldsetBlock-visually-hidden"
  }, "Error:"), error !== undefined ? error : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Error text"))) : "", /*#__PURE__*/_react["default"].createElement("div", null, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Fieldset contents"))));
};

var _default = FieldsetBlock;
exports["default"] = _default;
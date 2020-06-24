"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var SelectBlock = function SelectBlock(_ref) {
  var errorId = _ref.errorId,
      selectId = _ref.selectId,
      label = _ref.label,
      error = _ref.error,
      name = _ref.name,
      required = _ref.required,
      multiple = _ref.multiple,
      onChange = _ref.onChange,
      ref = _ref.ref,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: errorId ? "g-form-group--error" : ""
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "g-selectBlock-label",
    htmlFor: selectId
  }, label !== undefined ? label : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Example label text")), /*#__PURE__*/_react["default"].createElement("select", {
    className: "g-selectBlock-select".concat(error ? " g-selectBlock-select--error" : ""),
    id: selectId,
    name: name,
    required: required,
    multiple: multiple,
    onChange: onChange,
    ref: ref
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("option", null, "Options"))));
};

var _default = SelectBlock;
exports["default"] = _default;
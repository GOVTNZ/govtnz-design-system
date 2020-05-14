"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var FileUpload = function FileUpload(_ref) {
  var id = _ref.id,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      name = _ref.name,
      onChange = _ref.onChange,
      ref = _ref.ref;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-fileUpload-form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "g-fileUpload-label",
    htmlFor: id
  }, "Upload a file"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "g-file-upload",
    id: id,
    name: name,
    type: "file",
    disabled: disabled !== undefined && disabled.toString() === "true",
    readOnly: readOnly,
    autoFocus: autoFocus,
    onChange: onChange,
    ref: ref
  }));
};

var _default = FileUpload;
exports["default"] = _default;
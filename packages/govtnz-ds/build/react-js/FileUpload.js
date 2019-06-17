"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var FileUpload = function FileUpload(_ref) {
  var fileUpload1 = _ref.fileUpload1,
      name = _ref.name,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus;
  return _react["default"].createElement("div", {
    className: "g-fileUpload-form-group"
  }, _react["default"].createElement("label", {
    className: "g-fileUpload-label",
    htmlFor: fileUpload1
  }, "Upload a file"), _react["default"].createElement("input", {
    className: "g-file-upload",
    id: fileUpload1,
    name: name,
    type: "file",
    disabled: disabled,
    readOnly: readOnly,
    autoFocus: autoFocus
  }));
};

var _default = FileUpload;
exports["default"] = _default;
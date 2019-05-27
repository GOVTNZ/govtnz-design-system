"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Checkbox = function Checkbox(_ref) {
  var fakeFocus = _ref.fakeFocus,
      checkboxId = _ref.checkboxId,
      hintId = _ref.hintId,
      name = _ref.name,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      value = _ref.value,
      checked = _ref.checked,
      onChange = _ref.onChange;
  return _react["default"].createElement("input", {
    "aria-describedby": hintId,
    className: "g-checkboxes__input".concat(fakeFocus ? " :focus" : ""),
    id: checkboxId,
    type: "checkbox",
    name: name,
    disabled: disabled,
    readOnly: readOnly,
    autoFocus: autoFocus,
    value: value,
    checked: checked,
    onChange: onChange
  });
};

Checkbox.props = ["fakeFocus", "checkboxId", "hintId", "name", "disabled", "readOnly", "autoFocus", "value", "checked", "onChange"];
var _default = Checkbox;
exports["default"] = _default;
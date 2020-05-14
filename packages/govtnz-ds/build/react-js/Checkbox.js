"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Checkbox = function Checkbox(_ref) {
  var id = _ref.id,
      hintId = _ref.hintId,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      name = _ref.name,
      value = _ref.value,
      checked = _ref.checked,
      onChange = _ref.onChange,
      ref = _ref.ref;
  return /*#__PURE__*/_react["default"].createElement("input", {
    "aria-describedby": hintId,
    className: "g-checkboxes__input",
    id: id,
    type: "checkbox",
    disabled: disabled !== undefined && disabled.toString() === "true",
    readOnly: readOnly,
    autoFocus: autoFocus,
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    ref: ref
  });
};

var _default = Checkbox;
exports["default"] = _default;
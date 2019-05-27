"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  margin: 0;\n  opacity: 0;\n  :disabled {\n    cursor: default;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledInput = _styledComponents["default"].input(_templateObject());

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
  return _react["default"].createElement(StyledInput, {
    fakeFocus: fakeFocus,
    "aria-describedby": hintId,
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
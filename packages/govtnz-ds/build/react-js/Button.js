"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  kind: {
    secondary: "g-button--secondary",
    warning: "g-button--warning"
  },
  type: {
    Submit: "submit",
    Reset: "reset",
    Button: "button"
  }
};

var Button = function Button(_ref) {
  var disabled = _ref.disabled,
      kind = _ref.kind,
      name = _ref.name,
      type = _ref.type,
      children = _ref.children;
  return _react["default"].createElement("button", {
    "aria-disabled": disabled,
    className: "g-button".concat(disabled ? " g-button--disabled" : "").concat(constants.kind[kind] !== undefined ? " " + constants.kind[kind] : ""),
    disabled: disabled,
    type: constants.type[type],
    name: name
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

Button.props = ["disabled", "kind", "name", "type", "children"];
var _default = Button;
exports["default"] = _default;
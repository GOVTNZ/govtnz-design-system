"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  level: {
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
      level = _ref.level,
      name = _ref.name,
      type = _ref.type,
      onClick = _ref.onClick,
      children = _ref.children;
  return _react["default"].createElement("button", {
    className: "g-button".concat(disabled ? " g-button--disabled" : "").concat(constants.level[level] !== undefined ? " " + constants.level[level] : ""),
    disabled: disabled,
    type: constants.type[type],
    name: name,
    onClick: onClick
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, " Example text "));
};

var _default = Button;
exports["default"] = _default;
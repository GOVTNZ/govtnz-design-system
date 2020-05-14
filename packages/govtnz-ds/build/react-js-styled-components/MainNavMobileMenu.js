"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        display: inline-block;\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: red;\n  color: white;\n  display: none;\n  ", "\n    ::after {\n    display: inline;\n    content: \"(open)\";\n  }\n  ::after {\n    display: inline;\n    content: \"(close)\";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledButton = _styledComponents["default"].button(_templateObject(), function (props) {
  return ["true", "false"].indexOf(props.isOpen) !== -1 && _styledComponents["default"].css(_templateObject2());
});

var MainNavMobileMenu = function MainNavMobileMenu(_ref) {
  var isOpen = _ref.isOpen,
      navId = _ref.navId,
      name = _ref.name,
      type = _ref.type,
      onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledButton, {
    isOpen: isOpen,
    "aria-controls": navId,
    "aria-expanded": isOpen !== undefined ? isOpen.toString() === "true" : undefined,
    name: name,
    type: type,
    onClick: onClick
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Menu (example text) "));
};

var _default = MainNavMobileMenu;
exports["default"] = _default;
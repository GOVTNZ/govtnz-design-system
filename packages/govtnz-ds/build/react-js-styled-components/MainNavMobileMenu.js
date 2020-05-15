"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  fill: var(--g-theme-inverted-color, #ffffff);\n  transition: transform 0.15s;\n  vertical-align: middle;\n  padding-left: 0.2em;\n  width: 16px;\n  height: 16px;\n  transform: rotate(180deg);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      display: inline-block;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      background-color: var(--g-theme-inverted-background-color2, #2a2a2a);\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: transparent;\n  color: var(--g-theme-inverted-color, #ffffff);\n  font-size: 16px;\n  display: none;\n  padding: 1em;\n  border: none;\n  :focus {\n    outline: 3px solid var(--color-theme-focus, #b53cde);\n  }\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledButton = _styledComponents["default"].button(_templateObject(), function (props) {
  return props.isOpen === "true" && _styledComponents["default"].css(_templateObject2());
}, function (props) {
  return ["true", "false"].indexOf(props.isOpen) !== -1 && _styledComponents["default"].css(_templateObject3());
});

var StyledSvg = _styledComponents["default"].svg(_templateObject4());

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
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Menu (example text) "), /*#__PURE__*/_react["default"].createElement(StyledSvg, {
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.992 9.55l5.6-5.6a1 1 0 0 1 1.415 0l.688.689a1 1 0 0 1 0 1.414L8.7 13.049a1 1 0 0 1-1.414 0L.29 6.053a1 1 0 0 1 0-1.414l.689-.689a1 1 0 0 1 1.414 0l5.6 5.6z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
};

var _default = MainNavMobileMenu;
exports["default"] = _default;
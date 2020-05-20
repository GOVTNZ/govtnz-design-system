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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  list-style: none;\n  padding: 0px;\n  margin: 0px 0px 0px 1rem;\n  @media only screen and (min-width: 48em) {\n    margin: 0px 2rem;\n  }\n  display: block;\n  display: none;\n  @media only screen and (min-width: 48em) {\n    display: block;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  color: var(--g-theme-inverted-brand, #24a882);\n  transition: transform 0.15s;\n  vertical-align: middle;\n  margin-left: 0.2em;\n  width: 12px;\n  height: 12px;\n  transform: rotate(180deg);\n  transform: rotate(0deg);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  background: transparent;\n  color: var(--g-theme-inverted-color, #ffffff);\n  font-size: 16px;\n  display: none;\n  padding: 1em;\n  border: none;\n  display: inline-block;\n  @media only screen and (min-width: 48em) {\n    display: none;\n  }\n  :focus {\n    outline: 3px solid var(--color-theme-focus, #b53cde);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: block;\n  padding: 0px;\n  margin: 0px;\n  background-color: var(--g-theme-inverted-background-color2, #2a2a2a);\n  margin: 0px -1rem;\n  @media only screen and (min-width: 48em) {\n    margin: 0px;\n    background-color: transparent;\n    margin: 0px -2rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledNav = _styledComponents["default"].nav(_templateObject());

var StyledButton = _styledComponents["default"].button(_templateObject2());

var StyledSvg = _styledComponents["default"].svg(_templateObject3());

var StyledUl = _styledComponents["default"].ul(_templateObject4());

var MainNav = function MainNav(_ref) {
  var isOpen = _ref.isOpen,
      id = _ref.id,
      name = _ref.name,
      type = _ref.type,
      onClick = _ref.onClick,
      button = _ref.button,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledNav, {
    "aria-label": "Main",
    role: "navigation"
  }, /*#__PURE__*/_react["default"].createElement(StyledButton, {
    isOpen: isOpen,
    "aria-controls": id,
    "aria-expanded": isOpen !== undefined ? isOpen.toString() === "true" : undefined,
    name: name,
    type: type,
    onClick: onClick
  }, button !== undefined ? button : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Menu "), /*#__PURE__*/_react["default"].createElement(StyledSvg, {
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.992 9.55l5.6-5.6a1 1 0 0 1 1.415 0l.688.689a1 1 0 0 1 0 1.414L8.7 13.049a1 1 0 0 1-1.414 0L.29 6.053a1 1 0 0 1 0-1.414l.689-.689a1 1 0 0 1 1.414 0l5.6 5.6z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    id: id
  }, /*#__PURE__*/_react["default"].createElement(StyledUl, {
    isOpen: isOpen
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " MainNavItem components go here "))));
};

var _default = MainNav;
exports["default"] = _default;
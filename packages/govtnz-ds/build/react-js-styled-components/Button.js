"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        color: var(--g-theme-color-white, #ffffff);\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      background-color: var(--g-theme-button-color-warning, #b10e1e);\n      box-shadow: 0 2px 0\n        var(--g-theme-button-color-warning-box-shadow, #2a2a2a);\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        color: #0b0c0c;\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      background-color: var(--g-theme-button-color-secondary, #d3d3d3);\n      box-shadow: 0 2px 0\n        var(--g-theme-button-color-secondary-box-shadow, #2a2a2a);\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.2;\n  box-sizing: border-box;\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 22px;\n  padding: 16px;\n  border: 2px solid transparent;\n  border-radius: 4px;\n  color: #ffffff;\n  background-color: #00823b;\n  box-shadow: 0 2px 0 0 #2a2a2a;\n  text-align: center;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-appearance: none;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 19px;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 32px;\n  }\n  @media (min-width: 40.0625em) {\n    width: auto;\n  }\n  :link,\n  :visited,\n  :active,\n  :hover {\n    color: #ffffff;\n    text-decoration: none;\n  }\n  ::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n  :hover,\n  :focus {\n    background-color: #00692f;\n  }\n  :active {\n    top: 2px;\n    box-shadow: none;\n  }\n  ::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: -2px;\n    right: -2px;\n    bottom: -4px;\n    left: -2px;\n    background: transparent;\n  }\n  :active::before {\n    top: -4px;\n  }\n  opacity: 0.5;\n  background: #00823b;\n  :hover,\n  :hover {\n    background-color: #00823b;\n    cursor: default;\n  }\n  :focus,\n  :focus {\n    outline: none;\n  }\n  :active,\n  :active {\n    top: 0;\n    box-shadow: 0 2px 0 #003618;\n  }\n  padding-top: 16px;\n  padding-bottom: 16px;\n  margin-top: 0px;\n  opacity: 0.5;\n  background: var(--g-theme-button-color, #078766);\n  :hover,\n  :hover {\n    background-color: var(--g-theme-button-color, #078766);\n    cursor: default;\n  }\n  :focus,\n  :focus {\n    outline: none;\n  }\n  :active,\n  :active {\n    top: 0;\n    box-shadow: 0 2px 0 #003418;\n  }\n  ", "\n  :link,:visited,:active,:hover {\n    ", "\n  }\n  :hover,\n  :focus {\n    background-color: var(\n      --g-theme-button-color-secondary-hover-focus,\n      #b2b2b2\n    );\n  }\n  ", "\n  :link,:visited,:active,:hover {\n    ", "\n  }\n  :hover,\n  :focus {\n    background-color: var(--g-theme-button-color-warning-hover-focus, #900815);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledButton = _styledComponents["default"].button(_templateObject(), function (props) {
  return props.level === "secondary" && _styledComponents["default"].css(_templateObject2());
}, function (props) {
  return props.level === "secondary" && _styledComponents["default"].css(_templateObject3());
}, function (props) {
  return props.level === "warning" && _styledComponents["default"].css(_templateObject4());
}, function (props) {
  return props.level === "warning" && _styledComponents["default"].css(_templateObject5());
});

var Button = function Button(_ref) {
  var disabled = _ref.disabled,
      level = _ref.level,
      name = _ref.name,
      type = _ref.type,
      onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledButton, {
    disabled: disabled,
    level: level,
    type: type,
    name: name,
    onClick: onClick
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example text "));
};

var _default = Button;
exports["default"] = _default;
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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      display: none;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      display: block;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: block;\n  padding: 0px;\n  margin: 0px;\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledNav = _styledComponents["default"].nav(_templateObject(), function (props) {
  return props.isOpen === "true" && _styledComponents["default"].css(_templateObject2());
}, function (props) {
  return props.isOpen === "false" && _styledComponents["default"].css(_templateObject3());
});

var StyledUl = _styledComponents["default"].ul(_templateObject4());

var MainNav = function MainNav(_ref) {
  var isOpen = _ref.isOpen,
      id = _ref.id,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledNav, {
    isOpen: isOpen,
    "aria-label": "Main",
    id: id,
    role: "navigation"
  }, /*#__PURE__*/_react["default"].createElement(StyledUl, null, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " MainNavItem components go here ")));
};

var _default = MainNav;
exports["default"] = _default;
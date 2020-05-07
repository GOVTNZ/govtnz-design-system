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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: block;\n  list-style: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledNav = _styledComponents["default"].nav(_templateObject());

var MainNav = function MainNav(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(StyledNav, {
    "aria-label": "Main",
    role: "navigation"
  }, _react["default"].createElement("ul", null, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, " MainNavItem components go here ")));
};

var _default = MainNav;
exports["default"] = _default;
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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        padding-right: 2.5rem;\n        padding-left: 2.5rem;\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        padding-right: 2rem;\n        padding-left: 2rem;\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      max-width: 85.375rem;\n      box-sizing: border-box;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      margin-right: auto;\n      margin-left: auto;\n      padding-right: 1rem;\n      padding-left: 1rem;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n@media only screen and (min-width: 48em) {\n    ", ";\n  }\n  @media only screen and (min-width: 75em) {\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledDiv = _styledComponents["default"].div(_templateObject(), function (props) {
  return ["fixed", "fluid"].indexOf(props.width) !== -1 && _styledComponents["default"].css(_templateObject2());
}, function (props) {
  return props.width === "fixed" && _styledComponents["default"].css(_templateObject3());
}, function (props) {
  return ["fixed", "fluid"].indexOf(props.width) !== -1 && _styledComponents["default"].css(_templateObject4());
}, function (props) {
  return ["fixed", "fluid"].indexOf(props.width) !== -1 && _styledComponents["default"].css(_templateObject5());
});

var FlexContainer = function FlexContainer(_ref) {
  var width = _ref.width,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledDiv, {
    width: width
  }, " ", children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Rows..."), " ");
};

var _default = FlexContainer;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 0px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 0px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 0px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledDiv = _styledComponents["default"].div(_templateObject());

var StyledSpan = _styledComponents["default"].span(_templateObject2());

var StyledStrong = _styledComponents["default"].strong(_templateObject3());

var StyledSpan2 = _styledComponents["default"].span(_templateObject4());

var WarningText = function WarningText(_ref) {
  (0, _objectDestructuringEmpty2["default"])(_ref);
  return _react["default"].createElement(StyledDiv, null, _react["default"].createElement(StyledSpan, {
    "aria-hidden": "true"
  }, "!"), _react["default"].createElement(StyledStrong, null, _react["default"].createElement(StyledSpan2, null, "Warning"), "You can be fined up to $5,000 if you don\u2019t register."));
};

var _default = WarningText;
exports["default"] = _default;
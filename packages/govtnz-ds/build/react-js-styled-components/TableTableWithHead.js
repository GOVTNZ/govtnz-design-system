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

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 0px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 0px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 0px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #0b0c0c;\n  width: 100%;\n  margin-bottom: 20px;\n  border-spacing: 0;\n  border-collapse: collapse;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  margin-top: 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledTable = _styledComponents["default"].table(_templateObject());

var StyledThead = _styledComponents["default"].thead(_templateObject2());

var StyledTr = _styledComponents["default"].tr(_templateObject3());

var StyledTbody = _styledComponents["default"].tbody(_templateObject4());

var StyledTr2 = _styledComponents["default"].tr(_templateObject5());

var StyledTr3 = _styledComponents["default"].tr(_templateObject6());

var StyledTr4 = _styledComponents["default"].tr(_templateObject7());

var TableTableWithHead = function TableTableWithHead(_ref) {
  (0, _objectDestructuringEmpty2["default"])(_ref);
  return _react["default"].createElement(StyledTable, null, _react["default"].createElement(StyledThead, null, _react["default"].createElement(StyledTr, null, "Month you apply Rate for bicycles Rate for vehicles")), _react["default"].createElement(StyledTbody, null, _react["default"].createElement(StyledTr2, null, "January $85 $95"), _react["default"].createElement(StyledTr3, null, "February $75 $55"), _react["default"].createElement(StyledTr4, null, "March $165 $125")));
};

var _default = TableTableWithHead;
exports["default"] = _default;
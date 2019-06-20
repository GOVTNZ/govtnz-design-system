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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 15px;\n  padding-left: 20px;\n  border-left: 5px solid #bfc1c3;\n  margin-top: 0px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  text-decoration: underline;\n  margin-top: 0px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  position: relative;\n  margin-bottom: 5px;\n  padding-left: 25px;\n  color: #005ea5;\n  cursor: pointer;\n  :hover {\n    color: #2b8cc4;\n  }\n  :focus {\n    outline: 4px solid #ffbf47;\n    outline-offset: -1px;\n    color: #0b0c0c;\n    background: #ffbf47;\n  }\n  ::-webkit-details-marker {\n    display: none;\n  }\n  :before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-color: transparent;\n    -webkit-clip-path: polygon(0% 0%, 100% 50%, 0% 100%);\n    clip-path: polygon(0% 0%, 100% 50%, 0% 100%);\n    border-width: 7px 0 7px 12.124px;\n    border-left-color: inherit;\n  }\n  :before {\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-color: transparent;\n    -webkit-clip-path: polygon(0% 0%, 50% 100%, 100% 0%);\n    clip-path: polygon(0% 0%, 50% 100%, 100% 0%);\n    border-width: 12.124px 7px 0 7px;\n    border-top-color: inherit;\n  }\n  margin-top: 0px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #0b0c0c;\n  margin-bottom: 20px;\n  display: block;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  margin-top: 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledDetails = _styledComponents["default"].details(_templateObject());

var StyledSummary = _styledComponents["default"].summary(_templateObject2());

var StyledSpan = _styledComponents["default"].span(_templateObject3());

var StyledDiv = _styledComponents["default"].div(_templateObject4());

var Details = function Details(_ref) {
  var open = _ref.open,
      detailsContent021Df3Ae2Ee5440B98CbFfc001B25657 = _ref.detailsContent021Df3Ae2Ee5440B98CbFfc001B25657;
  return _react["default"].createElement(StyledDetails, {
    role: "group",
    open: open
  }, _react["default"].createElement(StyledSummary, {
    "aria-controls": detailsContent021Df3Ae2Ee5440B98CbFfc001B25657,
    "aria-expanded": "false",
    role: "button"
  }, _react["default"].createElement(StyledSpan, null, "Help with nationality")), _react["default"].createElement(StyledDiv, {
    "aria-hidden": "true",
    id: detailsContent021Df3Ae2Ee5440B98CbFfc001B25657
  }, "We need to know your nationality so we can work out which elections you\u2019re entitled to vote in. If you can\u2019t provide your nationality, you\u2019ll have to send copies of identity documents through the post."));
};

var _default = Details;
exports["default"] = _default;
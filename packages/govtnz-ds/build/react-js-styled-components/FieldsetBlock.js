"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 0px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  overflow: hidden !important;\n  clip: rect(0 0 0 0) !important;\n  -webkit-clip-path: inset(50%) !important;\n  clip-path: inset(50%) !important;\n  border: 0 !important;\n  white-space: nowrap !important;\n  margin-top: 0px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  margin-bottom: 15px;\n  clear: both;\n  color: g-theme-error-color;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  margin-top: 0px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  margin-bottom: 15px;\n  color: g-theme-hint-color;\n  margin-top: -4px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  margin-top: 0px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 600;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: g-theme-legend-color;\n  box-sizing: border-box;\n  display: table;\n  max-width: 100%;\n  margin-bottom: 12px;\n  padding: 0;\n  overflow: hidden;\n  white-space: normal;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: g-theme-print-color;\n  }\n  margin-top: 0px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 0;\n  padding: 0;\n  border: 0;\n  :after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  margin-top: 0px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      padding-left: 15px;\n      border-left: 5px solid g-theme-error-border-color;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 20px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  ", "\n  padding: 0;\n  border: 0;\n  margin-top: 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledDiv = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.errorId && _styledComponents["default"].css(_templateObject2());
});

var StyledFieldset = _styledComponents["default"].fieldset(_templateObject3());

var StyledLegend = _styledComponents["default"].legend(_templateObject4());

var StyledDiv2 = _styledComponents["default"].div(_templateObject5());

var StyledDiv3 = _styledComponents["default"].div(_templateObject6());

var StyledSpan = _styledComponents["default"].span(_templateObject7());

var StyledDiv4 = _styledComponents["default"].div(_templateObject8());

var FieldsetBlock = function FieldsetBlock(_ref) {
  var errorId = _ref.errorId,
      hintId = _ref.hintId,
      legend = _ref.legend,
      hint = _ref.hint,
      error = _ref.error,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledDiv, {
    errorId: errorId
  }, /*#__PURE__*/_react["default"].createElement(StyledFieldset, {
    "aria-describedby": hintId !== undefined || errorId !== undefined ? "".concat(hintId ? hintId : "").concat(errorId ? " " + errorId : "") : undefined
  }, /*#__PURE__*/_react["default"].createElement(StyledLegend, null, legend !== undefined ? legend : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Legend text")), hintId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(StyledDiv2, {
    id: hintId
  }, hint !== undefined ? hint : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Hint text"))) : "", errorId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(StyledDiv3, {
    id: errorId
  }, /*#__PURE__*/_react["default"].createElement(StyledSpan, null, "Error:"), error !== undefined ? error : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Error text"))) : "", /*#__PURE__*/_react["default"].createElement(StyledDiv4, null, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Fieldset contents"))));
};

var _default = FieldsetBlock;
exports["default"] = _default;
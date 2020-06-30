"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        font-size: 0.875rem;\n        line-height: 1.42857;\n        margin-bottom: 0.75rem;\n      "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        color: g-theme-print-color;\n        font-family: sans-serif;\n        font-size: 12pt;\n        line-height: 1.2;\n      "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      font-weight: 400;\n      font-size: 0.75rem;\n      line-height: 1.25;\n      margin-top: 0;\n      margin-bottom: 15px;\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        font-size: 1rem;\n        line-height: 1.25;\n        margin-bottom: 1.25rem;\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        color: g-theme-print-color;\n        font-family: sans-serif;\n        font-size: 14pt;\n        line-height: 1.2;\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      font-weight: 400;\n      font-size: 0.875rem;\n      line-height: 1.625;\n      margin-top: 0;\n      margin-bottom: 1rem;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        font-size: 1.1875rem;\n        line-height: 1.31579;\n        margin-bottom: 1.25rem;\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        color: g-theme-print-color;\n        font-family: sans-serif;\n        font-size: 14pt;\n        line-height: 1.15;\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      font-weight: 400;\n      font-size: 1rem;\n      line-height: 1.25;\n      margin-top: 0;\n      margin-bottom: 1rem;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        color: g-theme-print-color;\n        font-family: sans-serif;\n        font-size: 18pt;\n        line-height: 1.15;\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      font-weight: 400;\n      font-size: 1.5rem;\n      line-height: 1.625;\n      margin-top: 0;\n      margin-bottom: 1.25em;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: g-theme-color;\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 1.25rem;\n  line-height: 1.625;\n  margin-bottom: 1.25rem;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: g-theme-hint-color;\n  :first-child {\n    margin-top: 0px;\n  }\n  :last-child {\n    margin-bottom: 0px;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  ", "\n  @media print {\n    ", ";\n  }\n  ", "\n  @media print {\n    ", ";\n  }\n  @media (min-width: 40.0625em) {\n    ", ";\n  }\n  ", "\n  @media print {\n    ", ";\n  }\n  @media (min-width: 40.0625em) {\n    ", ";\n  }\n  ", "\n  @media print {\n    ", ";\n  }\n  @media (min-width: 40.0625em) {\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledP = _styledComponents["default"].p(_templateObject(), function (props) {
  return props.styleSize === "large" && _styledComponents["default"].css(_templateObject2());
}, function (props) {
  return props.styleSize === "large" && _styledComponents["default"].css(_templateObject3());
}, function (props) {
  return props.styleSize === "medium" && _styledComponents["default"].css(_templateObject4());
}, function (props) {
  return props.styleSize === "medium" && _styledComponents["default"].css(_templateObject5());
}, function (props) {
  return props.styleSize === "medium" && _styledComponents["default"].css(_templateObject6());
}, function (props) {
  return props.styleSize === "small" && _styledComponents["default"].css(_templateObject7());
}, function (props) {
  return props.styleSize === "small" && _styledComponents["default"].css(_templateObject8());
}, function (props) {
  return props.styleSize === "small" && _styledComponents["default"].css(_templateObject9());
}, function (props) {
  return props.styleSize === "x-small" && _styledComponents["default"].css(_templateObject10());
}, function (props) {
  return props.styleSize === "x-small" && _styledComponents["default"].css(_templateObject11());
}, function (props) {
  return props.styleSize === "x-small" && _styledComponents["default"].css(_templateObject12());
});

var P = function P(_ref) {
  var styleSize = _ref.styleSize,
      marginBottom0 = _ref.marginBottom0,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledP, {
    styleSize: styleSize,
    marginBottom0: marginBottom0
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = P;
exports["default"] = _default;
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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    list-style: none;\n    padding-left: 0px;\n    margin-left: 0px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 0;\n    line-height: 32px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 0px !important;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["font-family: g-theme-font-family;\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nfont-weight: 400;\nfont-size: 1.25rem;\nline-height: 1.625;\ncolor: g-theme-color;\nmargin-top: 0;\nmargin-bottom: 1rem;\npadding-left: 20px;\nlist-style-type: disc;\n@media print{\nfont-family: sans-serif;;\n}\n@media (min-width: 40.0625em){\nfont-size: 1.1875rem;\nline-height: 1.31579;\nmargin-bottom: 1rem;;\n}\n@media print{\nfont-size: 14pt;\nline-height: 1.15;\ncolor: g-theme-print-color;;\n}\nmargin-top: 10px;\nmargin-top: 0.5rem;\n", "\n", "\n", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledUl = _styledComponents["default"].ul(_templateObject(), function (props) {
  return props.marginBottom0 && _styledComponents["default"].css(_templateObject2());
}, function (props) {
  return props.spacing && _styledComponents["default"].css(_templateObject3());
}, function (props) {
  return props.noBullet && _styledComponents["default"].css(_templateObject4());
});

var Ul = function Ul(_ref) {
  var spacing = _ref.spacing,
      marginBottom0 = _ref.marginBottom0,
      noBullet = _ref.noBullet,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledUl, {
    spacing: spacing,
    marginBottom0: marginBottom0,
    noBullet: noBullet
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = Ul;
exports["default"] = _default;
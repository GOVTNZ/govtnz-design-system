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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        -webkit-box-align: end;\n        -ms-flex-align: end;\n        align-items: flex-end;\n      "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n      "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        -webkit-box-align: start;\n        -ms-flex-align: start;\n        align-items: flex-start;\n      "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        -webkit-box-align: end;\n        -ms-flex-align: end;\n        align-items: flex-end;\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        -webkit-box-align: start;\n        -ms-flex-align: start;\n        align-items: flex-start;\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        -webkit-box-align: end;\n        -ms-flex-align: end;\n        align-items: flex-end;\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        -webkit-box-align: start;\n        -ms-flex-align: start;\n        align-items: flex-start;\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      -webkit-box-align: end;\n      -ms-flex-align: end;\n      align-items: flex-end;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      -webkit-box-align: start;\n      -ms-flex-align: start;\n      align-items: flex-start;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  box-sizing: border-box;\n  display: flex;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n  flex-direction: column-reverse;\n  flex-direction: row;\n  ", "\n  ", "\n@media only screen and (min-width: 48em) {\n    ", ";\n    ", ";\n    ", ";\n    -ms-flex-direction: column-reverse;\n    flex-direction: column-reverse;\n    flex-direction: row;\n  }\n  @media only screen and (min-width: 64em) {\n    ", ";\n    ", ";\n    ", ";\n    -ms-flex-direction: column-reverse;\n    flex-direction: column-reverse;\n    flex-direction: row;\n  }\n  @media only screen and (min-width: 75em) {\n    ", ";\n    ", ";\n    ", ";\n    -ms-flex-direction: column-reverse;\n    flex-direction: column-reverse;\n    flex-direction: row;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledDiv = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.xsVerticalAlign === "top" && _styledComponents["default"].css(_templateObject2());
}, function (props) {
  return props.xsVerticalAlign === "bottom" && _styledComponents["default"].css(_templateObject3());
}, function (props) {
  return props.smVerticalAlign === "top" && _styledComponents["default"].css(_templateObject4());
}, function (props) {
  return props.smVerticalAlign === "middle" && _styledComponents["default"].css(_templateObject5());
}, function (props) {
  return props.smVerticalAlign === "bottom" && _styledComponents["default"].css(_templateObject6());
}, function (props) {
  return props.mdVerticalAlign === "top" && _styledComponents["default"].css(_templateObject7());
}, function (props) {
  return props.mdVerticalAlign === "middle" && _styledComponents["default"].css(_templateObject8());
}, function (props) {
  return props.mdVerticalAlign === "bottom" && _styledComponents["default"].css(_templateObject9());
}, function (props) {
  return props.lgVerticalAlign === "top" && _styledComponents["default"].css(_templateObject10());
}, function (props) {
  return props.lgVerticalAlign === "middle" && _styledComponents["default"].css(_templateObject11());
}, function (props) {
  return props.lgVerticalAlign === "bottom" && _styledComponents["default"].css(_templateObject12());
});

var FlexRow = function FlexRow(_ref) {
  var xsVerticalAlign = _ref.xsVerticalAlign,
      smVerticalAlign = _ref.smVerticalAlign,
      mdVerticalAlign = _ref.mdVerticalAlign,
      lgVerticalAlign = _ref.lgVerticalAlign,
      xsReversed = _ref.xsReversed,
      smReversed = _ref.smReversed,
      mdReversed = _ref.mdReversed,
      lgReversed = _ref.lgReversed,
      isReversed = _ref.isReversed,
      className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledDiv, {
    xsVerticalAlign: xsVerticalAlign,
    smVerticalAlign: smVerticalAlign,
    mdVerticalAlign: mdVerticalAlign,
    lgVerticalAlign: lgVerticalAlign,
    xsReversed: xsReversed,
    smReversed: smReversed,
    mdReversed: mdReversed,
    lgReversed: lgReversed,
    isReversed: isReversed,
    className: className
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Columns..."));
};

var _default = FlexRow;
exports["default"] = _default;
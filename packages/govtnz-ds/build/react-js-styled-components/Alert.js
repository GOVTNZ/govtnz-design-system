"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    border: solid 1px red;\n    border-color: var(--g-theme-error, red);\n    border-left-width: 1em;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    border: solid 1px green;\n    border-color: var(--g-theme-success, green);\n    border-left-width: 1em;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    border: 1px solid orange;\n    border-color: var(--g-theme-warning, orange);\n    border-left-width: 1em;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    border: solid 1px blue;\n    border-color: var(--g-theme-info, blue);\n    border-left-width: 1em;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["border-radius: 5px;\nmargin-bottom: 1em;\npadding: 0.5em 1em;\n", "\n", "\n", "\n", ""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    border: solid 1px red;\n    border-color: var(--g-theme-error, red);\n    border-left-width: 1em;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    border: solid 1px green;\n    border-color: var(--g-theme-success, green);\n    border-left-width: 1em;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    border: 1px solid orange;\n    border-color: var(--g-theme-warning, orange);\n    border-left-width: 1em;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    border: solid 1px blue;\n    border-color: var(--g-theme-info, blue);\n    border-left-width: 1em;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["border-radius: 5px;\nmargin-bottom: 1em;\npadding: 0.5em 1em;\n", "\n", "\n", "\n", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledDiv = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.level === "info" && _styledComponents["default"].css(_templateObject2());
}, function (props) {
  return props.level === "warning" && _styledComponents["default"].css(_templateObject3());
}, function (props) {
  return props.level === "success" && _styledComponents["default"].css(_templateObject4());
}, function (props) {
  return props.level === "error" && _styledComponents["default"].css(_templateObject5());
});

var StyledDiv2 = _styledComponents["default"].div(_templateObject6(), function (props) {
  return props.level === "info" && _styledComponents["default"].css(_templateObject7());
}, function (props) {
  return props.level === "warning" && _styledComponents["default"].css(_templateObject8());
}, function (props) {
  return props.level === "success" && _styledComponents["default"].css(_templateObject9());
}, function (props) {
  return props.level === "error" && _styledComponents["default"].css(_templateObject10());
});

var Alert = function Alert(_ref) {
  var mode = _ref.mode,
      level = _ref.level,
      children = _ref.children,
      headingId = _ref.headingId;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, mode === "live" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-atomic": "true",
    "aria-live": "polite",
    role: "note"
  }, /*#__PURE__*/_react["default"].createElement(StyledDiv, {
    level: level
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example alert content ")))) : "", mode !== "live" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-labelledby": headingId,
    role: "note",
    tabIndex: -1
  }, /*#__PURE__*/_react["default"].createElement(StyledDiv2, {
    level: level
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example alert content ")))) : "");
};

var _default = Alert;
exports["default"] = _default;
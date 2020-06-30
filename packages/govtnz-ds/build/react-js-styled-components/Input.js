"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    max-width: 5.4ex;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    max-width: 7.2ex;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    max-width: 9ex;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    max-width: 10.8ex;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    max-width: 23ex;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    max-width: 41ex;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    max-width: 59ex;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    border: 1px solid g-theme-error-border-color;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["font-family: g-theme-font-family;\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nfont-weight: 400;\nfont-size: 1rem;\nline-height: 1.25;\nbox-sizing: border-box;\nwidth: 100%;\nheight: 40px;\nmargin-top: 0;\npadding: 0.5rem;\nborder: 1px solid g-theme-form-border-color;\nborder-radius: 0;\n-webkit-appearance: none;\n-moz-appearance: none;\nappearance: none;\nbackground-color: g-theme-form-background-color;\n:-webkit-autofill,:-webkit-autofill:hover,:-webkit-autofill:focus,:valid,:invalid{\n-webkit-text-fill-color: g-theme-color !important;\nbackground-color: g-theme-form-background-color;\ncolor: g-theme-color;\nborder: 1px solid g-theme-form-border-color;\nbox-shadow: 0 0 0px 1000px g-theme-form-background-color inset;\n-webkit-box-shadow: 0 0 0px 1000px g-theme-form-background-color inset;\n}\n@media print{\nfont-family: sans-serif;;\n}\n@media (min-width: 40.0625em){\nfont-size: 1.1875rem;\nline-height: 1.31579;;\n}\n@media print{\nfont-size: 14pt;\nline-height: 1.15;;\n}\n:focus{\noutline: 3px solid g-theme-focus-ring-color;\noutline-offset: 0;\n}\n::-webkit-outer-spin-button,::-webkit-inner-spin-button{\nmargin: 0;\n-webkit-appearance: none;\n}\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\nmargin-top: 0px;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledInput = _styledComponents["default"].input(_templateObject(), function (props) {
  return props.error && _styledComponents["default"].css(_templateObject2());
}, function (props) {
  return props.width === "30" && _styledComponents["default"].css(_templateObject3());
}, function (props) {
  return props.width === "20" && _styledComponents["default"].css(_templateObject4());
}, function (props) {
  return props.width === "10" && _styledComponents["default"].css(_templateObject5());
}, function (props) {
  return props.width === "5" && _styledComponents["default"].css(_templateObject6());
}, function (props) {
  return props.width === "4" && _styledComponents["default"].css(_templateObject7());
}, function (props) {
  return props.width === "3" && _styledComponents["default"].css(_templateObject8());
}, function (props) {
  return props.width === "2" && _styledComponents["default"].css(_templateObject9());
});

var Input = function Input(_ref) {
  var width = _ref.width,
      error = _ref.error,
      id = _ref.id,
      describedBy = _ref.describedBy,
      required = _ref.required,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      name = _ref.name,
      value = _ref.value,
      spellCheck = _ref.spellCheck,
      maxLength = _ref.maxLength,
      autoComplete = _ref.autoComplete,
      onChange = _ref.onChange,
      ref = _ref.ref;
  return /*#__PURE__*/_react["default"].createElement(StyledInput, {
    width: width,
    error: error,
    "aria-describedby": describedBy,
    id: id,
    name: name,
    type: "text",
    required: required,
    disabled: disabled !== undefined ? disabled.toString() === "true" : undefined,
    readOnly: readOnly,
    autoFocus: autoFocus,
    value: value,
    spellCheck: spellCheck,
    maxLength: maxLength,
    autoComplete: autoComplete,
    onChange: onChange,
    ref: ref
  });
};

var _default = Input;
exports["default"] = _default;
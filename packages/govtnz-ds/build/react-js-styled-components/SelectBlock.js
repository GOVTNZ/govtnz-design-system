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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      border: 1px solid g-theme-error-border-color;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  box-sizing: border-box;\n  max-width: 100%;\n  height: auto;\n  padding: 0.4rem 2.5rem 0.5rem 0.6rem;\n  border: 1px solid g-theme-form-border-color;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background-repeat: no-repeat;\n  border-radius: 0;\n  background-position: right 0.7em top 50%;\n  background-color: g-theme-select-background-color;\n  color: g-theme-form-color;\n  background-size: 1rem auto;\n  background-image: url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='14' height='8.5' viewBox='0 0 16 10.5'%3E%3Cpath d='M1 1 L8 8.5 L15 1' stroke-width='3' stroke='currentColor' fill='transparent' /%3E%3C/svg%3E\");\n  :-webkit-autofill,\n  :-webkit-autofill:hover,\n  :-webkit-autofill:focus,\n  :valid,\n  :invalid {\n    background-color: g-theme-form-background-color;\n    -webkit-text-fill-color: g-theme-color !important;\n    color: g-theme-color;\n    border: 1px solid g-theme-form-border-color;\n  }\n  @media print {\n    font-family: sans-serif;\n    font-size: 14pt;\n    line-height: 1.25;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.25;\n  }\n  :focus {\n    outline: 3px solid g-theme-focus-ring-color;\n    outline-offset: 0;\n  }\n  ", "\n  ::-ms-expand {\n    display: none;\n  }\n  margin-top: 0px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: bold;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: g-theme-color;\n  display: block;\n  margin-bottom: 5px;\n  @media print {\n    font-family: sans-serif;\n    font-size: 14pt;\n    line-height: 1.15;\n    color: g-theme-print-color;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  margin-top: 0px;\n"]);

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

var StyledLabel = _styledComponents["default"].label(_templateObject2());

var StyledSelect = _styledComponents["default"].select(_templateObject3(), function (props) {
  return props.error && _styledComponents["default"].css(_templateObject4());
});

var SelectBlock = function SelectBlock(_ref) {
  var errorId = _ref.errorId,
      selectId = _ref.selectId,
      label = _ref.label,
      error = _ref.error,
      name = _ref.name,
      required = _ref.required,
      multiple = _ref.multiple,
      onChange = _ref.onChange,
      ref = _ref.ref,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledDiv, {
    errorId: errorId
  }, /*#__PURE__*/_react["default"].createElement(StyledLabel, {
    htmlFor: selectId
  }, label !== undefined ? label : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Example label text")), /*#__PURE__*/_react["default"].createElement(StyledSelect, {
    error: error,
    id: selectId,
    name: name,
    required: required,
    multiple: multiple,
    onChange: onChange,
    ref: ref
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("option", null, "Options"))));
};

var _default = SelectBlock;
exports["default"] = _default;
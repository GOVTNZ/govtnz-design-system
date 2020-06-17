"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  margin-bottom: 15px;\n  color: #595959;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  margin-top: -5px;\n  display: block;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-top: 0px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: bold;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #2a2a2a;\n  display: block;\n  margin-bottom: 5px;\n  @media print {\n    color: #000000;\n  }\n  display: inline-block;\n  margin-bottom: 0;\n  padding: 8px 15px 5px;\n  cursor: pointer;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  ::before {\n    content: \"\";\n    box-sizing: border-box;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 40px;\n    height: 40px;\n    border: 2px solid currentColor;\n    background: transparent;\n  }\n  ::after {\n    content: \"\";\n    position: absolute;\n    top: 11px;\n    left: 9px;\n    width: 18px;\n    height: 7px;\n    -webkit-transform: rotate(-45deg);\n    -ms-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n    border: solid;\n    border-width: 0 0 5px 5px;\n    border-top-color: transparent;\n    opacity: 0;\n    background: transparent;\n  }\n  :focus + .g-checkboxes__label::before,\n  :focus + .g-checkboxes__label::before {\n    outline: 3px solid transparent;\n    outline-offset: 3px;\n    box-shadow: 0 0 0 3px #b53cde;\n  }\n  :checked + .g-checkboxes__label::after,\n  :checked + .g-checkboxes__label::after {\n    opacity: 1;\n  }\n  :disabled + .g-checkboxes__label,\n  :disabled + .g-checkboxes__label {\n    cursor: default;\n  }\n  :disabled + .g-checkboxes__label,\n  :disabled + .g-checkboxes__label {\n    opacity: 0.5;\n  }\n  margin-top: 0px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  margin: 0;\n  opacity: 0;\n  margin-top: 0px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  position: relative;\n  min-height: 40px;\n  margin-bottom: 16px;\n  padding: 0 0 0 40px;\n  clear: left;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  :last-child,\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  margin-top: 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledDiv = _styledComponents["default"].div(_templateObject());

var StyledInput = _styledComponents["default"].input(_templateObject2());

var StyledLabel = _styledComponents["default"].label(_templateObject3());

var StyledDiv2 = _styledComponents["default"].div(_templateObject4());

var StyledDiv3 = _styledComponents["default"].div(_templateObject5());

var StyledSpan = _styledComponents["default"].span(_templateObject6());

var CheckboxBlock = function CheckboxBlock(_ref) {
  var errorId = _ref.errorId,
      id = _ref.id,
      hintId = _ref.hintId,
      required = _ref.required,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      name = _ref.name,
      value = _ref.value,
      checked = _ref.checked,
      onChange = _ref.onChange,
      ref = _ref.ref,
      label = _ref.label,
      hint = _ref.hint,
      error = _ref.error;
  return /*#__PURE__*/_react["default"].createElement(StyledDiv, {
    errorId: errorId
  }, /*#__PURE__*/_react["default"].createElement(StyledInput, {
    "aria-describedby": hintId,
    id: id,
    type: "checkbox",
    required: required,
    disabled: disabled !== undefined ? disabled.toString() === "true" : undefined,
    readOnly: readOnly,
    autoFocus: autoFocus,
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    ref: ref
  }), /*#__PURE__*/_react["default"].createElement(StyledLabel, {
    htmlFor: id
  }, label !== undefined ? label : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Label text")), hintId !== undefined ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(StyledDiv2, {
    id: hintId
  }, hint !== undefined ? hint : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Hint text"))) : "", errorId !== undefined ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(StyledDiv3, {
    id: errorId
  }, /*#__PURE__*/_react["default"].createElement(StyledSpan, null, "Error:"), error !== undefined ? error : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Error text"))) : "");
};

var _default = CheckboxBlock;
exports["default"] = _default;
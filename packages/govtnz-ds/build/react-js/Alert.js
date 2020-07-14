"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Alert = function Alert(_ref) {
  var mode = _ref.mode,
      level = _ref.level,
      headingId = _ref.headingId,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, mode === "live" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, level === "info" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, headingId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-atomic": "true",
    "aria-labelledby": headingId,
    "aria-live": "polite",
    role: "note",
    tabIndex: -1
  }, children ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert g-alert--info"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", "Example alert content", " "))) : "")) : "", !headingId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    role: "note"
  }, children ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert g-alert--info"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", "Example alert content", " "))) : "")) : "") : "") : "", mode === "live" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, level === "warning" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, headingId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-atomic": "true",
    "aria-labelledby": headingId,
    "aria-live": "polite",
    role: "note",
    tabIndex: -1
  }, children ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert g-alert--warning"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", "Example alert content", " "))) : "")) : "", !headingId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-atomic": "true",
    "aria-live": "polite",
    role: "note",
    tabIndex: -1
  }, children ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert g-alert--warning"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", "Example alert content", " "))) : "")) : "") : "") : "", mode === "live" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, level === "success" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, headingId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-atomic": "true",
    "aria-labelledby": headingId,
    "aria-live": "polite",
    role: "note",
    tabIndex: -1
  }, children ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert g-alert--success"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", "Example alert content", " "))) : "")) : "", !headingId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-atomic": "true",
    "aria-live": "polite",
    role: "note",
    tabIndex: -1
  }, children ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert g-alert--success"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", "Example alert content", " "))) : "")) : "") : "") : "", mode === "live" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, level === "error" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, headingId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-atomic": "true",
    "aria-labelledby": headingId,
    "aria-live": "polite",
    role: "note",
    tabIndex: -1
  }, children ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert g-alert--error"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", "Example alert content", " "))) : "")) : "", !headingId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-atomic": "true",
    "aria-live": "polite",
    role: "note",
    tabIndex: -1
  }, children ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert g-alert--error"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", "Example alert content", " "))) : "")) : "") : "") : "", mode !== "live" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, level === "info" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, headingId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-labelledby": headingId,
    role: "note"
  }, children ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert g-alert--info"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", "Example alert content", " "))) : "")) : "", !headingId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    role: "note"
  }, children ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert g-alert--info"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", "Example alert content", " "))) : "")) : "") : "") : "", mode !== "live" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, level === "warning" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, headingId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-labelledby": headingId,
    role: "note"
  }, children ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert g-alert--warning"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", "Example alert content", " "))) : "")) : "", !headingId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    role: "note"
  }, children ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert g-alert--warning"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", "Example alert content", " "))) : "")) : "") : "") : "", mode !== "live" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, level === "success" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, headingId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-labelledby": headingId,
    role: "note"
  }, children ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert g-alert--success"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", "Example alert content", " "))) : "")) : "", !headingId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    role: "note"
  }, children ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert g-alert--success"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", "Example alert content", " "))) : "")) : "") : "") : "", mode !== "live" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, level === "error" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, headingId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-labelledby": headingId,
    role: "note"
  }, children ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert g-alert--error"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", "Example alert content", " "))) : "")) : "", !headingId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    role: "note"
  }, children ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert g-alert--error"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", "Example alert content", " "))) : "")) : "") : "") : "");
};

var _default = Alert;
exports["default"] = _default;
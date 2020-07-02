"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  level: {
    info: "g-alert--info",
    warning: "g-alert--warning",
    success: "g-alert--success",
    error: "g-alert--error"
  }
};

var Alert = function Alert(_ref) {
  var mode = _ref.mode,
      level = _ref.level,
      children = _ref.children,
      headingId = _ref.headingId;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, mode === "live" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, level === "info" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-atomic": "true",
    "aria-live": "polite",
    role: "note"
  }, children !== undefined ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert".concat(constants.level[level] !== undefined ? " " + constants.level[level] : "")
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example alert content "))) : "")) : "") : "", mode === "live" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, level === "warning" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-atomic": "true",
    "aria-live": "polite",
    role: "note"
  }, children !== undefined ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert".concat(constants.level[level] !== undefined ? " " + constants.level[level] : "")
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example alert content "))) : "")) : "") : "", mode === "live" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, level === "success" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-atomic": "true",
    "aria-live": "polite",
    role: "note"
  }, children !== undefined ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert".concat(constants.level[level] !== undefined ? " " + constants.level[level] : "")
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example alert content "))) : "")) : "") : "", mode === "live" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, level === "error" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-atomic": "true",
    "aria-live": "polite",
    role: "note"
  }, children !== undefined ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert".concat(constants.level[level] !== undefined ? " " + constants.level[level] : "")
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example alert content "))) : "")) : "") : "", mode !== "live" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, level === "info" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-labelledby": headingId,
    role: "note"
  }, children !== undefined ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert".concat(constants.level[level] !== undefined ? " " + constants.level[level] : "")
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example alert content "))) : "")) : "") : "", mode !== "live" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, level === "warning" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-labelledby": headingId,
    role: "note"
  }, children !== undefined ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert".concat(constants.level[level] !== undefined ? " " + constants.level[level] : "")
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example alert content "))) : "")) : "") : "", mode !== "live" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, level === "success" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-labelledby": headingId,
    role: "note",
    tabIndex: -1
  }, children !== undefined ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert".concat(constants.level[level] !== undefined ? " " + constants.level[level] : "")
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example alert content "))) : "")) : "") : "", mode !== "live" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, level === "error" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-labelledby": headingId,
    role: "note",
    tabIndex: -1
  }, children !== undefined ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-alert".concat(constants.level[level] !== undefined ? " " + constants.level[level] : "")
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Example alert content "))) : "")) : "") : "");
};

var _default = Alert;
exports["default"] = _default;
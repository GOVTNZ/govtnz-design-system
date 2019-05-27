"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  target: {
    Blank: "_blank",
    Top: "_top",
    Self: "_self",
    Parent: "_parent"
  },
  target2: {
    Blank: "_blank",
    Top: "_top",
    Self: "_self",
    Parent: "_parent"
  }
};

var ErrorSummary = function ErrorSummary(_ref) {
  var errorSummaryTitle = _ref.errorSummaryTitle,
      href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      href2 = _ref.href2,
      rel2 = _ref.rel2,
      target2 = _ref.target2;
  return _react["default"].createElement("div", {
    "aria-labelledby": errorSummaryTitle,
    className: "g-error-summary optional-extra-class",
    "data-module": "error-summary",
    role: "alert",
    tabIndex: -1
  }, _react["default"].createElement("h2", {
    className: "g-error-summary__title",
    id: errorSummaryTitle
  }, "Message to alert the user to a problem goes here"), _react["default"].createElement("div", {
    className: "g-error-summary__body"
  }, _react["default"].createElement("p", null, "Optional description of the errors and how to correct them"), _react["default"].createElement("ul", {
    className: "g-errorSummary-list g-error-summary__list"
  }, _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: href,
    rel: rel,
    target: constants.target[target]
  }, "Descriptive link to the question with an error")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: href2,
    rel: rel2,
    target: constants.target2[target2]
  }, "Descriptive link to the question with an error")))));
};

ErrorSummary.props = ["errorSummaryTitle", "href", "rel", "target", "href2", "rel2", "target2"];
var _default = ErrorSummary;
exports["default"] = _default;
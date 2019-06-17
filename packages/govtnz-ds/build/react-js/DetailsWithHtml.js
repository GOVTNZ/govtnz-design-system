"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var DetailsWithHtml = function DetailsWithHtml(_ref) {
  var open = _ref.open,
      detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0 = _ref.detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0;
  return _react["default"].createElement("details", {
    className: "g-detailsWithHtml-details",
    role: "group",
    open: open
  }, _react["default"].createElement("summary", {
    "aria-controls": detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0,
    "aria-expanded": "false",
    className: "g-detailsWithHtml-details__summary",
    role: "button"
  }, _react["default"].createElement("span", {
    className: "g-detailsWithHtml-details__summary-text"
  }, "Where to find your National Insurance Number")), _react["default"].createElement("div", {
    "aria-hidden": "true",
    className: "g-detailsWithHtml-details__text",
    id: detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0
  }, "Your National Insurance number can be found on", _react["default"].createElement("ul", null, _react["default"].createElement("li", null, "your National Insurance card"), _react["default"].createElement("li", null, "your payslip"), _react["default"].createElement("li", null, "P60"), _react["default"].createElement("li", null, "benefits information"), _react["default"].createElement("li", null, "tax return"))));
};

var _default = DetailsWithHtml;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var DetailsExpanded = function DetailsExpanded(_ref) {
  var helpWithNationality = _ref.helpWithNationality,
      open = _ref.open,
      detailsContent3E1674E973084F93B79C1A8694B6F4D5 = _ref.detailsContent3E1674E973084F93B79C1A8694B6F4D5;
  return _react["default"].createElement("details", {
    className: "g-detailsExpanded-details",
    id: helpWithNationality,
    open: open,
    role: "group"
  }, _react["default"].createElement("summary", {
    "aria-controls": detailsContent3E1674E973084F93B79C1A8694B6F4D5,
    "aria-expanded": "true",
    className: "g-detailsExpanded-details__summary",
    role: "button"
  }, _react["default"].createElement("span", {
    className: "g-detailsExpanded-details__summary-text"
  }, "Help with nationality")), _react["default"].createElement("div", {
    "aria-hidden": "false",
    className: "g-detailsExpanded-details__text",
    id: detailsContent3E1674E973084F93B79C1A8694B6F4D5
  }, "We need to know your nationality so we can work out which elections you\u2019re entitled to vote in. If you can\u2019t provide your nationality, you\u2019ll have to send copies of identity documents through the post."));
};

var _default = DetailsExpanded;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Details = function Details(_ref) {
  var open = _ref.open,
      detailsContent021Df3Ae2Ee5440B98CbFfc001B25657 = _ref.detailsContent021Df3Ae2Ee5440B98CbFfc001B25657;
  return _react["default"].createElement("details", {
    className: "g-details",
    role: "group",
    open: open
  }, _react["default"].createElement("summary", {
    "aria-controls": detailsContent021Df3Ae2Ee5440B98CbFfc001B25657,
    "aria-expanded": "false",
    className: "g-details__summary",
    role: "button"
  }, _react["default"].createElement("span", {
    className: "g-details__summary-text"
  }, "Help with nationality")), _react["default"].createElement("div", {
    "aria-hidden": "true",
    className: "g-details__text",
    id: detailsContent021Df3Ae2Ee5440B98CbFfc001B25657
  }, "We need to know your nationality so we can work out which elections you\u2019re entitled to vote in. If you can\u2019t provide your nationality, you\u2019ll have to send copies of identity documents through the post."));
};

Details.props = ["open", "detailsContent021Df3Ae2Ee5440B98CbFfc001B25657"];
var _default = Details;
exports["default"] = _default;
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

var BreadcrumbsWithLastBreadcrumbAsCurrentPage = function BreadcrumbsWithLastBreadcrumbAsCurrentPage(_ref) {
  var href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      href2 = _ref.href2,
      rel2 = _ref.rel2,
      target2 = _ref.target2;
  return _react["default"].createElement("div", {
    className: "g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs"
  }, _react["default"].createElement("ol", {
    className: "g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list"
  }, _react["default"].createElement("li", {
    className: "g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list-item"
  }, _react["default"].createElement("a", {
    className: "g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link",
    href: href,
    rel: rel,
    target: constants.target[target]
  }, "Home")), _react["default"].createElement("li", {
    className: "g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list-item"
  }, _react["default"].createElement("a", {
    className: "g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link",
    href: href2,
    rel: rel2,
    target: constants.target2[target2]
  }, "Passports, travel and living abroad")), _react["default"].createElement("li", {
    "aria-current": "page",
    className: "g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list-item"
  }, "Travel abroad")));
};

BreadcrumbsWithLastBreadcrumbAsCurrentPage.props = ["href", "rel", "target", "href2", "rel2", "target2"];
var _default = BreadcrumbsWithLastBreadcrumbAsCurrentPage;
exports["default"] = _default;
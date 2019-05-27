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
  },
  target3: {
    Blank: "_blank",
    Top: "_top",
    Self: "_self",
    Parent: "_parent"
  },
  target4: {
    Blank: "_blank",
    Top: "_top",
    Self: "_self",
    Parent: "_parent"
  },
  target5: {
    Blank: "_blank",
    Top: "_top",
    Self: "_self",
    Parent: "_parent"
  }
};

var SummaryList = function SummaryList(_ref) {
  var href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      href2 = _ref.href2,
      rel2 = _ref.rel2,
      target2 = _ref.target2,
      href3 = _ref.href3,
      rel3 = _ref.rel3,
      target3 = _ref.target3,
      href4 = _ref.href4,
      rel4 = _ref.rel4,
      target4 = _ref.target4,
      href5 = _ref.href5,
      rel5 = _ref.rel5,
      target5 = _ref.target5;
  return _react["default"].createElement("dl", {
    className: "g-summary-list"
  }, _react["default"].createElement("div", {
    className: "g-summary-list__row"
  }, _react["default"].createElement("dt", {
    className: "g-summary-list__key"
  }, "Name"), _react["default"].createElement("dd", {
    className: "g-summary-list__value"
  }, "Firstname Lastname"), _react["default"].createElement("dd", {
    className: "g-summary-list__actions"
  }, _react["default"].createElement("ul", {
    className: "g-summary-list__actions-list"
  }, _react["default"].createElement("li", {
    className: "g-summary-list__actions-list-item"
  }, _react["default"].createElement("a", {
    className: "g-summaryList-link",
    href: href,
    rel: rel,
    target: constants.target[target]
  }, "Edit", _react["default"].createElement("span", {
    className: "g-summaryList-visually-hidden"
  }, " name"))), _react["default"].createElement("li", {
    className: "g-summary-list__actions-list-item"
  }, _react["default"].createElement("a", {
    className: "g-summaryList-link",
    href: href2,
    rel: rel2,
    target: constants.target2[target2]
  }, "Delete", _react["default"].createElement("span", {
    className: "g-summaryList-visually-hidden"
  }, " name")))))), _react["default"].createElement("div", {
    className: "g-summary-list__row"
  }, _react["default"].createElement("dt", {
    className: "g-summary-list__key"
  }, "Date of birth"), _react["default"].createElement("dd", {
    className: "g-summary-list__value"
  }, "13/08/1980"), _react["default"].createElement("dd", {
    className: "g-summary-list__actions"
  }, _react["default"].createElement("a", {
    className: "g-summaryList-link",
    href: href3,
    rel: rel3,
    target: constants.target3[target3]
  }, "Change", _react["default"].createElement("span", {
    className: "g-summaryList-visually-hidden"
  }, " date of birth")))), _react["default"].createElement("div", {
    className: "g-summary-list__row"
  }, _react["default"].createElement("dt", {
    className: "g-summary-list__key"
  }, "Contact information"), _react["default"].createElement("dd", {
    className: "g-summary-list__value"
  }, _react["default"].createElement("p", {
    className: "g-summaryList-body"
  }, "email@email.com"), _react["default"].createElement("p", {
    className: "g-summaryList-body"
  }, "Address line 1", _react["default"].createElement("br", null), "Address line 2", _react["default"].createElement("br", null), "Address line 3", _react["default"].createElement("br", null), "Address line 4", _react["default"].createElement("br", null), "Address line 5")), _react["default"].createElement("dd", {
    className: "g-summary-list__actions"
  }, _react["default"].createElement("ul", {
    className: "g-summary-list__actions-list"
  }, _react["default"].createElement("li", {
    className: "g-summary-list__actions-list-item"
  }, _react["default"].createElement("a", {
    className: "g-summaryList-link",
    href: href4,
    rel: rel4,
    target: constants.target4[target4]
  }, "Edit", _react["default"].createElement("span", {
    className: "g-summaryList-visually-hidden"
  }, " ", "contact information"))), _react["default"].createElement("li", {
    className: "g-summary-list__actions-list-item"
  }, _react["default"].createElement("a", {
    className: "g-summaryList-link",
    href: href5,
    rel: rel5,
    target: constants.target5[target5]
  }, "Change", _react["default"].createElement("span", {
    className: "g-summaryList-visually-hidden"
  }, "contact information")))))));
};

SummaryList.props = ["href", "rel", "target", "href2", "rel2", "target2", "href3", "rel3", "target3", "href4", "rel4", "target4", "href5", "rel5", "target5"];
var _default = SummaryList;
exports["default"] = _default;
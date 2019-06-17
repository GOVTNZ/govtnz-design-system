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
  }
};

var Tabs = function Tabs(_ref) {
  var tabPastDay = _ref.tabPastDay,
      pastDay = _ref.pastDay,
      href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      tabPastWeek = _ref.tabPastWeek,
      pastWeek = _ref.pastWeek,
      href2 = _ref.href2,
      rel2 = _ref.rel2,
      target2 = _ref.target2,
      tabPastMonth = _ref.tabPastMonth,
      pastMonth = _ref.pastMonth,
      href3 = _ref.href3,
      rel3 = _ref.rel3,
      target3 = _ref.target3,
      tabPastYear = _ref.tabPastYear,
      pastYear = _ref.pastYear,
      href4 = _ref.href4,
      rel4 = _ref.rel4,
      target4 = _ref.target4;
  return _react["default"].createElement("div", {
    className: "g-tabs",
    "data-module": "tabs"
  }, _react["default"].createElement("h2", {
    className: "g-tabs__title"
  }, "Contents"), _react["default"].createElement("ul", {
    className: "g-tabs__list",
    role: "tablist"
  }, _react["default"].createElement("li", {
    className: "g-tabs__list-item",
    role: "presentation"
  }, _react["default"].createElement("a", {
    "aria-controls": pastDay,
    "aria-selected": "true",
    className: "g-tabs__tab g-tabs__tab--selected",
    href: href,
    id: tabPastDay,
    role: "tab",
    tabIndex: 0,
    rel: rel,
    target: constants.target[target]
  }, "Past day")), _react["default"].createElement("li", {
    className: "g-tabs__list-item",
    role: "presentation"
  }, _react["default"].createElement("a", {
    "aria-controls": pastWeek,
    "aria-selected": "false",
    className: "g-tabs__tab",
    href: href2,
    id: tabPastWeek,
    role: "tab",
    tabIndex: -1,
    rel: rel2,
    target: constants.target2[target2]
  }, "Past week")), _react["default"].createElement("li", {
    className: "g-tabs__list-item",
    role: "presentation"
  }, _react["default"].createElement("a", {
    "aria-controls": pastMonth,
    "aria-selected": "false",
    className: "g-tabs__tab",
    href: href3,
    id: tabPastMonth,
    role: "tab",
    tabIndex: -1,
    rel: rel3,
    target: constants.target3[target3]
  }, "Past month")), _react["default"].createElement("li", {
    className: "g-tabs__list-item",
    role: "presentation"
  }, _react["default"].createElement("a", {
    "aria-controls": pastYear,
    "aria-selected": "false",
    className: "g-tabs__tab",
    href: href4,
    id: tabPastYear,
    role: "tab",
    tabIndex: -1,
    rel: rel4,
    target: constants.target4[target4]
  }, "Past year"))), _react["default"].createElement("section", {
    "aria-labelledby": tabPastDay,
    className: "g-tabs__panel",
    id: pastDay,
    role: "tabpanel"
  }, _react["default"].createElement("h2", {
    className: "g-tabs-heading-l"
  }, "Past day"), _react["default"].createElement("table", {
    className: "g-tabs-table"
  }, _react["default"].createElement("thead", {
    className: "g-tabs-table__head"
  }, _react["default"].createElement("tr", {
    className: "g-tabs-table__row"
  }, "Case manager Cases opened Cases closed")), _react["default"].createElement("tbody", {
    className: "g-tabs-table__body"
  }, _react["default"].createElement("tr", {
    className: "g-tabs-table__row"
  }, "David Francis 3 0"), _react["default"].createElement("tr", {
    className: "g-tabs-table__row"
  }, "Paul Farmer 1 0"), _react["default"].createElement("tr", {
    className: "g-tabs-table__row"
  }, "Rita Patel 2 0")))), _react["default"].createElement("section", {
    "aria-labelledby": tabPastWeek,
    className: "g-tabs__panel g-tabs__panel--hidden",
    id: pastWeek,
    role: "tabpanel"
  }, _react["default"].createElement("h2", {
    className: "g-tabs-heading-l"
  }, "Past week"), _react["default"].createElement("table", {
    className: "g-tabs-table"
  }, _react["default"].createElement("thead", {
    className: "g-tabs-table__head"
  }, _react["default"].createElement("tr", {
    className: "g-tabs-table__row"
  }, "Case manager Cases opened Cases closed")), _react["default"].createElement("tbody", {
    className: "g-tabs-table__body"
  }, _react["default"].createElement("tr", {
    className: "g-tabs-table__row"
  }, "David Francis 24 18"), _react["default"].createElement("tr", {
    className: "g-tabs-table__row"
  }, "Paul Farmer 16 20"), _react["default"].createElement("tr", {
    className: "g-tabs-table__row"
  }, "Rita Patel 24 27")))), _react["default"].createElement("section", {
    "aria-labelledby": tabPastMonth,
    className: "g-tabs__panel g-tabs__panel--hidden",
    id: pastMonth,
    role: "tabpanel"
  }, _react["default"].createElement("h2", {
    className: "g-tabs-heading-l"
  }, "Past month"), _react["default"].createElement("table", {
    className: "g-tabs-table"
  }, _react["default"].createElement("thead", {
    className: "g-tabs-table__head"
  }, _react["default"].createElement("tr", {
    className: "g-tabs-table__row"
  }, "Case manager Cases opened Cases closed")), _react["default"].createElement("tbody", {
    className: "g-tabs-table__body"
  }, _react["default"].createElement("tr", {
    className: "g-tabs-table__row"
  }, "David Francis 98 95"), _react["default"].createElement("tr", {
    className: "g-tabs-table__row"
  }, "Paul Farmer 122 131"), _react["default"].createElement("tr", {
    className: "g-tabs-table__row"
  }, "Rita Patel 126 142")))), _react["default"].createElement("section", {
    "aria-labelledby": tabPastYear,
    className: "g-tabs__panel g-tabs__panel--hidden",
    id: pastYear,
    role: "tabpanel"
  }, _react["default"].createElement("h2", {
    className: "g-tabs-heading-l"
  }, "Past year"), _react["default"].createElement("table", {
    className: "g-tabs-table"
  }, _react["default"].createElement("thead", {
    className: "g-tabs-table__head"
  }, _react["default"].createElement("tr", {
    className: "g-tabs-table__row"
  }, "Case manager Cases opened Cases closed")), _react["default"].createElement("tbody", {
    className: "g-tabs-table__body"
  }, _react["default"].createElement("tr", {
    className: "g-tabs-table__row"
  }, "David Francis 1380 1472"), _react["default"].createElement("tr", {
    className: "g-tabs-table__row"
  }, "Paul Farmer 1129 1083"), _react["default"].createElement("tr", {
    className: "g-tabs-table__row"
  }, "Rita Patel 1539 1265")))));
};

var _default = Tabs;
exports["default"] = _default;
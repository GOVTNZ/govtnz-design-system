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

var TabsTabsWithAnchorInPanel = function TabsTabsWithAnchorInPanel(_ref) {
  var tabTab1 = _ref.tabTab1,
      tab1 = _ref.tab1,
      href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      tabTab2 = _ref.tabTab2,
      tab2 = _ref.tab2,
      href2 = _ref.href2,
      rel2 = _ref.rel2,
      target2 = _ref.target2,
      href3 = _ref.href3,
      rel3 = _ref.rel3,
      target3 = _ref.target3,
      anchor = _ref.anchor,
      href4 = _ref.href4,
      rel4 = _ref.rel4,
      target4 = _ref.target4;
  return _react["default"].createElement("div", {
    className: "g-tabsTabsWithAnchorInPanel-tabs",
    "data-module": "tabs"
  }, _react["default"].createElement("h2", {
    className: "g-tabsTabsWithAnchorInPanel-tabs__title"
  }, "Contents"), _react["default"].createElement("ul", {
    className: "g-tabsTabsWithAnchorInPanel-tabs__list",
    role: "tablist"
  }, _react["default"].createElement("li", {
    className: "g-tabsTabsWithAnchorInPanel-tabs__list-item",
    role: "presentation"
  }, _react["default"].createElement("a", {
    "aria-controls": tab1,
    "aria-selected": "true",
    className: "g-tabsTabsWithAnchorInPanel-tabs__tab g-tabsTabsWithAnchorInPanel-tabs__tab--selected",
    href: href,
    id: tabTab1,
    role: "tab",
    tabIndex: 0,
    rel: rel,
    target: constants.target[target]
  }, "Tab 1")), _react["default"].createElement("li", {
    className: "g-tabsTabsWithAnchorInPanel-tabs__list-item",
    role: "presentation"
  }, _react["default"].createElement("a", {
    "aria-controls": tab2,
    "aria-selected": "false",
    className: "g-tabsTabsWithAnchorInPanel-tabs__tab",
    href: href2,
    id: tabTab2,
    role: "tab",
    tabIndex: -1,
    rel: rel2,
    target: constants.target2[target2]
  }, "Tab 2"))), _react["default"].createElement("section", {
    "aria-labelledby": tabTab1,
    className: "g-tabsTabsWithAnchorInPanel-tabs__panel",
    id: tab1,
    role: "tabpanel"
  }, _react["default"].createElement("h2", {
    className: "g-tabsTabsWithAnchorInPanel-heading-l"
  }, "Tab 1"), _react["default"].createElement("p", null, "Testing that when you click the anchor it moves to the anchor point successfully"), _react["default"].createElement("a", {
    className: "g-tabsTabsWithAnchorInPanel-link",
    href: href3,
    rel: rel3,
    target: constants.target3[target3]
  }, "Anchor"), _react["default"].createElement("a", {
    id: anchor,
    tabIndex: 0,
    href: href4,
    rel: rel4,
    target: constants.target4[target4]
  }, "Anchor Point")), _react["default"].createElement("section", {
    "aria-labelledby": tabTab2,
    className: "g-tabsTabsWithAnchorInPanel-tabs__panel g-tabsTabsWithAnchorInPanel-tabs__panel--hidden",
    id: tab2,
    role: "tabpanel"
  }, _react["default"].createElement("h2", {
    className: "g-tabsTabsWithAnchorInPanel-heading-l"
  }, "Tab 2")));
};

TabsTabsWithAnchorInPanel.props = ["tabTab1", "tab1", "href", "rel", "target", "tabTab2", "tab2", "href2", "rel2", "target2", "href3", "rel3", "target3", "anchor", "href4", "rel4", "target4"];
var _default = TabsTabsWithAnchorInPanel;
exports["default"] = _default;
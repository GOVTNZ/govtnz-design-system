"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const constants = {
    target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target3: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target4: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};
const TabsTabsWithAnchorInPanel = ({ tabTab1, tab1, href, rel, target, tabTab2, tab2, href2, rel2, target2, href3, rel3, target3, anchor, href4, rel4, target4 }) => (React.createElement("div", { className: "g-tabsTabsWithAnchorInPanel-tabs", "data-module": "tabs" },
    React.createElement("h2", { className: "g-tabsTabsWithAnchorInPanel-tabs__title" }, "Contents"),
    React.createElement("ul", { className: "g-tabsTabsWithAnchorInPanel-tabs__list", role: "tablist" },
        React.createElement("li", { className: "g-tabsTabsWithAnchorInPanel-tabs__list-item", role: "presentation" },
            React.createElement("a", { "aria-controls": tab1, "aria-selected": "true", className: "g-tabsTabsWithAnchorInPanel-tabs__tab g-tabsTabsWithAnchorInPanel-tabs__tab--selected", href: href, id: tabTab1, role: "tab", tabIndex: 0, rel: rel, target: constants.target[target] }, "Tab 1")),
        React.createElement("li", { className: "g-tabsTabsWithAnchorInPanel-tabs__list-item", role: "presentation" },
            React.createElement("a", { "aria-controls": tab2, "aria-selected": "false", className: "g-tabsTabsWithAnchorInPanel-tabs__tab", href: href2, id: tabTab2, role: "tab", tabIndex: -1, rel: rel2, target: constants.target2[target2] }, "Tab 2"))),
    React.createElement("section", { "aria-labelledby": tabTab1, className: "g-tabsTabsWithAnchorInPanel-tabs__panel", id: tab1, role: "tabpanel" },
        React.createElement("h2", { className: "g-tabsTabsWithAnchorInPanel-heading-l" }, "Tab 1"),
        React.createElement("p", null, "Testing that when you click the anchor it moves to the anchor point successfully"),
        React.createElement("a", { className: "g-tabsTabsWithAnchorInPanel-link", href: href3, rel: rel3, target: constants.target3[target3] }, "Anchor"),
        React.createElement("a", { id: anchor, tabIndex: 0, href: href4, rel: rel4, target: constants.target4[target4] }, "Anchor Point")),
    React.createElement("section", { "aria-labelledby": tabTab2, className: "g-tabsTabsWithAnchorInPanel-tabs__panel g-tabsTabsWithAnchorInPanel-tabs__panel--hidden", id: tab2, role: "tabpanel" },
        React.createElement("h2", { className: "g-tabsTabsWithAnchorInPanel-heading-l" }, "Tab 2"))));
TabsTabsWithAnchorInPanel.props = [
    "tabTab1",
    "tab1",
    "href",
    "rel",
    "target",
    "tabTab2",
    "tab2",
    "href2",
    "rel2",
    "target2",
    "href3",
    "rel3",
    "target3",
    "anchor",
    "href4",
    "rel4",
    "target4"
];
exports.default = TabsTabsWithAnchorInPanel;
//# sourceMappingURL=TabsTabsWithAnchorInPanel.js.map
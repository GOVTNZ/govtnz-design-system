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
const Tabs = ({ tabPastDay, pastDay, href, rel, target, tabPastWeek, pastWeek, href2, rel2, target2, tabPastMonth, pastMonth, href3, rel3, target3, tabPastYear, pastYear, href4, rel4, target4 }) => (React.createElement("div", { className: "g-tabs", "data-module": "tabs" },
    React.createElement("h2", { className: "g-tabs__title" }, "Contents"),
    React.createElement("ul", { className: "g-tabs__list", role: "tablist" },
        React.createElement("li", { className: "g-tabs__list-item", role: "presentation" },
            React.createElement("a", { "aria-controls": pastDay, "aria-selected": "true", className: "g-tabs__tab g-tabs__tab--selected", href: href, id: tabPastDay, role: "tab", tabIndex: 0, rel: rel, target: constants.target[target] }, "Past day")),
        React.createElement("li", { className: "g-tabs__list-item", role: "presentation" },
            React.createElement("a", { "aria-controls": pastWeek, "aria-selected": "false", className: "g-tabs__tab", href: href2, id: tabPastWeek, role: "tab", tabIndex: -1, rel: rel2, target: constants.target2[target2] }, "Past week")),
        React.createElement("li", { className: "g-tabs__list-item", role: "presentation" },
            React.createElement("a", { "aria-controls": pastMonth, "aria-selected": "false", className: "g-tabs__tab", href: href3, id: tabPastMonth, role: "tab", tabIndex: -1, rel: rel3, target: constants.target3[target3] }, "Past month")),
        React.createElement("li", { className: "g-tabs__list-item", role: "presentation" },
            React.createElement("a", { "aria-controls": pastYear, "aria-selected": "false", className: "g-tabs__tab", href: href4, id: tabPastYear, role: "tab", tabIndex: -1, rel: rel4, target: constants.target4[target4] }, "Past year"))),
    React.createElement("section", { "aria-labelledby": tabPastDay, className: "g-tabs__panel", id: pastDay, role: "tabpanel" },
        React.createElement("h2", { className: "g-tabs-heading-l" }, "Past day"),
        React.createElement("table", { className: "g-tabs-table" },
            React.createElement("thead", { className: "g-tabs-table__head" },
                React.createElement("tr", { className: "g-tabs-table__row" }, "Case manager Cases opened Cases closed")),
            React.createElement("tbody", { className: "g-tabs-table__body" },
                React.createElement("tr", { className: "g-tabs-table__row" }, "David Francis 3 0"),
                React.createElement("tr", { className: "g-tabs-table__row" }, "Paul Farmer 1 0"),
                React.createElement("tr", { className: "g-tabs-table__row" }, "Rita Patel 2 0")))),
    React.createElement("section", { "aria-labelledby": tabPastWeek, className: "g-tabs__panel g-tabs__panel--hidden", id: pastWeek, role: "tabpanel" },
        React.createElement("h2", { className: "g-tabs-heading-l" }, "Past week"),
        React.createElement("table", { className: "g-tabs-table" },
            React.createElement("thead", { className: "g-tabs-table__head" },
                React.createElement("tr", { className: "g-tabs-table__row" }, "Case manager Cases opened Cases closed")),
            React.createElement("tbody", { className: "g-tabs-table__body" },
                React.createElement("tr", { className: "g-tabs-table__row" }, "David Francis 24 18"),
                React.createElement("tr", { className: "g-tabs-table__row" }, "Paul Farmer 16 20"),
                React.createElement("tr", { className: "g-tabs-table__row" }, "Rita Patel 24 27")))),
    React.createElement("section", { "aria-labelledby": tabPastMonth, className: "g-tabs__panel g-tabs__panel--hidden", id: pastMonth, role: "tabpanel" },
        React.createElement("h2", { className: "g-tabs-heading-l" }, "Past month"),
        React.createElement("table", { className: "g-tabs-table" },
            React.createElement("thead", { className: "g-tabs-table__head" },
                React.createElement("tr", { className: "g-tabs-table__row" }, "Case manager Cases opened Cases closed")),
            React.createElement("tbody", { className: "g-tabs-table__body" },
                React.createElement("tr", { className: "g-tabs-table__row" }, "David Francis 98 95"),
                React.createElement("tr", { className: "g-tabs-table__row" }, "Paul Farmer 122 131"),
                React.createElement("tr", { className: "g-tabs-table__row" }, "Rita Patel 126 142")))),
    React.createElement("section", { "aria-labelledby": tabPastYear, className: "g-tabs__panel g-tabs__panel--hidden", id: pastYear, role: "tabpanel" },
        React.createElement("h2", { className: "g-tabs-heading-l" }, "Past year"),
        React.createElement("table", { className: "g-tabs-table" },
            React.createElement("thead", { className: "g-tabs-table__head" },
                React.createElement("tr", { className: "g-tabs-table__row" }, "Case manager Cases opened Cases closed")),
            React.createElement("tbody", { className: "g-tabs-table__body" },
                React.createElement("tr", { className: "g-tabs-table__row" }, "David Francis 1380 1472"),
                React.createElement("tr", { className: "g-tabs-table__row" }, "Paul Farmer 1129 1083"),
                React.createElement("tr", { className: "g-tabs-table__row" }, "Rita Patel 1539 1265"))))));
Tabs.props = [
    "tabPastDay",
    "pastDay",
    "href",
    "rel",
    "target",
    "tabPastWeek",
    "pastWeek",
    "href2",
    "rel2",
    "target2",
    "tabPastMonth",
    "pastMonth",
    "href3",
    "rel3",
    "target3",
    "tabPastYear",
    "pastYear",
    "href4",
    "rel4",
    "target4"
];
exports.default = Tabs;
//# sourceMappingURL=Tabs.js.map
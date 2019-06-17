"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var constants = {
    target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target3: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target4: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target5: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};
var SummaryList = function (_a) {
    var href = _a.href, rel = _a.rel, target = _a.target, href2 = _a.href2, rel2 = _a.rel2, target2 = _a.target2, href3 = _a.href3, rel3 = _a.rel3, target3 = _a.target3, href4 = _a.href4, rel4 = _a.rel4, target4 = _a.target4, href5 = _a.href5, rel5 = _a.rel5, target5 = _a.target5;
    return (React.createElement("dl", { className: "g-summary-list" },
        React.createElement("div", { className: "g-summary-list__row" },
            React.createElement("dt", { className: "g-summary-list__key" }, "Name"),
            React.createElement("dd", { className: "g-summary-list__value" }, "Firstname Lastname"),
            React.createElement("dd", { className: "g-summary-list__actions" },
                React.createElement("ul", { className: "g-summary-list__actions-list" },
                    React.createElement("li", { className: "g-summary-list__actions-list-item" },
                        React.createElement("a", { className: "g-summaryList-link", href: href, rel: rel, target: constants.target[target] },
                            "Edit",
                            React.createElement("span", { className: "g-summaryList-visually-hidden" }, " name"))),
                    React.createElement("li", { className: "g-summary-list__actions-list-item" },
                        React.createElement("a", { className: "g-summaryList-link", href: href2, rel: rel2, target: constants.target2[target2] },
                            "Delete",
                            React.createElement("span", { className: "g-summaryList-visually-hidden" }, " name")))))),
        React.createElement("div", { className: "g-summary-list__row" },
            React.createElement("dt", { className: "g-summary-list__key" }, "Date of birth"),
            React.createElement("dd", { className: "g-summary-list__value" }, "13/08/1980"),
            React.createElement("dd", { className: "g-summary-list__actions" },
                React.createElement("a", { className: "g-summaryList-link", href: href3, rel: rel3, target: constants.target3[target3] },
                    "Change",
                    React.createElement("span", { className: "g-summaryList-visually-hidden" }, " date of birth")))),
        React.createElement("div", { className: "g-summary-list__row" },
            React.createElement("dt", { className: "g-summary-list__key" }, "Contact information"),
            React.createElement("dd", { className: "g-summary-list__value" },
                React.createElement("p", { className: "g-summaryList-body" }, "email@email.com"),
                React.createElement("p", { className: "g-summaryList-body" },
                    "Address line 1",
                    React.createElement("br", null),
                    "Address line 2",
                    React.createElement("br", null),
                    "Address line 3",
                    React.createElement("br", null),
                    "Address line 4",
                    React.createElement("br", null),
                    "Address line 5")),
            React.createElement("dd", { className: "g-summary-list__actions" },
                React.createElement("ul", { className: "g-summary-list__actions-list" },
                    React.createElement("li", { className: "g-summary-list__actions-list-item" },
                        React.createElement("a", { className: "g-summaryList-link", href: href4, rel: rel4, target: constants.target4[target4] },
                            "Edit",
                            React.createElement("span", { className: "g-summaryList-visually-hidden" },
                                " ",
                                "contact information"))),
                    React.createElement("li", { className: "g-summary-list__actions-list-item" },
                        React.createElement("a", { className: "g-summaryList-link", href: href5, rel: rel5, target: constants.target5[target5] },
                            "Change",
                            React.createElement("span", { className: "g-summaryList-visually-hidden" }, "contact information"))))))));
};
exports.default = SummaryList;
//# sourceMappingURL=SummaryList.js.map
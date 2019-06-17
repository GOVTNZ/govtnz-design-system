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
    target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};
var BreadcrumbsWithLastBreadcrumbAsCurrentPage = function (_a) {
    var href = _a.href, rel = _a.rel, target = _a.target, href2 = _a.href2, rel2 = _a.rel2, target2 = _a.target2;
    return (React.createElement("div", { className: "g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs" },
        React.createElement("ol", { className: "g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list" },
            React.createElement("li", { className: "g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list-item" },
                React.createElement("a", { className: "g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link", href: href, rel: rel, target: constants.target[target] }, "Home")),
            React.createElement("li", { className: "g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list-item" },
                React.createElement("a", { className: "g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link", href: href2, rel: rel2, target: constants.target2[target2] }, "Passports, travel and living abroad")),
            React.createElement("li", { "aria-current": "page", className: "g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list-item" }, "Travel abroad"))));
};
exports.default = BreadcrumbsWithLastBreadcrumbAsCurrentPage;
//# sourceMappingURL=BreadcrumbsWithLastBreadcrumbAsCurrentPage.js.map
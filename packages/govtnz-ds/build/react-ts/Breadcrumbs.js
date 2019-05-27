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
    target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};
const Breadcrumbs = ({ href, rel, target, href2, rel2, target2 }) => (React.createElement("div", { className: "g-breadcrumbs" },
    React.createElement("ol", { className: "g-breadcrumbs__list" },
        React.createElement("li", { className: "g-breadcrumbs__list-item" },
            React.createElement("a", { className: "g-breadcrumbs__link", href: href, rel: rel, target: constants.target[target] }, "Section")),
        React.createElement("li", { className: "g-breadcrumbs__list-item" },
            React.createElement("a", { className: "g-breadcrumbs__link", href: href2, rel: rel2, target: constants.target2[target2] }, "Sub-section")))));
Breadcrumbs.props = ["href", "rel", "target", "href2", "rel2", "target2"];
exports.default = Breadcrumbs;
//# sourceMappingURL=Breadcrumbs.js.map
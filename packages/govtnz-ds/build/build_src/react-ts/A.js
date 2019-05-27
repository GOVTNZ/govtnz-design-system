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
    target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};
const A = ({ isMuted, href, rel, target, children }) => (React.createElement("a", { className: `g-a-link${isMuted ? " g-a-link--muted" : ""}`, href: href, rel: rel, target: constants.target[target] }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
A.props = ["isMuted", "href", "rel", "target", "children"];
exports.default = A;
//# sourceMappingURL=A.js.map
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
const SkipLink = ({ href, rel, target }) => (React.createElement("a", { className: "g-skip-link", href: href, rel: rel, target: constants.target[target] }, "Skip to main content"));
SkipLink.props = ["href", "rel", "target"];
exports.default = SkipLink;
//# sourceMappingURL=SkipLink.js.map
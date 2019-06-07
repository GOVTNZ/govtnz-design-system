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
    target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};
var BackLinkWithCustomText = function (_a) {
    var href = _a.href, rel = _a.rel, target = _a.target, children = _a.children;
    return (React.createElement("a", { className: "g-backLinkWithCustomText-back-link", href: href, rel: rel, target: constants.target[target] }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
};
BackLinkWithCustomText.props = ["href", "rel", "target", "children"];
exports.default = BackLinkWithCustomText;
//# sourceMappingURL=BackLinkWithCustomText.js.map
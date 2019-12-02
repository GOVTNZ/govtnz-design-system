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
var A = function (_a) {
    var isMuted = _a.isMuted, href = _a.href, rel = _a.rel, target = _a.target, children = _a.children;
    return (React.createElement("a", { className: "g-link" + (isMuted ? " g-link--muted" : ""), href: href, rel: rel, target: target }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
};
exports.default = A;
//# sourceMappingURL=A.js.map
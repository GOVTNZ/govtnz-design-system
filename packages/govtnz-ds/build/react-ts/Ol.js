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
var Ol = function (_a) {
    var numbered = _a.numbered, children = _a.children;
    return (React.createElement("ol", { className: "g-ol-list" + (numbered ? " g-ol-list--number" : "") }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
};
Ol.props = ["numbered", "children"];
exports.default = Ol;
//# sourceMappingURL=Ol.js.map
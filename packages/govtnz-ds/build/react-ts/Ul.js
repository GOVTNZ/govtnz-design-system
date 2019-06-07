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
var Ul = function (_a) {
    var bulleted = _a.bulleted, children = _a.children;
    return (React.createElement("ul", { className: "g-ul-list" + (bulleted ? " g-ul-list--bullet" : "") }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
};
Ul.props = ["bulleted", "children"];
exports.default = Ul;
//# sourceMappingURL=Ul.js.map
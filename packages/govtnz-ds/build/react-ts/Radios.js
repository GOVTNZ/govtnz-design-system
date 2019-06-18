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
var Radios = function (_a) {
    var inline = _a.inline, children = _a.children;
    return (React.createElement("div", { className: "g-radios" + (inline ? " g-radios--inline" : "") }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Radio components"))));
};
exports.default = Radios;
//# sourceMappingURL=Radios.js.map
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
var Legend = function (_a) {
    var children = _a.children;
    return (React.createElement("legend", { className: "g-fieldset__legend" }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Legend text"))));
};
exports.default = Legend;
//# sourceMappingURL=Legend.js.map
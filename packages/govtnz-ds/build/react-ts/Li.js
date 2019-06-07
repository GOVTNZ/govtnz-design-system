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
var Li = function (_a) {
    var children = _a.children;
    return (React.createElement("li", null, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
};
Li.props = ["children"];
exports.default = Li;
//# sourceMappingURL=Li.js.map
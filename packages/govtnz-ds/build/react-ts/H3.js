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
    styleSize: {
        xlarge: "g-heading-xl",
        large: "g-heading-l",
        medium: "g-heading-m",
        small: "g-heading-s",
        xsmall: "g-heading-xs",
        xxsmall: "g-heading-xxs"
    }
};
var H3 = function (_a) {
    var styleSize = _a.styleSize, marginBottom8 = _a.marginBottom8, id = _a.id, children = _a.children;
    return (React.createElement("h3", { className: "" + (constants.styleSize[styleSize] !== undefined
            ? constants.styleSize[styleSize]
            : "") + (marginBottom8 ? " g-heading-mb-8" : ""), id: id }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
};
exports.default = H3;
//# sourceMappingURL=H3.js.map
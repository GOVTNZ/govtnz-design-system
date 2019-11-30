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
        xlarge: "g-h4-heading-xl",
        large: "g-h4-heading-l",
        medium: "g-h4-heading-m",
        small: "g-h4-heading-s",
        xsmall: "g-h4-heading-xs",
        xxsmall: "g-h4-heading-xxs"
    }
};
var H4 = function (_a) {
    var styleSize = _a.styleSize, marginBottom8 = _a.marginBottom8, marginBottom0 = _a.marginBottom0, id = _a.id, children = _a.children;
    return (React.createElement("h4", { className: "${constants.styleSize[styleSize] !== undefined ? \" \" +  constants.styleSize[styleSize] : \"\"}" + (marginBottom8 ? " g-h4-heading-mb-8" : "") + (marginBottom0 ? " g-h4-heading-mb-0" : ""), id: id }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
};
exports.default = H4;
//# sourceMappingURL=H4.js.map
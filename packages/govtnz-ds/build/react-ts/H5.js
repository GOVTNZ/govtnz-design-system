"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
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
var H5 = function (_a) {
    var styleSize = _a.styleSize, marginBottom8 = _a.marginBottom8, marginBottom0 = _a.marginBottom0, marginTop0 = _a.marginTop0, marginTop8 = _a.marginTop8, id = _a.id, children = _a.children;
    return (react_1.default.createElement("h5", { className: "g-heading" + (constants.styleSize[styleSize] !== undefined
            ? " " + constants.styleSize[styleSize]
            : "") + (marginBottom8 ? " g-heading-mb-8" : "") + (marginBottom0 ? " g-heading-mb-0" : "") + (marginTop0 ? " g-heading-mt-0" : "") + (marginTop8 ? " g-heading-mt-8" : ""), id: id }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Example text"))));
};
exports.default = H5;
//# sourceMappingURL=H5.js.map
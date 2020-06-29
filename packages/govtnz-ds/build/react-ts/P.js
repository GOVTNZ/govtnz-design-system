"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var constants = {
    styleSize: {
        large: "g-body-l",
        medium: "g-body-m",
        small: "g-body-s",
        "x-small": "g-body-xs"
    }
};
var P = function (_a) {
    var styleSize = _a.styleSize, marginBottom0 = _a.marginBottom0, children = _a.children;
    return (react_1.default.createElement("p", { className: "g-body" + (constants.styleSize[styleSize] !== undefined
            ? " " + constants.styleSize[styleSize]
            : "") + (marginBottom0 ? " g-body-marginBottom0" : "") }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Example text"))));
};
exports.default = P;
//# sourceMappingURL=P.js.map
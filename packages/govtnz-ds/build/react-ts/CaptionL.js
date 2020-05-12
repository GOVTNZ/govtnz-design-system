"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CaptionL = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("span", { className: "g-caption-l" }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Example text"))));
};
exports.default = CaptionL;
//# sourceMappingURL=CaptionL.js.map
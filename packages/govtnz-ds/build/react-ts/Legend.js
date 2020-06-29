"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Legend = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("legend", { className: "g-fieldset__legend" }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Legend text"))));
};
exports.default = Legend;
//# sourceMappingURL=Legend.js.map
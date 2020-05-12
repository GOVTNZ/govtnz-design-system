"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var constants = {
    alignXs: { start: "start-xs", center: "center-xs", end: "end-xs" },
    alignSm: { start: "start-sm", center: "center-sm", end: "end-sm" },
    alignMd: { start: "start-md", center: "center-md", end: "end-md" },
    alignLg: { start: "start-lg", center: "center-lg", end: "end-lg" }
};
var FlexRow = function (_a) {
    var alignXs = _a.alignXs, alignSm = _a.alignSm, alignMd = _a.alignMd, alignLg = _a.alignLg, isReversed = _a.isReversed, children = _a.children;
    return (react_1.default.createElement("div", { className: "g-flex-row" + (constants.alignXs[alignXs] !== undefined
            ? " " + constants.alignXs[alignXs]
            : "") + (constants.alignSm[alignSm] !== undefined
            ? " " + constants.alignSm[alignSm]
            : "") + (constants.alignMd[alignMd] !== undefined
            ? " " + constants.alignMd[alignMd]
            : "") + (constants.alignLg[alignLg] !== undefined
            ? " " + constants.alignLg[alignLg]
            : "") + (isReversed ? " g-flex-reverse" : "") }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Columns..."))));
};
exports.default = FlexRow;
//# sourceMappingURL=FlexRow.js.map
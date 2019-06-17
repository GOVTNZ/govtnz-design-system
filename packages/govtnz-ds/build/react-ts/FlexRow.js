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
    alignXs: { start: "start-xs", center: "center-xs", end: "end-xs" },
    alignSm: { start: "start-sm", center: "center-sm", end: "end-sm" },
    alignMd: { start: "start-md", center: "center-md", end: "end-md" },
    alignLg: { start: "start-lg", center: "center-lg", end: "end-lg" }
};
var FlexRow = function (_a) {
    var alignXs = _a.alignXs, alignSm = _a.alignSm, alignMd = _a.alignMd, alignLg = _a.alignLg, isReversed = _a.isReversed, children = _a.children;
    return (React.createElement("div", { className: "g-flex-row" + (constants.alignXs[alignXs] !== undefined
            ? " " + constants.alignXs[alignXs]
            : "") + (constants.alignSm[alignSm] !== undefined
            ? " " + constants.alignSm[alignSm]
            : "") + (constants.alignMd[alignMd] !== undefined
            ? " " + constants.alignMd[alignMd]
            : "") + (constants.alignLg[alignLg] !== undefined
            ? " " + constants.alignLg[alignLg]
            : "") + (isReversed ? " g-flex-reverse" : "") }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Columns..."))));
};
exports.default = FlexRow;
//# sourceMappingURL=FlexRow.js.map
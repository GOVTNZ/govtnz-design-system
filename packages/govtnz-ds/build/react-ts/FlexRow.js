"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const constants = {
    alignXs: { start: "start-xs", center: "center-xs", end: "end-xs" },
    alignSm: { start: "start-sm", center: "center-sm", end: "end-sm" },
    alignMd: { start: "start-md", center: "center-md", end: "end-md" },
    alignLg: { start: "start-lg", center: "center-lg", end: "end-lg" }
};
const FlexRow = ({ alignXs, alignSm, alignMd, alignLg, isReversed, children }) => (React.createElement("div", { className: `g-flex-row${constants.alignXs[alignXs] !== undefined
        ? " " + constants.alignXs[alignXs]
        : ""}${constants.alignSm[alignSm] !== undefined
        ? " " + constants.alignSm[alignSm]
        : ""}${constants.alignMd[alignMd] !== undefined
        ? " " + constants.alignMd[alignMd]
        : ""}${constants.alignLg[alignLg] !== undefined
        ? " " + constants.alignLg[alignLg]
        : ""}${isReversed ? " g-flex-reverse" : ""}` }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Columns..."))));
FlexRow.props = [
    "alignXs",
    "alignSm",
    "alignMd",
    "alignLg",
    "isReversed",
    "children"
];
exports.default = FlexRow;
//# sourceMappingURL=FlexRow.js.map
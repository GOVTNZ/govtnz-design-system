"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  display: flex;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n"], ["\n  box-sizing: border-box;\n  display: flex;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n"])));
var FlexRow = function (_a) {
    var alignXs = _a.alignXs, alignSm = _a.alignSm, alignMd = _a.alignMd, alignLg = _a.alignLg, isReversed = _a.isReversed, children = _a.children;
    return (react_1.default.createElement(StyledDiv, { alignXs: alignXs, alignSm: alignSm, alignMd: alignMd, alignLg: alignLg, isReversed: isReversed }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Columns..."))));
};
exports.default = FlexRow;
var templateObject_1;
//# sourceMappingURL=FlexRow.js.map
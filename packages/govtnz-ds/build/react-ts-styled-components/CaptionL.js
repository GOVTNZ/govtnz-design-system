"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled = __importStar(require("styled-components"));
var StyledSpan = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 0px;\n"], ["\n  margin-top: 0px;\n"])));
var CaptionL = function (_a) {
    var children = _a.children;
    return (React.createElement(StyledSpan, null, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
};
exports.default = CaptionL;
var templateObject_1;
//# sourceMappingURL=CaptionL.js.map
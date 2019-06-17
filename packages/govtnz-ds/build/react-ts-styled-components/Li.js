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
var StyledLi = styled.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n"], ["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n"])));
var Li = function (_a) {
    var children = _a.children;
    return (React.createElement(StyledLi, null, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
};
exports.default = Li;
var templateObject_1;
//# sourceMappingURL=Li.js.map
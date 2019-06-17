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
var StyledDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @media (min-width: 40.0625em) {\n    :after {\n      content: \"\";\n      display: block;\n      clear: both;\n    }\n  }\n"], ["\n  @media (min-width: 40.0625em) {\n    :after {\n      content: \"\";\n      display: block;\n      clear: both;\n    }\n  }\n"])));
var Radios = function (_a) {
    var inline = _a.inline, children = _a.children;
    return (React.createElement(StyledDiv, { inline: inline }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Radio components"))));
};
exports.default = Radios;
var templateObject_1;
//# sourceMappingURL=Radios.js.map
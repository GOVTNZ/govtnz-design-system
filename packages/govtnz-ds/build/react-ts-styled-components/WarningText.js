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
var StyledDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 0px;\n"], ["\n  margin-top: 0px;\n"])));
var StyledSpan = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 0px;\n"], ["\n  margin-top: 0px;\n"])));
var StyledStrong = styled.strong(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: 0px;\n"], ["\n  margin-top: 0px;\n"])));
var StyledSpan2 = styled.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-top: 0px;\n"], ["\n  margin-top: 0px;\n"])));
var WarningText = function (_a) { return (React.createElement(StyledDiv, null,
    React.createElement(StyledSpan, { "aria-hidden": "true" }, "!"),
    React.createElement(StyledStrong, null,
        React.createElement(StyledSpan2, null, "Warning"),
        "You can be fined up to $5,000 if you don\u2019t register."))); };
exports.default = WarningText;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=WarningText.js.map
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
var StyledDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #0b0c0c;\n  position: relative;\n  margin-bottom: 20px;\n  padding: 10px 0;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #0b0c0c;\n  position: relative;\n  margin-bottom: 20px;\n  padding: 10px 0;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n"])));
var StyledSpan = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  min-width: 32px;\n  min-height: 29px;\n  margin-top: -20px;\n  padding-top: 3px;\n  border: 3px solid #0b0c0c;\n  border-radius: 50%;\n  color: #ffffff;\n  background: #0b0c0c;\n  font-size: 1.6em;\n  line-height: 29px;\n  text-align: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  @media print {\n    font-family: sans-serif;\n  }\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  min-width: 32px;\n  min-height: 29px;\n  margin-top: -20px;\n  padding-top: 3px;\n  border: 3px solid #0b0c0c;\n  border-radius: 50%;\n  color: #ffffff;\n  background: #0b0c0c;\n  font-size: 1.6em;\n  line-height: 29px;\n  text-align: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  @media print {\n    font-family: sans-serif;\n  }\n"])));
var StyledStrong = styled.strong(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  padding-left: 50px;\n"], ["\n  display: block;\n  padding-left: 50px;\n"])));
var StyledSpan2 = styled.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  overflow: hidden !important;\n  clip: rect(0 0 0 0) !important;\n  -webkit-clip-path: inset(50%) !important;\n  clip-path: inset(50%) !important;\n  border: 0 !important;\n  white-space: nowrap !important;\n"], ["\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  overflow: hidden !important;\n  clip: rect(0 0 0 0) !important;\n  -webkit-clip-path: inset(50%) !important;\n  clip-path: inset(50%) !important;\n  border: 0 !important;\n  white-space: nowrap !important;\n"])));
var WarningText = function (_a) { return (React.createElement(StyledDiv, null,
    React.createElement(StyledSpan, { "aria-hidden": "true" }, "!"),
    React.createElement(StyledStrong, null,
        React.createElement(StyledSpan2, null, "Warning"),
        "You can be fined up to $5,000 if you don\u2019t register."))); };
exports.default = WarningText;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=WarningText.js.map
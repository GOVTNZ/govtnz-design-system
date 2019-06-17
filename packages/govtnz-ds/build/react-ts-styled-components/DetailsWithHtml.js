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
var StyledDetails = styled.details(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #0b0c0c;\n  margin-bottom: 20px;\n  display: block;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #0b0c0c;\n  margin-bottom: 20px;\n  display: block;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n"])));
var StyledSummary = styled.summary(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  margin-bottom: 5px;\n  padding-left: 25px;\n  color: #005ea5;\n  cursor: pointer;\n  :hover {\n    color: #2b8cc4;\n  }\n  :focus {\n    outline: 4px solid #ffbf47;\n    outline-offset: -1px;\n    color: #0b0c0c;\n    background: #ffbf47;\n  }\n  ::-webkit-details-marker {\n    display: none;\n  }\n  :before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-color: transparent;\n    -webkit-clip-path: polygon(0% 0%, 100% 50%, 0% 100%);\n    clip-path: polygon(0% 0%, 100% 50%, 0% 100%);\n    border-width: 7px 0 7px 12.124px;\n    border-left-color: inherit;\n  }\n  :before {\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-color: transparent;\n    -webkit-clip-path: polygon(0% 0%, 50% 100%, 100% 0%);\n    clip-path: polygon(0% 0%, 50% 100%, 100% 0%);\n    border-width: 12.124px 7px 0 7px;\n    border-top-color: inherit;\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n  margin-bottom: 5px;\n  padding-left: 25px;\n  color: #005ea5;\n  cursor: pointer;\n  :hover {\n    color: #2b8cc4;\n  }\n  :focus {\n    outline: 4px solid #ffbf47;\n    outline-offset: -1px;\n    color: #0b0c0c;\n    background: #ffbf47;\n  }\n  ::-webkit-details-marker {\n    display: none;\n  }\n  :before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-color: transparent;\n    -webkit-clip-path: polygon(0% 0%, 100% 50%, 0% 100%);\n    clip-path: polygon(0% 0%, 100% 50%, 0% 100%);\n    border-width: 7px 0 7px 12.124px;\n    border-left-color: inherit;\n  }\n  :before {\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-color: transparent;\n    -webkit-clip-path: polygon(0% 0%, 50% 100%, 100% 0%);\n    clip-path: polygon(0% 0%, 50% 100%, 100% 0%);\n    border-width: 12.124px 7px 0 7px;\n    border-top-color: inherit;\n  }\n"])));
var StyledSpan = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-decoration: underline;\n"], ["\n  text-decoration: underline;\n"])));
var StyledDiv = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 15px;\n  padding-left: 20px;\n  border-left: 5px solid #bfc1c3;\n"], ["\n  padding: 15px;\n  padding-left: 20px;\n  border-left: 5px solid #bfc1c3;\n"])));
var StyledLi = styled.li(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n"], ["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n"])));
var StyledLi2 = styled.li(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n"], ["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n"])));
var StyledLi3 = styled.li(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n"], ["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n"])));
var StyledLi4 = styled.li(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n"], ["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n"])));
var StyledLi5 = styled.li(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n"], ["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n"])));
var DetailsWithHtml = function (_a) {
    var open = _a.open, detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0 = _a.detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0;
    return (React.createElement(StyledDetails, { role: "group", open: open },
        React.createElement(StyledSummary, { "aria-controls": detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0, "aria-expanded": "false", role: "button" },
            React.createElement(StyledSpan, null, "Where to find your National Insurance Number")),
        React.createElement(StyledDiv, { "aria-hidden": "true", id: detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0 },
            "Your National Insurance number can be found on",
            React.createElement("ul", null,
                React.createElement(StyledLi, null, "your National Insurance card"),
                React.createElement(StyledLi2, null, "your payslip"),
                React.createElement(StyledLi3, null, "P60"),
                React.createElement(StyledLi4, null, "benefits information"),
                React.createElement(StyledLi5, null, "tax return")))));
};
exports.default = DetailsWithHtml;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=DetailsWithHtml.js.map
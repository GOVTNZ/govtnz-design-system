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
var StyledDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #0b0c0c;\n  margin-top: 5px;\n  margin-bottom: 20px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  @media (min-width: 40.0625em) {\n    margin-top: 5px;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #0b0c0c;\n  margin-top: 5px;\n  margin-bottom: 20px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  @media (min-width: 40.0625em) {\n    margin-top: 5px;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n"])));
var StyledH2 = styled.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  margin-bottom: 5px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media (min-width: 40.0625em) {\n    display: none;\n  }\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  margin-bottom: 5px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media (min-width: 40.0625em) {\n    display: none;\n  }\n"])));
var StyledUl = styled.ul(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  @media (max-width: 40.0525em) {\n    margin-bottom: 20px;\n  }\n  @media (max-width: 40.0525em) and (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  @media (min-width: 40.0625em) {\n    border-bottom: 1px solid #bfc1c3;\n    :after {\n      content: \"\";\n      display: block;\n      clear: both;\n    }\n  }\n"], ["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  @media (max-width: 40.0525em) {\n    margin-bottom: 20px;\n  }\n  @media (max-width: 40.0525em) and (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  @media (min-width: 40.0625em) {\n    border-bottom: 1px solid #bfc1c3;\n    :after {\n      content: \"\";\n      display: block;\n      clear: both;\n    }\n  }\n"])));
var StyledLi = styled.li(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n  margin-left: 25px;\n  ::before {\n    content: \"\u2014 \";\n    margin-left: -25px;\n    padding-right: 5px;\n  }\n  @media (min-width: 40.0625em) {\n    margin-left: 0;\n    ::before {\n      content: none;\n    }\n  }\n"], ["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n  margin-left: 25px;\n  ::before {\n    content: \"\u2014 \";\n    margin-left: -25px;\n    padding-right: 5px;\n  }\n  @media (min-width: 40.0625em) {\n    margin-left: 0;\n    ::before {\n      content: none;\n    }\n  }\n"])));
var StyledA = styled.a(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: inline-block;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  @media print {\n    font-family: sans-serif;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n    background-color: #ffbf47;\n  }\n  :link {\n    color: #005ea5;\n  }\n  :visited {\n    color: #4c2c92;\n  }\n  :hover {\n    color: #2b8cc4;\n  }\n  :active {\n    color: #2b8cc4;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media (min-width: 40.0625em) {\n    margin-right: 5px;\n    padding-right: 20px;\n    padding-left: 20px;\n    float: left;\n    color: #0b0c0c;\n    background-color: #f8f8f8;\n    text-align: center;\n    text-decoration: none;\n    margin-top: -5px;\n    margin-bottom: -1px;\n    padding-top: 14px;\n    padding-right: 19px;\n    padding-bottom: 16px;\n    padding-left: 19px;\n    border: 1px solid #bfc1c3;\n    border-bottom: 0;\n    color: #0b0c0c;\n    background-color: #ffffff;\n    :focus {\n      background-color: transparent;\n    }\n  }\n"], ["\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: inline-block;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  @media print {\n    font-family: sans-serif;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n    background-color: #ffbf47;\n  }\n  :link {\n    color: #005ea5;\n  }\n  :visited {\n    color: #4c2c92;\n  }\n  :hover {\n    color: #2b8cc4;\n  }\n  :active {\n    color: #2b8cc4;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media (min-width: 40.0625em) {\n    margin-right: 5px;\n    padding-right: 20px;\n    padding-left: 20px;\n    float: left;\n    color: #0b0c0c;\n    background-color: #f8f8f8;\n    text-align: center;\n    text-decoration: none;\n    margin-top: -5px;\n    margin-bottom: -1px;\n    padding-top: 14px;\n    padding-right: 19px;\n    padding-bottom: 16px;\n    padding-left: 19px;\n    border: 1px solid #bfc1c3;\n    border-bottom: 0;\n    color: #0b0c0c;\n    background-color: #ffffff;\n    :focus {\n      background-color: transparent;\n    }\n  }\n"])));
var StyledLi2 = styled.li(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n  margin-left: 25px;\n  ::before {\n    content: \"\u2014 \";\n    margin-left: -25px;\n    padding-right: 5px;\n  }\n  @media (min-width: 40.0625em) {\n    margin-left: 0;\n    ::before {\n      content: none;\n    }\n  }\n"], ["\n  margin-bottom: 5px;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n  margin-left: 25px;\n  ::before {\n    content: \"\u2014 \";\n    margin-left: -25px;\n    padding-right: 5px;\n  }\n  @media (min-width: 40.0625em) {\n    margin-left: 0;\n    ::before {\n      content: none;\n    }\n  }\n"])));
var StyledA2 = styled.a(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: inline-block;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  @media print {\n    font-family: sans-serif;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n    background-color: #ffbf47;\n  }\n  :link {\n    color: #005ea5;\n  }\n  :visited {\n    color: #4c2c92;\n  }\n  :hover {\n    color: #2b8cc4;\n  }\n  :active {\n    color: #2b8cc4;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media (min-width: 40.0625em) {\n    margin-right: 5px;\n    padding-right: 20px;\n    padding-left: 20px;\n    float: left;\n    color: #0b0c0c;\n    background-color: #f8f8f8;\n    text-align: center;\n    text-decoration: none;\n  }\n"], ["\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: inline-block;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  @media print {\n    font-family: sans-serif;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n    background-color: #ffbf47;\n  }\n  :link {\n    color: #005ea5;\n  }\n  :visited {\n    color: #4c2c92;\n  }\n  :hover {\n    color: #2b8cc4;\n  }\n  :active {\n    color: #2b8cc4;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media (min-width: 40.0625em) {\n    margin-right: 5px;\n    padding-right: 20px;\n    padding-left: 20px;\n    float: left;\n    color: #0b0c0c;\n    background-color: #f8f8f8;\n    text-align: center;\n    text-decoration: none;\n  }\n"])));
var StyledSection = styled.section(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-bottom: 30px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 50px;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 0;\n    padding-top: 30px;\n    padding-right: 20px;\n    padding-bottom: 30px;\n    padding-left: 20px;\n    border: 1px solid #bfc1c3;\n    border-top: 0;\n  }\n  @media (min-width: 40.0625em) and (min-width: 40.0625em) {\n    margin-bottom: 0;\n  }\n"], ["\n  margin-bottom: 30px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 50px;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 0;\n    padding-top: 30px;\n    padding-right: 20px;\n    padding-bottom: 30px;\n    padding-left: 20px;\n    border: 1px solid #bfc1c3;\n    border-top: 0;\n  }\n  @media (min-width: 40.0625em) and (min-width: 40.0625em) {\n    margin-bottom: 0;\n  }\n"])));
var StyledH22 = styled.h2(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  color: #2a2a2a;\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 500;\n  font-size: 2rem;\n  line-height: 1.2;\n  display: block;\n  margin-top: 3.5rem;\n  margin-bottom: 0.5rem;\n  @media print {\n    color: #000000;\n  }\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 2.5rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 24pt;\n    line-height: 1.05;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  padding-top: 5px;\n  @media (min-width: 40.0625em) {\n    padding-top: 10px;\n  }\n  padding-top: 15px;\n  @media (min-width: 40.0625em) {\n    padding-top: 20px;\n  }\n"], ["\n  color: #2a2a2a;\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 500;\n  font-size: 2rem;\n  line-height: 1.2;\n  display: block;\n  margin-top: 3.5rem;\n  margin-bottom: 0.5rem;\n  @media print {\n    color: #000000;\n  }\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 2.5rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 24pt;\n    line-height: 1.05;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  padding-top: 5px;\n  @media (min-width: 40.0625em) {\n    padding-top: 10px;\n  }\n  padding-top: 15px;\n  @media (min-width: 40.0625em) {\n    padding-top: 20px;\n  }\n"])));
var StyledP = styled.p(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  margin-bottom: 10px;\n  margin-top: 0;\n  margin-bottom: 20px;\n  margin-top: 0;\n  margin-bottom: 15px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 20px;\n  }\n"], ["\n  margin-bottom: 10px;\n  margin-top: 0;\n  margin-bottom: 20px;\n  margin-top: 0;\n  margin-bottom: 15px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 20px;\n  }\n"])));
var StyledA3 = styled.a(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  @media print {\n    font-family: sans-serif;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link {\n    color: #005ea5;\n  }\n  :visited {\n    color: #4c2c92;\n  }\n  :hover {\n    color: #2b8cc4;\n  }\n  :active {\n    color: #2b8cc4;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  @media print {\n    font-family: sans-serif;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link {\n    color: #005ea5;\n  }\n  :visited {\n    color: #4c2c92;\n  }\n  :hover {\n    color: #2b8cc4;\n  }\n  :active {\n    color: #2b8cc4;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n"])));
var StyledA4 = styled.a(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n"], ["\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n"])));
var StyledSection2 = styled.section(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  margin-bottom: 30px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 50px;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 0;\n    padding-top: 30px;\n    padding-right: 20px;\n    padding-bottom: 30px;\n    padding-left: 20px;\n    border: 1px solid #bfc1c3;\n    border-top: 0;\n  }\n  @media (min-width: 40.0625em) and (min-width: 40.0625em) {\n    margin-bottom: 0;\n  }\n  @media (min-width: 40.0625em) {\n    display: none;\n  }\n"], ["\n  margin-bottom: 30px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 50px;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 0;\n    padding-top: 30px;\n    padding-right: 20px;\n    padding-bottom: 30px;\n    padding-left: 20px;\n    border: 1px solid #bfc1c3;\n    border-top: 0;\n  }\n  @media (min-width: 40.0625em) and (min-width: 40.0625em) {\n    margin-bottom: 0;\n  }\n  @media (min-width: 40.0625em) {\n    display: none;\n  }\n"])));
var StyledH23 = styled.h2(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  color: #2a2a2a;\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 500;\n  font-size: 2rem;\n  line-height: 1.2;\n  display: block;\n  margin-top: 3.5rem;\n  margin-bottom: 0.5rem;\n  @media print {\n    color: #000000;\n  }\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 2.5rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 24pt;\n    line-height: 1.05;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  padding-top: 5px;\n  @media (min-width: 40.0625em) {\n    padding-top: 10px;\n  }\n  padding-top: 15px;\n  @media (min-width: 40.0625em) {\n    padding-top: 20px;\n  }\n"], ["\n  color: #2a2a2a;\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 500;\n  font-size: 2rem;\n  line-height: 1.2;\n  display: block;\n  margin-top: 3.5rem;\n  margin-bottom: 0.5rem;\n  @media print {\n    color: #000000;\n  }\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 2.5rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 24pt;\n    line-height: 1.05;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  padding-top: 5px;\n  @media (min-width: 40.0625em) {\n    padding-top: 10px;\n  }\n  padding-top: 15px;\n  @media (min-width: 40.0625em) {\n    padding-top: 20px;\n  }\n"])));
var constants = {
    target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target3: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target4: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};
var TabsTabsWithAnchorInPanel = function (_a) {
    var tabTab1 = _a.tabTab1, tab1 = _a.tab1, href = _a.href, rel = _a.rel, target = _a.target, tabTab2 = _a.tabTab2, tab2 = _a.tab2, href2 = _a.href2, rel2 = _a.rel2, target2 = _a.target2, href3 = _a.href3, rel3 = _a.rel3, target3 = _a.target3, anchor = _a.anchor, href4 = _a.href4, rel4 = _a.rel4, target4 = _a.target4;
    return (React.createElement(StyledDiv, { "data-module": "tabs" },
        React.createElement(StyledH2, null, "Contents"),
        React.createElement(StyledUl, { role: "tablist" },
            React.createElement(StyledLi, { role: "presentation" },
                React.createElement(StyledA, { "aria-controls": tab1, "aria-selected": "true", href: href, id: tabTab1, role: "tab", tabIndex: 0, rel: rel, target: constants.target[target] }, "Tab 1")),
            React.createElement(StyledLi2, { role: "presentation" },
                React.createElement(StyledA2, { "aria-controls": tab2, "aria-selected": "false", href: href2, id: tabTab2, role: "tab", tabIndex: -1, rel: rel2, target: constants.target2[target2] }, "Tab 2"))),
        React.createElement(StyledSection, { "aria-labelledby": tabTab1, id: tab1, role: "tabpanel" },
            React.createElement(StyledH22, null, "Tab 1"),
            React.createElement(StyledP, null, "Testing that when you click the anchor it moves to the anchor point successfully"),
            React.createElement(StyledA3, { href: href3, rel: rel3, target: constants.target3[target3] }, "Anchor"),
            React.createElement(StyledA4, { id: anchor, tabIndex: 0, href: href4, rel: rel4, target: constants.target4[target4] }, "Anchor Point")),
        React.createElement(StyledSection2, { "aria-labelledby": tabTab2, id: tab2, role: "tabpanel" },
            React.createElement(StyledH23, null, "Tab 2"))));
};
exports.default = TabsTabsWithAnchorInPanel;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
//# sourceMappingURL=TabsTabsWithAnchorInPanel.js.map
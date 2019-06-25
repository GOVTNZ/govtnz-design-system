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
var StyledDiv = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: 20px;\n  :after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  ", "\n  padding: 0;\n  border: 0;\n  margin-bottom: 5px;\n  margin-top: 0px;\n"], ["\n  margin-bottom: 20px;\n  :after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  ",
    "\n  padding: 0;\n  border: 0;\n  margin-bottom: 5px;\n  margin-top: 0px;\n"])), function (props) {
    return props.error && styled.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      padding-left: 15px;\n      border-left: 5px solid #b10e1e;\n    "], ["\n      padding-left: 15px;\n      border-left: 5px solid #b10e1e;\n    "])));
});
var StyledFieldset = styled.fieldset(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  min-width: 0;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  :after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  @media not (caret-color: auto) {\n    display: table-cell;\n  }\n  margin-top: 0px;\n"], ["\n  min-width: 0;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  :after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  @media not (caret-color: auto) {\n    display: table-cell;\n  }\n  margin-top: 0px;\n"])));
var StyledLegend = styled.legend(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #0b0c0c;\n  box-sizing: border-box;\n  display: table;\n  max-width: 100%;\n  margin-bottom: 0px;\n  padding: 0;\n  overflow: hidden;\n  white-space: normal;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 2rem;\n  line-height: 1.09375;\n  margin-bottom: 15px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 3rem;\n    line-height: 1.04167;\n  }\n  @media print {\n    font-size: 32pt;\n    line-height: 1.15;\n  }\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #0b0c0c;\n  box-sizing: border-box;\n  display: table;\n  max-width: 100%;\n  margin-bottom: 0px;\n  padding: 0;\n  overflow: hidden;\n  white-space: normal;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 2rem;\n  line-height: 1.09375;\n  margin-bottom: 15px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 3rem;\n    line-height: 1.04167;\n  }\n  @media print {\n    font-size: 32pt;\n    line-height: 1.15;\n  }\n  margin-top: 0px;\n"])));
var StyledSpan = styled.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  margin-bottom: 15px;\n  color: #595959;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  margin-top: -5px;\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  margin-bottom: 15px;\n  color: #595959;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  margin-top: -5px;\n  margin-top: 0px;\n"])));
var StyledSpan2 = styled.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  margin-bottom: 15px;\n  clear: both;\n  color: #b10e1e;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  margin-bottom: 15px;\n  clear: both;\n  color: #b10e1e;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  margin-top: 0px;\n"])));
var StyledSpan3 = styled.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  overflow: hidden !important;\n  clip: rect(0 0 0 0) !important;\n  -webkit-clip-path: inset(50%) !important;\n  clip-path: inset(50%) !important;\n  border: 0 !important;\n  white-space: nowrap !important;\n  margin-top: 0px;\n"], ["\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  overflow: hidden !important;\n  clip: rect(0 0 0 0) !important;\n  -webkit-clip-path: inset(50%) !important;\n  clip-path: inset(50%) !important;\n  border: 0 !important;\n  white-space: nowrap !important;\n  margin-top: 0px;\n"])));
var StyledDiv2 = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-size: 0;\n  :after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  margin-top: 0px;\n"], ["\n  font-size: 0;\n  :after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  margin-top: 0px;\n"])));
var StyledDiv3 = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 0;\n  margin-top: 0px;\n"], ["\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 0;\n  margin-top: 0px;\n"])));
var StyledDiv4 = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  margin-bottom: 20px;\n  :after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  padding: 0;\n  border: 0;\n  margin-bottom: 5px;\n  margin-top: 0px;\n"], ["\n  margin-bottom: 20px;\n  :after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  padding: 0;\n  border: 0;\n  margin-bottom: 5px;\n  margin-top: 0px;\n"])));
var StyledLabel = styled.label(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: bold;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #2a2a2a;\n  display: block;\n  margin-bottom: 5px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  display: block;\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: bold;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #2a2a2a;\n  display: block;\n  margin-bottom: 5px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  display: block;\n  margin-top: 0px;\n"])));
var StyledInput = styled.input(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  box-sizing: border-box;\n  width: 100%;\n  height: 40px;\n  margin-top: 0;\n  padding: 0.5rem;\n  border: 1px solid #2a2a2a;\n  border-radius: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    margin: 0;\n    -webkit-appearance: none;\n  }\n  ", "\n  max-width: 5.4ex;\n  margin-bottom: 0;\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  box-sizing: border-box;\n  width: 100%;\n  height: 40px;\n  margin-top: 0;\n  padding: 0.5rem;\n  border: 1px solid #2a2a2a;\n  border-radius: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    margin: 0;\n    -webkit-appearance: none;\n  }\n  ",
    "\n  max-width: 5.4ex;\n  margin-bottom: 0;\n  margin-top: 0px;\n"])), function (props) {
    return props.error && styled.css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      border: 1px solid #b10e1e;\n    "], ["\n      border: 1px solid #b10e1e;\n    "])));
});
var StyledDiv5 = styled.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 0;\n  margin-top: 0px;\n"], ["\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 0;\n  margin-top: 0px;\n"])));
var StyledDiv6 = styled.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  margin-bottom: 20px;\n  :after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  padding: 0;\n  border: 0;\n  margin-bottom: 5px;\n  margin-top: 0px;\n"], ["\n  margin-bottom: 20px;\n  :after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  padding: 0;\n  border: 0;\n  margin-bottom: 5px;\n  margin-top: 0px;\n"])));
var StyledLabel2 = styled.label(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: bold;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #2a2a2a;\n  display: block;\n  margin-bottom: 5px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  display: block;\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: bold;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #2a2a2a;\n  display: block;\n  margin-bottom: 5px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  display: block;\n  margin-top: 0px;\n"])));
var StyledInput2 = styled.input(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  box-sizing: border-box;\n  width: 100%;\n  height: 40px;\n  margin-top: 0;\n  padding: 0.5rem;\n  border: 1px solid #2a2a2a;\n  border-radius: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    margin: 0;\n    -webkit-appearance: none;\n  }\n  ", "\n  max-width: 5.4ex;\n  margin-bottom: 0;\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  box-sizing: border-box;\n  width: 100%;\n  height: 40px;\n  margin-top: 0;\n  padding: 0.5rem;\n  border: 1px solid #2a2a2a;\n  border-radius: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    margin: 0;\n    -webkit-appearance: none;\n  }\n  ",
    "\n  max-width: 5.4ex;\n  margin-bottom: 0;\n  margin-top: 0px;\n"])), function (props) {
    return props.error && styled.css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n      border: 1px solid #b10e1e;\n    "], ["\n      border: 1px solid #b10e1e;\n    "])));
});
var StyledDiv7 = styled.div(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 0;\n  margin-top: 0px;\n"], ["\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 0;\n  margin-top: 0px;\n"])));
var StyledDiv8 = styled.div(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  margin-bottom: 20px;\n  :after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  padding: 0;\n  border: 0;\n  margin-bottom: 5px;\n  margin-top: 0px;\n"], ["\n  margin-bottom: 20px;\n  :after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  padding: 0;\n  border: 0;\n  margin-bottom: 5px;\n  margin-top: 0px;\n"])));
var StyledLabel3 = styled.label(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: bold;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #2a2a2a;\n  display: block;\n  margin-bottom: 5px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: bold;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #2a2a2a;\n  display: block;\n  margin-bottom: 5px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  margin-top: 0px;\n"])));
var StyledInput3 = styled.input(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  box-sizing: border-box;\n  width: 100%;\n  height: 40px;\n  margin-top: 0;\n  padding: 0.5rem;\n  border: 1px solid #2a2a2a;\n  border-radius: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    margin: 0;\n    -webkit-appearance: none;\n  }\n  ", "\n  max-width: 9ex;\n  margin-bottom: 0;\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  box-sizing: border-box;\n  width: 100%;\n  height: 40px;\n  margin-top: 0;\n  padding: 0.5rem;\n  border: 1px solid #2a2a2a;\n  border-radius: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    margin: 0;\n    -webkit-appearance: none;\n  }\n  ",
    "\n  max-width: 9ex;\n  margin-bottom: 0;\n  margin-top: 0px;\n"])), function (props) {
    return props.error && styled.css(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n      border: 1px solid #b10e1e;\n    "], ["\n      border: 1px solid #b10e1e;\n    "])));
});
var constants = {
    autoComplete: {
        Off: "off",
        On: "on",
        Name: "name",
        "Honorific: Prefix": "honorific-prefix",
        "Given Name": "given-name",
        "Additional Name": "additional-name",
        "Family Name": "family-name",
        "Honorific: Suffix": "honorific-suffix",
        Nickname: "nickname",
        Email: "email",
        Username: "username",
        "New Password": "new-password",
        "Current Password": "current-password",
        "Organization Title": "organization-title",
        Organization: "organization",
        "Street Address": "street-address",
        "Address Line 1": "address-line1",
        "Address Line 2": "address-line2",
        "Address Line 3": "address-line3",
        "Address Level 4": "address-level4",
        "Address Level 3": "address-level3",
        "Address Level 2": "address-level2",
        "Address Level 1": "address-level1",
        Country: "country",
        "Country Name": "country-name",
        "Postal Code": "postal-code",
        "Credit Card: Name": "cc-name",
        "Credit Card: Given Name": "cc-given-name",
        "Credit Card: Additional Name": "cc-additional-name",
        "Credit Card: Family Name": "cc-family-name",
        "Credit Card: Number": "cc-number",
        "Credit Card: Expiry": "cc-exp",
        "Credit Card: Expiry Month": "cc-exp-month",
        "Credit Card: Expiry Year": "cc-exp-year",
        "Credit Card: CSC": "cc-csc",
        "Credit Card: Type": "cc-type",
        "Transaction: Currency": "transaction-currency",
        "Transaction: Amount": "transaction-amount",
        Language: "language",
        Birthday: "bday",
        "Birthday: Day": "bday-day",
        "Birthday: Month": "bday-month",
        "Birthday: Year": "bday-year",
        Sex: "sex",
        Telephone: "tel",
        "Telephone: Country Code": "tel-country-code",
        "Telephone: National": "tel-national",
        "Telephone: Area Code": "tel-area-code",
        "Telephone: Local": "tel-local",
        "Telephone: Extension": "tel-extension",
        IMPP: "impp",
        URL: "url",
        Photo: "photo"
    },
    autoComplete2: {
        Off: "off",
        On: "on",
        Name: "name",
        "Honorific: Prefix": "honorific-prefix",
        "Given Name": "given-name",
        "Additional Name": "additional-name",
        "Family Name": "family-name",
        "Honorific: Suffix": "honorific-suffix",
        Nickname: "nickname",
        Email: "email",
        Username: "username",
        "New Password": "new-password",
        "Current Password": "current-password",
        "Organization Title": "organization-title",
        Organization: "organization",
        "Street Address": "street-address",
        "Address Line 1": "address-line1",
        "Address Line 2": "address-line2",
        "Address Line 3": "address-line3",
        "Address Level 4": "address-level4",
        "Address Level 3": "address-level3",
        "Address Level 2": "address-level2",
        "Address Level 1": "address-level1",
        Country: "country",
        "Country Name": "country-name",
        "Postal Code": "postal-code",
        "Credit Card: Name": "cc-name",
        "Credit Card: Given Name": "cc-given-name",
        "Credit Card: Additional Name": "cc-additional-name",
        "Credit Card: Family Name": "cc-family-name",
        "Credit Card: Number": "cc-number",
        "Credit Card: Expiry": "cc-exp",
        "Credit Card: Expiry Month": "cc-exp-month",
        "Credit Card: Expiry Year": "cc-exp-year",
        "Credit Card: CSC": "cc-csc",
        "Credit Card: Type": "cc-type",
        "Transaction: Currency": "transaction-currency",
        "Transaction: Amount": "transaction-amount",
        Language: "language",
        Birthday: "bday",
        "Birthday: Day": "bday-day",
        "Birthday: Month": "bday-month",
        "Birthday: Year": "bday-year",
        Sex: "sex",
        Telephone: "tel",
        "Telephone: Country Code": "tel-country-code",
        "Telephone: National": "tel-national",
        "Telephone: Area Code": "tel-area-code",
        "Telephone: Local": "tel-local",
        "Telephone: Extension": "tel-extension",
        IMPP: "impp",
        URL: "url",
        Photo: "photo"
    },
    autoComplete3: {
        Off: "off",
        On: "on",
        Name: "name",
        "Honorific: Prefix": "honorific-prefix",
        "Given Name": "given-name",
        "Additional Name": "additional-name",
        "Family Name": "family-name",
        "Honorific: Suffix": "honorific-suffix",
        Nickname: "nickname",
        Email: "email",
        Username: "username",
        "New Password": "new-password",
        "Current Password": "current-password",
        "Organization Title": "organization-title",
        Organization: "organization",
        "Street Address": "street-address",
        "Address Line 1": "address-line1",
        "Address Line 2": "address-line2",
        "Address Line 3": "address-line3",
        "Address Level 4": "address-level4",
        "Address Level 3": "address-level3",
        "Address Level 2": "address-level2",
        "Address Level 1": "address-level1",
        Country: "country",
        "Country Name": "country-name",
        "Postal Code": "postal-code",
        "Credit Card: Name": "cc-name",
        "Credit Card: Given Name": "cc-given-name",
        "Credit Card: Additional Name": "cc-additional-name",
        "Credit Card: Family Name": "cc-family-name",
        "Credit Card: Number": "cc-number",
        "Credit Card: Expiry": "cc-exp",
        "Credit Card: Expiry Month": "cc-exp-month",
        "Credit Card: Expiry Year": "cc-exp-year",
        "Credit Card: CSC": "cc-csc",
        "Credit Card: Type": "cc-type",
        "Transaction: Currency": "transaction-currency",
        "Transaction: Amount": "transaction-amount",
        Language: "language",
        Birthday: "bday",
        "Birthday: Day": "bday-day",
        "Birthday: Month": "bday-month",
        "Birthday: Year": "bday-year",
        Sex: "sex",
        Telephone: "tel",
        "Telephone: Country Code": "tel-country-code",
        "Telephone: National": "tel-national",
        "Telephone: Area Code": "tel-area-code",
        "Telephone: Local": "tel-local",
        "Telephone: Extension": "tel-extension",
        IMPP: "impp",
        URL: "url",
        Photo: "photo"
    }
};
var DateInput = function (_a) {
    var error = _a.error, hintId = _a.hintId, errorId = _a.errorId, label = _a.label, hint = _a.hint, id = _a.id, dayId = _a.dayId, name = _a.name, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, value = _a.value, spellCheck = _a.spellCheck, autoComplete = _a.autoComplete, onChange = _a.onChange, monthId = _a.monthId, name2 = _a.name2, disabled2 = _a.disabled2, readOnly2 = _a.readOnly2, autoFocus2 = _a.autoFocus2, value2 = _a.value2, spellCheck2 = _a.spellCheck2, autoComplete2 = _a.autoComplete2, onChange2 = _a.onChange2, yearId = _a.yearId, name3 = _a.name3, disabled3 = _a.disabled3, readOnly3 = _a.readOnly3, autoFocus3 = _a.autoFocus3, value3 = _a.value3, spellCheck3 = _a.spellCheck3, autoComplete3 = _a.autoComplete3, onChange3 = _a.onChange3;
    return (React.createElement(StyledDiv, { error: error },
        React.createElement(StyledFieldset, { "aria-describedby": hintId !== undefined || errorId !== undefined
                ? "" + (hintId ? hintId : "") + (errorId ? " " + errorId : "")
                : undefined, role: "group" },
            React.createElement(StyledLegend, null, label !== undefined ? (label) : (React.createElement(React.Fragment, null, "Example label"))),
            React.createElement(StyledSpan, { id: hintId }, hint !== undefined ? (hint) : (React.createElement(React.Fragment, null, "Example hint"))),
            error !== undefined ? (React.createElement(React.Fragment, null,
                React.createElement(StyledSpan2, { id: errorId },
                    React.createElement(StyledSpan3, null, "Error: "),
                    error !== undefined ? (error) : (React.createElement(React.Fragment, null, "Example error"))))) : (""),
            React.createElement(StyledDiv2, { id: id },
                React.createElement(StyledDiv3, null,
                    React.createElement(StyledDiv4, null,
                        React.createElement(StyledLabel, { htmlFor: dayId }, "Day"),
                        React.createElement(StyledInput, { error: error, id: dayId, maxLength: 2, name: name, pattern: "[0-9]*", type: "text", disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, spellCheck: spellCheck, autoComplete: constants.autoComplete[autoComplete], onChange: onChange }))),
                React.createElement(StyledDiv5, null,
                    React.createElement(StyledDiv6, null,
                        React.createElement(StyledLabel2, { htmlFor: monthId }, "Month"),
                        React.createElement(StyledInput2, { error: error, id: monthId, maxLength: 2, name: name2, pattern: "[0-9]*", type: "text", disabled: disabled2, readOnly: readOnly2, autoFocus: autoFocus2, value: value2, spellCheck: spellCheck2, autoComplete: constants.autoComplete2[autoComplete2], onChange: onChange2 }))),
                React.createElement(StyledDiv7, null,
                    React.createElement(StyledDiv8, null,
                        React.createElement(StyledLabel3, { htmlFor: yearId }, "Year"),
                        React.createElement(StyledInput3, { error: error, id: yearId, maxLength: 4, name: name3, pattern: "[0-9]*", type: "text", disabled: disabled3, readOnly: readOnly3, autoFocus: autoFocus3, value: value3, spellCheck: spellCheck3, autoComplete: constants.autoComplete3[autoComplete3], onChange: onChange3 })))))));
};
exports.default = DateInput;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23;
//# sourceMappingURL=DateInput.js.map
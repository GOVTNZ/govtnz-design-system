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
var StyledDiv = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: 20px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  ", "\n  padding: 0;\n  border: 0;\n  margin-bottom: 5px;\n  margin-top: 0px;\n"], ["\n  margin-bottom: 20px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  ",
    "\n  padding: 0;\n  border: 0;\n  margin-bottom: 5px;\n  margin-top: 0px;\n"])), function (props) {
    return props.error && styled.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      padding-left: 15px;\n      border-left: 5px solid #b10e1e;\n    "], ["\n      padding-left: 15px;\n      border-left: 5px solid #b10e1e;\n    "])));
});
var StyledLabel = styled.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: bold;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #2a2a2a;\n  display: block;\n  margin-bottom: 5px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: bold;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #2a2a2a;\n  display: block;\n  margin-bottom: 5px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  margin-top: 0px;\n"])));
var StyledDiv2 = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  margin-bottom: 15px;\n  color: #595959;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  margin-top: -5px;\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  margin-bottom: 15px;\n  color: #595959;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  margin-top: -5px;\n  margin-top: 0px;\n"])));
var StyledDiv3 = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  margin-bottom: 15px;\n  clear: both;\n  color: #b10e1e;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  margin-bottom: 15px;\n  clear: both;\n  color: #b10e1e;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  margin-top: 0px;\n"])));
var StyledSpan = styled.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  overflow: hidden !important;\n  clip: rect(0 0 0 0) !important;\n  -webkit-clip-path: inset(50%) !important;\n  clip-path: inset(50%) !important;\n  border: 0 !important;\n  white-space: nowrap !important;\n  margin-top: 0px;\n"], ["\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  overflow: hidden !important;\n  clip: rect(0 0 0 0) !important;\n  -webkit-clip-path: inset(50%) !important;\n  clip-path: inset(50%) !important;\n  border: 0 !important;\n  white-space: nowrap !important;\n  margin-top: 0px;\n"])));
var StyledInput = styled.input(templateObject_15 || (templateObject_15 = __makeTemplateObject(["font-family: Arial, sans-serif;\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nfont-weight: 400;\nfont-size: 1rem;\nline-height: 1.25;\nbox-sizing: border-box;\nwidth: 100%;\nheight: 40px;\nmargin-top: 0;\npadding: .5rem;\nborder: 1px solid #2a2a2a;\nborder-radius: 0;\n-webkit-appearance: none;\n-moz-appearance: none;\nappearance: none;\n@media print{\nfont-family: sans-serif;;\n}\n@media (min-width: 40.0625em){\nfont-size: 1.1875rem;\nline-height: 1.31579;;\n}\n@media print{\nfont-size: 14pt;\nline-height: 1.15;;\n}\n:focus{\noutline: 3px solid #ffbf47;\noutline-offset: 0;\n}\n::-webkit-outer-spin-button,::-webkit-inner-spin-button{\nmargin: 0;\n-webkit-appearance: none;\n}\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\nmargin-top: 0px;"], ["font-family: Arial, sans-serif;\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nfont-weight: 400;\nfont-size: 1rem;\nline-height: 1.25;\nbox-sizing: border-box;\nwidth: 100%;\nheight: 40px;\nmargin-top: 0;\npadding: .5rem;\nborder: 1px solid #2a2a2a;\nborder-radius: 0;\n-webkit-appearance: none;\n-moz-appearance: none;\nappearance: none;\n@media print{\nfont-family: sans-serif;;\n}\n@media (min-width: 40.0625em){\nfont-size: 1.1875rem;\nline-height: 1.31579;;\n}\n@media print{\nfont-size: 14pt;\nline-height: 1.15;;\n}\n:focus{\noutline: 3px solid #ffbf47;\noutline-offset: 0;\n}\n::-webkit-outer-spin-button,::-webkit-inner-spin-button{\nmargin: 0;\n-webkit-appearance: none;\n}\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "\n",
    "\nmargin-top: 0px;"])), function (props) {
    return props.error && styled.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    border: 1px solid #b10e1e;\n  "], ["\n    border: 1px solid #b10e1e;\n  "])));
}, function (props) {
    return props.width === "30" && styled.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    max-width: 59ex;\n  "], ["\n    max-width: 59ex;\n  "])));
}, function (props) {
    return props.width === "20" && styled.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    max-width: 41ex;\n  "], ["\n    max-width: 41ex;\n  "])));
}, function (props) {
    return props.width === "10" && styled.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    max-width: 23ex;\n  "], ["\n    max-width: 23ex;\n  "])));
}, function (props) {
    return props.width === "5" && styled.css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    max-width: 10.8ex;\n  "], ["\n    max-width: 10.8ex;\n  "])));
}, function (props) {
    return props.width === "4" && styled.css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    max-width: 9ex;\n  "], ["\n    max-width: 9ex;\n  "])));
}, function (props) {
    return props.width === "3" && styled.css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    max-width: 7.2ex;\n  "], ["\n    max-width: 7.2ex;\n  "])));
}, function (props) {
    return props.width === "2" && styled.css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    max-width: 5.4ex;\n  "], ["\n    max-width: 5.4ex;\n  "])));
});
var InputBlock = function (_a) {
    var error = _a.error, inputId = _a.inputId, label = _a.label, hint = _a.hint, hintId = _a.hintId, errorId = _a.errorId, width = _a.width, name = _a.name, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, value = _a.value, min = _a.min, max = _a.max, type = _a.type, spellCheck = _a.spellCheck, maxLength = _a.maxLength, autoComplete = _a.autoComplete, onChange = _a.onChange;
    return (React.createElement(StyledDiv, { error: error },
        React.createElement(StyledLabel, { htmlFor: inputId }, label !== undefined ? (label) : (React.createElement(React.Fragment, null, "Example text"))),
        hint !== undefined ? (React.createElement(React.Fragment, null,
            React.createElement(StyledDiv2, { id: hintId }, hint !== undefined ? (hint) : (React.createElement(React.Fragment, null, "Example text"))))) : (""),
        errorId !== undefined ? (React.createElement(React.Fragment, null,
            React.createElement(StyledDiv3, { id: errorId },
                React.createElement(StyledSpan, null, "Error: "),
                error !== undefined ? (error) : (React.createElement(React.Fragment, null, "Example text"))))) : (""),
        React.createElement(StyledInput, { width: width, error: error, "aria-describedby": hintId !== undefined || errorId !== undefined
                ? "" + (hintId ? hintId : "") + (errorId ? " " + errorId : "")
                : undefined, id: inputId, name: name, disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, min: min, max: max, type: type, spellCheck: spellCheck, maxLength: maxLength, autoComplete: autoComplete, onChange: onChange })));
};
exports.default = InputBlock;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
//# sourceMappingURL=InputBlock.js.map
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
var StyledButton = styled.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.2;\n  box-sizing: border-box;\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 22px;\n  padding: 16px;\n  border: 2px solid transparent;\n  border-radius: 4px;\n  color: #ffffff;\n  background-color: #00823b;\n  box-shadow: 0 2px 0 0 #2a2a2a;\n  text-align: center;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-appearance: none;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 19px;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 32px;\n  }\n  @media (min-width: 40.0625em) {\n    width: auto;\n  }\n  :link,\n  :visited,\n  :active,\n  :hover {\n    color: #ffffff;\n    text-decoration: none;\n  }\n  ::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n  :hover,\n  :focus {\n    background-color: #00682f;\n  }\n  :active {\n    top: 2px;\n    box-shadow: none;\n  }\n  ::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: -2px;\n    right: -2px;\n    bottom: -4px;\n    left: -2px;\n    background: transparent;\n  }\n  :active::before {\n    top: -4px;\n  }\n  opacity: 0.5;\n  background: #00823b;\n  :hover,\n  :hover {\n    background-color: #00823b;\n    cursor: default;\n  }\n  :focus,\n  :focus {\n    outline: none;\n  }\n  :active,\n  :active {\n    top: 0;\n    box-shadow: 0 2px 0 #003418;\n  }\n  ", "\n  :link,:visited,:active,:hover {\n    ", "\n  }\n  :hover,\n  :focus {\n    background-color: #c8cacb;\n  }\n  ", "\n  :link,:visited,:active,:hover {\n    ", "\n  }\n  :hover,\n  :focus {\n    background-color: #8e0b18;\n  }\n  padding-top: 16px;\n  padding-bottom: 16px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.2;\n  box-sizing: border-box;\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 22px;\n  padding: 16px;\n  border: 2px solid transparent;\n  border-radius: 4px;\n  color: #ffffff;\n  background-color: #00823b;\n  box-shadow: 0 2px 0 0 #2a2a2a;\n  text-align: center;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-appearance: none;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 19px;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 32px;\n  }\n  @media (min-width: 40.0625em) {\n    width: auto;\n  }\n  :link,\n  :visited,\n  :active,\n  :hover {\n    color: #ffffff;\n    text-decoration: none;\n  }\n  ::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n  :hover,\n  :focus {\n    background-color: #00682f;\n  }\n  :active {\n    top: 2px;\n    box-shadow: none;\n  }\n  ::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: -2px;\n    right: -2px;\n    bottom: -4px;\n    left: -2px;\n    background: transparent;\n  }\n  :active::before {\n    top: -4px;\n  }\n  opacity: 0.5;\n  background: #00823b;\n  :hover,\n  :hover {\n    background-color: #00823b;\n    cursor: default;\n  }\n  :focus,\n  :focus {\n    outline: none;\n  }\n  :active,\n  :active {\n    top: 0;\n    box-shadow: 0 2px 0 #003418;\n  }\n  ",
    "\n  :link,:visited,:active,:hover {\n    ",
    "\n  }\n  :hover,\n  :focus {\n    background-color: #c8cacb;\n  }\n  ",
    "\n  :link,:visited,:active,:hover {\n    ",
    "\n  }\n  :hover,\n  :focus {\n    background-color: #8e0b18;\n  }\n  padding-top: 16px;\n  padding-bottom: 16px;\n"])), function (props) {
    return props.level === "secondary" && styled.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: #dee0e2;\n      box-shadow: 0 2px 0 #858688;\n    "], ["\n      background-color: #dee0e2;\n      box-shadow: 0 2px 0 #858688;\n    "])));
}, function (props) {
    return props.level === "secondary" && styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        color: #0b0c0c;\n      "], ["\n        color: #0b0c0c;\n      "])));
}, function (props) {
    return props.level === "warning" && styled.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background-color: #b10e1e;\n      box-shadow: 0 2px 0 #47060c;\n    "], ["\n      background-color: #b10e1e;\n      box-shadow: 0 2px 0 #47060c;\n    "])));
}, function (props) {
    return props.level === "warning" && styled.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        color: #ffffff;\n      "], ["\n        color: #ffffff;\n      "])));
});
var constants = {
    type: { Submit: "submit", Reset: "reset", Button: "button" }
};
var Button = function (_a) {
    var disabled = _a.disabled, level = _a.level, name = _a.name, type = _a.type, onClick = _a.onClick, children = _a.children;
    return (React.createElement(StyledButton, { disabled: disabled, level: level, "aria-disabled": disabled, type: constants.type[type], name: name, onClick: onClick }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
};
Button.props = ["disabled", "level", "name", "type", "onClick", "children"];
exports.default = Button;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Button.js.map
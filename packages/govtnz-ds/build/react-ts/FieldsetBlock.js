"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const FieldsetBlock = ({ hintId, legend, hint, children }) => (React.createElement("div", { className: "g-fieldsetBlock-form-group" },
    React.createElement("fieldset", { "aria-describedby": hintId, className: "g-fieldset" },
        React.createElement("legend", { className: "g-fieldset__legend" }, legend !== undefined ? (legend) : (React.createElement(React.Fragment, null, "Legend text"))),
        hintId !== undefined ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "g-fieldsetBlock-hint", id: hintId }, hint !== undefined ? (hint) : (React.createElement(React.Fragment, null, "Hint text"))))) : (""),
        React.createElement("div", null, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Fieldset contents"))))));
FieldsetBlock.props = ["hintId", "legend", "hint", "children"];
exports.default = FieldsetBlock;
//# sourceMappingURL=FieldsetBlock.js.map
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
const Fieldset = ({ hintId, children }) => (React.createElement("div", { className: "g-fieldset-form-group" },
    React.createElement("fieldset", { "aria-describedby": hintId, className: "g-fieldset" }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Legend and other fieldset contents...")))));
Fieldset.props = ["hintId", "children"];
exports.default = Fieldset;
//# sourceMappingURL=Fieldset.js.map
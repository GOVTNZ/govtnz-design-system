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
const constants = {
    type: { Submit: "submit", Reset: "reset", Button: "button" }
};
const Button = ({ disabled, name, type, children }) => (React.createElement("button", { "aria-disabled": disabled ? "true" : "", className: `g-button${disabled ? " g-button--disabled" : ""}`, disabled: disabled ? "true" : "", type: constants.type[type], name: name }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
Button.props = ["disabled", "name", "type", "children"];
exports.default = Button;
//# sourceMappingURL=Button.js.map
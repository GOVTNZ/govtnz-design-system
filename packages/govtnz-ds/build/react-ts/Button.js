"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var constants = {
    type: { Submit: "submit", Reset: "reset", Button: "button" }
};
var Button = function (_a) {
    var disabled = _a.disabled, name = _a.name, type = _a.type, children = _a.children;
    return (React.createElement("button", { "aria-disabled": disabled, className: "g-button" + (disabled ? " g-button--disabled" : ""), disabled: disabled, type: constants.type[type], name: name }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
};
Button.props = ["disabled", "name", "type", "children"];
exports.default = Button;
//# sourceMappingURL=Button.js.map
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
    level: { secondary: "g-button--secondary", warning: "g-button--warning" },
    type: { Submit: "submit", Reset: "reset", Button: "button" }
};
var Button = function (_a) {
    var disabled = _a.disabled, level = _a.level, name = _a.name, type = _a.type, onClick = _a.onClick, children = _a.children;
    return (React.createElement("button", { className: "g-button" + (disabled ? " g-button--disabled" : "") + (constants.level[level] !== undefined ? " " + constants.level[level] : ""), disabled: disabled, type: constants.type[type], name: name, onClick: onClick }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map
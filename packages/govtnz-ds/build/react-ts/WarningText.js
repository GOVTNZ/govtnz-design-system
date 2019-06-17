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
var WarningText = function (_a) { return (React.createElement("div", { className: "g-warning-text" },
    React.createElement("span", { "aria-hidden": "true", className: "g-warning-text__icon" }, "!"),
    React.createElement("strong", { className: "g-warning-text__text" },
        React.createElement("span", { className: "g-warning-text__assistive" }, "Warning"),
        "You can be fined up to $5,000 if you don\u2019t register."))); };
exports.default = WarningText;
//# sourceMappingURL=WarningText.js.map
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
const FieldsetLabel = ({ hintId, hint }) => (React.createElement("div", { className: "g-fieldsetLabel-hint", id: hintId }, hint !== undefined ? hint : React.createElement(React.Fragment, null, "Hint text")));
FieldsetLabel.props = ["hintId", "hint"];
exports.default = FieldsetLabel;
//# sourceMappingURL=FieldsetLabel.js.map
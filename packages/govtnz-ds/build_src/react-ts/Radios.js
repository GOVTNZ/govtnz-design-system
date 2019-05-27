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
const Radios = ({ inline, children }) => (React.createElement("div", { className: `g-radios${inline ? " g-radios--inline" : ""}` }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Radio components"))));
Radios.props = ["inline", "children"];
exports.default = Radios;
//# sourceMappingURL=Radios.js.map
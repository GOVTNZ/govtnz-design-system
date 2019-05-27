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
const FooterWrapper = ({ children }) => (React.createElement("footer", { className: "g-footer-wrapper" }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Content..."))));
FooterWrapper.props = ["children"];
exports.default = FooterWrapper;
//# sourceMappingURL=FooterWrapper.js.map
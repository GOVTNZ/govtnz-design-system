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
const CaptionM = ({ children }) => (React.createElement("span", { className: "g-caption-m" }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
CaptionM.props = ["children"];
exports.default = CaptionM;
//# sourceMappingURL=CaptionM.js.map
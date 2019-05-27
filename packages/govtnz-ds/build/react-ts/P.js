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
    styleSize: {
        large: "g-p-body-l",
        medium: "g-p-body-m",
        small: "g-p-body-s",
        "x-small": "g-p-body-xs"
    }
};
const P = ({ styleSize, children }) => (React.createElement("p", { className: constants.styleSize[styleSize] !== undefined
        ? constants.styleSize[styleSize]
        : "" }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
P.props = ["styleSize", "children"];
exports.default = P;
//# sourceMappingURL=P.js.map
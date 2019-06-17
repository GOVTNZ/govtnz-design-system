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
    width: { fixed: "g-flex-container", fluid: "g-flex-container-fluid" }
};
var FlexContainer = function (_a) {
    var width = _a.width, children = _a.children;
    return (React.createElement("div", { className: constants.width[width] !== undefined ? constants.width[width] : "" }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Rows..."))));
};
exports.default = FlexContainer;
//# sourceMappingURL=FlexContainer.js.map
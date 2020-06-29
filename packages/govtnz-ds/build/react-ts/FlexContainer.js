"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var constants = {
    width: { fixed: "g-flex-container", fluid: "g-flex-container-fluid" }
};
var FlexContainer = function (_a) {
    var width = _a.width, children = _a.children;
    return (react_1.default.createElement("div", { className: constants.width[width] !== undefined ? constants.width[width] : "" }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Rows..."))));
};
exports.default = FlexContainer;
//# sourceMappingURL=FlexContainer.js.map
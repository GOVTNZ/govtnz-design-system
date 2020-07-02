"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var constants = {
    level: {
        info: "g-alert--info",
        warning: "g-alert--warning",
        success: "g-alert--success",
        error: "g-alert--error"
    }
};
var Alert = function (_a) {
    var mode = _a.mode, level = _a.level, children = _a.children, headingId = _a.headingId;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        mode === "live" ? (react_1.default.createElement(react_1.default.Fragment, null, level === "info" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { "aria-atomic": "true", "aria-live": "polite", role: "note" }, children !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "g-alert" + (constants.level[level] !== undefined
                        ? " " + constants.level[level]
                        : "") }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example alert content "))))) : ("")))) : (""))) : (""),
        mode === "live" ? (react_1.default.createElement(react_1.default.Fragment, null, level === "warning" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { "aria-atomic": "true", "aria-live": "polite", role: "note" }, children !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "g-alert" + (constants.level[level] !== undefined
                        ? " " + constants.level[level]
                        : "") }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example alert content "))))) : ("")))) : (""))) : (""),
        mode === "live" ? (react_1.default.createElement(react_1.default.Fragment, null, level === "success" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { "aria-atomic": "true", "aria-live": "polite", role: "note" }, children !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "g-alert" + (constants.level[level] !== undefined
                        ? " " + constants.level[level]
                        : "") }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example alert content "))))) : ("")))) : (""))) : (""),
        mode === "live" ? (react_1.default.createElement(react_1.default.Fragment, null, level === "error" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { "aria-atomic": "true", "aria-live": "polite", role: "note" }, children !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "g-alert" + (constants.level[level] !== undefined
                        ? " " + constants.level[level]
                        : "") }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example alert content "))))) : ("")))) : (""))) : (""),
        mode !== "live" ? (react_1.default.createElement(react_1.default.Fragment, null, level === "info" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { "aria-labelledby": headingId, role: "note" }, children !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "g-alert" + (constants.level[level] !== undefined
                        ? " " + constants.level[level]
                        : "") }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example alert content "))))) : ("")))) : (""))) : (""),
        mode !== "live" ? (react_1.default.createElement(react_1.default.Fragment, null, level === "warning" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { "aria-labelledby": headingId, role: "note" }, children !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "g-alert" + (constants.level[level] !== undefined
                        ? " " + constants.level[level]
                        : "") }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example alert content "))))) : ("")))) : (""))) : (""),
        mode !== "live" ? (react_1.default.createElement(react_1.default.Fragment, null, level === "success" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { "aria-labelledby": headingId, role: "note", tabIndex: -1 }, children !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "g-alert" + (constants.level[level] !== undefined
                        ? " " + constants.level[level]
                        : "") }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example alert content "))))) : ("")))) : (""))) : (""),
        mode !== "live" ? (react_1.default.createElement(react_1.default.Fragment, null, level === "error" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { "aria-labelledby": headingId, role: "note", tabIndex: -1 }, children !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "g-alert" + (constants.level[level] !== undefined
                        ? " " + constants.level[level]
                        : "") }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example alert content "))))) : ("")))) : (""))) : ("")));
};
exports.default = Alert;
//# sourceMappingURL=Alert.js.map
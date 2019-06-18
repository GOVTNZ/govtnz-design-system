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
    target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};
var ErrorSummary = function (_a) {
    var errorSummaryTitle = _a.errorSummaryTitle, href = _a.href, rel = _a.rel, target = _a.target, href2 = _a.href2, rel2 = _a.rel2, target2 = _a.target2;
    return (React.createElement("div", { "aria-labelledby": errorSummaryTitle, className: "g-error-summary optional-extra-class", "data-module": "error-summary", role: "alert", tabIndex: -1 },
        React.createElement("h2", { className: "g-error-summary__title", id: errorSummaryTitle }, "Message to alert the user to a problem goes here"),
        React.createElement("div", { className: "g-error-summary__body" },
            React.createElement("p", null, "Optional description of the errors and how to correct them"),
            React.createElement("ul", { className: "g-errorSummary-list g-error-summary__list" },
                React.createElement("li", null,
                    React.createElement("a", { href: href, rel: rel, target: constants.target[target] }, "Descriptive link to the question with an error")),
                React.createElement("li", null,
                    React.createElement("a", { href: href2, rel: rel2, target: constants.target2[target2] }, "Descriptive link to the question with an error"))))));
};
exports.default = ErrorSummary;
//# sourceMappingURL=ErrorSummary.js.map
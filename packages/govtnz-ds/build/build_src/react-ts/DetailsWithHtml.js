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
const DetailsWithHtml = ({ detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0 }) => (React.createElement("details", { className: "g-detailsWithHtml-details", role: "group" },
    React.createElement("summary", { "aria-controls": detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0, "aria-expanded": "false", className: "g-detailsWithHtml-details__summary", role: "button" },
        React.createElement("span", { className: "g-detailsWithHtml-details__summary-text" }, "Where to find your National Insurance Number")),
    React.createElement("div", { "aria-hidden": "true", className: "g-detailsWithHtml-details__text", id: detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0 },
        "Your National Insurance number can be found on",
        React.createElement("ul", null,
            React.createElement("li", null, "your National Insurance card"),
            React.createElement("li", null, "your payslip"),
            React.createElement("li", null, "P60"),
            React.createElement("li", null, "benefits information"),
            React.createElement("li", null, "tax return")))));
DetailsWithHtml.props = ["detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0"];
exports.default = DetailsWithHtml;
//# sourceMappingURL=DetailsWithHtml.js.map
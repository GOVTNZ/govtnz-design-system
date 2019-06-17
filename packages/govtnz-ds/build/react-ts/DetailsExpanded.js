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
var DetailsExpanded = function (_a) {
    var helpWithNationality = _a.helpWithNationality, open = _a.open, detailsContent3E1674E973084F93B79C1A8694B6F4D5 = _a.detailsContent3E1674E973084F93B79C1A8694B6F4D5;
    return (React.createElement("details", { className: "g-detailsExpanded-details", id: helpWithNationality, open: open, role: "group" },
        React.createElement("summary", { "aria-controls": detailsContent3E1674E973084F93B79C1A8694B6F4D5, "aria-expanded": "true", className: "g-detailsExpanded-details__summary", role: "button" },
            React.createElement("span", { className: "g-detailsExpanded-details__summary-text" }, "Help with nationality")),
        React.createElement("div", { "aria-hidden": "false", className: "g-detailsExpanded-details__text", id: detailsContent3E1674E973084F93B79C1A8694B6F4D5 }, "We need to know your nationality so we can work out which elections you\u2019re entitled to vote in. If you can\u2019t provide your nationality, you\u2019ll have to send copies of identity documents through the post.")));
};
exports.default = DetailsExpanded;
//# sourceMappingURL=DetailsExpanded.js.map
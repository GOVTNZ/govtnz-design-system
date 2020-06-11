"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var constants = {
    xsVerticalAlign: {
        top: "g-flex-top-xs",
        middle: "g-flex-middle-xs",
        bottom: "g-flex-bottom-xs"
    },
    smVerticalAlign: {
        top: "g-flex-top-sm",
        middle: "g-flex-middle-sm",
        bottom: "g-flex-bottom-sm"
    },
    mdVerticalAlign: {
        top: "g-flex-top-md",
        middle: "g-flex-middle-md",
        bottom: "g-flex-bottom-md"
    },
    lgVerticalAlign: {
        top: "g-flex-top-lg",
        middle: "g-flex-middle-lg",
        bottom: "g-flex-bottom-lg"
    }
};
var FlexRow = function (_a) {
    var xsVerticalAlign = _a.xsVerticalAlign, smVerticalAlign = _a.smVerticalAlign, mdVerticalAlign = _a.mdVerticalAlign, lgVerticalAlign = _a.lgVerticalAlign, isReversed = _a.isReversed, children = _a.children;
    return (react_1.default.createElement("div", { className: "g-flex-row" + (constants.xsVerticalAlign[xsVerticalAlign] !== undefined
            ? " " + constants.xsVerticalAlign[xsVerticalAlign]
            : "") + (constants.smVerticalAlign[smVerticalAlign] !== undefined
            ? " " + constants.smVerticalAlign[smVerticalAlign]
            : "") + (constants.mdVerticalAlign[mdVerticalAlign] !== undefined
            ? " " + constants.mdVerticalAlign[mdVerticalAlign]
            : "") + (constants.lgVerticalAlign[lgVerticalAlign] !== undefined
            ? " " + constants.lgVerticalAlign[lgVerticalAlign]
            : "") + (isReversed ? " g-flex-reverse" : "") },
        " ",
        children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Columns...")),
        " "));
};
exports.default = FlexRow;
//# sourceMappingURL=FlexRow.js.map
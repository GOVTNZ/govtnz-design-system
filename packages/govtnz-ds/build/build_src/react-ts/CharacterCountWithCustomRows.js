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
const CharacterCountWithCustomRows = ({ customRows, onChange, customRowsInfo }) => (React.createElement("div", { className: "g-characterCountWithCustomRows-character-count", "data-maxlength": "10", "data-module": "character-count" },
    React.createElement("div", { className: "g-characterCountWithCustomRows-form-group" },
        React.createElement("label", { className: "g-characterCountWithCustomRows-label", htmlFor: customRows }, "Full address"),
        React.createElement("textarea", { className: "g-characterCountWithCustomRows-textarea js-character-count", id: customRows, name: "custom", rows: "8", onChange: onChange }),
        React.createElement("span", { "aria-live": "polite", className: "g-characterCountWithCustomRows-hint g-characterCountWithCustomRows-character-count__message", id: customRowsInfo }, "You have 10 characters remaining"))));
CharacterCountWithCustomRows.props = [
    "customRows",
    "onChange",
    "customRowsInfo"
];
exports.default = CharacterCountWithCustomRows;
//# sourceMappingURL=CharacterCountWithCustomRows.js.map
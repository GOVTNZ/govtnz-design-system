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
const Table = ({}) => (React.createElement("table", { className: "g-table" },
    React.createElement("tbody", { className: "g-table__body" },
        React.createElement("tr", { className: "g-table__row" }, "January $85 $95"),
        React.createElement("tr", { className: "g-table__row" }, "February $75 $55"),
        React.createElement("tr", { className: "g-table__row" }, "March $165 $125"))));
Table.props = [];
exports.default = Table;
//# sourceMappingURL=Table.js.map
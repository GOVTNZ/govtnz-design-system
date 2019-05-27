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
const Select = ({ selectId, name, multiple, onChange, children }) => (React.createElement("select", { className: "g-select", id: selectId, name: name, multiple: multiple, onChange: onChange }, children !== undefined ? (children) : (React.createElement(React.Fragment, null,
    React.createElement("option", null, "Options")))));
Select.props = ["selectId", "name", "multiple", "onChange", "children"];
exports.default = Select;
//# sourceMappingURL=Select.js.map
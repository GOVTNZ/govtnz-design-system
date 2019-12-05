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
var SelectBlock = function (_a) {
    var errorId = _a.errorId, selectId = _a.selectId, label = _a.label, error = _a.error, name = _a.name, multiple = _a.multiple, onChange = _a.onChange, children = _a.children;
    return (React.createElement("div", { className: errorId ? "g-selectBlock-form-group--error" : "" },
        React.createElement("label", { className: "g-selectBlock-label", htmlFor: selectId }, label !== undefined ? (label) : (React.createElement(React.Fragment, null, "Example label text"))),
        React.createElement("select", { className: "g-selectBlock-select" + (error ? " g-selectBlock-select--error" : ""), id: selectId, name: name, multiple: multiple, onChange: onChange }, children !== undefined ? (children) : (React.createElement(React.Fragment, null,
            React.createElement("option", null, "Options"))))));
};
exports.default = SelectBlock;
//# sourceMappingURL=SelectBlock.js.map
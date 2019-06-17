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
    var selectId = _a.selectId, label = _a.label, hasError = _a.hasError, name = _a.name, multiple = _a.multiple, onChange = _a.onChange, children = _a.children;
    return (React.createElement("div", null,
        React.createElement("label", { className: "g-selectBlock-label", htmlFor: selectId }, label !== undefined ? (label) : (React.createElement(React.Fragment, null, "Example label text"))),
        React.createElement("select", { className: "g-selectBlock-select" + (hasError ? " g-selectBlock-select--error" : ""), id: selectId, name: name, multiple: multiple, onChange: onChange }, children !== undefined ? (children) : (React.createElement(React.Fragment, null,
            React.createElement("option", null, "Options"))))));
};
exports.default = SelectBlock;
//# sourceMappingURL=SelectBlock.js.map
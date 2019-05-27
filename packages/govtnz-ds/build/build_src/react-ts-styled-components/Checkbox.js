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
const styled = __importStar(require("styled-components"));
const StyledInput = styled.input `
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin: 0;
  opacity: 0;
  :disabled {
    cursor: default;
  }
`;
const Checkbox = ({ fakeFocus, checkboxId, hintId, name, disabled, readOnly, autoFocus, value, checked, onChange }) => (React.createElement(StyledInput, { fakeFocus: fakeFocus, "aria-describedby": hintId, id: checkboxId, type: "checkbox", name: name, disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, checked: checked, onChange: onChange }));
Checkbox.props = [
    "fakeFocus",
    "checkboxId",
    "hintId",
    "name",
    "disabled",
    "readOnly",
    "autoFocus",
    "value",
    "checked",
    "onChange"
];
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map
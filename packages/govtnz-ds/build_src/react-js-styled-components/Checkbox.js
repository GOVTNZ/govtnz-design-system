import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
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
  margin-top: 0px;
`;

const Checkbox = ({
  fakeFocus,
  checkboxId,
  hintId,
  name,
  disabled,
  readOnly,
  autoFocus,
  value,
  checked,
  onChange
}) => (
  <StyledInput
    fakeFocus={fakeFocus}
    aria-describedby={hintId}
    id={checkboxId}
    type="checkbox"
    name={name}
    disabled={disabled}
    readOnly={readOnly}
    autoFocus={autoFocus}
    value={value}
    checked={checked}
    onChange={onChange}
  />
);

export default Checkbox;

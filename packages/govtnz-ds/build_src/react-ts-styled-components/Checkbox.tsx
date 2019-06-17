import * as React from "react";
import * as styled from "styled-components";

type Props = {
  fakeFocus?: boolean | undefined;
  checkboxId?: string | undefined;
  hintId?: string | undefined;
  name: string;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  autoFocus?: boolean | undefined;
  value?: string | undefined;
  checked?: boolean | undefined;
  onChange: any;
};

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
}: Props) => (
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

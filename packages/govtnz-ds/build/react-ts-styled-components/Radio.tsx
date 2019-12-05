import * as React from "react";
import * as styled from "styled-components";

type Props = {
  id?: string;
  hintId?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  name: string;
  value?: string;
  checked?: boolean;
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
  margin-top: 0px;
`;

const Radio = ({
  id,
  hintId,
  disabled,
  readOnly,
  autoFocus,
  name,
  value,
  checked,
  onChange
}: Props) => (
  <StyledInput
    aria-describedby={hintId}
    id={id}
    name={name}
    type="radio"
    disabled={disabled}
    readOnly={readOnly}
    autoFocus={autoFocus}
    value={value}
    checked={checked}
    onChange={onChange}
  />
);

export default Radio;

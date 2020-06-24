import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: solid 1px black;
  ${props =>
    props.hasError &&
    styled.css`
      border: solid 2px red;
    `}
`;

const Input = ({
  hasError,
  disabled,
  readOnly,
  autoFocus,
  name,
  value,
  min,
  max,
  type,
  spellCheck,
  maxLength,
  autoComplete,
  onChange,
  ref
}) => (
  <StyledInput
    hasError={hasError}
    disabled={disabled}
    readOnly={readOnly}
    autoFocus={autoFocus}
    name={name}
    value={value}
    min={min}
    max={max}
    type={type}
    spellCheck={spellCheck}
    maxLength={maxLength}
    autoComplete={autoComplete}
    onChange={onChange}
    ref={ref}
  />
);

export default Input;

import React from "react";
import styled from "styled-components";

type Props = {
  errorId?: boolean;
  selectId?: string;
  label?: React.ReactNode;
  error: boolean;
  name: string;
  multiple?: boolean;
  onChange?: React.SelectHTMLAttributes<HTMLSelectElement>["onChange"];
  ref?: React.RefObject<HTMLSelectElement>;
};

const StyledDiv = styled.div`
  margin-top: 0px;
`;

const StyledLabel = styled.label`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.25;
  color: #2a2a2a;
  display: block;
  margin-bottom: 5px;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.15;
  }
  @media print {
    color: #000000;
  }
  margin-top: 0px;
`;

const StyledSelect = styled.select<Pick<Props, "error">>`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  padding: 0.4rem 2.5rem 0.5rem 0.6rem;
  border: 1px solid #000000;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  border-radius: 0;
  background-position: right 0.7em top 50%;
  background-size: 1rem auto;
  background-image: url("data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%228.5%22%20viewBox%3D%220%200%2016%2010.5%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M1%201%20L8%208.5%20L15%201%22%20stroke-width%3D%223%22%20stroke%3D%22currentColor%22%20fill%3D%22transparent%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fsvg%3E");
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.25;
  }
  :focus {
    outline: 3px solid #b53cde;
    outline-offset: 0;
  }
  :focus::-ms-value {
    color: #ffffff;
    background-color: #005ea5;
  }
  ${props =>
    props.error &&
    styled.css`
      border: 1px solid #b10e1e;
    `}
  ::-ms-expand {
    display: none;
  }
  margin-top: 0px;
`;

const SelectBlock = ({
  errorId,
  selectId,
  label,
  error,
  name,
  multiple,
  onChange,
  ref
}: Props) => (
  <StyledDiv errorId={errorId}>
    <StyledLabel htmlFor={selectId}>
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Example label text</React.Fragment>
      )}
    </StyledLabel>
    <StyledSelect
      error={error}
      id={selectId}
      name={name}
      multiple={multiple}
      onChange={onChange}
      ref={ref}
    >
      Options
    </StyledSelect>
  </StyledDiv>
);

export default SelectBlock;

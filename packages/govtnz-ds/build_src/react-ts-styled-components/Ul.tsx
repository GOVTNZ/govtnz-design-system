import React from "react";
import styled from "styled-components";

type Props = {
  bulleted?: boolean;
  spacing?: boolean;
  children?: React.ReactNode;
};

const StyledUl = styled.ul<Pick<Props, "bulleted">>`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.625;
  color: #2a2a2a;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 0;
  list-style-type: none;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.31579;
    margin-bottom: 1rem;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.15;
    color: #000000;
  }
  margin-top: 10px;
  ${props =>
    props.bulleted &&
    styled.css`
      padding-left: 20px;
      list-style-type: disc;
    `}
  margin-top: 0px;
  margin-top: 0.5rem;
`;

const Ul = ({ bulleted, spacing, children }: Props) => (
  <StyledUl bulleted={bulleted} spacing={spacing}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledUl>
);

export default Ul;

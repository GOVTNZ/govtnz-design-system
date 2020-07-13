import React from "react";
import styled from "styled-components";

type Props = {
  spacing?: boolean;
  marginBottom0?: boolean;
  noBullet?: boolean;
  children?: React.ReactNode;
};

const StyledUl = styled.ul<
  Pick<Props, "spacing" | "marginBottom0" | "noBullet">
>`
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.625;
  color: g-theme-color;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 20px;
  list-style-type: disc;
  ${props =>
    props.spacing &&
    styled.css`
      margin-bottom: 0;
      line-height: 32px;
    `}
  @media print {
    font-family: sans-serif;
    font-size: 14pt;
    line-height: 1.15;
    color: g-theme-print-color;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.31579;
    margin-bottom: 1rem;
    margin-bottom: 0;
    line-height: 32px;
  }
  ${props =>
    props.marginBottom0 &&
    styled.css`
      margin-bottom: 0px !important;
    `}
  ${props =>
    props.noBullet &&
    styled.css`
      list-style: none;
      padding-left: 0px;
      margin-left: 0px;
    `}
`;

const Ul = ({ spacing, marginBottom0, noBullet, children }: Props) => (
  <StyledUl spacing={spacing} marginBottom0={marginBottom0} noBullet={noBullet}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledUl>
);

export default Ul;

import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  color: g-theme-color;
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.25rem;
  line-height: 1.625;
  margin-bottom: 1.25rem;
  font-size: 1rem;
  line-height: 1.25;
  color: g-theme-hint-color;
  :first-child {
    margin-top: 0px;
  }
  :last-child {
    margin-bottom: 0px;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
  ${props =>
    props.styleSize === "large" &&
    styled.css`
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 1.625;
      margin-top: 0;
      margin-bottom: 1.25em;
    `}
  @media print {
    ${props =>
      props.styleSize === "large" &&
      styled.css`
        color: g-theme-print-color;
        font-family: sans-serif;
        font-size: 18pt;
        line-height: 1.15;
      `};
  }
  ${props =>
    props.styleSize === "medium" &&
    styled.css`
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.25;
      margin-top: 0;
      margin-bottom: 1rem;
    `}
  @media print {
    ${props =>
      props.styleSize === "medium" &&
      styled.css`
        color: g-theme-print-color;
        font-family: sans-serif;
        font-size: 14pt;
        line-height: 1.15;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "medium" &&
      styled.css`
        font-size: 1.1875rem;
        line-height: 1.31579;
        margin-bottom: 1.25rem;
      `};
  }
  ${props =>
    props.styleSize === "small" &&
    styled.css`
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.625;
      margin-top: 0;
      margin-bottom: 1rem;
    `}
  @media print {
    ${props =>
      props.styleSize === "small" &&
      styled.css`
        color: g-theme-print-color;
        font-family: sans-serif;
        font-size: 14pt;
        line-height: 1.2;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "small" &&
      styled.css`
        font-size: 1rem;
        line-height: 1.25;
        margin-bottom: 1.25rem;
      `};
  }
  ${props =>
    props.styleSize === "x-small" &&
    styled.css`
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.25;
      margin-top: 0;
      margin-bottom: 15px;
    `}
  @media print {
    ${props =>
      props.styleSize === "x-small" &&
      styled.css`
        color: g-theme-print-color;
        font-family: sans-serif;
        font-size: 12pt;
        line-height: 1.2;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "x-small" &&
      styled.css`
        font-size: 0.875rem;
        line-height: 1.42857;
        margin-bottom: 0.75rem;
      `};
  }
`;

const P = ({ styleSize, marginBottom0, children }) => (
  <StyledP styleSize={styleSize} marginBottom0={marginBottom0}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledP>
);

export default P;

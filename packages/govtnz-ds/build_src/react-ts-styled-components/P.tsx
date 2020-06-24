import React from "react";
import styled from "styled-components";

type Props = {
  styleSize: "large" | "medium" | "small" | "x-small";
  children?: React.ReactNode;
};

const StyledP = styled.p<Pick<Props, "styleSize">>`
  ${props =>
    props.styleSize === "large" &&
    styled.css`
      color: g-theme-color;
      font-family: g-theme-font-family;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.11111;
      margin-top: 0;
      margin-bottom: 20px;
    `}
  @media print {
    ${props =>
      props.styleSize === "large" &&
      styled.css`
        color: g-theme-print-color;
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "large" &&
      styled.css`
        font-family: sans-serif;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "large" &&
      styled.css`
        font-size: 1.5rem;
        line-height: 1.25;
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "large" &&
      styled.css`
        font-size: 18pt;
        line-height: 1.15;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "large" &&
      styled.css`
        margin-bottom: 30px;
      `};
  }
  ${props =>
    props.styleSize === "medium" &&
    styled.css`
      color: g-theme-color;
      font-family: g-theme-font-family;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.25;
      margin-top: 0;
      margin-bottom: 15px;
    `}
  @media print {
    ${props =>
      props.styleSize === "medium" &&
      styled.css`
        color: g-theme-print-color;
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "medium" &&
      styled.css`
        font-family: sans-serif;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "medium" &&
      styled.css`
        font-size: 1.1875rem;
        line-height: 1.31579;
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "medium" &&
      styled.css`
        font-size: 14pt;
        line-height: 1.15;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "medium" &&
      styled.css`
        margin-bottom: 20px;
      `};
  }
  ${props =>
    props.styleSize === "small" &&
    styled.css`
      color: g-theme-color;
      font-family: g-theme-font-family;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
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
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "small" &&
      styled.css`
        font-family: sans-serif;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "small" &&
      styled.css`
        font-size: 1rem;
        line-height: 1.25;
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "small" &&
      styled.css`
        font-size: 14pt;
        line-height: 1.2;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "small" &&
      styled.css`
        margin-bottom: 20px;
      `};
  }
  ${props =>
    props.styleSize === "x-small" &&
    styled.css`
      color: g-theme-color;
      font-family: g-theme-font-family;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
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
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "x-small" &&
      styled.css`
        font-family: sans-serif;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "x-small" &&
      styled.css`
        font-size: 0.875rem;
        line-height: 1.42857;
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "x-small" &&
      styled.css`
        font-size: 12pt;
        line-height: 1.2;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "x-small" &&
      styled.css`
        margin-bottom: 20px;
      `};
  }
  margin-bottom: 10px;
  margin-top: 0;
  margin-bottom: 20px;
  margin-top: 0;
  margin-bottom: 15px;
  @media (min-width: 40.0625em) {
    margin-bottom: 20px;
  }
  margin-top: 0px;
`;

const P = ({ styleSize, children }: Props) => (
  <StyledP styleSize={styleSize}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledP>
);

export default P;

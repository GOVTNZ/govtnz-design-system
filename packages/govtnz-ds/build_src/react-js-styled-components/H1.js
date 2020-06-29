import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`${props =>
  props.styleSize === "xlarge" &&
  styled.css`
    color: g-theme-heading-color;
    font-family: g-theme-font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: g-theme-heading-font-weight;
    font-size: 3rem;
    line-height: 1.125;
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
  `}
@media print{
${props =>
  props.styleSize === "xlarge" &&
  styled.css`
    color: g-theme-print-color;
    font-family: sans-serif;
  `};
}
@media (min-width: 40.0625em){
${props =>
  props.styleSize === "xlarge" &&
  styled.css`
    font-size: 3.5rem;
    line-height: 1.15;
  `};
}
@media print{
${props =>
  props.styleSize === "xlarge" &&
  styled.css`
    font-size: 32pt;
    line-height: 1.15;
  `};
}
@media (min-width: 40.0625em){
${props =>
  props.styleSize === "xlarge" &&
  styled.css`
    margin-bottom: 1rem;
  `};
}
${props =>
  props.styleSize === "large" &&
  styled.css`
    color: g-theme-heading-color;
    font-family: g-theme-font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: g-theme-heading-font-weight;
    font-size: 2rem;
    line-height: 1.2;
    display: block;
    margin-top: 3.5rem;
    margin-bottom: 0.5rem;
  `}
@media print{
${props =>
  props.styleSize === "large" &&
  styled.css`
    color: g-theme-print-color;
    font-family: sans-serif;
  `};
}
@media (min-width: 40.0625em){
${props =>
  props.styleSize === "large" &&
  styled.css`
    font-size: 2.5rem;
    line-height: 1.25;
  `};
}
@media print{
${props =>
  props.styleSize === "large" &&
  styled.css`
    font-size: 24pt;
    line-height: 1.05;
  `};
}
@media (min-width: 40.0625em){
${props =>
  props.styleSize === "large" &&
  styled.css`
    margin-bottom: 30px;
  `};
}
${props =>
  props.styleSize === "medium" &&
  styled.css`
    color: g-theme-heading-color;
    font-family: g-theme-font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: g-theme-heading-font-weight;
    font-size: 1.5rem;
    line-height: 1.25;
    display: block;
    margin-top: 2.5rem;
    margin-bottom: 0.5rem;
  `}
@media print{
${props =>
  props.styleSize === "medium" &&
  styled.css`
    color: g-theme-print-color;
    font-family: sans-serif;
  `};
}
@media (min-width: 40.0625em){
${props =>
  props.styleSize === "medium" &&
  styled.css`
    font-size: 1.5rem;
    line-height: 1.25;
  `};
}
@media print{
${props =>
  props.styleSize === "medium" &&
  styled.css`
    font-size: 18pt;
    line-height: 1.15;
  `};
}
@media (min-width: 40.0625em){
${props =>
  props.styleSize === "medium" &&
  styled.css`
    margin-bottom: 0.5rem;
  `};
}
${props =>
  props.styleSize === "small" &&
  styled.css`
    color: g-theme-heading-color;
    font-family: g-theme-font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: g-theme-heading-font-weight;
    font-size: 1.25rem;
    line-height: 1.25;
    display: block;
    margin-top: 2.5rem;
    margin-bottom: 0.5rem;
  `}
@media print{
${props =>
  props.styleSize === "small" &&
  styled.css`
    color: g-theme-print-color;
    font-family: sans-serif;
  `};
}
@media (min-width: 40.0625em){
${props =>
  props.styleSize === "small" &&
  styled.css`
    font-size: 1.1875rem;
    line-height: 1.31579;
  `};
}
@media print{
${props =>
  props.styleSize === "small" &&
  styled.css`
    font-size: 14pt;
    line-height: 1.15;
  `};
}
@media (min-width: 40.0625em){
${props =>
  props.styleSize === "small" &&
  styled.css`
    margin-bottom: 0.5rem;
  `};
}
${props =>
  props.styleSize === "xsmall" &&
  styled.css`
    color: g-theme-color;
    font-family: g-theme-font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: g-theme-heading-font-weight;
    font-size: 1.125rem;
    line-height: 1.25;
    display: block;
    margin-top: 2.5rem;
    margin-bottom: 0.5rem;
  `}
@media print{
${props =>
  props.styleSize === "xsmall" &&
  styled.css`
    color: g-theme-print-color;
    font-family: sans-serif;
  `};
}
@media (min-width: 40.0625em){
${props =>
  props.styleSize === "xsmall" &&
  styled.css`
    font-size: 0.9375rem;
    line-height: 1.31579;
  `};
}
@media print{
${props =>
  props.styleSize === "xsmall" &&
  styled.css`
    font-size: 13pt;
    line-height: 1.15;
  `};
}
@media (min-width: 40.0625em){
${props =>
  props.styleSize === "xsmall" &&
  styled.css`
    margin-bottom: 0.5rem;
  `};
}
${props =>
  props.styleSize === "xxsmall" &&
  styled.css`
    color: g-theme-color;
    font-family: g-theme-font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: g-theme-heading-font-weight;
    font-size: 1rem;
    line-height: 1.25;
    display: block;
    margin-top: 2.5rem;
    margin-bottom: 15px;
  `}
@media print{
${props =>
  props.styleSize === "xxsmall" &&
  styled.css`
    color: g-theme-print-color;
    font-family: sans-serif;
  `};
}
@media (min-width: 40.0625em){
${props =>
  props.styleSize === "xxsmall" &&
  styled.css`
    font-size: 0.875rem;
    line-height: 1.31579;
  `};
}
@media print{
${props =>
  props.styleSize === "xxsmall" &&
  styled.css`
    font-size: 12pt;
    line-height: 1.15;
  `};
}
@media (min-width: 40.0625em){
${props =>
  props.styleSize === "xxsmall" &&
  styled.css`
    margin-bottom: 20px;
  `};
}
${props =>
  props.marginBottom8 &&
  styled.css`
    margin-bottom: 8px;
  `}
${props =>
  props.marginBottom0 &&
  styled.css`
    margin-bottom: 0px;
  `}
${props =>
  props.marginTop8 &&
  styled.css`
    margin-bottom: 8px;
  `}
${props =>
  props.marginTop0 &&
  styled.css`
    margin-bottom: 0px;
  `}`;

const H1 = ({
  styleSize,
  marginBottom8,
  marginBottom0,
  marginTop0,
  marginTop8,
  id,
  children
}) => (
  <StyledH1
    styleSize={styleSize}
    marginBottom8={marginBottom8}
    marginBottom0={marginBottom0}
    marginTop0={marginTop0}
    marginTop8={marginTop8}
    id={id}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledH1>
);

export default H1;

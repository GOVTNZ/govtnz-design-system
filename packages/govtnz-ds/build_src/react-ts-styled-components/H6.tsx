import React from "react";
import styled from "styled-components";

type Props = {
  styleSize: "xlarge" | "large" | "medium" | "small" | "xsmall" | "xxsmall";
  marginBottom8?: boolean;
  marginBottom0?: boolean;
  marginTop0?: boolean;
  marginTop8?: boolean;
  id?: string;
  children?: React.ReactNode;
};

const StyledH6 = styled.h6<
  Pick<
    Props,
    | "styleSize"
    | "marginBottom8"
    | "marginBottom0"
    | "marginTop8"
    | "marginTop0"
  >
>`color: g-theme-heading-color;
font-family: g-theme-heading-font-family;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
font-weight: g-theme-heading-l-font-weight;
:first-child{
margin-top: 0px;
}
:first-child,:last-child{
margin-bottom: 0px;
}
${props =>
  props.styleSize === "xlarge" &&
  styled.css`
    color: g-theme-heading-color;
    font-family: g-theme-heading-font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: g-theme-heading-xl-font-weight;
    font-size: 3rem;
    line-height: 1.125;
    display: block;
    margin-top: 4rem;
    margin-bottom: 1rem;
  `}
:first-child{
margin-top: 0px;
}
@media print{
${props =>
  props.styleSize === "xlarge" &&
  styled.css`
    color: g-theme-print-color;
    font-family: sans-serif;
    font-size: 32pt;
    line-height: 1.15;
  `};
}
@media (min-width: 40.0625em){
${props =>
  props.styleSize === "xlarge" &&
  styled.css`
    font-size: 3.5rem;
    line-height: 1.15;
    margin-bottom: 1rem;
  `};
}
:first-child,:last-child{
margin-bottom: 0rem;
}
${props =>
  props.styleSize === "large" &&
  styled.css`
    color: g-theme-heading-color;
    font-family: g-theme-heading-font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: g-theme-heading-l-font-weight;
    font-size: 2rem;
    line-height: 1.2;
    display: block;
    margin-top: 3.5rem;
    margin-bottom: 0.5rem;
  `}
:first-child{
margin-top: 0rem;
}
@media print{
${props =>
  props.styleSize === "large" &&
  styled.css`
    color: g-theme-print-color;
    font-family: sans-serif;
    font-size: 24pt;
    line-height: 1.05;
  `};
}
@media (min-width: 40.0625em){
${props =>
  props.styleSize === "large" &&
  styled.css`
    font-size: 2.5rem;
    line-height: 1.25;
    margin-bottom: 30px;
  `};
}
:last-child{
margin-bottom: 0rem;
}
${props =>
  props.styleSize === "medium" &&
  styled.css`
    color: g-theme-heading-color;
    font-family: g-theme-heading-font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: g-theme-heading-m-font-weight;
    font-size: 1.5rem;
    line-height: 1.25;
    display: block;
    margin-top: 2.5rem;
    margin-bottom: 0.5rem;
  `}
:first-child{
margin-top: 0rem;
}
@media print{
${props =>
  props.styleSize === "medium" &&
  styled.css`
    color: g-theme-print-color;
    font-family: sans-serif;
    font-size: 18pt;
    line-height: 1.15;
  `};
}
@media (min-width: 40.0625em){
${props =>
  props.styleSize === "medium" &&
  styled.css`
    font-size: 1.5rem;
    line-height: 1.25;
    margin-bottom: 0.5rem;
  `};
}
:first-child,:last-child{
margin-bottom: 0rem;
}
${props =>
  props.styleSize === "small" &&
  styled.css`
    color: g-theme-heading-color;
    font-family: g-theme-heading-font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: g-theme-heading-s-font-weight;
    font-size: 1.25rem;
    line-height: 1.25;
    display: block;
    margin-top: 2.5rem;
    margin-bottom: 0.5rem;
  `}
:first-child{
margin-top: 0rem;
}
@media print{
${props =>
  props.styleSize === "small" &&
  styled.css`
    color: g-theme-print-color;
    font-family: sans-serif;
    font-size: 14pt;
    line-height: 1.15;
  `};
}
font-size: 1.25rem;
@media (min-width: 40.0625em){
${props =>
  props.styleSize === "small" &&
  styled.css`
    font-size: 1.1875rem;
    line-height: 1.31579;
    margin-bottom: 0.5rem;
  `};
font-size: 1.25rem;;
}
:first-child,:last-child{
margin-bottom: 0rem;
}
${props =>
  props.styleSize === "xsmall" &&
  styled.css`
    color: g-theme-color;
    font-family: g-theme-heading-font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: g-theme-heading-xs-font-weight;
    font-size: 1.125rem;
    line-height: 1.25;
    display: block;
    margin-top: 2.5rem;
    margin-bottom: 0.5rem;
  `}
:first-child{
margin-top: 0rem;
}
@media print{
${props =>
  props.styleSize === "xsmall" &&
  styled.css`
    color: g-theme-print-color;
    font-family: sans-serif;
    font-size: 13pt;
    line-height: 1.15;
  `};
}
@media (min-width: 40.0625em){
${props =>
  props.styleSize === "xsmall" &&
  styled.css`
    font-size: 0.9375rem;
    line-height: 1.31579;
    margin-bottom: 0.5rem;
  `};
}
:first-child,:last-child{
margin-bottom: 0rem;
}
${props =>
  props.styleSize === "xxsmall" &&
  styled.css`
    color: g-theme-color;
    font-family: g-theme-heading-font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: g-theme-heading-xxs-font-weight;
    font-size: 1rem;
    line-height: 1.25;
    display: block;
    margin-top: 2.5rem;
    margin-bottom: 15px;
  `}
:first-child{
margin-top: 0rem;
}
@media print{
${props =>
  props.styleSize === "xxsmall" &&
  styled.css`
    color: g-theme-print-color;
    font-family: sans-serif;
    font-size: 12pt;
    line-height: 1.15;
  `};
}
@media (min-width: 40.0625em){
${props =>
  props.styleSize === "xxsmall" &&
  styled.css`
    font-size: 0.875rem;
    line-height: 1.31579;
    margin-bottom: 20px;
  `};
}
:first-child,:last-child{
margin-bottom: 0rem;
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
  `}
margin-bottom: 0px;`;

const H6 = ({
  styleSize,
  marginBottom8,
  marginBottom0,
  marginTop0,
  marginTop8,
  id,
  children
}: Props) => (
  <StyledH6
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
  </StyledH6>
);

export default H6;

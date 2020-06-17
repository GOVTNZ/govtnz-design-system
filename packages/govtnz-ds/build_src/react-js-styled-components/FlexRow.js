import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  ${props =>
    props.xsVerticalAlign === "top" &&
    styled.css`
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    `}
  ${props =>
    props.xsVerticalAlign === "bottom" &&
    styled.css`
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    `}
@media only screen and (min-width: 48em) {
    ${props =>
      props.smVerticalAlign === "top" &&
      styled.css`
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
      `};
    ${props =>
      props.smVerticalAlign === "middle" &&
      styled.css`
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      `};
    ${props =>
      props.smVerticalAlign === "bottom" &&
      styled.css`
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
      `};
  }
  @media only screen and (min-width: 64em) {
    ${props =>
      props.mdVerticalAlign === "top" &&
      styled.css`
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
      `};
    ${props =>
      props.mdVerticalAlign === "middle" &&
      styled.css`
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      `};
    ${props =>
      props.mdVerticalAlign === "bottom" &&
      styled.css`
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
      `};
  }
  @media only screen and (min-width: 75em) {
    ${props =>
      props.lgVerticalAlign === "top" &&
      styled.css`
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
      `};
    ${props =>
      props.lgVerticalAlign === "middle" &&
      styled.css`
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      `};
    ${props =>
      props.lgVerticalAlign === "bottom" &&
      styled.css`
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
      `};
  }
`;

const FlexRow = ({
  xsVerticalAlign,
  smVerticalAlign,
  mdVerticalAlign,
  lgVerticalAlign,
  isReversed,
  children
}) => (
  <StyledDiv
    xsVerticalAlign={xsVerticalAlign}
    smVerticalAlign={smVerticalAlign}
    mdVerticalAlign={mdVerticalAlign}
    lgVerticalAlign={lgVerticalAlign}
    isReversed={isReversed}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Columns...</React.Fragment>
    )}
  </StyledDiv>
);

export default FlexRow;

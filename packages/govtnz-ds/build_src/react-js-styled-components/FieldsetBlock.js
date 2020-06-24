import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-bottom: 20px;
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  :last-of-type {
    margin-bottom: 0;
  }
  ${props =>
    props.errorId &&
    styled.css`
      padding-left: 15px;
      border-left: 5px solid g-theme-error-border-color;
    `}
  padding: 0;
  border: 0;
  margin-bottom: 5px;
  margin-top: 0px;
`;

const StyledFieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  :after {
    content: "";
    display: block;
    clear: both;
  }
  margin-top: 0px;
`;

const StyledLegend = styled.legend`
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: g-theme-legend-color;
  box-sizing: border-box;
  display: table;
  max-width: 100%;
  margin-bottom: 0px;
  padding: 0;
  overflow: hidden;
  white-space: normal;
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
    color: g-theme-print-color;
  }
  margin-top: 0px;
`;

const StyledDiv2 = styled.div`
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-bottom: 15px;
  color: g-theme-hint-color;
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
  margin-top: -5px;
  margin-top: 0px;
`;

const StyledDiv3 = styled.div`
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-bottom: 15px;
  clear: both;
  color: g-theme-error-color;
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
  margin-top: 0px;
`;

const StyledSpan = styled.span`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  border: 0 !important;
  white-space: nowrap !important;
  margin-top: 0px;
`;

const StyledDiv4 = styled.div`
  margin-top: 0px;
`;

const FieldsetBlock = ({ errorId, hintId, legend, hint, error, children }) => (
  <StyledDiv errorId={errorId}>
    <StyledFieldset
      aria-describedby={
        hintId !== undefined || errorId !== undefined
          ? `${hintId ? hintId : ""}${errorId ? " " + errorId : ""}`
          : undefined
      }
    >
      <StyledLegend>
        {legend !== undefined ? (
          legend
        ) : (
          <React.Fragment>Legend text</React.Fragment>
        )}
      </StyledLegend>
      {hintId !== undefined ? (
        <React.Fragment>
          <StyledDiv2 id={hintId}>
            {hint !== undefined ? (
              hint
            ) : (
              <React.Fragment>Hint text</React.Fragment>
            )}
          </StyledDiv2>
        </React.Fragment>
      ) : (
        ""
      )}
      {errorId !== undefined ? (
        <React.Fragment>
          <StyledDiv3 id={errorId}>
            <StyledSpan>Error:</StyledSpan>
            {error !== undefined ? (
              error
            ) : (
              <React.Fragment>Error text</React.Fragment>
            )}
          </StyledDiv3>
        </React.Fragment>
      ) : (
        ""
      )}
      <StyledDiv4>
        {children !== undefined ? (
          children
        ) : (
          <React.Fragment>Fieldset contents</React.Fragment>
        )}
      </StyledDiv4>
    </StyledFieldset>
  </StyledDiv>
);

export default FieldsetBlock;

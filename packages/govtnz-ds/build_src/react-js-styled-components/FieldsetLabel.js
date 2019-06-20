import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-bottom: 15px;
  color: #595959;
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

const FieldsetLabel = ({ hintId, hint }) => (
  <StyledDiv id={hintId}>
    {hint !== undefined ? hint : <React.Fragment>Hint text</React.Fragment>}
  </StyledDiv>
);

export default FieldsetLabel;

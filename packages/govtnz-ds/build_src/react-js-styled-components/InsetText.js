import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  padding: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  clear: both;
  border-left: 8px solid #23cba5;
  background: #f4f4f4;
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
  @media (min-width: 40.0625em) {
    margin-top: 30px;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  margin-top: 0px;
`;

const InsetText = ({}) => (
  <StyledDiv>
    {" "}
    It can take up to 8 weeks to register a lasting power of attorney if there
    are no mistakes in the application.{" "}
  </StyledDiv>
);

export default InsetText;

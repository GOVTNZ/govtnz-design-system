import React from "react";
import styled from "styled-components";

const StyledDetails = styled.details`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  margin-bottom: 20px;
  display: block;
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
    margin-bottom: 30px;
  }
`;

const StyledSummary = styled.summary`
  display: inline-block;
  position: relative;
  margin-bottom: 5px;
  padding-left: 25px;
  color: #005ea5;
  cursor: pointer;
  :hover {
    color: #2b8cc4;
  }
  :focus {
    outline: 4px solid #ffbf47;
    outline-offset: -1px;
    color: #0b0c0c;
    background: #ffbf47;
  }
  ::-webkit-details-marker {
    display: none;
  }
  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
    -webkit-clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
    clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
    border-width: 7px 0 7px 12.124px;
    border-left-color: inherit;
  }
  :before {
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
    -webkit-clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
    clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
    border-width: 12.124px 7px 0 7px;
    border-top-color: inherit;
  }
`;

const StyledSpan = styled.span`
  text-decoration: underline;
`;

const StyledDiv = styled.div`
  padding: 15px;
  padding-left: 20px;
  border-left: 5px solid #bfc1c3;
`;

const Details = ({ open, detailsContent021Df3Ae2Ee5440B98CbFfc001B25657 }) => (
  <StyledDetails role="group" open={open}>
    <StyledSummary
      aria-controls={detailsContent021Df3Ae2Ee5440B98CbFfc001B25657}
      aria-expanded="false"
      role="button"
    >
      <StyledSpan>Help with nationality</StyledSpan>
    </StyledSummary>
    <StyledDiv
      aria-hidden="true"
      id={detailsContent021Df3Ae2Ee5440B98CbFfc001B25657}
    >
      We need to know your nationality so we can work out which elections you’re
      entitled to vote in. If you can’t provide your nationality, you’ll have to
      send copies of identity documents through the post.
    </StyledDiv>
  </StyledDetails>
);

export default Details;

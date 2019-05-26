import * as React from "react";
import * as styled from "styled-components";

type Props = {
  detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0?: string | undefined;
};

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

const StyledLi = styled.li`
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
`;

const StyledLi2 = styled.li`
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
`;

const StyledLi3 = styled.li`
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
`;

const StyledLi4 = styled.li`
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
`;

const StyledLi5 = styled.li`
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
`;

const DetailsWithHtml = ({
  detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0
}: Props) => (
  <StyledDetails role="group">
    <StyledSummary
      aria-controls={detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0}
      aria-expanded="false"
      role="button"
    >
      <StyledSpan>Where to find your National Insurance Number</StyledSpan>
    </StyledSummary>
    <StyledDiv
      aria-hidden="true"
      id={detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0}
    >
      Your National Insurance number can be found on
      <ul>
        <StyledLi>your National Insurance card</StyledLi>
        <StyledLi2>your payslip</StyledLi2>
        <StyledLi3>P60</StyledLi3>
        <StyledLi4>benefits information</StyledLi4>
        <StyledLi5>tax return</StyledLi5>
      </ul>
    </StyledDiv>
  </StyledDetails>
);
DetailsWithHtml.props = ["detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0"];
export default DetailsWithHtml;

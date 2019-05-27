import * as React from "react";
import * as styled from "styled-components";

type Props = {};

const StyledDiv = styled.div`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  position: relative;
  margin-bottom: 20px;
  padding: 10px 0;
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

const StyledSpan = styled.span`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 0;
  min-width: 32px;
  min-height: 29px;
  margin-top: -20px;
  padding-top: 3px;
  border: 3px solid #0b0c0c;
  border-radius: 50%;
  color: #ffffff;
  background: #0b0c0c;
  font-size: 1.6em;
  line-height: 29px;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media print {
    font-family: sans-serif;
  }
`;

const StyledStrong = styled.strong`
  display: block;
  padding-left: 50px;
`;

const StyledSpan2 = styled.span`
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
`;

const WarningText = ({  }: Props) => (
  <StyledDiv>
    <StyledSpan aria-hidden="true">!</StyledSpan>
    <StyledStrong>
      <StyledSpan2>Warning</StyledSpan2>
      You can be fined up to $5,000 if you don’t register.
    </StyledStrong>
  </StyledDiv>
);
WarningText.props = [];
export default WarningText;

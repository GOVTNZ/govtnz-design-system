import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  width: 100%;
  margin-bottom: 20px;
  border-spacing: 0;
  border-collapse: collapse;
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
  margin-top: 0px;
`;

const StyledThead = styled.thead`
  margin-top: 0px;
`;

const StyledTr = styled.tr`
  margin-top: 0px;
`;

const StyledTbody = styled.tbody`
  margin-top: 0px;
`;

const StyledTr2 = styled.tr`
  margin-top: 0px;
`;

const StyledTr3 = styled.tr`
  margin-top: 0px;
`;

const StyledTr4 = styled.tr`
  margin-top: 0px;
`;

const TableTableWithHead = ({}) => (
  <StyledTable>
    <StyledThead>
      <StyledTr>Month you apply Rate for bicycles Rate for vehicles</StyledTr>
    </StyledThead>
    <StyledTbody>
      <StyledTr2>January $85 $95</StyledTr2>
      <StyledTr3>February $75 $55</StyledTr3>
      <StyledTr4>March $165 $125</StyledTr4>
    </StyledTbody>
  </StyledTable>
);

export default TableTableWithHead;

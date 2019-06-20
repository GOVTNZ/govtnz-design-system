import * as React from "react";
import * as styled from "styled-components";

type Props = {};

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

const StyledTbody = styled.tbody`
  margin-top: 0px;
`;

const StyledTr = styled.tr`
  margin-top: 0px;
`;

const StyledTr2 = styled.tr`
  margin-top: 0px;
`;

const StyledTr3 = styled.tr`
  margin-top: 0px;
`;

const Table = ({  }: Props) => (
  <StyledTable>
    <StyledTbody>
      <StyledTr>January $85 $95</StyledTr>
      <StyledTr2>February $75 $55</StyledTr2>
      <StyledTr3>March $165 $125</StyledTr3>
    </StyledTbody>
  </StyledTable>
);

export default Table;

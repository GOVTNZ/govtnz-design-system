import * as React from "react";
import * as styled from "styled-components";

type Props = {
  tabPastDay?: string | undefined;
  pastDay?: string | undefined;
  href: string;
  rel?: string | undefined;
  target?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  tabPastWeek?: string | undefined;
  pastWeek?: string | undefined;
  href2: string;
  rel2?: string | undefined;
  target2?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  tabPastMonth?: string | undefined;
  pastMonth?: string | undefined;
  href3: string;
  rel3?: string | undefined;
  target3?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  tabPastYear?: string | undefined;
  pastYear?: string | undefined;
  href4: string;
  rel4?: string | undefined;
  target4?: "Blank" | "Top" | "Self" | "Parent" | undefined;
};

const StyledDiv = styled.div`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  margin-top: 5px;
  margin-bottom: 20px;
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
    margin-top: 5px;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  margin-top: 0px;
`;

const StyledH2 = styled.h2`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  margin-bottom: 5px;
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
  @media (min-width: 40.0625em) {
    display: none;
  }
  margin-top: 0px;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  @media (max-width: 40.0525em) {
    margin-bottom: 20px;
  }
  @media (max-width: 40.0525em) and (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  @media (min-width: 40.0625em) {
    border-bottom: 1px solid #bfc1c3;
    :after {
      content: "";
      display: block;
      clear: both;
    }
  }
  margin-top: 0px;
`;

const StyledLi = styled.li`
  margin-bottom: 0.25rem;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  margin-left: 25px;
  ::before {
    content: "— ";
    margin-left: -25px;
    padding-right: 5px;
  }
  @media (min-width: 40.0625em) {
    margin-left: 0;
    ::before {
      content: none;
    }
  }
  margin-top: 0px;
`;

const StyledA = styled.a`
  font-weight: 700;
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
  }
  :link,
  :visited,
  :hover,
  :active {
    color: #b10e1e;
  }
  :focus {
    color: #0b0c0c;
  }
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.14286;
  white-space: nowrap;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.2;
  }
  :link,
  :hover,
  :visited {
    color: #1d8feb;
  }
  :focus {
    color: #0b0c0c;
  }
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
    background-color: #ffbf47;
  }
  :link {
    color: #005ea5;
  }
  :visited {
    color: #4c2c92;
  }
  :hover {
    color: #2b8cc4;
  }
  :active {
    color: #2b8cc4;
  }
  :focus {
    color: #0b0c0c;
  }
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
  @media (min-width: 40.0625em) {
    margin-right: 5px;
    padding-right: 20px;
    padding-left: 20px;
    float: left;
    color: #0b0c0c;
    background-color: #f8f8f8;
    text-align: center;
    text-decoration: none;
    margin-top: -5px;
    margin-bottom: -1px;
    padding-top: 14px;
    padding-right: 19px;
    padding-bottom: 16px;
    padding-left: 19px;
    border: 1px solid #bfc1c3;
    border-bottom: 0;
    color: #0b0c0c;
    background-color: #ffffff;
    :focus {
      background-color: transparent;
    }
  }
  margin-top: 0px;
`;

const StyledLi2 = styled.li`
  margin-bottom: 0.25rem;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  margin-left: 25px;
  ::before {
    content: "— ";
    margin-left: -25px;
    padding-right: 5px;
  }
  @media (min-width: 40.0625em) {
    margin-left: 0;
    ::before {
      content: none;
    }
  }
  margin-top: 0px;
`;

const StyledA2 = styled.a`
  font-weight: 700;
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
  }
  :link,
  :visited,
  :hover,
  :active {
    color: #b10e1e;
  }
  :focus {
    color: #0b0c0c;
  }
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.14286;
  white-space: nowrap;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.2;
  }
  :link,
  :hover,
  :visited {
    color: #1d8feb;
  }
  :focus {
    color: #0b0c0c;
  }
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
    background-color: #ffbf47;
  }
  :link {
    color: #005ea5;
  }
  :visited {
    color: #4c2c92;
  }
  :hover {
    color: #2b8cc4;
  }
  :active {
    color: #2b8cc4;
  }
  :focus {
    color: #0b0c0c;
  }
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
  @media (min-width: 40.0625em) {
    margin-right: 5px;
    padding-right: 20px;
    padding-left: 20px;
    float: left;
    color: #0b0c0c;
    background-color: #f8f8f8;
    text-align: center;
    text-decoration: none;
  }
  margin-top: 0px;
`;

const StyledLi3 = styled.li`
  margin-bottom: 0.25rem;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  margin-left: 25px;
  ::before {
    content: "— ";
    margin-left: -25px;
    padding-right: 5px;
  }
  @media (min-width: 40.0625em) {
    margin-left: 0;
    ::before {
      content: none;
    }
  }
  margin-top: 0px;
`;

const StyledA3 = styled.a`
  font-weight: 700;
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
  }
  :link,
  :visited,
  :hover,
  :active {
    color: #b10e1e;
  }
  :focus {
    color: #0b0c0c;
  }
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.14286;
  white-space: nowrap;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.2;
  }
  :link,
  :hover,
  :visited {
    color: #1d8feb;
  }
  :focus {
    color: #0b0c0c;
  }
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
    background-color: #ffbf47;
  }
  :link {
    color: #005ea5;
  }
  :visited {
    color: #4c2c92;
  }
  :hover {
    color: #2b8cc4;
  }
  :active {
    color: #2b8cc4;
  }
  :focus {
    color: #0b0c0c;
  }
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
  @media (min-width: 40.0625em) {
    margin-right: 5px;
    padding-right: 20px;
    padding-left: 20px;
    float: left;
    color: #0b0c0c;
    background-color: #f8f8f8;
    text-align: center;
    text-decoration: none;
  }
  margin-top: 0px;
`;

const StyledLi4 = styled.li`
  margin-bottom: 0.25rem;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  margin-left: 25px;
  ::before {
    content: "— ";
    margin-left: -25px;
    padding-right: 5px;
  }
  @media (min-width: 40.0625em) {
    margin-left: 0;
    ::before {
      content: none;
    }
  }
  margin-top: 0px;
`;

const StyledA4 = styled.a`
  font-weight: 700;
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
  }
  :link,
  :visited,
  :hover,
  :active {
    color: #b10e1e;
  }
  :focus {
    color: #0b0c0c;
  }
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.14286;
  white-space: nowrap;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.2;
  }
  :link,
  :hover,
  :visited {
    color: #1d8feb;
  }
  :focus {
    color: #0b0c0c;
  }
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
    background-color: #ffbf47;
  }
  :link {
    color: #005ea5;
  }
  :visited {
    color: #4c2c92;
  }
  :hover {
    color: #2b8cc4;
  }
  :active {
    color: #2b8cc4;
  }
  :focus {
    color: #0b0c0c;
  }
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
  @media (min-width: 40.0625em) {
    margin-right: 5px;
    padding-right: 20px;
    padding-left: 20px;
    float: left;
    color: #0b0c0c;
    background-color: #f8f8f8;
    text-align: center;
    text-decoration: none;
  }
  margin-top: 0px;
`;

const StyledSection = styled.section`
  margin-bottom: 30px;
  @media (min-width: 40.0625em) {
    margin-bottom: 50px;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 0;
    padding-top: 30px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 20px;
    border: 1px solid #bfc1c3;
    border-top: 0;
  }
  @media (min-width: 40.0625em) and (min-width: 40.0625em) {
    margin-bottom: 0;
  }
  margin-top: 0px;
`;

const StyledH22 = styled.h2`
  color: #2a2a2a;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-heading-font-weight;
  font-size: 2rem;
  line-height: 1.2;
  display: block;
  margin-top: 3.5rem;
  margin-bottom: 0.5rem;
  @media print {
    color: #000000;
  }
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 2.5rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 24pt;
    line-height: 1.05;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  padding-top: 5px;
  @media (min-width: 40.0625em) {
    padding-top: 10px;
  }
  padding-top: 15px;
  @media (min-width: 40.0625em) {
    padding-top: 20px;
  }
  margin-top: 0px;
`;

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

const StyledSection2 = styled.section`
  margin-bottom: 30px;
  @media (min-width: 40.0625em) {
    margin-bottom: 50px;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 0;
    padding-top: 30px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 20px;
    border: 1px solid #bfc1c3;
    border-top: 0;
  }
  @media (min-width: 40.0625em) and (min-width: 40.0625em) {
    margin-bottom: 0;
  }
  @media (min-width: 40.0625em) {
    display: none;
  }
  margin-top: 0px;
`;

const StyledH23 = styled.h2`
  color: #2a2a2a;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-heading-font-weight;
  font-size: 2rem;
  line-height: 1.2;
  display: block;
  margin-top: 3.5rem;
  margin-bottom: 0.5rem;
  @media print {
    color: #000000;
  }
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 2.5rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 24pt;
    line-height: 1.05;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  padding-top: 5px;
  @media (min-width: 40.0625em) {
    padding-top: 10px;
  }
  padding-top: 15px;
  @media (min-width: 40.0625em) {
    padding-top: 20px;
  }
  margin-top: 0px;
`;

const StyledTable2 = styled.table`
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

const StyledThead2 = styled.thead`
  margin-top: 0px;
`;

const StyledTr5 = styled.tr`
  margin-top: 0px;
`;

const StyledTbody2 = styled.tbody`
  margin-top: 0px;
`;

const StyledTr6 = styled.tr`
  margin-top: 0px;
`;

const StyledTr7 = styled.tr`
  margin-top: 0px;
`;

const StyledTr8 = styled.tr`
  margin-top: 0px;
`;

const StyledSection3 = styled.section`
  margin-bottom: 30px;
  @media (min-width: 40.0625em) {
    margin-bottom: 50px;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 0;
    padding-top: 30px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 20px;
    border: 1px solid #bfc1c3;
    border-top: 0;
  }
  @media (min-width: 40.0625em) and (min-width: 40.0625em) {
    margin-bottom: 0;
  }
  @media (min-width: 40.0625em) {
    display: none;
  }
  margin-top: 0px;
`;

const StyledH24 = styled.h2`
  color: #2a2a2a;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-heading-font-weight;
  font-size: 2rem;
  line-height: 1.2;
  display: block;
  margin-top: 3.5rem;
  margin-bottom: 0.5rem;
  @media print {
    color: #000000;
  }
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 2.5rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 24pt;
    line-height: 1.05;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  padding-top: 5px;
  @media (min-width: 40.0625em) {
    padding-top: 10px;
  }
  padding-top: 15px;
  @media (min-width: 40.0625em) {
    padding-top: 20px;
  }
  margin-top: 0px;
`;

const StyledTable3 = styled.table`
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

const StyledThead3 = styled.thead`
  margin-top: 0px;
`;

const StyledTr9 = styled.tr`
  margin-top: 0px;
`;

const StyledTbody3 = styled.tbody`
  margin-top: 0px;
`;

const StyledTr10 = styled.tr`
  margin-top: 0px;
`;

const StyledTr11 = styled.tr`
  margin-top: 0px;
`;

const StyledTr12 = styled.tr`
  margin-top: 0px;
`;

const StyledSection4 = styled.section`
  margin-bottom: 30px;
  @media (min-width: 40.0625em) {
    margin-bottom: 50px;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 0;
    padding-top: 30px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 20px;
    border: 1px solid #bfc1c3;
    border-top: 0;
  }
  @media (min-width: 40.0625em) and (min-width: 40.0625em) {
    margin-bottom: 0;
  }
  @media (min-width: 40.0625em) {
    display: none;
  }
  margin-top: 0px;
`;

const StyledH25 = styled.h2`
  color: #2a2a2a;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-heading-font-weight;
  font-size: 2rem;
  line-height: 1.2;
  display: block;
  margin-top: 3.5rem;
  margin-bottom: 0.5rem;
  @media print {
    color: #000000;
  }
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 2.5rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 24pt;
    line-height: 1.05;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  padding-top: 5px;
  @media (min-width: 40.0625em) {
    padding-top: 10px;
  }
  padding-top: 15px;
  @media (min-width: 40.0625em) {
    padding-top: 20px;
  }
  margin-top: 0px;
`;

const StyledTable4 = styled.table`
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

const StyledThead4 = styled.thead`
  margin-top: 0px;
`;

const StyledTr13 = styled.tr`
  margin-top: 0px;
`;

const StyledTbody4 = styled.tbody`
  margin-top: 0px;
`;

const StyledTr14 = styled.tr`
  margin-top: 0px;
`;

const StyledTr15 = styled.tr`
  margin-top: 0px;
`;

const StyledTr16 = styled.tr`
  margin-top: 0px;
`;

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target3: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target4: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const Tabs = ({
  tabPastDay,
  pastDay,
  href,
  rel,
  target,
  tabPastWeek,
  pastWeek,
  href2,
  rel2,
  target2,
  tabPastMonth,
  pastMonth,
  href3,
  rel3,
  target3,
  tabPastYear,
  pastYear,
  href4,
  rel4,
  target4
}: Props) => (
  <StyledDiv data-module="tabs">
    <StyledH2>Contents</StyledH2>

    <StyledUl role="tablist">
      <StyledLi role="presentation">
        <StyledA
          aria-controls={pastDay}
          aria-selected="true"
          href={href}
          id={tabPastDay}
          role="tab"
          tabIndex={0}
          rel={rel}
          target={constants.target[target]}
        >
          Past day
        </StyledA>
      </StyledLi>
      <StyledLi2 role="presentation">
        <StyledA2
          aria-controls={pastWeek}
          aria-selected="false"
          href={href2}
          id={tabPastWeek}
          role="tab"
          tabIndex={-1}
          rel={rel2}
          target={constants.target2[target2]}
        >
          Past week
        </StyledA2>
      </StyledLi2>
      <StyledLi3 role="presentation">
        <StyledA3
          aria-controls={pastMonth}
          aria-selected="false"
          href={href3}
          id={tabPastMonth}
          role="tab"
          tabIndex={-1}
          rel={rel3}
          target={constants.target3[target3]}
        >
          Past month
        </StyledA3>
      </StyledLi3>
      <StyledLi4 role="presentation">
        <StyledA4
          aria-controls={pastYear}
          aria-selected="false"
          href={href4}
          id={tabPastYear}
          role="tab"
          tabIndex={-1}
          rel={rel4}
          target={constants.target4[target4]}
        >
          Past year
        </StyledA4>
      </StyledLi4>
    </StyledUl>

    <StyledSection aria-labelledby={tabPastDay} id={pastDay} role="tabpanel">
      <StyledH22>Past day</StyledH22>
      <StyledTable>
        <StyledThead>
          <StyledTr>Case manager Cases opened Cases closed</StyledTr>
        </StyledThead>
        <StyledTbody>
          <StyledTr2>David Francis 3 0</StyledTr2>
          <StyledTr3>Paul Farmer 1 0</StyledTr3>
          <StyledTr4>Rita Patel 2 0</StyledTr4>
        </StyledTbody>
      </StyledTable>
    </StyledSection>
    <StyledSection2 aria-labelledby={tabPastWeek} id={pastWeek} role="tabpanel">
      <StyledH23>Past week</StyledH23>
      <StyledTable2>
        <StyledThead2>
          <StyledTr5>Case manager Cases opened Cases closed</StyledTr5>
        </StyledThead2>
        <StyledTbody2>
          <StyledTr6>David Francis 24 18</StyledTr6>
          <StyledTr7>Paul Farmer 16 20</StyledTr7>
          <StyledTr8>Rita Patel 24 27</StyledTr8>
        </StyledTbody2>
      </StyledTable2>
    </StyledSection2>
    <StyledSection3
      aria-labelledby={tabPastMonth}
      id={pastMonth}
      role="tabpanel"
    >
      <StyledH24>Past month</StyledH24>
      <StyledTable3>
        <StyledThead3>
          <StyledTr9>Case manager Cases opened Cases closed</StyledTr9>
        </StyledThead3>
        <StyledTbody3>
          <StyledTr10>David Francis 98 95</StyledTr10>
          <StyledTr11>Paul Farmer 122 131</StyledTr11>
          <StyledTr12>Rita Patel 126 142</StyledTr12>
        </StyledTbody3>
      </StyledTable3>
    </StyledSection3>
    <StyledSection4 aria-labelledby={tabPastYear} id={pastYear} role="tabpanel">
      <StyledH25>Past year</StyledH25>
      <StyledTable4>
        <StyledThead4>
          <StyledTr13>Case manager Cases opened Cases closed</StyledTr13>
        </StyledThead4>
        <StyledTbody4>
          <StyledTr14>David Francis 1380 1472</StyledTr14>
          <StyledTr15>Paul Farmer 1129 1083</StyledTr15>
          <StyledTr16>Rita Patel 1539 1265</StyledTr16>
        </StyledTbody4>
      </StyledTable4>
    </StyledSection4>
  </StyledDiv>
);

export default Tabs;

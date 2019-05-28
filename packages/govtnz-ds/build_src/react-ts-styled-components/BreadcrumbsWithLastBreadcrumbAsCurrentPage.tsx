import * as React from "react";
import * as styled from "styled-components";

type Props = {
  href: string;
  rel?: string | undefined;
  target?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href2: string;
  rel2?: string | undefined;
  target2?: "Blank" | "Top" | "Self" | "Parent" | undefined;
};

const StyledDiv = styled.div`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.14286;
  color: #0b0c0c;
  margin-top: 15px;
  margin-bottom: 10px;
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
  @media print {
    color: #000000;
  }
`;

const StyledOl = styled.ol`
  margin: 0;
  padding: 0;
  list-style-type: none;
  :after {
    content: "";
    display: block;
    clear: both;
  }
`;

const StyledLi = styled.li`
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline-block;
  position: relative;
  margin-bottom: 5px;
  margin-left: 10px;
  padding-left: 15.655px;
  float: left;
  :before {
    content: "";
    display: block;
    position: absolute;
    top: -1px;
    bottom: 1px;
    left: -3.31px;
    width: 7px;
    height: 7px;
    margin: auto 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    border: solid;
    border-width: 1px 1px 0 0;
    border-color: #6f777b;
  }
  :first-child {
    margin-left: 0;
    padding-left: 0;
  }
  :first-child:before {
    content: none;
    display: none;
  }
`;

const StyledA = styled.a`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
    background-color: #ffbf47;
  }
  :link,
  :visited,
  :hover,
  :active,
  :focus {
    color: #0b0c0c;
  }
  @media print {
    :link,
    :visited,
    :hover,
    :active,
    :focus {
      color: #000000;
    }
  }
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
`;

const StyledLi2 = styled.li`
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline-block;
  position: relative;
  margin-bottom: 5px;
  margin-left: 10px;
  padding-left: 15.655px;
  float: left;
  :before {
    content: "";
    display: block;
    position: absolute;
    top: -1px;
    bottom: 1px;
    left: -3.31px;
    width: 7px;
    height: 7px;
    margin: auto 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    border: solid;
    border-width: 1px 1px 0 0;
    border-color: #6f777b;
  }
  :first-child {
    margin-left: 0;
    padding-left: 0;
  }
  :first-child:before {
    content: none;
    display: none;
  }
`;

const StyledA2 = styled.a`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
    background-color: #ffbf47;
  }
  :link,
  :visited,
  :hover,
  :active,
  :focus {
    color: #0b0c0c;
  }
  @media print {
    :link,
    :visited,
    :hover,
    :active,
    :focus {
      color: #000000;
    }
  }
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
`;

const StyledLi3 = styled.li`
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline-block;
  position: relative;
  margin-bottom: 5px;
  margin-left: 10px;
  padding-left: 15.655px;
  float: left;
  :before {
    content: "";
    display: block;
    position: absolute;
    top: -1px;
    bottom: 1px;
    left: -3.31px;
    width: 7px;
    height: 7px;
    margin: auto 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    border: solid;
    border-width: 1px 1px 0 0;
    border-color: #6f777b;
  }
  :first-child {
    margin-left: 0;
    padding-left: 0;
  }
  :first-child:before {
    content: none;
    display: none;
  }
`;

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const BreadcrumbsWithLastBreadcrumbAsCurrentPage = ({
  href,
  rel,
  target,
  href2,
  rel2,
  target2
}: Props) => (
  <StyledDiv>
    <StyledOl>
      <StyledLi>
        <StyledA href={href} rel={rel} target={constants.target[target]}>
          Home
        </StyledA>
      </StyledLi>
      <StyledLi2>
        <StyledA2 href={href2} rel={rel2} target={constants.target2[target2]}>
          Passports, travel and living abroad
        </StyledA2>
      </StyledLi2>
      <StyledLi3 aria-current="page">Travel abroad</StyledLi3>
    </StyledOl>
  </StyledDiv>
);
BreadcrumbsWithLastBreadcrumbAsCurrentPage.props = [
  "href",
  "rel",
  "target",
  "href2",
  "rel2",
  "target2"
];
export default BreadcrumbsWithLastBreadcrumbAsCurrentPage;

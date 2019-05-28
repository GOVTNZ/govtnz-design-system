import React from "react";
import styled from "styled-components";

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
  :link,
  :visited,
  :hover,
  :active {
    color: #6f777b;
  }
  :focus {
    color: #0b0c0c;
  }
  font-weight: 700;
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
    background-color: #ffbf47;
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

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const A = ({ isMuted, href, rel, target, children }) => (
  <StyledA
    isMuted={isMuted}
    href={href}
    rel={rel}
    target={constants.target[target]}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledA>
);
A.props = ["isMuted", "href", "rel", "target", "children"];
export default A;

import * as React from "react";
import * as styled from "styled-components";

type Props = {
  href: string;
  rel?: string | undefined;
  target?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  children?: React.ReactNode;
};

const StyledA = styled.a`
  font-size: 0.875rem;
  line-height: 1.14286;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  position: relative;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 14px;
  border-bottom: 1px solid #0b0c0c;
  text-decoration: none;
  @media (min-width: 40.0625em) {
    font-size: 1rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.2;
  }
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
  :before {
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
    -webkit-clip-path: polygon(0% 50%, 100% 100%, 100% 0%);
    clip-path: polygon(0% 50%, 100% 100%, 100% 0%);
    border-width: 5px 6px 5px 0;
    border-right-color: inherit;
    content: "";
    position: absolute;
    top: -1px;
    bottom: 1px;
    left: 0;
    margin: auto;
  }
  :before {
    top: -1px;
    bottom: 1px;
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

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const BackLinkWithCustomText = ({ href, rel, target, children }: Props) => (
  <StyledA href={href} rel={rel} target={constants.target[target]}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledA>
);
BackLinkWithCustomText.props = ["href", "rel", "target", "children"];
export default BackLinkWithCustomText;

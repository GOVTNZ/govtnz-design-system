import * as React from "react";
import * as styled from "styled-components";

type Props = {
  href: string;
  rel?: string;
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
};

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
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  white-space: nowrap !important;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.875rem;
  line-height: 1.14286;
  display: block;
  padding: 10px 15px;
  :active,
  :focus {
    position: static !important;
    width: auto !important;
    height: auto !important;
    margin: inherit !important;
    overflow: visible !important;
    clip: auto !important;
    -webkit-clip-path: none !important;
    clip-path: none !important;
    white-space: inherit !important;
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
  @media (min-width: 40.0625em) {
    font-size: 1rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.2;
  }
  margin-top: 0px;
`;

const SkipLink = ({ href, rel, target }: Props) => (
  <StyledA href={href} rel={rel} target={target}>
    Skip to main content
  </StyledA>
);

export default SkipLink;

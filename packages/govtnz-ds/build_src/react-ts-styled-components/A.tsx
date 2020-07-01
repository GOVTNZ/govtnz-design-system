import React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  href: string;
  rel?: string;
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  onClick?: React.AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  children?: React.ReactNode;
};

const StyledA = styled.a`
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid g-theme-focus-ring-color;
    outline-offset: 0;
  }
  :link,
  :visited {
    color: g-theme-link-color;
  }
  :hover {
    color: g-theme-link-hover-color;
  }
  :focus {
    color: g-theme-link-focus-color;
  }
`;

const A = ({ className, href, rel, target, onClick, children }: Props) => (
  <StyledA
    className={className}
    href={href}
    rel={rel}
    target={target}
    onClick={onClick}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledA>
);

export default A;

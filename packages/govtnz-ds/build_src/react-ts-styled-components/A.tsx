import React from "react";
import styled from "styled-components";

type Props = {
  isMuted?: boolean;
  className?: any;
  href: string;
  rel?: string;
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  onClick?: React.AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  children?: React.ReactNode;
};

const StyledA = styled.a`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #b53cde;
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
  display: block;
  padding: 0.7em 1em;
  color: #d3d3d3;
  margin-left: -1em;
  margin-right: -1em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  @media only screen and (min-width: 48em) {
    :first-child {
      margin-left: -1em;
    }
    display: inline-block;
    margin-right: 1em;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }
  :hover {
    color: #fff;
  }
`;

const A = ({
  isMuted,
  className,
  href,
  rel,
  target,
  onClick,
  children
}: Props) => (
  <StyledA
    isMuted={isMuted}
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

import React from "react";
import styled from "styled-components";

type Props = {
  href: string;
  rel?: string;
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  onClick?: React.AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  children?: React.ReactNode;
};

const StyledLi = styled.li`
  display: block;
  @media only screen and (min-width: 48em) {
    display: inline-block;
  }
`;

const StyledA = styled.a`
  display: block;
  padding: 0.7em 1em;
  color: g-theme-inverted-link-color;
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
    color: g-theme-inverted-color;
  }
`;

const FooterLink = ({ href, rel, target, onClick, children }: Props) => (
  <StyledLi>
    <StyledA href={href} rel={rel} target={target} onClick={onClick}>
      {children !== undefined ? (
        children
      ) : (
        <React.Fragment> Example header content </React.Fragment>
      )}
    </StyledA>
  </StyledLi>
);

export default FooterLink;

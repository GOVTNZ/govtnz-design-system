import React from "react";
import styled from "styled-components";

type Props = {
  ariaCurrent?: React.InputHTMLAttributes<HTMLInputElement>["aria-current"];
  href: string;
  rel?: string;
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  onClick?: React.AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  children?: React.ReactNode;
};

const StyledLi = styled.li`
  display: block;
  margin-right: 0em;
  margin-left: -0.9em;
  font-size: 18px;
  color: g-theme-inverted-color;
  letter-spacing: 0;
  line-height: 20px;
  @media only screen and (min-width: 48em) {
    display: inline-block;
    margin-right: 1em;
    margin-left: 0px;
    margin-top: 4px;
    :first-child {
      margin-left: 0em;
    }
    :last-child {
      margin-right: 0px;
    }
  }
`;

const StyledA = styled.a<Pick<Props, "ariaCurrent">>`
  display: block;
  padding: 1em;
  color: g-theme-inverted-color;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
  ${props =>
    props.ariaCurrent &&
    styled.css`
      border-left: solid 0.2em g-theme-inverted-nav-active-border-color;
      padding-left: 0.8em;
    `}
  :focus {
    outline: 3px solid g-theme-focus-ring-color;
  }
  @media only screen and (min-width: 48em) {
    position: relative;
    display: inline-block;
    padding: 0.6em 1em;
    ${props =>
      props.ariaCurrent &&
      styled.css`
        border-left: none;
      `};
    ::after {
      content: "";
      position: absolute;
      clear: both;
      display: block;
      bottom: 0px;
      left: 1em;
      right: 1em;
      height: 4px;
      background: g-theme-inverted-nav-active-border-color;
    }
  }
`;

const MainNavLink = ({
  ariaCurrent,
  href,
  rel,
  target,
  onClick,
  children
}: Props) => (
  <StyledLi>
    <StyledA
      ariaCurrent={ariaCurrent}
      aria-current={ariaCurrent}
      href={href}
      rel={rel}
      target={target}
      onClick={onClick}
    >
      {children !== undefined ? (
        children
      ) : (
        <React.Fragment> Example item text </React.Fragment>
      )}
    </StyledA>
  </StyledLi>
);

export default MainNavLink;

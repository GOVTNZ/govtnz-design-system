import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: block;
  padding: 0px;
  margin: 0px;
  background-color: g-theme-color;
  margin: 0px -1rem;
  @media only screen and (min-width: 48em) {
    margin: 0px;
    background-color: transparent;
    margin: 0px -2rem;
  }
`;

const StyledButton = styled.button`
  position: absolute;
  top: 3px;
  right: 3px;
  background: transparent;
  color: g-theme-inverted-color;
  font-size: 16px;
  display: none;
  padding: 1em;
  border: none;
  display: inline-block;
  @media only screen and (min-width: 48em) {
    display: none;
  }
  :focus {
    outline: 3px solid g-theme-focus-ring-color;
  }
`;

const StyledSvg = styled.svg`
  display: inline-block;
  color: g-theme-inverted-menu-button-color;
  transition: transform 0.15s;
  vertical-align: middle;
  margin-left: 0.2em;
  width: 12px;
  height: 12px;
  transform: rotate(180deg);
  transform: rotate(0deg);
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px 0px 0px 1rem;
  display: block;
  display: none;
  @media only screen and (min-width: 48em) {
    margin: -4px 2rem 0px 2rem;
    display: block;
  }
`;

const MainNav = ({ isOpen, id, name, type, onClick, button, children }) => (
  <StyledNav aria-label="Main" role="navigation">
    <StyledButton
      isOpen={isOpen}
      aria-controls={id}
      aria-expanded={
        isOpen !== undefined ? isOpen.toString() === "true" : undefined
      }
      name={name}
      type={type}
      onClick={onClick}
    >
      {button !== undefined ? button : <React.Fragment> Menu </React.Fragment>}
      <StyledSvg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.992 9.55l5.6-5.6a1 1 0 0 1 1.415 0l.688.689a1 1 0 0 1 0 1.414L8.7 13.049a1 1 0 0 1-1.414 0L.29 6.053a1 1 0 0 1 0-1.414l.689-.689a1 1 0 0 1 1.414 0l5.6 5.6z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </StyledSvg>
    </StyledButton>

    <div id={id}>
      <StyledUl isOpen={isOpen}>
        {children !== undefined ? (
          children
        ) : (
          <React.Fragment> MainNavLink components go here </React.Fragment>
        )}
      </StyledUl>
    </div>
  </StyledNav>
);

export default MainNav;

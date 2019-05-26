import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: 100%;
  margin-top: 0;
  margin-bottom: 22px;
  padding: 16px;
  border: 2px solid transparent;
  border-radius: 2px;
  color: black;
  background-color: #00823b;
  box-shadow: none;
  text-align: center;
  vertical-align: top;
  cursor: pointer;
  -webkit-appearance: none;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1;
  }
  @media print {
    font-size: 14pt;
    line-height: 19px;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 32px;
  }
  @media (min-width: 40.0625em) {
    width: auto;
  }
  :link,
  :visited,
  :active,
  :hover {
    color: #ffffff;
    text-decoration: none;
  }
  ::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  :hover,
  :focus {
    background-color: #00692f;
  }
  :active {
    top: 2px;
    box-shadow: none;
  }
  ::before {
    content: "";
    display: block;
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -4px;
    left: -2px;
    background: transparent;
  }
  :active::before {
    top: -4px;
  }
  opacity: 0.5;
  background: #00823b;
  :hover,
  :hover {
    background-color: #00823b;
    cursor: default;
  }
  :focus,
  :focus {
    outline: none;
  }
  :active,
  :active {
    top: 0;
    box-shadow: 0 2px 0 #003618;
  }
  padding-top: 16px;
  padding-bottom: 16px;
`;

const constants = {
  type: { Submit: "submit", Reset: "reset", Button: "button" }
};

const Button = ({ disabled, name, type, children }) => (
  <StyledButton
    disabled={disabled}
    aria-disabled={disabled ? "true" : ""}
    disabled={disabled ? "true" : ""}
    type={constants.type[type]}
    name={name}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledButton>
);
Button.props = ["disabled", "name", "type", "children"];
export default Button;

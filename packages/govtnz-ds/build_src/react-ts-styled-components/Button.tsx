import React from "react";
import styled from "styled-components";

type Props = {
  disabled?: boolean;
  level: "secondary" | "warning";
  name?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  children?: React.ReactNode;
};

const StyledButton = styled.button<Pick<Props, "level">>`
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: 100%;
  margin-top: 0;
  margin-bottom: 22px;
  padding: 16px;
  border: 2px solid transparent;
  border-radius: 4px;
  color: g-theme-button-color;
  background-color: g-theme-button-background-color;
  box-shadow: 0 2px 0 0 g-theme-button-box-shadow-color;
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
    outline: 3px solid g-theme-focus-ring-color;
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
    color: g-theme-button-color;
    text-decoration: none;
  }
  ::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  :hover,
  :focus {
    background-color: g-theme-button-hover-background-color;
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
  background-color: g-theme-button-background-color;
  :hover,
  :hover {
    background-color: g-theme-button-background-color;
    cursor: default;
  }
  :focus,
  :focus {
    outline: none;
  }
  padding-top: 16px;
  padding-bottom: 16px;
  margin-top: 0px;
  opacity: 0.5;
  background: g-theme-button-disabled-background-color;
  :hover,
  :hover {
    background-color: g-theme-button-disabled-background-color;
    cursor: default;
  }
  :focus,
  :focus {
    outline: none;
  }
  :active,
  :active {
    top: 0;
    box-shadow: 0 2px 0 g-theme-button-active-box-shadow;
  }
  ${props =>
    props.level === "secondary" &&
    styled.css`
      background-color: g-theme-button-secondary-background-color;
      box-shadow: 0 2px 0 g-theme-button-box-shadow-color;
    `}
  :link,:visited,:active,:hover {
    ${props =>
      props.level === "secondary" &&
      styled.css`
        color: g-theme-button-secondary-color;
      `}
  }
  :hover,
  :focus {
    background-color: g-theme-button-secondary-hover-background-color;
  }
  ${props =>
    props.level === "warning" &&
    styled.css`
      background-color: g-theme-error-background-color;
      box-shadow: 0 2px 0 g-theme-button-box-shadow-color;
    `}
  :link,:visited,:active,:hover {
    ${props =>
      props.level === "warning" &&
      styled.css`
        color: g-theme-button-color;
      `}
  }
  :hover,
  :focus {
    background-color: g-theme-button-warning-background-color;
  }
`;

const Button = ({ disabled, level, name, type, onClick, children }: Props) => (
  <StyledButton
    disabled={disabled}
    level={level}
    type={type}
    name={name}
    onClick={onClick}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment> Example text </React.Fragment>
    )}
  </StyledButton>
);

export default Button;

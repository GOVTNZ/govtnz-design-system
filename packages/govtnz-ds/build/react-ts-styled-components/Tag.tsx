import * as React from "react";
import * as styled from "styled-components";

type Props = {};

const StyledStrong = styled.strong`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25;
  display: inline-block;
  padding: 4px 8px;
  padding-bottom: 1px;
  outline: 2px solid transparent;
  outline-offset: -2px;
  color: #ffffff;
  background-color: #005ea5;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.25;
  }
  margin-top: 0px;
`;

const Tag = ({}: Props) => <StyledStrong>alpha</StyledStrong>;

export default Tag;

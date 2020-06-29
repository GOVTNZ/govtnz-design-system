import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

const FooterLinks = ({ children }) => (
  <StyledUl>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>example link list content</React.Fragment>
    )}
  </StyledUl>
);

export default FooterLinks;

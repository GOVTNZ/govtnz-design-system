import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-bottom: 20px;
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  :last-of-type {
    margin-bottom: 0;
  }
  padding: 0;
  border: 0;
  margin-bottom: 5px;
  margin-top: 0px;
`;

const StyledFieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  :after {
    content: "";
    display: block;
    clear: both;
  }
  margin-top: 0px;
`;

const Fieldset = ({ hintId, children }) => (
  <StyledDiv>
    <StyledFieldset aria-describedby={hintId}>
      {children !== undefined ? (
        children
      ) : (
        <React.Fragment>Legend and other fieldset contents...</React.Fragment>
      )}
    </StyledFieldset>
  </StyledDiv>
);

export default Fieldset;

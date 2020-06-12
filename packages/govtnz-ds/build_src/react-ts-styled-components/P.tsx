import React from "react";
import styled from "styled-components";

type Props = {
  styleSize: "large" | "medium" | "small" | "x-small";
  children?: React.ReactNode;
};

const StyledP = styled.p`
  margin-bottom: 10px;
  margin-top: 0;
  margin-bottom: 20px;
  margin-top: 0;
  margin-bottom: 15px;
  @media (min-width: 40.0625em) {
    margin-bottom: 20px;
  }
  margin-top: 0px;
`;

const P = ({ styleSize, children }: Props) => (
  <StyledP styleSize={styleSize}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledP>
);

export default P;

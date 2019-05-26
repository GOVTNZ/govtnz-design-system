import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
`;

const FlexRow = ({
  alignXs,
  alignSm,
  alignMd,
  alignLg,
  isReversed,
  children
}) => (
  <StyledDiv
    alignXs={alignXs}
    alignSm={alignSm}
    alignMd={alignMd}
    alignLg={alignLg}
    isReversed={isReversed}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Columns...</React.Fragment>
    )}
  </StyledDiv>
);
FlexRow.props = [
  "alignXs",
  "alignSm",
  "alignMd",
  "alignLg",
  "isReversed",
  "children"
];
export default FlexRow;

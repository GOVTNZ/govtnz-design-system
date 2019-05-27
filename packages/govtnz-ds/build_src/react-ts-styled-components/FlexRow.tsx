import * as React from "react";
import * as styled from "styled-components";

type Props = {
  alignXs?: "start" | "center" | "end" | undefined;
  alignSm?: "start" | "center" | "end" | undefined;
  alignMd?: "start" | "center" | "end" | undefined;
  alignLg?: "start" | "center" | "end" | undefined;
  isReversed?: boolean | undefined;
  children?: React.ReactNode;
};

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
}: Props) => (
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

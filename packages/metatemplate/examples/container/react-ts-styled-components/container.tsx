import * as React from "react";
import * as styled from "styled-components";

type Props = {
  width: "fixed" | "fluid";
  children?: React.ReactNode;
};

const StyledDiv = styled.div<Pick<Props, "width">>`
  ${props =>
    ["fixed", "fluid"].indexOf(props.width) !== -1 &&
    styled.css`
      margin-right: auto;
      margin-left: auto;
      padding-right: 1rem;
      padding-left: 1rem;
    `}
  ${props =>
    props.width === "fixed" &&
    styled.css`
      max-width: 85.375rem;
      box-sizing: border-box;
    `}
@media only screen and (min-width: 48em) {
    ${props =>
      ["fixed", "fluid"].indexOf(props.width) !== -1 &&
      styled.css`
        padding-right: 2rem;
        padding-left: 2rem;
      `};
  }
  @media only screen and (min-width: 75em) {
    ${props =>
      ["fixed", "fluid"].indexOf(props.width) !== -1 &&
      styled.css`
        padding-right: 2.5rem;
        padding-left: 2.5rem;
      `};
  }
`;

const Container = ({ width, children }: Props) => (
  <StyledDiv width={width}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Rows...</React.Fragment>
    )}
  </StyledDiv>
);
Container.props = ["width", "children"];
export default Container;

import React from "react";
import styled from "styled-components";

type Props = {
  xs:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "auto";
  sm:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "auto";
  md:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "auto";
  lg:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "auto";
  xsOffset?:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
  smOffset?:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
  mdOffset?:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
  lgOffset?:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
  isReversed?: boolean;
  children?: React.ReactNode;
};

const StyledDiv = styled.div<
  Pick<
    Props,
    | "xs"
    | "xsOffset"
    | "sm"
    | "smOffset"
    | "md"
    | "lg"
    | "mdOffset"
    | "lgOffset"
  >
>`-ms-flex-direction: column-reverse;
flex-direction: column-reverse;
${props =>
  ([
    "auto",
    "1",
    "10",
    "11",
    "12",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ].indexOf(props.xs) !== -1 ||
    [
      "0",
      "1",
      "10",
      "11",
      "12",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ].indexOf(props.xsOffset) !== -1) &&
  styled.css`
    box-sizing: border-box;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  `}
${props =>
  props.xs === "auto" &&
  styled.css`
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    max-width: 100%;
  `}
${props =>
  props.xs === "1" &&
  styled.css`
    -ms-flex-preferred-size: 8.33333333%;
    flex-basis: 8.33333333%;
    max-width: 8.33333333%;
  `}
${props =>
  props.xs === "2" &&
  styled.css`
    -ms-flex-preferred-size: 16.66666667%;
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
  `}
${props =>
  props.xs === "3" &&
  styled.css`
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%;
  `}
${props =>
  props.xs === "4" &&
  styled.css`
    -ms-flex-preferred-size: 33.33333333%;
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
  `}
${props =>
  props.xs === "5" &&
  styled.css`
    -ms-flex-preferred-size: 41.66666667%;
    flex-basis: 41.66666667%;
    max-width: 41.66666667%;
  `}
${props =>
  props.xs === "6" &&
  styled.css`
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  `}
${props =>
  props.xs === "7" &&
  styled.css`
    -ms-flex-preferred-size: 58.33333333%;
    flex-basis: 58.33333333%;
    max-width: 58.33333333%;
  `}
${props =>
  props.xs === "8" &&
  styled.css`
    -ms-flex-preferred-size: 66.66666667%;
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
  `}
${props =>
  props.xs === "9" &&
  styled.css`
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%;
  `}
${props =>
  props.xs === "10" &&
  styled.css`
    -ms-flex-preferred-size: 83.33333333%;
    flex-basis: 83.33333333%;
    max-width: 83.33333333%;
  `}
${props =>
  props.xs === "11" &&
  styled.css`
    -ms-flex-preferred-size: 91.66666667%;
    flex-basis: 91.66666667%;
    max-width: 91.66666667%;
  `}
${props =>
  props.xs === "12" &&
  styled.css`
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  `}
${props =>
  props.xsOffset === "0" &&
  styled.css`
    margin-left: 0;
  `}
${props =>
  props.xsOffset === "1" &&
  styled.css`
    margin-left: 8.33333333%;
  `}
${props =>
  props.xsOffset === "2" &&
  styled.css`
    margin-left: 16.66666667%;
  `}
${props =>
  props.xsOffset === "3" &&
  styled.css`
    margin-left: 25%;
  `}
${props =>
  props.xsOffset === "4" &&
  styled.css`
    margin-left: 33.33333333%;
  `}
${props =>
  props.xsOffset === "5" &&
  styled.css`
    margin-left: 41.66666667%;
  `}
${props =>
  props.xsOffset === "6" &&
  styled.css`
    margin-left: 50%;
  `}
${props =>
  props.xsOffset === "8" &&
  styled.css`
    margin-left: 66.66666667%;
  `}
${props =>
  props.xsOffset === "9" &&
  styled.css`
    margin-left: 75%;
  `}
${props =>
  props.xsOffset === "10" &&
  styled.css`
    margin-left: 83.33333333%;
  `}
${props =>
  props.xsOffset === "11" &&
  styled.css`
    margin-left: 91.66666667%;
  `}
@media only screen and (min-width: 48em){
${props =>
  ([
    "auto",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ].indexOf(props.sm) !== -1 ||
    [
      "0",
      "1",
      "10",
      "11",
      "12",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ].indexOf(props.smOffset) !== -1) &&
  styled.css`
    box-sizing: border-box;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  `};
${props =>
  props.sm === "auto" &&
  styled.css`
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    max-width: 100%;
  `};
${props =>
  props.sm === "1" &&
  styled.css`
    -ms-flex-preferred-size: 8.33333333%;
    flex-basis: 8.33333333%;
    max-width: 8.33333333%;
  `};
${props =>
  props.sm === "2" &&
  styled.css`
    -ms-flex-preferred-size: 16.66666667%;
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
  `};
${props =>
  props.sm === "3" &&
  styled.css`
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%;
  `};
${props =>
  props.sm === "4" &&
  styled.css`
    -ms-flex-preferred-size: 33.33333333%;
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
  `};
${props =>
  props.sm === "5" &&
  styled.css`
    -ms-flex-preferred-size: 41.66666667%;
    flex-basis: 41.66666667%;
    max-width: 41.66666667%;
  `};
${props =>
  props.sm === "6" &&
  styled.css`
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  `};
${props =>
  props.sm === "7" &&
  styled.css`
    -ms-flex-preferred-size: 58.33333333%;
    flex-basis: 58.33333333%;
    max-width: 58.33333333%;
  `};
${props =>
  props.sm === "8" &&
  styled.css`
    -ms-flex-preferred-size: 66.66666667%;
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
  `};
${props =>
  props.sm === "9" &&
  styled.css`
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%;
  `};
${props =>
  props.sm === "10" &&
  styled.css`
    -ms-flex-preferred-size: 83.33333333%;
    flex-basis: 83.33333333%;
    max-width: 83.33333333%;
  `};
${props =>
  props.sm === "11" &&
  styled.css`
    -ms-flex-preferred-size: 91.66666667%;
    flex-basis: 91.66666667%;
    max-width: 91.66666667%;
  `};
${props =>
  props.sm === "12" &&
  styled.css`
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  `};
${props =>
  props.smOffset === "0" &&
  styled.css`
    margin-left: 0;
  `};
${props =>
  props.smOffset === "1" &&
  styled.css`
    margin-left: 8.33333333%;
  `};
${props =>
  props.smOffset === "2" &&
  styled.css`
    margin-left: 16.66666667%;
  `};
${props =>
  props.smOffset === "3" &&
  styled.css`
    margin-left: 25%;
  `};
${props =>
  props.smOffset === "4" &&
  styled.css`
    margin-left: 33.33333333%;
  `};
${props =>
  props.smOffset === "5" &&
  styled.css`
    margin-left: 41.66666667%;
  `};
${props =>
  props.smOffset === "6" &&
  styled.css`
    margin-left: 50%;
  `};
${props =>
  props.smOffset === "7" &&
  styled.css`
    margin-left: 58.33333333%;
  `};
${props =>
  props.smOffset === "8" &&
  styled.css`
    margin-left: 66.66666667%;
  `};
${props =>
  props.smOffset === "9" &&
  styled.css`
    margin-left: 75%;
  `};
${props =>
  props.smOffset === "10" &&
  styled.css`
    margin-left: 83.33333333%;
  `};
${props =>
  props.smOffset === "11" &&
  styled.css`
    margin-left: 91.66666667%;
  `};
}
@media only screen and (min-width: 64em){
${props =>
  ([
    "auto",
    "1",
    "10",
    "11",
    "12",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ].indexOf(props.md) !== -1 ||
    props.lg === "auto" ||
    [
      "0",
      "1",
      "10",
      "11",
      "12",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ].indexOf(props.mdOffset) !== -1) &&
  styled.css`
    box-sizing: border-box;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  `};
${props =>
  (props.md === "auto" || props.lg === "auto") &&
  styled.css`
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    max-width: 100%;
  `};
${props =>
  props.md === "1" &&
  styled.css`
    -ms-flex-preferred-size: 8.33333333%;
    flex-basis: 8.33333333%;
    max-width: 8.33333333%;
  `};
${props =>
  props.md === "2" &&
  styled.css`
    -ms-flex-preferred-size: 16.66666667%;
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
  `};
${props =>
  props.md === "3" &&
  styled.css`
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%;
  `};
${props =>
  props.md === "4" &&
  styled.css`
    -ms-flex-preferred-size: 33.33333333%;
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
  `};
${props =>
  props.md === "5" &&
  styled.css`
    -ms-flex-preferred-size: 41.66666667%;
    flex-basis: 41.66666667%;
    max-width: 41.66666667%;
  `};
${props =>
  props.md === "6" &&
  styled.css`
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  `};
${props =>
  props.md === "7" &&
  styled.css`
    -ms-flex-preferred-size: 58.33333333%;
    flex-basis: 58.33333333%;
    max-width: 58.33333333%;
  `};
${props =>
  props.md === "8" &&
  styled.css`
    -ms-flex-preferred-size: 66.66666667%;
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
  `};
${props =>
  props.md === "9" &&
  styled.css`
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%;
  `};
${props =>
  props.md === "10" &&
  styled.css`
    -ms-flex-preferred-size: 83.33333333%;
    flex-basis: 83.33333333%;
    max-width: 83.33333333%;
  `};
${props =>
  props.md === "11" &&
  styled.css`
    -ms-flex-preferred-size: 91.66666667%;
    flex-basis: 91.66666667%;
    max-width: 91.66666667%;
  `};
${props =>
  props.md === "12" &&
  styled.css`
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  `};
${props =>
  props.mdOffset === "0" &&
  styled.css`
    margin-left: 0;
  `};
${props =>
  props.mdOffset === "1" &&
  styled.css`
    margin-left: 8.33333333%;
  `};
${props =>
  props.mdOffset === "2" &&
  styled.css`
    margin-left: 16.66666667%;
  `};
${props =>
  props.mdOffset === "3" &&
  styled.css`
    margin-left: 25%;
  `};
${props =>
  props.mdOffset === "4" &&
  styled.css`
    margin-left: 33.33333333%;
  `};
${props =>
  props.mdOffset === "5" &&
  styled.css`
    margin-left: 41.66666667%;
  `};
${props =>
  props.mdOffset === "6" &&
  styled.css`
    margin-left: 50%;
  `};
${props =>
  props.mdOffset === "7" &&
  styled.css`
    margin-left: 58.33333333%;
  `};
${props =>
  props.mdOffset === "8" &&
  styled.css`
    margin-left: 66.66666667%;
  `};
${props =>
  props.mdOffset === "9" &&
  styled.css`
    margin-left: 75%;
  `};
${props =>
  props.mdOffset === "10" &&
  styled.css`
    margin-left: 83.33333333%;
  `};
${props =>
  props.mdOffset === "11" &&
  styled.css`
    margin-left: 91.66666667%;
  `};
}
@media only screen and (min-width: 75em){
${props =>
  (["1", "10", "11", "12", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(
    props.lg
  ) !== -1 ||
    [
      "0",
      "1",
      "10",
      "11",
      "12",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ].indexOf(props.lgOffset) !== -1) &&
  styled.css`
    box-sizing: border-box;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  `};
${props =>
  props.lg === "1" &&
  styled.css`
    -ms-flex-preferred-size: 8.33333333%;
    flex-basis: 8.33333333%;
    max-width: 8.33333333%;
  `};
${props =>
  props.lg === "2" &&
  styled.css`
    -ms-flex-preferred-size: 16.66666667%;
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
  `};
${props =>
  props.lg === "3" &&
  styled.css`
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%;
  `};
${props =>
  props.lg === "4" &&
  styled.css`
    -ms-flex-preferred-size: 33.33333333%;
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
  `};
${props =>
  props.lg === "5" &&
  styled.css`
    -ms-flex-preferred-size: 41.66666667%;
    flex-basis: 41.66666667%;
    max-width: 41.66666667%;
  `};
${props =>
  props.lg === "6" &&
  styled.css`
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  `};
${props =>
  props.lg === "7" &&
  styled.css`
    -ms-flex-preferred-size: 58.33333333%;
    flex-basis: 58.33333333%;
    max-width: 58.33333333%;
  `};
${props =>
  props.lg === "8" &&
  styled.css`
    -ms-flex-preferred-size: 66.66666667%;
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
  `};
${props =>
  props.lg === "9" &&
  styled.css`
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%;
  `};
${props =>
  props.lg === "10" &&
  styled.css`
    -ms-flex-preferred-size: 83.33333333%;
    flex-basis: 83.33333333%;
    max-width: 83.33333333%;
  `};
${props =>
  props.lg === "11" &&
  styled.css`
    -ms-flex-preferred-size: 91.66666667%;
    flex-basis: 91.66666667%;
    max-width: 91.66666667%;
  `};
${props =>
  props.lg === "12" &&
  styled.css`
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  `};
${props =>
  props.lgOffset === "0" &&
  styled.css`
    margin-left: 0;
  `};
${props =>
  props.lgOffset === "1" &&
  styled.css`
    margin-left: 8.33333333%;
  `};
${props =>
  props.lgOffset === "2" &&
  styled.css`
    margin-left: 16.66666667%;
  `};
${props =>
  props.lgOffset === "3" &&
  styled.css`
    margin-left: 25%;
  `};
${props =>
  props.lgOffset === "4" &&
  styled.css`
    margin-left: 33.33333333%;
  `};
${props =>
  props.lgOffset === "5" &&
  styled.css`
    margin-left: 41.66666667%;
  `};
${props =>
  props.lgOffset === "6" &&
  styled.css`
    margin-left: 50%;
  `};
${props =>
  props.lgOffset === "7" &&
  styled.css`
    margin-left: 58.33333333%;
  `};
${props =>
  props.lgOffset === "8" &&
  styled.css`
    margin-left: 66.66666667%;
  `};
${props =>
  props.lgOffset === "9" &&
  styled.css`
    margin-left: 75%;
  `};
${props =>
  props.lgOffset === "10" &&
  styled.css`
    margin-left: 83.33333333%;
  `};
}`;

const Column = ({
  xs,
  sm,
  md,
  lg,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  isReversed,
  children
}: Props) => (
  <StyledDiv
    xs={xs}
    sm={sm}
    md={md}
    lg={lg}
    xsOffset={xsOffset}
    smOffset={smOffset}
    mdOffset={mdOffset}
    lgOffset={lgOffset}
    isReversed={isReversed}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Content...</React.Fragment>
    )}
  </StyledDiv>
);

export default Column;

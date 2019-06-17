import * as React from "react";

type Props = {
  styleSize: "large" | "medium" | "small" | "x-small";
  children?: React.ReactNode;
};

const constants = {
  styleSize: {
    large: "g-p-body-l",
    medium: "g-p-body-m",
    small: "g-p-body-s",
    "x-small": "g-p-body-xs"
  }
};

const P = ({ styleSize, children }: Props) => (
  <p
    className={
      constants.styleSize[styleSize] !== undefined
        ? constants.styleSize[styleSize]
        : ""
    }
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </p>
);

export default P;

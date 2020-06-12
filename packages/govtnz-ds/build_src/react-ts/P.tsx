import React from "react";

type Props = {
  styleSize: "large" | "medium" | "small" | "x-small";
  children?: React.ReactNode;
};

const constants = {
  styleSize: {
    large: "g-body-l",
    medium: "g-body-m",
    small: "g-body-s",
    "x-small": "g-body-xs"
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

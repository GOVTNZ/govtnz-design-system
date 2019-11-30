import * as React from "react";

type Props = {
  styleSize: "xlarge" | "large" | "medium" | "small" | "xsmall" | "xxsmall";
  marginBottom8?: boolean | undefined;
  marginBottom0?: boolean | undefined;
  id?: string | undefined;
  children?: React.ReactNode;
};

const constants = {
  styleSize: {
    xlarge: "g-h6-heading-xl",
    large: "g-h6-heading-l",
    medium: "g-h6-heading-m",
    small: "g-h6-heading-s",
    xsmall: "g-h6-heading-xs",
    xxsmall: "g-h6-heading-xxs"
  }
};

const H6 = ({
  styleSize,
  marginBottom8,
  marginBottom0,
  id,
  children
}: Props) => (
  <h6
    className={`${
      constants.styleSize[styleSize] !== undefined
        ? constants.styleSize[styleSize]
        : ""
    }${marginBottom8 ? " g-h6-heading-mb-8" : ""}${
      marginBottom0 ? " g-h6-heading-mb-0" : ""
    }`}
    id={id}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </h6>
);

export default H6;

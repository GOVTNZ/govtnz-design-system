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
    xlarge: "g-heading-xl",
    large: "g-heading-l",
    medium: "g-heading-m",
    small: "g-heading-s",
    xsmall: "g-heading-xs",
    xxsmall: "g-heading-xxs"
  }
};

const H4 = ({
  styleSize,
  marginBottom8,
  marginBottom0,
  id,
  children
}: Props) => (
  <h4
    className={`${
      constants.styleSize[styleSize] !== undefined
        ? constants.styleSize[styleSize]
        : ""
    }${marginBottom8 ? " g-heading-mb-8" : ""}${
      marginBottom0 ? " g-heading-mb-0" : ""
    }`}
    id={id}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </h4>
);

export default H4;

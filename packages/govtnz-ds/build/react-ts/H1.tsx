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
    xlarge: "g-h1-heading-xl",
    large: "g-h1-heading-l",
    medium: "g-h1-heading-m",
    small: "g-h1-heading-s",
    xsmall: "g-h1-heading-xs",
    xxsmall: "g-h1-heading-xxs"
  }
};

const H1 = ({
  styleSize,
  marginBottom8,
  marginBottom0,
  id,
  children
}: Props) => (
  <h1
    className={`\${constants.styleSize[styleSize] !== undefined ? " " +  constants.styleSize[styleSize] : ""}${
      marginBottom8 ? " g-h1-heading-mb-8" : ""
    }${marginBottom0 ? " g-h1-heading-mb-0" : ""}`}
    id={id}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </h1>
);

export default H1;

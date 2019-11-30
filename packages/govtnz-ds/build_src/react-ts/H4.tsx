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
    xlarge: "g-h4-heading-xl",
    large: "g-h4-heading-l",
    medium: "g-h4-heading-m",
    small: "g-h4-heading-s",
    xsmall: "g-h4-heading-xs",
    xxsmall: "g-h4-heading-xxs"
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
    className={`\${constants.styleSize[styleSize] !== undefined ? " " +  constants.styleSize[styleSize] : ""}${
      marginBottom8 ? " g-h4-heading-mb-8" : ""
    }${marginBottom0 ? " g-h4-heading-mb-0" : ""}`}
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

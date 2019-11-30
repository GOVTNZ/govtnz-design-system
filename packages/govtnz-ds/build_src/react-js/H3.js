import React from "react";

const constants = {
  styleSize: {
    xlarge: "g-h3-heading-xl",
    large: "g-h3-heading-l",
    medium: "g-h3-heading-m",
    small: "g-h3-heading-s",
    xsmall: "g-h3-heading-xs",
    xxsmall: "g-h3-heading-xxs"
  }
};

const H3 = ({ styleSize, marginBottom8, marginBottom0, id, children }) => (
  <h3
    className={`\${constants.styleSize[styleSize] !== undefined ? " " +  constants.styleSize[styleSize] : ""}${
      marginBottom8 ? " g-h3-heading-mb-8" : ""
    }${marginBottom0 ? " g-h3-heading-mb-0" : ""}`}
    id={id}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </h3>
);

export default H3;

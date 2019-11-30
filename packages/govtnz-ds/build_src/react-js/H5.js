import React from "react";

const constants = {
  styleSize: {
    xlarge: "g-h5-heading-xl",
    large: "g-h5-heading-l",
    medium: "g-h5-heading-m",
    small: "g-h5-heading-s",
    xsmall: "g-h5-heading-xs",
    xxsmall: "g-h5-heading-xxs"
  }
};

const H5 = ({ styleSize, marginBottom8, marginBottom0, id, children }) => (
  <h5
    className={`\${constants.styleSize[styleSize] !== undefined ? " " +  constants.styleSize[styleSize] : ""}${
      marginBottom8 ? " g-h5-heading-mb-8" : ""
    }${marginBottom0 ? " g-h5-heading-mb-0" : ""}`}
    id={id}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </h5>
);

export default H5;

import React from "react";

const constants = {
  styleSize: {
    xlarge: "g-h2-heading-xl",
    large: "g-h2-heading-l",
    medium: "g-h2-heading-m",
    small: "g-h2-heading-s",
    xsmall: "g-h2-heading-xs",
    xxsmall: "g-h2-heading-xxs"
  }
};

const H2 = ({ styleSize, marginBottom8, marginBottom0, id, children }) => (
  <h2
    className={`${
      constants.styleSize[styleSize] !== undefined
        ? constants.styleSize[styleSize]
        : ""
    }${marginBottom8 ? " g-h2-heading-mb-8" : ""}${
      marginBottom0 ? " g-h2-heading-mb-0" : ""
    }`}
    id={id}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </h2>
);

export default H2;

import React from "react";

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

const H4 = ({ styleSize, marginBottom8, marginBottom0, id, children }) => (
  <h4
    className={`${
      constants.styleSize[styleSize] !== undefined
        ? constants.styleSize[styleSize]
        : ""
    }${marginBottom8 ? " g-h4-heading-mb-8" : ""}${
      marginBottom0 ? " g-h4-heading-mb-0" : ""
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

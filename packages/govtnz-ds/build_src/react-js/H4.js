import React from "react";

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

const H4 = ({ styleSize, marginBottom8, marginBottom0, id, children }) => (
  <h4
    className={`g-heading${
      constants.styleSize[styleSize] !== undefined
        ? " " + constants.styleSize[styleSize]
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

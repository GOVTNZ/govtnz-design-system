import React from "react";

const constants = {
  styleSize: {
    large: "g-body-l",
    medium: "g-body-m",
    small: "g-body-s",
    "x-small": "g-body-xs"
  }
};

const P = ({ styleSize, marginBottom0, children }) => (
  <p
    className={`g-body${
      constants.styleSize[styleSize] !== undefined
        ? " " + constants.styleSize[styleSize]
        : ""
    }${marginBottom0 ? " g-body-marginBottom0" : ""}`}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </p>
);

export default P;

import React from "react";

const constants = {
  width: { fixed: "g-flex-container", fluid: "g-flex-container-fluid" }
};

const Container = ({ width, children }) => (
  <div
    className={
      constants.width[width] !== undefined ? constants.width[width] : ""
    }
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Rows...</React.Fragment>
    )}
  </div>
);

export default Container;

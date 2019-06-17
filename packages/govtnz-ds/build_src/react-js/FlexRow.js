import React from "react";

const constants = {
  alignXs: { start: "start-xs", center: "center-xs", end: "end-xs" },
  alignSm: { start: "start-sm", center: "center-sm", end: "end-sm" },
  alignMd: { start: "start-md", center: "center-md", end: "end-md" },
  alignLg: { start: "start-lg", center: "center-lg", end: "end-lg" }
};

const FlexRow = ({
  alignXs,
  alignSm,
  alignMd,
  alignLg,
  isReversed,
  children
}) => (
  <div
    className={`g-flex-row${
      constants.alignXs[alignXs] !== undefined
        ? " " + constants.alignXs[alignXs]
        : ""
    }${
      constants.alignSm[alignSm] !== undefined
        ? " " + constants.alignSm[alignSm]
        : ""
    }${
      constants.alignMd[alignMd] !== undefined
        ? " " + constants.alignMd[alignMd]
        : ""
    }${
      constants.alignLg[alignLg] !== undefined
        ? " " + constants.alignLg[alignLg]
        : ""
    }${isReversed ? " g-flex-reverse" : ""}`}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Columns...</React.Fragment>
    )}
  </div>
);

export default FlexRow;

import React from "react";

type Props = {
  xsVerticalAlign?: "top" | "middle" | "bottom";
  smVerticalAlign?: "top" | "middle" | "bottom";
  mdVerticalAlign?: "top" | "middle" | "bottom";
  lgVerticalAlign?: "top" | "middle" | "bottom";
  isReversed?: boolean;
  children?: React.ReactNode;
};

const constants = {
  xsVerticalAlign: {
    top: "g-flex-top-xs",
    middle: "g-flex-middle-xs",
    bottom: "g-flex-bottom-xs"
  },
  smVerticalAlign: {
    top: "g-flex-top-sm",
    middle: "g-flex-middle-sm",
    bottom: "g-flex-bottom-sm"
  },
  mdVerticalAlign: {
    top: "g-flex-top-md",
    middle: "g-flex-middle-md",
    bottom: "g-flex-bottom-md"
  },
  lgVerticalAlign: {
    top: "g-flex-top-lg",
    middle: "g-flex-middle-lg",
    bottom: "g-flex-bottom-lg"
  }
};

const FlexRow = ({
  xsVerticalAlign,
  smVerticalAlign,
  mdVerticalAlign,
  lgVerticalAlign,
  isReversed,
  children
}: Props) => (
  <div
    className={`g-flex-row${
      constants.xsVerticalAlign[xsVerticalAlign] !== undefined
        ? " " + constants.xsVerticalAlign[xsVerticalAlign]
        : ""
    }${
      constants.smVerticalAlign[smVerticalAlign] !== undefined
        ? " " + constants.smVerticalAlign[smVerticalAlign]
        : ""
    }${
      constants.mdVerticalAlign[mdVerticalAlign] !== undefined
        ? " " + constants.mdVerticalAlign[mdVerticalAlign]
        : ""
    }${
      constants.lgVerticalAlign[lgVerticalAlign] !== undefined
        ? " " + constants.lgVerticalAlign[lgVerticalAlign]
        : ""
    }${isReversed ? " g-flex-reverse" : ""}`}
  >
    {" "}
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Columns...</React.Fragment>
    )}{" "}
  </div>
);

export default FlexRow;

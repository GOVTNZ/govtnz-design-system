import React from "react";

type Props = {
  xsVerticalAlign?: "top" | "middle" | "bottom";
  smVerticalAlign?: "top" | "middle" | "bottom";
  mdVerticalAlign?: "top" | "middle" | "bottom";
  lgVerticalAlign?: "top" | "middle" | "bottom";
  xsReversed?: "true" | "false";
  smReversed?: "true" | "false";
  mdReversed?: "true" | "false";
  lgReversed?: "true" | "false";
  isReversed?: boolean;
  className?: any;
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
  },
  xsReversed: { true: "g-flex-reversed-xs", false: "g-flex-not-reversed-xs" },
  smReversed: { true: "g-flex-reversed-sm", false: "g-flex-not-reversed-sm" },
  mdReversed: { true: "g-flex-reversed-md", false: "g-flex-not-reversed-md" },
  lgReversed: { true: "g-flex-reversed-lg", false: "g-flex-not-reversed-lg" }
};

const FlexRow = ({
  xsVerticalAlign,
  smVerticalAlign,
  mdVerticalAlign,
  lgVerticalAlign,
  xsReversed,
  smReversed,
  mdReversed,
  lgReversed,
  isReversed,
  className,
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
    }${
      constants.xsReversed[xsReversed] !== undefined
        ? " " + constants.xsReversed[xsReversed]
        : ""
    }${
      constants.smReversed[smReversed] !== undefined
        ? " " + constants.smReversed[smReversed]
        : ""
    }${
      constants.mdReversed[mdReversed] !== undefined
        ? " " + constants.mdReversed[mdReversed]
        : ""
    }${
      constants.lgReversed[lgReversed] !== undefined
        ? " " + constants.lgReversed[lgReversed]
        : ""
    }${isReversed ? " g-flex-reverse" : ""}${className ? " " + className : ""}`}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Columns...</React.Fragment>
    )}
  </div>
);

export default FlexRow;

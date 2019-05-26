import * as React from "react";

type Props = {
  xs:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "auto";
  sm:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "auto";
  md:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "auto";
  lg:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "auto";
  xsOffset?:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | undefined;
  smOffset?:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | undefined;
  mdOffset?:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | undefined;
  lgOffset?:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | undefined;
  isReversed?: boolean | undefined;
  children?: React.ReactNode;
};

const constants = {
  xs: {
    "1": "g-flex-col-xs-1",
    "2": "g-flex-col-xs-2",
    "3": "g-flex-col-xs-3",
    "4": "g-flex-col-xs-4",
    "5": "g-flex-col-xs-5",
    "6": "g-flex-col-xs-6",
    "7": "g-flex-col-xs-7",
    "8": "g-flex-col-xs-8",
    "9": "g-flex-col-xs-9",
    "10": "g-flex-col-xs-10",
    "11": "g-flex-col-xs-11",
    "12": "g-flex-col-xs-12",
    auto: "g-flex-col-xs"
  },
  sm: {
    "1": "g-flex-col-sm-1",
    "2": "g-flex-col-sm-2",
    "3": "g-flex-col-sm-3",
    "4": "g-flex-col-sm-4",
    "5": "g-flex-col-sm-5",
    "6": "g-flex-col-sm-6",
    "7": "g-flex-col-sm-7",
    "8": "g-flex-col-sm-8",
    "9": "g-flex-col-sm-9",
    "10": "g-flex-col-sm-10",
    "11": "g-flex-col-sm-11",
    "12": "g-flex-col-sm-12",
    auto: "g-flex-col-sm"
  },
  md: {
    "1": "g-flex-col-md-1",
    "2": "g-flex-col-md-2",
    "3": "g-flex-col-md-3",
    "4": "g-flex-col-md-4",
    "5": "g-flex-col-md-5",
    "6": "g-flex-col-md-6",
    "7": "g-flex-col-md-7",
    "8": "g-flex-col-md-8",
    "9": "g-flex-col-md-9",
    "10": "g-flex-col-md-10",
    "11": "g-flex-col-md-11",
    "12": "g-flex-col-md-12",
    auto: "g-flex-col-md"
  },
  lg: {
    "1": "g-flex-col-lg-1",
    "2": "g-flex-col-lg-2",
    "3": "g-flex-col-lg-3",
    "4": "g-flex-col-lg-4",
    "5": "g-flex-col-lg-5",
    "6": "g-flex-col-lg-6",
    "7": "g-flex-col-lg-7",
    "8": "g-flex-col-lg-8",
    "9": "g-flex-col-lg-9",
    "10": "g-flex-col-lg-10",
    "11": "g-flex-col-lg-11",
    "12": "g-flex-col-lg-12",
    auto: "g-flex-col-md"
  },
  xsOffset: {
    "0": "g-flex-col-xs-offset-0",
    "1": "g-flex-col-xs-offset-1",
    "2": "g-flex-col-xs-offset-2",
    "3": "g-flex-col-xs-offset-3",
    "4": "g-flex-col-xs-offset-4",
    "5": "g-flex-col-xs-offset-5",
    "6": "g-flex-col-xs-offset-6",
    "7": "g-flex-col-xs-offset-7",
    "8": "g-flex-col-xs-offset-8",
    "9": "g-flex-col-xs-offset-9",
    "10": "g-flex-col-xs-offset-10",
    "11": "g-flex-col-xs-offset-11",
    "12": "g-flex-col-xs-offset-12"
  },
  smOffset: {
    "0": "g-flex-col-sm-offset-0",
    "1": "g-flex-col-sm-offset-1",
    "2": "g-flex-col-sm-offset-2",
    "3": "g-flex-col-sm-offset-3",
    "4": "g-flex-col-sm-offset-4",
    "5": "g-flex-col-sm-offset-5",
    "6": "g-flex-col-sm-offset-6",
    "7": "g-flex-col-sm-offset-7",
    "8": "g-flex-col-sm-offset-8",
    "9": "g-flex-col-sm-offset-9",
    "10": "g-flex-col-sm-offset-10",
    "11": "g-flex-col-sm-offset-11",
    "12": "g-flex-col-sm-offset-12"
  },
  mdOffset: {
    "0": "g-flex-col-md-offset-0",
    "1": "g-flex-col-md-offset-1",
    "2": "g-flex-col-md-offset-2",
    "3": "g-flex-col-md-offset-3",
    "4": "g-flex-col-md-offset-4",
    "5": "g-flex-col-md-offset-5",
    "6": "g-flex-col-md-offset-6",
    "7": "g-flex-col-md-offset-7",
    "8": "g-flex-col-md-offset-8",
    "9": "g-flex-col-md-offset-9",
    "10": "g-flex-col-md-offset-10",
    "11": "g-flex-col-md-offset-11",
    "12": "g-flex-col-md-offset-12"
  },
  lgOffset: {
    "0": "g-flex-col-lg-offset-0",
    "1": "g-flex-col-lg-offset-1",
    "2": "g-flex-col-lg-offset-2",
    "3": "g-flex-col-lg-offset-3",
    "4": "g-flex-col-lg-offset-4",
    "5": "g-flex-col-lg-offset-5",
    "6": "g-flex-col-lg-offset-6",
    "7": "g-flex-col-lg-offset-7",
    "8": "g-flex-col-lg-offset-8",
    "9": "g-flex-col-lg-offset-9",
    "10": "g-flex-col-lg-offset-10",
    "11": "g-flex-col-lg-offset-11",
    "12": "g-flex-col-lg-offset-12"
  }
};

const Column = ({
  xs,
  sm,
  md,
  lg,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  isReversed,
  children
}: Props) => (
  <div
    className={`g-flex-col${
      constants.xs[xs] !== undefined ? " " + constants.xs[xs] : ""
    }${constants.sm[sm] !== undefined ? " " + constants.sm[sm] : ""}${
      constants.md[md] !== undefined ? " " + constants.md[md] : ""
    }${constants.lg[lg] !== undefined ? " " + constants.lg[lg] : ""}${
      constants.xsOffset[xsOffset] !== undefined
        ? " " + constants.xsOffset[xsOffset]
        : ""
    }${
      constants.smOffset[smOffset] !== undefined
        ? " " + constants.smOffset[smOffset]
        : ""
    }${
      constants.mdOffset[mdOffset] !== undefined
        ? " " + constants.mdOffset[mdOffset]
        : ""
    }${
      constants.lgOffset[lgOffset] !== undefined
        ? " " + constants.lgOffset[lgOffset]
        : ""
    }${isReversed ? " g-flex-reverse" : ""}`}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Content...</React.Fragment>
    )}
  </div>
);
Column.props = [
  "xs",
  "sm",
  "md",
  "lg",
  "xsOffset",
  "smOffset",
  "mdOffset",
  "lgOffset",
  "isReversed",
  "children"
];
export default Column;

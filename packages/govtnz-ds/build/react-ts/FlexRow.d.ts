import React from "react";
declare type Props = {
    xsVerticalAlign?: "top" | "middle" | "bottom";
    smVerticalAlign?: "top" | "middle" | "bottom";
    mdVerticalAlign?: "top" | "middle" | "bottom";
    lgVerticalAlign?: "top" | "middle" | "bottom";
    xsReversed?: "true" | "false";
    smReversed?: "true" | "false";
    mdReversed?: "true" | "false";
    lgReversed?: "true" | "false";
    isReversed?: boolean;
    children?: React.ReactNode;
};
declare const FlexRow: ({ xsVerticalAlign, smVerticalAlign, mdVerticalAlign, lgVerticalAlign, xsReversed, smReversed, mdReversed, lgReversed, isReversed, children }: Props) => JSX.Element;
export default FlexRow;

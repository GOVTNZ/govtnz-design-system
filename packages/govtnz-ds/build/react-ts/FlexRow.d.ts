import React from "react";
declare type Props = {
    xsVerticalAlign?: "top" | "middle" | "bottom";
    smVerticalAlign?: "top" | "middle" | "bottom";
    mdVerticalAlign?: "top" | "middle" | "bottom";
    lgVerticalAlign?: "top" | "middle" | "bottom";
    isReversed?: boolean;
    children?: React.ReactNode;
};
declare const FlexRow: ({ xsVerticalAlign, smVerticalAlign, mdVerticalAlign, lgVerticalAlign, isReversed, children }: Props) => JSX.Element;
export default FlexRow;

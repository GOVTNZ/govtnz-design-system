import React from "react";
declare type Props = {
    alignXs?: "start" | "center" | "end";
    alignSm?: "start" | "center" | "end";
    alignMd?: "start" | "center" | "end";
    alignLg?: "start" | "center" | "end";
    isReversed?: boolean;
    children?: React.ReactNode;
};
declare const FlexRow: ({ alignXs, alignSm, alignMd, alignLg, isReversed, children }: Props) => JSX.Element;
export default FlexRow;

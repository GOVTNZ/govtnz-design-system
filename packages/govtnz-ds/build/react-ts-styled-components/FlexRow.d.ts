import * as React from "react";
declare type Props = {
    alignXs?: "start" | "center" | "end" | undefined;
    alignSm?: "start" | "center" | "end" | undefined;
    alignMd?: "start" | "center" | "end" | undefined;
    alignLg?: "start" | "center" | "end" | undefined;
    isReversed?: boolean | undefined;
    children?: React.ReactNode;
};
declare const FlexRow: ({ alignXs, alignSm, alignMd, alignLg, isReversed, children }: Props) => JSX.Element;
export default FlexRow;

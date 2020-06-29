import React from "react";
declare type Props = {
    width: "fixed" | "fluid";
    children?: React.ReactNode;
};
declare const FlexContainer: ({ width, children }: Props) => JSX.Element;
export default FlexContainer;

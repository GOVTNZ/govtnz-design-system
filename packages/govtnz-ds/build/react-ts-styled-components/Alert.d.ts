import React from "react";
declare type Props = {
    mode?: "live";
    level: "info" | "warning" | "success" | "error";
    children?: React.ReactNode;
    headingId?: string;
};
declare const Alert: ({ mode, level, children, headingId }: Props) => JSX.Element;
export default Alert;

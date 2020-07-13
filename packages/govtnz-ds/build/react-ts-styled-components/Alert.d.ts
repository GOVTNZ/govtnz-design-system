import React from "react";
declare type Props = {
    mode?: string;
    level: "info" | "warning" | "success" | "error";
    headingId?: string;
    children?: React.ReactNode;
};
declare const Alert: ({ mode, level, headingId, children }: Props) => JSX.Element;
export default Alert;

import * as React from "react";
declare type Props = {
    disabled?: boolean | undefined;
    level: "secondary" | "warning";
    name?: string | undefined;
    type?: "Submit" | "Reset" | "Button" | undefined;
    onClick: any;
    children?: React.ReactNode;
};
declare const Button: ({ disabled, level, name, type, onClick, children }: Props) => JSX.Element;
export default Button;

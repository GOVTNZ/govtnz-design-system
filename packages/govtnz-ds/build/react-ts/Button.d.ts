import React from "react";
declare type Props = {
    disabled?: boolean;
    level: "secondary" | "warning";
    name?: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
    children?: React.ReactNode;
};
declare const Button: ({ disabled, level, name, type, onClick, children }: Props) => JSX.Element;
export default Button;

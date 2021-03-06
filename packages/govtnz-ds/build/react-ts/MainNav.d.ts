import React from "react";
declare type Props = {
    isOpen?: "true" | "false";
    id?: string;
    name?: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
    button?: React.ReactNode;
    children?: React.ReactNode;
};
declare const MainNav: ({ isOpen, id, name, type, onClick, button, children }: Props) => JSX.Element;
export default MainNav;

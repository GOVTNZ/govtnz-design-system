import React from "react";
declare type Props = {
    isOpen?: "true" | "false";
    navId?: string;
    name?: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
    children?: React.ReactNode;
};
declare const MainNavMobileMenu: ({ isOpen, navId, name, type, onClick, children }: Props) => JSX.Element;
export default MainNavMobileMenu;

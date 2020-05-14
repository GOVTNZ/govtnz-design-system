import React from "react";
declare type Props = {
    ariaExpanded: any;
    isOpen?: "true" | "false";
    menuContainer?: string;
    name?: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
    children?: React.ReactNode;
};
declare const MainNavMobileMenu: ({ ariaExpanded, isOpen, menuContainer, name, type, onClick, children }: Props) => JSX.Element;
export default MainNavMobileMenu;

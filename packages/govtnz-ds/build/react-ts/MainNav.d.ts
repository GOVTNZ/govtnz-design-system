import React from "react";
declare type Props = {
    isOpen?: "true" | "false";
    menuContainer?: string;
    children?: React.ReactNode;
};
declare const MainNav: ({ isOpen, menuContainer, children }: Props) => JSX.Element;
export default MainNav;

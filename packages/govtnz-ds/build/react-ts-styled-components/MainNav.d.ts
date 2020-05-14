import React from "react";
declare type Props = {
    isOpen?: "true" | "false";
    id?: string;
    children?: React.ReactNode;
};
declare const MainNav: ({ isOpen, id, children }: Props) => JSX.Element;
export default MainNav;

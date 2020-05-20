import React from "react";
declare type Props = {
    ariaCurrent?: React.InputHTMLAttributes<HTMLInputElement>["aria-current"];
    href: string;
    rel?: string;
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
    onClick?: React.AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
    children?: React.ReactNode;
};
declare const MainNavLink: ({ ariaCurrent, href, rel, target, onClick, children }: Props) => JSX.Element;
export default MainNavLink;

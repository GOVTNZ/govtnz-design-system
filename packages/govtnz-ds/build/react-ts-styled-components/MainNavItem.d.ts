import * as React from "react";
declare type Props = {
    ariaCurrent: any;
    href: string;
    rel?: string;
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
    children?: React.ReactNode;
};
declare const MainNavItem: ({ ariaCurrent, href, rel, target, children }: Props) => JSX.Element;
export default MainNavItem;

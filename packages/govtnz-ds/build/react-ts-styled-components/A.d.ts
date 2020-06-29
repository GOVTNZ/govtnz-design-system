import React from "react";
declare type Props = {
    className?: any;
    href: string;
    rel?: string;
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
    onClick?: React.AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
    children?: React.ReactNode;
};
declare const A: ({ className, href, rel, target, onClick, children }: Props) => JSX.Element;
export default A;

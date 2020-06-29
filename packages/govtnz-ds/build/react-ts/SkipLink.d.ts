import React from "react";
declare type Props = {
    href: string;
    rel?: string;
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
    onClick?: React.AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
};
declare const SkipLink: ({ href, rel, target, onClick }: Props) => JSX.Element;
export default SkipLink;

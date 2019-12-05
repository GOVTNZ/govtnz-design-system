import * as React from "react";
declare type Props = {
    isMuted?: boolean;
    href: string;
    rel?: string;
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
    children?: React.ReactNode;
};
declare const A: ({ isMuted, href, rel, target, children }: Props) => JSX.Element;
export default A;

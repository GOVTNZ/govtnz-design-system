import * as React from "react";
declare type Props = {
    isMuted?: boolean | undefined;
    href: string;
    rel?: string | undefined;
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"] | undefined;
    children?: React.ReactNode;
};
declare const A: ({ isMuted, href, rel, target, children }: Props) => JSX.Element;
export default A;

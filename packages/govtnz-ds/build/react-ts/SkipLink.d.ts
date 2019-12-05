import * as React from "react";
declare type Props = {
    href: string;
    rel?: string;
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
};
declare const SkipLink: ({ href, rel, target }: Props) => JSX.Element;
export default SkipLink;

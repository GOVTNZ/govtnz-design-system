import * as React from "react";
declare type Props = {
    href: string;
    rel?: string | undefined;
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"] | undefined;
};
declare const SkipLink: ({ href, rel, target }: Props) => JSX.Element;
export default SkipLink;

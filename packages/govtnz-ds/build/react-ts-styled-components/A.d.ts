import * as React from "react";
declare type Props = {
    isMuted?: boolean | undefined;
    href: string;
    rel?: string | undefined;
    target?: "Blank" | "Top" | "Self" | "Parent" | undefined;
    children?: React.ReactNode;
};
declare const A: ({ isMuted, href, rel, target, children }: Props) => JSX.Element;
export default A;

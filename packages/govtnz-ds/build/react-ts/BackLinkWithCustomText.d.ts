import * as React from "react";
declare type Props = {
    href: string;
    rel?: string | undefined;
    target?: "Blank" | "Top" | "Self" | "Parent" | undefined;
    children?: React.ReactNode;
};
declare const BackLinkWithCustomText: {
    ({ href, rel, target, children }: Props): JSX.Element;
    props: string[];
};
export default BackLinkWithCustomText;

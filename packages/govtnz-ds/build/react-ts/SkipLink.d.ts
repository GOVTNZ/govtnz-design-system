/// <reference types="react" />
declare type Props = {
    href: string;
    rel?: string | undefined;
    target?: "Blank" | "Top" | "Self" | "Parent" | undefined;
};
declare const SkipLink: ({ href, rel, target }: Props) => JSX.Element;
export default SkipLink;

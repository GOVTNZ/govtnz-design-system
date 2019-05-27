/// <reference types="react" />
declare type Props = {
    href: string;
    rel?: string | undefined;
    target?: "Blank" | "Top" | "Self" | "Parent" | undefined;
    href2: string;
    rel2?: string | undefined;
    target2?: "Blank" | "Top" | "Self" | "Parent" | undefined;
    href3: string;
    rel3?: string | undefined;
    target3?: "Blank" | "Top" | "Self" | "Parent" | undefined;
    href4: string;
    rel4?: string | undefined;
    target4?: "Blank" | "Top" | "Self" | "Parent" | undefined;
    href5: string;
    rel5?: string | undefined;
    target5?: "Blank" | "Top" | "Self" | "Parent" | undefined;
};
declare const SummaryList: {
    ({ href, rel, target, href2, rel2, target2, href3, rel3, target3, href4, rel4, target4, href5, rel5, target5 }: Props): JSX.Element;
    props: string[];
};
export default SummaryList;

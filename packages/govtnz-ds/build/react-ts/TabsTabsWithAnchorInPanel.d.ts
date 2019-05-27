/// <reference types="react" />
declare type Props = {
    tabTab1?: string | undefined;
    tab1?: string | undefined;
    href: string;
    rel?: string | undefined;
    target?: "Blank" | "Top" | "Self" | "Parent" | undefined;
    tabTab2?: string | undefined;
    tab2?: string | undefined;
    href2: string;
    rel2?: string | undefined;
    target2?: "Blank" | "Top" | "Self" | "Parent" | undefined;
    href3: string;
    rel3?: string | undefined;
    target3?: "Blank" | "Top" | "Self" | "Parent" | undefined;
    anchor?: string | undefined;
    href4: string;
    rel4?: string | undefined;
    target4?: "Blank" | "Top" | "Self" | "Parent" | undefined;
};
declare const TabsTabsWithAnchorInPanel: {
    ({ tabTab1, tab1, href, rel, target, tabTab2, tab2, href2, rel2, target2, href3, rel3, target3, anchor, href4, rel4, target4 }: Props): JSX.Element;
    props: string[];
};
export default TabsTabsWithAnchorInPanel;

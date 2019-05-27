/// <reference types="react" />
declare type Props = {
    tabPastDay?: string | undefined;
    pastDay?: string | undefined;
    href: string;
    rel?: string | undefined;
    target?: "Blank" | "Top" | "Self" | "Parent" | undefined;
    tabPastWeek?: string | undefined;
    pastWeek?: string | undefined;
    href2: string;
    rel2?: string | undefined;
    target2?: "Blank" | "Top" | "Self" | "Parent" | undefined;
    tabPastMonth?: string | undefined;
    pastMonth?: string | undefined;
    href3: string;
    rel3?: string | undefined;
    target3?: "Blank" | "Top" | "Self" | "Parent" | undefined;
    tabPastYear?: string | undefined;
    pastYear?: string | undefined;
    href4: string;
    rel4?: string | undefined;
    target4?: "Blank" | "Top" | "Self" | "Parent" | undefined;
};
declare const Tabs: {
    ({ tabPastDay, pastDay, href, rel, target, tabPastWeek, pastWeek, href2, rel2, target2, tabPastMonth, pastMonth, href3, rel3, target3, tabPastYear, pastYear, href4, rel4, target4 }: Props): JSX.Element;
    props: string[];
};
export default Tabs;

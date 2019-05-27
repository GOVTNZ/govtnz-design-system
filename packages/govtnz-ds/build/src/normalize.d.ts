import { SourceId, ReleaseVersion } from '@govtnz/ds-upstream';
export declare const normalizeUpstream: (sourceId: SourceId, upstreamReleaseVersions: ReleaseVersion[]) => Promise<ReleaseVersion[]>;
export declare const insertVariableBySelector: (html: string, selector: string, key: string, defaultValue?: string) => Promise<string>;
export declare const setAttributeBySelector: (html: string, selector: string, attributeName: string, defaultValue: string, dynamicKeys?: any[]) => string;
export declare const removeAttribute: (html: string, selector: string, attributeName: string) => string;
export declare const removeElement: (html: string, selector: string) => string;
export declare const select: (html: string, selector: string) => string;
export declare const replaceClass: (html: string, className: string, withValue: string) => string;
export declare const toId: (id: string) => string;
export declare const filterCSSByClassName: (className: string, css: string) => Promise<string>;
declare type ValueReplacerProps = {
    atRule: string;
    selector: string;
    name: string;
    value: string;
    isImportant: boolean;
};
declare type ValueReplacer = (props: ValueReplacerProps) => string | undefined;
declare type SelectorReplacerProps = {
    selector: string;
};
declare type SelectorReplacer = (props: SelectorReplacerProps) => string | undefined;
declare type AddProps = {
    atRule: string;
    selector: string;
};
declare type AddCallback = (props: AddProps) => string | undefined;
export declare const setCSSValues: (css: string, valueReplacer?: ValueReplacer, selectorReplacer?: SelectorReplacer, addCallback?: AddCallback) => string;
export declare const wrapIfBySelector: (html: string, selector: string, key: string) => string;
export declare type MetaTemplateDef = {
    id: string;
    html: string;
    css: string;
    message?: string;
};
export {};

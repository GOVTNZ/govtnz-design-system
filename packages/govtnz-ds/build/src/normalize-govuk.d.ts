import { ReleaseVersion } from '@govtnz/ds-upstream';
import { MetaTemplateDef } from './normalize';
export declare const normalizeReleaseVersionGovUk: (upstreamReleaseVersion: ReleaseVersion) => Promise<ReleaseVersion>;
export declare const removeGovUkIdentifiers: (data: string) => string;
export declare const govukToMetaTemplateInput: (oldTemplateId: string, oldHTML: string, css: string, semVer: string) => Promise<MetaTemplateDef[]>;
declare type CSSReplacementRuleOnlyReplace = ['all' | 'print' | 'screen-big', string, // selector
string];
declare type CSSReplacementRuleWithAdd = ['all' | 'print' | 'screen-big', string, // selector
string, // css properties to REPLACE (will error if unable to replace)
string];
declare type CSSReplacementRule = CSSReplacementRuleOnlyReplace | CSSReplacementRuleWithAdd;
export declare const updateCSS: (css: string, rules: CSSReplacementRule[]) => string;
export declare const normalizeGovUkTemplate: ({ id, html, css, cssNamespace, message, additionalPrefixesToBypassNamespacing }: {
    id: any;
    html: any;
    css: any;
    cssNamespace: any;
    message: any;
    additionalPrefixesToBypassNamespacing: any;
}) => {
    id: string;
    html: any;
    css: any;
    message: any;
};
export {};

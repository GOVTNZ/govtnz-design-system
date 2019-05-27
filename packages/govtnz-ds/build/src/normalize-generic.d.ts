import { ReleaseVersion } from '@govtnz/ds-upstream';
export declare const normalizeGeneric: (upstreamReleaseVersion: ReleaseVersion) => Promise<{
    components: {
        id: string;
        version: string;
        html: string;
        css: string;
        cssVariables?: import("@govtnz/ds-upstream").CSSVariablePattern[];
    }[];
    sourceId: import("@govtnz/ds-upstream").SourceId;
    version: string;
    creditMarkdown: string;
    validComponentIds?: string[];
}>;

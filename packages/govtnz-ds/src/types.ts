import { AnyObject } from './utils';
export type SourceId = 'govuk' | 'govtnz' | 'flexboxgrid';

export type ReleaseVersion = {
  sourceId: SourceId;
  version: string;
  components: Component[];
  creditMarkdown: string;
  validComponentIds?: string[] | undefined;
};

export type Component = {
  id: string;
  version: string;
  html: string;
  css: string;
  cssVariables?: CSSVariablePattern[];
  calculatedDynamicKeys?: { [key: string]: string };
};

export type CSSVariablePattern = {
  id: string;
  defaultValue: string;
  nameMatch?: string;
  valueMatch?: string;
  valueSubstringMatch?: string;
};

export type ReleaseSpecItem = {
  sourceId: SourceId;
  version?: string;
  componentIds?: string[] | undefined;
  metaTemplateFormatIds?: string[] | undefined;
};

export type ReleaseItem = {
  files: Object;
  releaseVersions: ReleaseVersion[];
  creditMarkdown: string;
  cssVariables?: CSSVariablePattern[];
  css?: string;
};

export type ComponentToFilesArgs = {
  component: Component;
  creditMarkdown: string;
  cssVariables: CSSVariablePattern[];
  metaTemplateFormatIds?: string[] | undefined;
};

export type ComponentToFilesResponse = {
  files: AnyObject;
  cssVariables: CSSVariablePattern[];
  disposeMetaTemplate: Function;
};

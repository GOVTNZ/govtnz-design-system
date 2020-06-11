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

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';

// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import H1 from '@govtnz/ds/build/react-ts/H1';
import H2 from '@govtnz/ds/build/react-ts/H2';
import H3 from '@govtnz/ds/build/react-ts/H3';
import H4 from '@govtnz/ds/build/react-ts/H4';
import H5 from '@govtnz/ds/build/react-ts/H5';
import H6 from '@govtnz/ds/build/react-ts/H6';

// This value is dynamically replaced in prebuild.js.
export const allTemplateIds: any = [
  { name: 'A', importName: 'A' },
  { name: 'Button', importName: 'Button' },
  { name: 'Caption L', importName: 'CaptionL' },
  { name: 'Caption M', importName: 'CaptionM' },
  { name: 'Caption Xl', importName: 'CaptionXl' },
  { name: 'Flex Column', importName: 'FlexColumn' },
  { name: 'Flex Container', importName: 'FlexContainer' },
  { name: 'Flex Row', importName: 'FlexRow' },
  { name: 'Footer Standard', importName: 'FooterStandard' },
  { name: 'Footer Wrapper', importName: 'FooterWrapper' },
  { name: 'H 1', importName: 'H1' },
  { name: 'H 2', importName: 'H2' },
  { name: 'H 3', importName: 'H3' },
  { name: 'H 4', importName: 'H4' },
  { name: 'H 5', importName: 'H5' },
  { name: 'H 6', importName: 'H6' },
  { name: 'Input', importName: 'Input' },
  { name: 'Input Block', importName: 'InputBlock' },
  { name: 'Ol', importName: 'Ol' },
  { name: 'P', importName: 'P' },
  { name: 'Radio', importName: 'Radio' },
  { name: 'Radio Block', importName: 'RadioBlock' },
  { name: 'Ul', importName: 'Ul' },
  { name: 'Base', importName: 'Base' },
  { name: 'Flex Grid', importName: 'FlexGrid' },
  { name: 'Headings', importName: 'Headings' },
  { name: 'Li', importName: 'Li' },
  { name: 'Lists', importName: 'Lists' },
  { name: 'Radios', importName: 'Radios' },
];

const PageContent = props => (
  <React.Fragment>
    <H1 styleSize="xlarge" id="all">
      All
    </H1>
  </React.Fragment>
);

export default function Code() {
  return <ComponentPage menuIds={allTemplateIds} PageContent={PageContent} />;
}

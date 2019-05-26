// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';

// @dynamicImports

// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import onChangeGenerator from '../../commons/onChangeGenerator';

// @pageContentComponent

export default function Code(props) {
  return (
    <ComponentPage
      title="Components"
      pageProps={props}
      PageContent={PageContent}
    />
  );
}

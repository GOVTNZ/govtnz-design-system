// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
// @dynamicImports

// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import BasicsPage from '../../components/basicsPage';
// import BaseCode from '../../components/baseCode'
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';

// @pageContentComponent

export default function Code(props) {
  return (
    <BasicsPage
      title={'{{id}}'}
      id={'{{id}}'}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}

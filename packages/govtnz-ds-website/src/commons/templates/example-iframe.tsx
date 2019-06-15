import React, { Fragment } from 'react';

// @dynamicImports

import IframePage from '../../components/IframePage';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import onChangeGenerator from '../../commons/onChangeGenerator';
const Example = ({ children }) => <Fragment>{children}</Fragment>;

// @pageContentComponent

const template = props => {
  return (
    <IframePage
      title={'{{title}}'}
      id={'{{id}}'}
      parentUrl={'{{parentUrl}}'}
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;

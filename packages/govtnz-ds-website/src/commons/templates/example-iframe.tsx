import React, { Fragment } from 'react';

// @dynamicImports

import IframePage from '../../components/IframePage';
import onChangeGenerator from '../../commons/onChangeGenerator';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => <Fragment>{children}</Fragment>;
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

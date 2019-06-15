// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';

import FieldsetBlock from '@govtnz/ds/build/react-ts/FieldsetBlock.tsx';
import '@govtnz/ds/build/css/FieldsetBlock.css';

import IframePage from '../../components/IframePage';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import onChangeGenerator from '../../commons/onChangeGenerator';
const Example = ({ children }) => <Fragment>{children}</Fragment>;

const PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <FieldsetBlock {...onChangeGenerator(FieldsetBlock)} />
    </Example>);

const template = props => {
  return (
    <IframePage
      title={"Example of Fieldset"}
      id={"iframe_componentsFieldset0"}
      parentUrl={"../Fieldset"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;
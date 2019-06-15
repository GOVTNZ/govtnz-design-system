// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';

import FileUpload from '@govtnz/ds/build/react-ts/FileUpload.tsx';
import '@govtnz/ds/build/css/FileUpload.css';
import FileUploadWithErrorMessage from '@govtnz/ds/build/react-ts/FileUploadWithErrorMessage.tsx';
import '@govtnz/ds/build/css/FileUploadWithErrorMessage.css';

import IframePage from '../../components/IframePage';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import onChangeGenerator from '../../commons/onChangeGenerator';
const Example = ({ children }) => <Fragment>{children}</Fragment>;

const PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <FileUpload {...onChangeGenerator(FileUpload)} />
        <FileUploadWithErrorMessage {...onChangeGenerator(FileUploadWithErrorMessage)} />
    </Example>);

const template = props => {
  return (
    <IframePage
      title={"Example of File Upload"}
      id={"iframe_componentsFileUpload0"}
      parentUrl={"../FileUpload"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;
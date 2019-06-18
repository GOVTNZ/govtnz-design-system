// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';

import FieldsetBlockWithError from '@govtnz/ds/build/react-ts/FieldsetBlockWithError.tsx';
import '@govtnz/ds/build/css/FieldsetBlockWithError.css';
import H1 from '@govtnz/ds/build/react-ts/H1.tsx';
import '@govtnz/ds/build/css/H1.css';
import Radios from '@govtnz/ds/build/react-ts/Radios.tsx';
import '@govtnz/ds/build/css/Radios.css';
import RadioBlock from '@govtnz/ds/build/react-ts/RadioBlock.tsx';
import '@govtnz/ds/build/css/RadioBlock.css';

import IframePage from '../../components/IframePage';
import onChangeGenerator from '../../commons/onChangeGenerator';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => <Fragment>{children}</Fragment>;
const Example = ({ children }) => <Fragment>{children}</Fragment>;

const PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <FieldsetBlockWithError {...onChangeGenerator(FieldsetBlockWithError)} legend={<H1 {...onChangeGenerator(H1)} styleSize="large" id="nameChangeId8">Have you changed your name?</H1>} hint={<p>This includes changing your last name or spelling your name differently.</p>} hintId="hintId5344" errorId="errorId525" error="Select 'yes' if you have changed your name.">
            <Radios {...onChangeGenerator(Radios)} inline>
                <RadioBlock {...onChangeGenerator(RadioBlock)} label="Yes" radioId="anyRadioId9" 
                value="true" name="nameChange5" labelId="labelId9" />
                <RadioBlock {...onChangeGenerator(RadioBlock)} label="No" radioId="anyRadioId10234" value="false" name="nameChange5" labelId="labelId10" />
            </Radios>
        </FieldsetBlockWithError>
    </Example>);

const template = props => {
  return (
    <IframePage
      title={"Error (Radios example)"}
      id={"iframe_componentsRadios6"}
      parentUrl={"../Radios"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;

// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';

import FieldsetBlock from '@govtnz/ds/build/react-ts/FieldsetBlock.tsx';
import '@govtnz/ds/build/css/FieldsetBlock.css';
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

const PageContent = props => (
  <Example {...onChangeGenerator(Example)} title="My radios title">
    <FieldsetBlock
      {...onChangeGenerator(FieldsetBlock)}
      legend={
        <H1 {...onChangeGenerator(H1)} styleSize="large" id="nameChangeId1">
          Have you changed your name?
        </H1>
      }
      hint={
        <p>
          This includes changing your last name or spelling your name
          differently.
        </p>
      }
      hintId="hintId1"
    >
      <Radios {...onChangeGenerator(Radios)} inline>
        <RadioBlock
          {...onChangeGenerator(RadioBlock)}
          label="Yes"
          radioId="anyRadioId"
          value="true"
          name="nameChange1"
          labelId="labelId1"
          hintId="hintId1"
        />
        <RadioBlock
          {...onChangeGenerator(RadioBlock)}
          label="No"
          radioId="anyRadioId255"
          value="false"
          name="nameChange1"
          labelId="labelId255"
          hintId="hintId1"
        />
      </Radios>
    </FieldsetBlock>
  </Example>
);

const template = props => {
  return (
    <IframePage
      title={'My radios title'}
      id={'iframe_componentsRadios0'}
      parentUrl={'../Radios'}
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;

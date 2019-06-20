// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import FieldsetBlock from '@govtnz/ds/build/react-ts/FieldsetBlock.tsx';import H1 from '@govtnz/ds/build/react-ts/H1.tsx';import Radios from '@govtnz/ds/build/react-ts/Radios.tsx';import RadioBlock from '@govtnz/ds/build/react-ts/RadioBlock.tsx';
const onChangeGenerator = comp => ({});
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => (
  <div className="example__section">{children}</div>
);
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <FieldsetBlock {...onChangeGenerator(FieldsetBlock)} legend={<H1 {...onChangeGenerator(H1)} styleSize="large" id="nameChangeId6">Have you changed your name?</H1>} hint={<p>This includes changing your last name or spelling your name differently.</p>} hintId="hintId2221">
            <Radios {...onChangeGenerator(Radios)} inline>
                <RadioBlock {...onChangeGenerator(RadioBlock)} label="Yes" radioId="anyRadioId55" 
                value="true" name="nameChange1" labelId="labelId1" hintId="hintId2221" />
                <RadioBlock {...onChangeGenerator(RadioBlock)} label="No" radioId="anyRadioId2551" value="false" name="nameChange1" labelId="labelId2" hintId="hintId2221" />
            </Radios>
        </FieldsetBlock>
    </Example>);

    document.addEventListener('DOMContentLoaded', () => {
      const selector = '#root';
      const root = document.querySelector(selector);
      if (!root) {
        console.error("Couldn't find app mount point ", selector);
        return;
      }
      ReactDOM.hydrate(<PageContent />, root, window.afterRender);
    });
    
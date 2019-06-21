// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

import FieldsetBlockWithError from '@govtnz/ds/build/react-ts/FieldsetBlockWithError.tsx';import H1 from '@govtnz/ds/build/react-ts/H1.tsx';import Radios from '@govtnz/ds/build/react-ts/Radios.tsx';import RadioBlock from '@govtnz/ds/build/react-ts/RadioBlock.tsx';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => (
  <div className="example__section">{children}</div>
);
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example {...onChangeGenerator()}>
        <FieldsetBlockWithError {...onChangeGenerator()} legend={<H1 {...onChangeGenerator()} styleSize="large" id="nameChangeId5">Have you changed your name?</H1>} hint={<p>This includes changing your last name or spelling your name differently.</p>} hintId="hintId5" errorId="errorId5" error="Select 'yes' if you have changed your name.">
            <Radios {...onChangeGenerator()} inline>
                <RadioBlock {...onChangeGenerator()} label="Yes" radioId="anyRadioId9234" 
                value="true" name="nameChange5" labelId="labelId9" hintId="hintId5" />
                <RadioBlock {...onChangeGenerator()} label="No" radioId="anyRadioId10" value="false" name="nameChange5" hintId="hintId5" labelId="labelId10" />
            </Radios>
        </FieldsetBlockWithError>
    </Example>);

    const onChangeGenerator = () => {
      // See onChangeGenerator insertion docs.
      // We can't know if a component takes props
      // of 'value' and 'onChange' so we insert some
      // and if they're not used that's ok.
      // The reason why we have 3 is because that's the
      // most number of inputs in a DS components, and it's 
      // simpler to just make 3.

      const [value, setValue] = useState();
      const [value2, setValue2] = useState();
      const [value3, setValue3] = useState();
    
      return {
        value,
        value2,
        value3,
        onChange: e => setValue(e.target.value),
        onChange2: e => setValue2(e.target.value),
        onChange3: e => setValue3(e.target.value),
      };
    };
  
    document.addEventListener('DOMContentLoaded', () => {
      const selector = '#root';
      const root = document.querySelector(selector);
      if (!root) {
        console.error("Couldn't find app mount point ", selector);
        return;
      }
      ReactDOM.hydrate(<PageContent />, root, window.afterRender);
    });
    
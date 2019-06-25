// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

import P from '@govtnz/ds/build/react-ts/P.tsx';import Ul from '@govtnz/ds/build/react-ts/Ul.tsx';import Li from '@govtnz/ds/build/react-ts/Li.tsx';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => (
  <div className="example__section">{children}</div>
);
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example title="Example: Bulleted lists (Typography)" {...onChangeGenerator({})}>
        <P styleSize="medium" {...onChangeGenerator({})}>To help keep the kitchen clean, please:</P>
        <Ul bulleted {...onChangeGenerator({})}>
            <Li {...onChangeGenerator({})}>replace tea and coffee jars on shelf</Li>
            <Li {...onChangeGenerator({})}>wipe down bench</Li>
            <Li {...onChangeGenerator({})}>wash dishes by: <Ul bulleted {...onChangeGenerator({})}>
                    <Li {...onChangeGenerator({})}>loading the dishwasher, if it's empty</Li>
                    <Li {...onChangeGenerator({})}>rinsing and stacking, if dishwasher is going</Li>
                </Ul>
            </Li>
            <Li {...onChangeGenerator({})}>put recycling in labelled bins</Li>
        </Ul>
    </Example>);

      const onChangeGenerator = (props) => {
        // See onChangeGenerator insertion docs.
        // We can't know if a component takes props
        // of 'value' and 'onChange' so we insert some
        // and if they're not used that's ok.
        // The reason why we have 3 is because that's the
        // most number of inputs in a DS components, and it's 
        // simpler to just make 3.
  
        const [value, setValue] = useState(props && props.value);
        const [value2, setValue2] = useState(props && props.value2);
        const [value3, setValue3] = useState(props && props.value3);
      
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
      
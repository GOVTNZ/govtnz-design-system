// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

import Ul from '@govtnz/ds/build/react-ts/Ul.tsx';import Li from '@govtnz/ds/build/react-ts/Li.tsx';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => (
  <div className="example__section">{children}</div>
);
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example {...onChangeGenerator()}>
        <Ul {...onChangeGenerator()} bulleted>
            <Li {...onChangeGenerator()}>Unordered item one</Li>
            <Li {...onChangeGenerator()}>Unordered item two</Li>
            <Li {...onChangeGenerator()}>Unordered item three
                <Ul {...onChangeGenerator()} bulleted>
                    <Li {...onChangeGenerator()}>Ordered item one</Li>
                    <Li {...onChangeGenerator()}>Ordered item one</Li>
                </Ul>
            </Li>
            <Li {...onChangeGenerator()}>Unordered item four</Li>
        </Ul>
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
    
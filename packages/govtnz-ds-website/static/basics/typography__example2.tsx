// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import CaptionXl from '@govtnz/ds/build/react-ts/CaptionXl.tsx';import H1 from '@govtnz/ds/build/react-ts/H1.tsx';import CaptionL from '@govtnz/ds/build/react-ts/CaptionL.tsx';import H2 from '@govtnz/ds/build/react-ts/H2.tsx';import CaptionM from '@govtnz/ds/build/react-ts/CaptionM.tsx';import H3 from '@govtnz/ds/build/react-ts/H3.tsx';
const onChangeGenerator = comp => ({});
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => (
  <div className="example__section">{children}</div>
);
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <CaptionXl {...onChangeGenerator(CaptionXl)}>caption-xl</CaptionXl>
            <H1 {...onChangeGenerator(H1)} styleSize="xlarge">g-heading-xl</H1>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <CaptionL {...onChangeGenerator(CaptionL)}>caption-l</CaptionL>
            <H2 {...onChangeGenerator(H2)} styleSize="large">g-heading-l</H2>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <CaptionM {...onChangeGenerator(CaptionM)}>caption-m</CaptionM>
            <H3 {...onChangeGenerator(H3)} styleSize="medium">g-heading-m</H3>
        </ExampleSection>
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
    
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

// @dynamicImports

const onChangeGenerator = comp => ({});
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => <Fragment>{children}</Fragment>;
const Example = ({ children }) => <Fragment>{children}</Fragment>;

// @pageContentComponent

document.addEventListener('DOMContentLoaded', () => {
  const selector = '#root';
  const root = document.querySelector(selector);
  if (!root) {
    console.error("Couldn't find app mount point ", selector);
    return;
  }
  ReactDOM.render(<PageContent />, root);
});

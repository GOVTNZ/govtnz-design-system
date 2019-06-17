// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import H2 from '@govtnz/ds/build/react-ts/H2.tsx';
import '@govtnz/ds/build/css/H2.css';
import components__InsetText from '../../commons/examples/components__InsetText';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';

const PageContent = (props) => <React.Fragment><ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Example of Inset Text</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__InsetText[0]} iframeProps={{id:"iframe_componentsInsetText0", className: "example__iframe", id: "iframe_componentsInsetText0", src:"../InsetText__example0/", title:"Example of Inset Text", height: 258 }}></Example>
</ExampleContainer>

<H2 {...onChangeGenerator(H2)} styleSize="large" id="credit">Credit</H2>
<p>Guidance, original HTML and CSS derived from <a href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</a>.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"InsetText"}
      id={"InsetText"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}

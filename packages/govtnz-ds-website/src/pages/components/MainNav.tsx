// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import P from '@govtnz/ds/build/react-ts/P';
import '../../commons/styles/ds/themed-P.scss';
import H2 from '@govtnz/ds/build/react-ts/H2';
import '../../commons/styles/ds/themed-H2.scss';
import components__MainNav from '../../commons/examples/components__MainNav';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import '../../commons/styles/ds/themed-Button.scss';
import '../../commons/styles/ds/themed-CaptionL.scss';

const PageContent = (props) => <React.Fragment><P styleSize="large">This is the main navigation that should be included in your Header.</P>

<H2 styleSize="large" id="how-it-works">How it works</H2>
<p>...</p>
<h2 id="examples">Examples</h2>
<p>Interact with each example to see how it works.</p>
<ExampleContainer>
    <Example  code={components__MainNav[0]} iframeProps={{
        id:"iframe_componentsMainNav0",
        className: "example__iframe",
        src:"/components/MainNav__example0.html",
        title:"Example: MainNav in a Header",
        height: 108
      }}></Example>
</ExampleContainer>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"MainNav"}
      id={"MainNav"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}

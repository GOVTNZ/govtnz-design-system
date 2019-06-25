// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import H2 from '@govtnz/ds/build/react-ts/H2.tsx';
import '../../commons/styles/ds/themed-H2.scss';
import components__Select from '../../commons/examples/components__Select';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import '../../commons/styles/ds/themed-Button.scss';
import '../../commons/styles/ds/themed-CaptionL.scss';

const PageContent = (props) => <React.Fragment><p>The select component (sometimes called a dropdown list) allows users to choose a single item from a collapsible list of options.</p>
<H2 styleSize="large" id="example">Example</H2>
<p>Interact with this example to see how it works.</p>
<ExampleContainer>
    <Example  code={components__Select[0]} iframeProps={{
        id:"iframe_componentsSelect0",
        className: "example__iframe",
        src:"/components/Select__example0.html",
        title:"Example: Select",
        height: 149
      }}></Example>
</ExampleContainer>

<h2 id="when-to-use-it">When to use it</h2>
<p>Only use a select component if you have no other option, because research shows many users have difficulty choosing items from dropdown lists. Also, select components are implemented differently on various devices, and can be especially problematic on mobiles. <a href="https://www.youtube.com/watch?v=CUkMCQR4TpY">Watch a video about how some users struggle with select components</a>.</p>
<p>Consider using <Link to="/components/Radios/">radio buttons</Link> or <Link to="/components/Checkboxes/">checkboxes</Link> instead of a select dropdown.</p>
<h2 id="how-it-works">How it works</h2>
<p>The select component allows users to choose an option from a list, usually more than 6 and fewer than 15 options.</p>
<p>Before deciding to use a select component, do some research with users to find out if fewer options are feasible. If you can reduce the list to 6 items or fewer, use <Link to="/components/Radios/">radio buttons</Link> instead.</p>
<h2 id="credit">Credit</h2>
<p>Guidance, original HTML and CSS derived from <a href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</a>.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"Select"}
      id={"Select"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}

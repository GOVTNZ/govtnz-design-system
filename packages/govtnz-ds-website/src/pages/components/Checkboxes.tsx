// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import H2 from '@govtnz/ds/build/react-ts/H2.tsx';
import '../../commons/styles/ds/themed-H2.scss';
import Ul from '@govtnz/ds/build/react-ts/Ul.tsx';
import '../../commons/styles/ds/themed-Ul.scss';
import Li from '@govtnz/ds/build/react-ts/Li.tsx';
import '../../commons/styles/ds/themed-Li.scss';
import components__Checkboxes from '../../commons/examples/components__Checkboxes';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';

const PageContent = (props) => <React.Fragment><p>Checkboxes enable users to select one or more options from a visible list of options, and to toggle a single option on or off.</p>
<H2 {...onChangeGenerator(H2)} styleSize="large" id="examples">Examples</H2>
<p>Interact with each example to see how it works.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <Example {...onChangeGenerator(Example)} code={components__Checkboxes[0]} iframeProps={{
        id:"iframe_componentsCheckboxes0",
        className: "example__iframe",
        src:"/components/Checkboxes__example0.html",
        title:"Example 0",
        height: 50
      }}></Example>
</ExampleContainer>

<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Error</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Checkboxes[1]} iframeProps={{
        id:"iframe_componentsCheckboxes1",
        className: "example__iframe",
        src:"/components/Checkboxes__example1.html",
        title:"Error (Checkboxes example)",
        height: 50
      }}></Example>
</ExampleContainer>

<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Checkboxes with hints</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Checkboxes[2]} iframeProps={{
        id:"iframe_componentsCheckboxes2",
        className: "example__iframe",
        src:"/components/Checkboxes__example2.html",
        title:"Checkboxes with hints (Checkboxes example)",
        height: 50
      }}></Example>
</ExampleContainer>

<h2 id="when-to-use-it">When to use it</h2>
<p>Use the checkboxes component when you need to help users:</p>
<Ul {...onChangeGenerator(Ul)} bulleted>
<Li {...onChangeGenerator(Li)}>select one or more options from a list</Li>
<Li {...onChangeGenerator(Li)}>toggle a single option on or off.</Li>
</Ul>
<h2 id="when-not-to-use-it">When not to use it</h2>
<p>Do not use the checkboxes component if users can only choose one option from a selection. In this case, use <Link to="/components/Radios/">radio buttons</Link> instead.</p>
<h2 id="how-it-works">How it works</h2>
<p>Checkboxes are grouped together in a <code>&lt;fieldset&gt;</code> with a <code>&lt;legend&gt;</code> that describes them, as shown in the examples on this page. This is usually a question, like ‘Who are your providers?’.</p>
<p>If you are asking just one question per page, you can set the contents of the <code>&lt;legend&gt;</code> as the page heading. This is good practice because users of screen readers will only hear the contents once.</p>
<p>Always position each checkbox to the left of its label. This makes it easier to find, especially for users of screen magnifiers.</p>
<p>Unlike with radio buttons, users can select multiple checkboxes from a list. Do not assume that users will know how many checkboxes they can select based on only the visual difference between radio buttons and checkboxes.</p>
<p>If needed, add a hint to explain this, like ‘Select all that apply’.</p>
<p>Do not pre-select checkboxes as users are likely to:</p>
<Ul {...onChangeGenerator(Ul)} bulleted>
<Li {...onChangeGenerator(Li)}>not realise they’ve missed a question</Li>
<Li {...onChangeGenerator(Li)}>submit the wrong answer.</Li>
</Ul>
<p>Order checkbox labels alphabetically by default.</p>
<p>In some cases, pre-selected ordering can be helpful, such as listing options from the most to the least common. An example is ordering answers to the question ‘What is your nationality?’ based on population size.</p>
<p>Another example of pre-selected ordering is listing options chronologically. For example, you could order possible time periods for contact from earliest to latest, so users can select the periods that suit them best.</p>
<p>However, using pre-selected ordering could reinforce bias in your service, so use it with caution. If in doubt, order alphabetically.</p>
<h2 id="credit">Credit</h2>
<p>Guidance, original HTML and CSS derived from <a href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</a>.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"Checkboxes"}
      id={"Checkboxes"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}

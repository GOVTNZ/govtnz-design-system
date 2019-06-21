// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import H2 from '@govtnz/ds/build/react-ts/H2.tsx';
import '../../commons/styles/ds/themed-H2.scss';
import components__Lists from '../../commons/examples/components__Lists';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import '../../commons/styles/ds/themed-Button.scss';
import '../../commons/styles/ds/themed-CaptionL.scss';

const PageContent = (props) => <React.Fragment><p>For detailed documentation see <Link to="/components/Ul/">Unordered List</Link> and <Link to="/components/Ol/">Ordered List</Link> with <Link to="/components/Li/">List item</Link>s inside either. Here is an introductionary paragraph that succinctly describes what this componeent is, and is easy to scan for users looking to see if this page has the things on it they are looking for.</p>
<ExampleContainer {...onChangeGenerator()}>
    <ExampleHeading {...onChangeGenerator()}>Example of Lists</ExampleHeading>
    <Example {...onChangeGenerator()}  code={components__Lists[0]} iframeProps={{
        id:"iframe_componentsLists0",
        className: "example__iframe",
        src:"/components/Lists__example0.html",
        title:"Example of Lists",
        height: 280
      }}></Example>
</ExampleContainer>

<ExampleContainer {...onChangeGenerator()}>
    <ExampleHeading {...onChangeGenerator()}>Example of Lists</ExampleHeading>
    <Example {...onChangeGenerator()}  code={components__Lists[1]} iframeProps={{
        id:"iframe_componentsLists1",
        className: "example__iframe",
        src:"/components/Lists__example1.html",
        title:"Example of Lists",
        height: 280
      }}></Example>
</ExampleContainer>

<H2 {...onChangeGenerator()} styleSize="large" id="when-to-use-this-component">When to use this component</H2>
<p>Use the text input component when you need to let users enter text that’s no longer than a single line, such as their name or phone number.</p>
<h2 id="when-not-to-use-this-component">When not to use this component</h2>
<p>Do not use the text input component if you need to let users enter longer answers that might span multiple lines. In this case, you should use the <Link to="/components/Textarea/">textarea</Link> component.</p>
<h2 id="how-it-works">How it works</h2>
<p>Explanatory text about how to start using the component goes here and it is relatively brief but introuduces how it works I dunno this is not my area of expertise.</p>
<ExampleContainer {...onChangeGenerator()}>
    <ExampleHeading {...onChangeGenerator()}>Example of Lists a second time</ExampleHeading>
    <Example {...onChangeGenerator()}  code={components__Lists[2]} iframeProps={{
        id:"iframe_componentsLists2",
        className: "example__iframe",
        src:"/components/Lists__example2.html",
        title:"Example of Lists a second time",
        height: 270
      }}></Example>
</ExampleContainer>

<h3 id="label-text-inputs">Label text inputs</h3>
<p>All text inputs must have visible labels; placeholder text is not an acceptable replacement for a label as it vanishes when users start typing.</p>
<p>Labels should be aligned above the text input they refer to. They should be short, direct and written in sentence case. Do not use colons at the end of labels.</p>
<p>If you’re asking just one question per page as recommended, you can set the contents of the <code>&lt;label&gt;</code> as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.</p>
<p>Read more about why and how to set legends as headings.</p>
<h2 id="credit">Credit</h2>
<p>Guidance, original HTML and CSS derived from <a href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</a>.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"Lists"}
      id={"Lists"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}

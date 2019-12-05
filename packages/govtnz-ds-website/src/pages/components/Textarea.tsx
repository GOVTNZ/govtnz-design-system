// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import P from '@govtnz/ds/build/react-ts/P.tsx';
import '../../commons/styles/ds/themed-P.scss';
import H2 from '@govtnz/ds/build/react-ts/H2.tsx';
import '../../commons/styles/ds/themed-H2.scss';
import components__Textarea from '../../commons/examples/components__Textarea';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import '../../commons/styles/ds/themed-Button.scss';
import '../../commons/styles/ds/themed-CaptionL.scss';

const PageContent = (props) => <React.Fragment><P styleSize="large">
    The textarea component (also known as multiline input) is used for input fields longer than a single line.
</P>

<H2 styleSize="large" id="example">Example</H2>
<p>Interact with the example to see how it works.</p>
<ExampleContainer>
    <Example  code={components__Textarea[0]} iframeProps={{
        id:"iframe_componentsTextarea0",
        className: "example__iframe",
        src:"/components/Textarea__example0.html",
        title:"Example: Textarea",
        height: 265
      }}></Example>
</ExampleContainer>

<h2 id="when-to-use-this-component">When to use this component</h2>
<p>Use the textarea component when you need to let users enter an amount of text that’s longer than a single line.</p>
<h2 id="when-not-to-use-this-component">When not to use this component</h2>
<p>Users can find open-ended questions difficult to answer. It might be better to break up one complex open question into a series of simple ones.</p>
<h3 id="ask-a-simple-closed-question">Ask a simple closed question</h3>
<p>If you need to let users select a single answer from a list of options, use <Link to="./components/Radios/">radio buttons</Link>. For selecting one or more options, or to toggle a single option on or off, use <Link to="./components/Checkboxes/">checkboxes</Link>.</p>
<h3 id="ask-a-simple-open-question">Ask a simple open question</h3>
<p>If you need to let users enter shorter answers no longer than a single line, such as a phone number or name, use the <Link to="./components/Input/">text input</Link> component.</p>
<h2 id="how-it-works">How it works</h2>
<h3 id="label-textareas">Label textareas</h3>
<p>You must label textareas. Placeholder text is not a suitable substitute for a label, as it may disappear when users click inside the textarea.</p>
<p>Labels must be aligned above the textarea they refer to. They should be short, direct and written in sentence case. Do not use colons at the end of labels.</p>
<h2 id="use-appropriately-sized-textareas">Use appropriately-sized textareas</h2>
<p>Make the height of a textarea proportional to the amount of text you expect users to enter. You can set the height of a textarea by by specifying the <code>rows</code> attribute.</p>
<p>Allow users to resize the textarea by dragging the resize handle icon in the bottom-right corner of the textarea.</p>
<h2 id="do-not-disable-copy-and-paste">Do not disable copy and paste</h2>
<p>Users will often need to copy and paste information into a textarea, so do not stop them from doing this.</p>
<h2 id="limiting-the-number-of-characters">Limiting the number of characters</h2>
<p>If there’s a good reason to limit the number of characters users can enter, you can use the <Link to="./components/CharacterCount/">character count</Link> component.</p>
<h2 id="error-messages">Error messages</h2>
<p>Error messages should be styled like this:</p>
<ExampleContainer>
    <Example  code={components__Textarea[1]} iframeProps={{
        id:"iframe_componentsTextarea1",
        className: "example__iframe",
        src:"/components/Textarea__example1.html",
        title:"Example: Textarea error",
        height: 305
      }}></Example>
</ExampleContainer>

<p>Make sure error messages follow the guidance below, and that you have specific error messages for specific error states.</p>
<h3 id="if-the-input-is-empty">If the input is empty</h3>
<p>Say ‘Enter [whatever it is]’.</p>
<p>For example, ‘Enter summary’.</p>
<h3 id="if-the-input-is-too-long">If the input is too long</h3>
<p>Say ‘[whatever it is] must be [number] characters or fewer’.</p>
<p>For example, ‘Summary must be 400 characters or fewer’.</p>
<h3 id="if-the-input-is-too-short">If the input is too short</h3>
<p>Say ‘[whatever it is] must be [number] characters or more’.</p>
<p>For example, ‘Summary must be 10 characters or more’.</p>
<h3 id="if-the-input-is-too-long-or-too-short">If the input is too long or too short</h3>
<p>Say ‘[whatever it is] must be between [number] and [number] characters’.</p>
<p>For example, ‘Summary must be between 10 and 400 characters’.</p>
<h3 id="if-the-input-uses-characters-that-are-not-allowed-and-you-know-what-the-characters-are">If the input uses characters that are not allowed and you know what the characters are</h3>
<p>Say ‘[whatever it is] must not include [characters]’.</p>
<p>For example, ‘Summary must not include ē and $’.</p>
<h3 id="if-the-input-uses-characters-that-are-not-allowed-and-you-do-not-know-what-the-characters-are">If the input uses characters that are not allowed and you do not know what the characters are</h3>
<p>Say ‘[whatever it is] must only include [list of allowed characters]’.</p>
<p>For example, ‘Summary must only include letters a to z, hyphens, spaces and apostrophes.’</p>
<h2 id="credit">Credit</h2>
<p>Guidance, original HTML and CSS derived from <a href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</a>.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"Textarea"}
      id={"Textarea"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}

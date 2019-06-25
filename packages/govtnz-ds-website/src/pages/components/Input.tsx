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
import components__Input from '../../commons/examples/components__Input';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import '../../commons/styles/ds/themed-Button.scss';
import '../../commons/styles/ds/themed-CaptionL.scss';

const PageContent = (props) => <React.Fragment><P styleSize="large">Text inputs allow users to enter any combination of letters, numbers, or symbols to answer questions and provide data.</P>

<H2 styleSize="large" id="examples">Examples</H2>
<p>Interact with each example to see how it works.</p>
<ExampleContainer>
    <Example  code={components__Input[0]} iframeProps={{
        id:"iframe_componentsInput0",
        className: "example__iframe",
        src:"/components/Input__example0.html",
        title:"Example: Text input",
        height: 180
      }}></Example>
</ExampleContainer>

<ExampleContainer>
    <ExampleHeading>Error state</ExampleHeading>
    <Example  code={components__Input[1]} iframeProps={{
        id:"iframe_componentsInput1",
        className: "example__iframe",
        src:"/components/Input__example1.html",
        title:"Example: Error state #1 (Text input)",
        height: 220
      }}></Example>
</ExampleContainer>

<h2 id="when-to-use-it">When to use it</h2>
<p>Use the text input component for single line answers, such as a user’s name or phone number.</p>
<h2 id="when-not-to-use-it">When not to use it</h2>
<p>If you expect multiple line answers from users, do not use the text input component. Use the <code>textarea</code> component instead (currently under development).</p>
<h2 id="how-it-works">How it works</h2>
<p>Text input components need be clearly labelled, sized for the answer you require, and provided with any hints the user needs to complete them successfully.</p>
<h3 id="label-text-inputs">Label text inputs</h3>
<p>All text inputs must have visible labels. Placeholder text is not an acceptable replacement for a label because it vanishes when users start typing.</p>
<p>Labels should be aligned above the text input they refer to. They should be short, direct, and written in sentence case. Do not use colons at the end of labels.</p>
<p>If you’re asking just one question per page, you can put the <code>&lt;label&gt;</code> inside the page heading. This is good practice, as it means that users of screen readers will only hear the contents once.</p>
<h3 id="use-appropriately-sized-text-inputs">Use appropriately-sized text inputs</h3>
<p>Help users understand what they should enter by making each text input box the right size for the content it’s intended for.</p>
<p>By default, the width of text inputs in the design system is fluid and will fit the full width of the container they are placed into.</p>
<p>If you want to make the input smaller, you can either use a fixed-width input, or use the width override classes to create a smaller fluid-width input.</p>
<ExampleContainer>
    <ExampleHeading>Fixed-width text input</ExampleHeading>
    <Example  code={components__Input[2]} iframeProps={{
        id:"iframe_componentsInput2",
        className: "example__iframe",
        src:"/components/Input__example2.html",
        title:"Example: Fixed-width text input",
        height: 1060
      }}></Example>
</ExampleContainer>

<p>Use fixed-width inputs for content that has a specific, known length. For example, postcode inputs should be postcode-sized, and telephone number inputs should be telephone number-sized.</p>
<p>On fixed-width inputs, the width will remain fixed on all screens unless it is wider than the viewport, in which case it will shrink to fit.</p>
<ExampleContainer>
    <ExampleHeading>Hint text</ExampleHeading>
    <Example  code={components__Input[3]} iframeProps={{
        id:"iframe_componentsInput3",
        className: "example__iframe",
        src:"/components/Input__example3.html",
        title:"Example: Hint text (Text input)",
        height: 220
      }}></Example>
</ExampleContainer>

<p>Use hint text (also known as help text) for advice that’s relevant to the majority of users, like how their information will be used, or where to find it.</p>
<h3 id="use-the-autocomplete-attribute">Use the <code>autocomplete</code> attribute</h3>
<p>Use the <code>autocomplete</code> attribute on text inputs to help users complete forms more quickly. This lets you specify an input’s purpose so browsers can autofill the information on a user’s behalf if they’ve entered it previously.</p>
<p>For example, to enable autofill on a postcode field, set the <code>autocomplete</code> attribute to <code>postal-code</code>. If you are working in production and there is a relevant input purpose, you’ll need to use the <code>autocomplete</code> attribute to meet Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.</p>
<p>See how to do this in the following example.</p>
<ExampleContainer>
    <ExampleHeading white>Code</ExampleHeading>
    <Example codeOnly code={components__Input[4]} iframeProps={{
        id:"iframe_componentsInput4",
        className: "example__iframe",
        src:"/components/Input__example4.html",
        title:"Example 5",
        height: 220
      }}></Example>
</ExampleContainer>

<h3 id="do-not-disable-copy-and-paste">Do not disable copy and paste</h3>
<p>Users often need to copy and paste information into a text input, so do not stop them from doing this.</p>
<h3 id="how-and-when-to-spellcheck-a-users-input">How and when to spellcheck a user’s input</h3>
<p>Sometimes browsers will spellcheck the information a user puts into a text input. If a user enters something that is recognised as a spelling error, sighted users will see a red line under the word.</p>
<p>If you are asking users for information that&#39;s not appropriate to spellcheck, like a reference number, name, or email address, disable the spellcheck.</p>
<p>To disable spellcheck, set <code>spellcheck=&quot;false&quot;</code>.</p>
<ExampleContainer>
    <ExampleHeading white>Code</ExampleHeading>
    <Example codeOnly code={components__Input[5]} iframeProps={{
        id:"iframe_componentsInput5",
        className: "example__iframe",
        src:"/components/Input__example5.html",
        title:"Example 6",
        height: 220
      }}></Example>
</ExampleContainer>

<p>Browsers do not consistently spellcheck users’ input by default. If you are asking users a question for which spellcheck would be useful, set the <code>spellcheck</code> attribute to <code>true</code>.</p>
<h3 id="disabled-text-inputs">Disabled text inputs</h3>
<p>Disabled input elements cannot be clicked by users. You can use them to prevent users from interacting with a specific input until another action is completed.</p>
<p>However, disabled input elements can confuse users so they are best avoided, if possible.</p>
<h2 id="error-messages">Error messages</h2>
<p>Style error messages as shown in the following example.</p>
<ExampleContainer>
    <ExampleHeading>Error state</ExampleHeading>
    <Example  code={components__Input[6]} iframeProps={{
        id:"iframe_componentsInput6",
        className: "example__iframe",
        src:"/components/Input__example6.html",
        title:"Example: Error state #2 (Text input)",
        height: 260
      }}></Example>
</ExampleContainer>

<p>Make sure error messages follow the guidance below, and that you have specific error messages for specific error states.</p>
<h4 id="if-the-input-is-empty">If the input is empty</h4>
<p>Say ‘Enter [whatever it is]’. For example, ‘Enter your first name’.</p>
<h4 id="if-the-input-is-too-long">If the input is too long</h4>
<p>Say ‘[whatever it is] must be [number] characters or less’. For example, ‘Address line 1 must have 35 characters or less’.</p>
<h4 id="if-the-input-is-too-short-h4">If the input is too short [H4]</h4>
<p>Say ‘[whatever it is] must be [number] characters or more’. For example, ‘Full name must be 2 characters or more’.</p>
<h4 id="if-the-input-can-be-either-too-short-or-too-long-h4">If the input can be either too short or too long [H4]</h4>
<p>Say ‘[whatever it is] must be between [number] and [number] characters’. For example, ‘Last name must be between 2 and 35 characters’.</p>
<h4 id="if-the-input-accepts-non-allowed-characters-that-you-can-predict">If the input accepts non-allowed characters that you can predict</h4>
<p>Say ‘[whatever it is] must not include [characters]’. For example, ‘Town or city must not include è and $’.</p>
<h4 id="if-the-input-accepts-non-allowed-characters-that-you-cannot-predict">If the input accepts non-allowed characters that you cannot predict</h4>
<p>Say ‘[whatever it is] must only include [list of allowed characters]’. For example, ‘Full name must only include letters a to z, hyphens, spaces and apostrophes’.</p>
<h4 id="if-the-input-must-be-a-number">If the input must be a number</h4>
<p>Say ‘[whatever it is] must be a number [optional example]’. For example, ‘Hours worked a week must be a number, like 30’.</p>
<h4 id="if-the-input-must-be-a-whole-number">If the input must be a whole number</h4>
<p>Say ‘[whatever it is] must be a whole number [optional example]’. For example, ‘Hours worked a week must be a whole number, like 30’.</p>
<h4 id="if-the-number-is-too-low">If the number is too low</h4>
<p>Say ‘[whatever it is] must be [lowest] or more’. For example, ‘Hours worked a week must be 16 or more’.</p>
<h4 id="if-the-number-is-too-high">If the number is too high</h4>
<p>Say ‘[whatever it is] must be [highest] or less’. For example, ‘Hours worked a week must be 99 or less’.</p>
<h4 id="if-the-input-must-be-between-2-numbers">If the input must be between 2 numbers</h4>
<p>Say ‘[whatever it is] must be between [lowest] and [highest]’. For example, ‘Hours worked a week must be between 16 and 99’.</p>
<h4 id="if-the-input-could-be-other-than-an-amount-of-money-and-allows-decimals">If the input could be other than an amount of money and allows decimals</h4>
<p>Say ‘[whatever it is] must be an amount of money [optional example that includes decimals and non-decimals]’. For example, ‘How much you earn an hour must be an amount of money, like 7.50 or 8’.</p>
<h4 id="if-the-input-could-be-other-than-an-amount-of-money-and-needs-decimals">If the input could be other than an amount of money and needs decimals</h4>
<p>Say ‘[whatever it is] must be an amount of money [optional example that includes decimals]’. For example, ‘How much you earn an hour must be an amount of money, like 7.50 or 8.00’.</p>
<h4 id="if-the-input-is-an-amount-of-money-that-needs-decimals">If the input is an amount of money that needs decimals</h4>
<p>Say ‘[whatever it is] must include cents, like 123.45 or 156.00’. For example, ‘How much you earn a week must include cents, like 123.45 or 156.00’.</p>
<h4 id="if-the-input-is-an-amount-of-money-that-must-not-have-decimals">If the input is an amount of money that must not have decimals</h4>
<p>Say ‘[whatever it is] must not include cents, like 123 or 156’. For example, ‘How much you earn a week must not include cents, like 123 or 156’.</p>
<h2 id="credit">Credit</h2>
<p>Guidance, original HTML and CSS derived from <a href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</a>.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"Input"}
      id={"Input"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}

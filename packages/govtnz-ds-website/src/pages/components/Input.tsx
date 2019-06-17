// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import P from '@govtnz/ds/build/react-ts/P.tsx';
import '@govtnz/ds/build/css/P.css';
import H2 from '@govtnz/ds/build/react-ts/H2.tsx';
import '@govtnz/ds/build/css/H2.css';
import InputBlock from '@govtnz/ds/build/react-ts/InputBlock.tsx';
import '@govtnz/ds/build/css/InputBlock.css';
import components__Input from '../../commons/examples/components__Input';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';

const PageContent = (props) => <React.Fragment><P styleSize="large">Text inputs allow users to enter any combination of letters, numbers, or symbols to answer questions and provide data.</P>

<H2 {...onChangeGenerator(H2)} styleSize="large" id="examples">Examples</H2>
<p>Interact with each example to see how it works.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <Example {...onChangeGenerator(Example)} code={components__Input[0]} >
        <InputBlock {...onChangeGenerator(InputBlock)} type="Text" label="Event name" hint="Provide an event name" name="anyName" inputId="anyId" hintId="anyHintId" />
    </Example>
</ExampleContainer>

<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Error state</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Input[1]} >
        <InputBlock {...onChangeGenerator(InputBlock)} type="Text" label="Event name" hint="Provide an event name" name="anyName" inputId="anyId2f" hintId="anyHintId2" errorId="anyErrorId2Error" hasError error="Enter a known event name" />
    </Example>
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
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Fixed-width text input</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Input[2]} >
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <InputBlock {...onChangeGenerator(InputBlock)} width="30" label="30 character width" hint="Fits a short sentence answer or a long address line." name="anyNameWidth30" inputId="anyId3" hintId="anyHintId3" />
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <InputBlock {...onChangeGenerator(InputBlock)} type="Email" width="20" label="20 character width" hint="Fits an email address." name="anyNameWidth20" inputId="anyId4" hintId="anyHintId4" />
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <InputBlock {...onChangeGenerator(InputBlock)} width="10" label="10 character width" hint="Fits a name." name="anyNameWidth10" inputId="anyId5" hintId="anyHintId5" />
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <InputBlock {...onChangeGenerator(InputBlock)} width="5" label="5 character width" hint="Fits a post code." name="anyNameWidth5" inputId="anyId6" hintId="anyHintId6" />
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <InputBlock {...onChangeGenerator(InputBlock)} width="4" label="4 character width" hint="Fits a 4-digit group of a credit card number." name="anyNameWidth4" inputId="anyId7" hintId="anyHintId7"  />
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <InputBlock {...onChangeGenerator(InputBlock)} width="3" label="3 character width" hint="Fits a prefix for a mobile number." name="anyNameWidth3" inputId="anyId8" hintId="anyHintId8" />
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <InputBlock {...onChangeGenerator(InputBlock)} width="2" label="2 character width" hint="Fits the 2-digit part of a bank account number." name="anyNameWidth2" inputId="anyId9" hintId="anyHintId9" />
        </ExampleSection>
    </Example>
</ExampleContainer>

<p>Use fixed-width inputs for content that has a specific, known length. For example, postcode inputs should be postcode-sized, and telephone number inputs should be telephone number-sized.</p>
<p>On fixed-width inputs, the width will remain fixed on all screens unless it is wider than the viewport, in which case it will shrink to fit.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Hint text</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Input[3]} >
        <InputBlock {...onChangeGenerator(InputBlock)} type="Email" label="Email address" hint="Provide a email address" name="anyName" inputId="anyId10" hintId="anyHintId10" />
    </Example>
</ExampleContainer>

<p>Use hint text (also known as help text) for advice that’s relevant to the majority of users, like how their information will be used, or where to find it.</p>
<h3 id="use-the-autocomplete-attribute">Use the <code>autocomplete</code> attribute</h3>
<p>Use the <code>autocomplete</code> attribute on text inputs to help users complete forms more quickly. This lets you specify an input’s purpose so browsers can autofill the information on a user’s behalf if they’ve entered it previously.</p>
<p>For example, to enable autofill on a postcode field, set the <code>autocomplete</code> attribute to <code>postal-code</code>. If you are working in production and there is a relevant input purpose, you’ll need to use the <code>autocomplete</code> attribute to meet Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.</p>
<p>See how to do this in the following example.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)} white>Code</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Input[4]} codeOnly>
        <InputBlock {...onChangeGenerator(InputBlock)} label="Your postal code" hint="Your postal code will be a four digit number." name="postalCode" inputId="postalId" hintId="postalHintId" autoComplete="Postal Code" />
    </Example>
</ExampleContainer>

<h3 id="do-not-disable-copy-and-paste">Do not disable copy and paste</h3>
<p>Users often need to copy and paste information into a text input, so do not stop them from doing this.</p>
<h3 id="how-and-when-to-spellcheck-a-users-input">How and when to spellcheck a user’s input</h3>
<p>Sometimes browsers will spellcheck the information a user puts into a text input. If a user enters something that is recognised as a spelling error, sighted users will see a red line under the word.</p>
<p>If you are asking users for information that&#39;s not appropriate to spellcheck, like a reference number, name, or email address, disable the spellcheck.</p>
<p>To disable spellcheck, set <code>spellcheck=&quot;false&quot;</code>.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)} white>Code</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Input[5]} codeOnly>
        <InputBlock {...onChangeGenerator(InputBlock)} type="Email" label="Your email address" hint="Please provide your personal email address that we'll contact you on." name="someEmail" inputId="anyId122" hintId="anyHintId122" spellCheck="false" />
    </Example>
</ExampleContainer>

<p>Browsers do not consistently spellcheck users’ input by default. If you are asking users a question for which spellcheck would be useful, set the <code>spellcheck</code> attribute to <code>true</code>.</p>
<h3 id="disabled-text-inputs">Disabled text inputs</h3>
<p>Disabled input elements cannot be clicked by users. You can use them to prevent users from interacting with a specific input until another action is completed.</p>
<p>However, disabled input elements can confuse users so they are best avoided, if possible.</p>
<h2 id="error-messages">Error messages</h2>
<p>Style error messages as shown in the following example.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Error state</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Input[6]} >
        <InputBlock {...onChangeGenerator(InputBlock)} type="Text" label="Event name" hint="Provide an event name" name="anyName" inputId="anyId2f" hintId="anyHintId2" errorId="anyErrorId2Error" hasError error="Enter a known event name" />
    </Example>
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

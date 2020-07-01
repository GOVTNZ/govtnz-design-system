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
import Ul from '@govtnz/ds/build/react-ts/Ul';
import '../../commons/styles/ds/themed-Ul.scss';
import Li from '@govtnz/ds/build/react-ts/Li';
import '../../commons/styles/ds/themed-Li.scss';
import A from '@govtnz/ds/build/react-ts/A';
import '../../commons/styles/ds/themed-A.scss';
import components__Radios from '../../commons/examples/components__Radios';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import MainNavMobileMenuContext from '../../commons/MainNavMobileMenuContext';
import '../../commons/styles/ds/themed-Button.scss';
import '../../commons/styles/ds/themed-CaptionL.scss';

const PageContent = (props) => <React.Fragment><P styleSize="large">Radio buttons present users a choice of options from which they can select only one.</P>

<H2 styleSize="large" id="examples">Examples</H2>
<P>Interact with each example to see how it works.</P>
<ExampleContainer>
    <Example  code={components__Radios[0]} iframeProps={{
        id:"iframe_componentsRadios0",
        className: "example__iframe",
        src:"/components/Radios__example0.html",
        title:"Example: Radio buttons",
        height: 230
      }}></Example>
</ExampleContainer>

<h2 id="when-to-use-it">When to use it</h2>
<P>Use the radio buttons component when users can only select one option from a list.</P>
<h2 id="when-not-to-use-it">When not to use it</h2>
<P>Do not use the radio buttons component if users might need to select more than one option. Use the checkboxes component instead.</P>
<h2 id="how-it-works">How it works</h2>
<P>Radio buttons are grouped together in a <code>&lt;fieldset&gt;</code> with a <code>&lt;legend&gt;</code> that describes them, as shown in the examples on this page. This is usually a question, like ‘Where do you live?’.</P>
<P>If you are asking just one question per page, you can set the contents of the <code>&lt;legend&gt;</code> as the page heading.</P>
<P>Always position radio buttons to the left of their labels. This makes them easier to find, especially for users of screen magnifiers.</P>
<P>Unlike with checkboxes, users can only select one option from a list of radio buttons. Do not assume that users will know how many options they can select based on the visual difference between radio buttons and checkboxes alone. If needed, add a hint explaining this, like ‘Select one option’.</P>
<P>Do not pre-select radio button options. Pre-selecting radio button options makes it more likely that users will:</P>
<Ul>
<Li>not realise they’ve missed a question</Li>
<Li>submit the wrong answer.</Li>
</Ul>
<P>Be aware that, once users have selected one option, they have to refresh their browser window to go back to having no option selected. To avoid this, include ‘None of the above’ or ‘I do not know’, if they are valid options.</P>
<P>Order radio button options alphabetically by default.</P>
<P>In some cases, it can be helpful to order them from most to least common. For example, you could order options for ‘Where do you live?’ based on population size.</P>
<P>Another example of pre-selected ordering is listing options chronologically. For example, you could order available appointment times in a day from earliest to latest.</P>
<P>However, using pre-selected ordering could reinforce bias in your service, so use it with caution. If in doubt, order alphabetically.</P>
<ExampleContainer>
    <ExampleHeading>Stacked radio buttons</ExampleHeading>
    <Example  code={components__Radios[1]} iframeProps={{
        id:"iframe_componentsRadios1",
        className: "example__iframe",
        src:"/components/Radios__example1.html",
        title:"Example: Stacked radio buttons",
        height: 316
      }}></Example>
</ExampleContainer>

<P>When there are more than 2 options, radio buttons should be stacked.</P>
<ExampleContainer>
    <ExampleHeading>Inline radio buttons</ExampleHeading>
    <Example  code={components__Radios[2]} iframeProps={{
        id:"iframe_componentsRadios2",
        className: "example__iframe",
        src:"/components/Radios__example2.html",
        title:"Example: Inline radio buttons",
        height: 230
      }}></Example>
</ExampleContainer>

<P>If there are only 2 options, you can either stack the radio buttons or display them inline.</P>
<ExampleContainer>
    <ExampleHeading>Radio button items with hints</ExampleHeading>
    <Example  code={components__Radios[3]} iframeProps={{
        id:"iframe_componentsRadios3",
        className: "example__iframe",
        src:"/components/Radios__example3.html",
        title:"Example: Radio button items with hints",
        height: 396
      }}></Example>
</ExampleContainer>

<P>You can add hints to radio button items to provide more information about the options.</P>
<ExampleContainer>
    <ExampleHeading>Radio button items with a text divider</ExampleHeading>
    <Example  code={components__Radios[4]} iframeProps={{
        id:"iframe_componentsRadios4",
        className: "example__iframe",
        src:"/components/Radios__example4.html",
        title:"Example: Radio button items with a text divider",
        height: 452
      }}></Example>
</ExampleContainer>

<P>If one or more of your radio button options is different from the others, it can help users if you separate them using a text divider. The text is usually the word ‘or’.</P>
<h2 id="large-radio-buttons">Large radio buttons</h2>
<P>The default radio button size should be used in nearly all cases. However, larger versions work well on pages where it’s helpful to make them more visually prominent.</P>
<P>For example if you are asking users a single question on a page, larger buttons are easier to see and interact with.</P>
<ExampleContainer>
    <ExampleHeading>Large radio buttons</ExampleHeading>
    <Example  code={components__Radios[5]} iframeProps={{
        id:"iframe_componentsRadios5",
        className: "example__iframe",
        src:"/components/Radios__example5.html",
        title:"Example: Radio buttons",
        height: 336
      }}></Example>
</ExampleContainer>

<h2 id="error-messages">Error messages</h2>
<P>Make sure error messages follow the guidance below, and that you have specific error messages for specific error states.</P>
<ExampleContainer>
    <ExampleHeading>Default radio buttons with error</ExampleHeading>
    <Example  code={components__Radios[6]} iframeProps={{
        id:"iframe_componentsRadios6",
        className: "example__iframe",
        src:"/components/Radios__example6.html",
        title:"Example: Error state #2 (Radio buttons)",
        height: 270
      }}></Example>
</ExampleContainer>

<ExampleContainer>
    <ExampleHeading>Large radio buttons with error</ExampleHeading>
    <Example  code={components__Radios[7]} iframeProps={{
        id:"iframe_componentsRadios7",
        className: "example__iframe",
        src:"/components/Radios__example7.html",
        title:"Example: Error state #1 (Radio buttons)",
        height: 376
      }}></Example>
</ExampleContainer>

<h4 id="if-nothing-is-selected-and-the-options-are-yes-or-no">If nothing is selected and the options are ‘yes’ or ‘no’</h4>
<P>Say ‘Select ‘yes’ if [whatever it is] is true’. For example, ‘Select ‘yes’ if Sarah normally lives with you’.</P>
<h4 id="if-nothing-is-selected-and-the-question-includes-options">If nothing is selected and the question includes options</h4>
<P>Say ‘Select if [whatever it is]’. For example, ‘Select if you are employed or self-employed’.</P>
<h4 id="if-nothing-is-selected-and-the-question-does-not-include-options-h4">If nothing is selected and the question does not include options [H4]</h4>
<P>Say ‘Select [whatever it is]’. For example, ‘Select the day of the week you pay your rent’.</P>
<h2 id="credit">Credit</h2>
<P>Guidance, original HTML and CSS derived from <A className="g-link"  href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</A>.</P>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"Radios"}
      id={"Radios"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}

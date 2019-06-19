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
import Ul from '@govtnz/ds/build/react-ts/Ul.tsx';
import '../../commons/styles/ds/themed-Ul.scss';
import Li from '@govtnz/ds/build/react-ts/Li.tsx';
import '../../commons/styles/ds/themed-Li.scss';
import components__Button from '../../commons/examples/components__Button';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';

const PageContent = (props) => <React.Fragment><P styleSize="large">
    Buttons make important actions stand out within a task flow, and help users
    to take those actions easily. Use colour and text in buttons to inform users
    about what will happen when they touch or click a button.
</P>

<H2 {...onChangeGenerator(H2)} styleSize="large" id="when-to-use-it">When to use it</H2>
<p>Use buttons to help users carry out key actions in a task flow, like starting
an application or saving their information.</p>
<p>If you are considering using an icon in a button, we suggest you use visible
text as well to ensure all users understand the button&#39;s function.</p>
<h2 id="how-it-works">How it works</h2>
<p>Keep button text short. Start with a verb that clearly describes the action
the button performs. Write button text in sentence case.</p>
<p>Some typical examples of button text are:</p>
<Ul {...onChangeGenerator(Ul)} bulleted>
<Li {...onChangeGenerator(Li)}>&#39;Start now&#39; at the start of the service</Li>
<Li {...onChangeGenerator(Li)}>&#39;Sign in&#39; to an account a user has already created</Li>
<Li {...onChangeGenerator(Li)}>&#39;Continue&#39; when the service does not save a user&#39;s information</Li>
<Li {...onChangeGenerator(Li)}>&#39;Save and continue&#39; when the service does save a user&#39;s information</Li>
<Li {...onChangeGenerator(Li)}>&#39;Save and return later&#39; when a user can save their information and come
back to it later</Li>
<Li {...onChangeGenerator(Li)}>&#39;Pay&#39; to make a payment</Li>
<Li {...onChangeGenerator(Li)}>&#39;Confirm and send&#39; on a check answers page that does not have any legal
content a user must agree to</Li>
<Li {...onChangeGenerator(Li)}>&#39;Accept and send&#39; on a check answers page that has legal content a user
must agree to</Li>
<Li {...onChangeGenerator(Li)}>&#39;Sign out&#39; when a user is leaving an account that they signed in to</Li>
<Li {...onChangeGenerator(Li)}>&#39;Add another [name of thing]&#39; to add another item to a list or group. Ensure
the button text describes clearly what this button will add, in case there are
other similar buttons on the same page or form.</Li>
</Ul>
<p>Consider if you need to include more words to clearly describe a button&#39;s
action. For example, &#39;Add another address&#39; or &#39;Accept and claim a tax refund&#39;.</p>
<h2 id="primary-buttons">Primary buttons</h2>
<p>Use a primary button for the main &#39;call to action&#39; on a page, such
as &#39;Save and send&#39;.</p>
<p>Avoid using several primary buttons on a single page. Having more than one
&#39;call to action&#39; reduces its impact, and makes it harder for users to know
what to do next.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Primary buttons</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Button[0]} iframeProps={{
        id:"iframe_componentsButton0",
        className: "example__iframe",
        src:"/components/Button__example0.html",
        title:"Primary buttons (Button example)",
        height: 50
      }}></Example>
</ExampleContainer>

<h2 id="secondary-buttons">Secondary buttons</h2>
<p>Use secondary buttons for alternative or intermediary actions on a page.
Pages with too many calls to action make it hard for users to know what to do
next. Before adding a secondary button, try to simplify the page or break the
content down into several pages.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Secondary buttons</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Button[1]} iframeProps={{
        id:"iframe_componentsButton1",
        className: "example__iframe",
        src:"/components/Button__example1.html",
        title:"Secondary buttons (Button example)",
        height: 50
      }}></Example>
</ExampleContainer>

<p>You can use secondary buttons in combination with a primary button, such as
offering &#39;Cancel&#39; or &#39;Save and return later&#39; options. Consider limiting
combinations to a maximum of two secondary buttons with a single primary
button, as more can confuse users.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Primary and secondary combination</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Button[2]} iframeProps={{
        id:"iframe_componentsButton2",
        className: "example__iframe",
        src:"/components/Button__example2.html",
        title:"Primary and secondary combination (Button example)",
        height: 50
      }}></Example>
</ExampleContainer>

<h2 id="warning-buttons">Warning buttons</h2>
<p>Warning buttons are designed to make users think carefully before they use
them. Warning buttons only work well if used very sparingly..</p>
<p>Only use warning buttons for actions with serious destructive consequences that
cannot be easily undone by a user, such as permanently deleting an account.</p>
<p>When letting users carry out an action like this, it&#39;s a good idea to include
an extra first step that asks users to confirm they want to do
the destructive action.</p>
<p>In this instance, use one warning button for the initial call to action, and
another warning button for the final confirmation.</p>
<p>Do not only rely solely on the red colour of a warning button to communicate
the serious nature of the action. Not all users will be able to see the colour
or may not understand what it signifies. Make sure the context and button text
make clear what will happen if the user selects it.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Warning buttons</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Button[3]} iframeProps={{
        id:"iframe_componentsButton3",
        className: "example__iframe",
        src:"/components/Button__example3.html",
        title:"Warning buttons (Button example)",
        height: 50
      }}></Example>
</ExampleContainer>

<h2 id="disabled-buttons">&#39;Disabled&#39; buttons</h2>
<p>&#39;Disabled&#39; buttons, which are often greyed out, have poor contrast and can
confuse some users, so avoid them if possible. &#39;Disabled&#39; buttons may also
impede keyboard accessibility.</p>
<p>Only use &#39;disabled&#39; buttons if your research shows it makes the user interface
easier to understand.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>'Disabled' buttons</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Button[4]} iframeProps={{
        id:"iframe_componentsButton4",
        className: "example__iframe",
        src:"/components/Button__example4.html",
        title:"'Disabled' buttons (Button example)",
        height: 50
      }}></Example>
</ExampleContainer>

<h2 id="stop-users-from-accidentally-sending-information-twice">Stop users from accidentally sending information twice</h2>
<p>You can prevent users from accidentally sending information more than once by
preventing multiple clicks from registering.</p>
<p>Sometimes, users will click buttons more than once because they:</p>
<Ul {...onChangeGenerator(Ul)} bulleted>
<Li {...onChangeGenerator(Li)}>have used operating systems where they have to rapidly click twice on items
to make them work</Li>
<Li {...onChangeGenerator(Li)}>are experiencing a slow connection, which means they are not given feedback
on their action quickly enough</Li>
<Li {...onChangeGenerator(Li)}>have motor impairments, such as hand tremors, that cause them to click
the button involuntarily.</Li>
</Ul>
<p>In some cases, multiple clicks can mean users&#39; information is sent more than
once. For example, a notify team found that a number of users were receiving
invitations twice, because the person sending them was clicking twice on
the &#39;Send&#39; button.</p>
<p>If you are working in production and your research shows that users are
frequently sending information twice, consider using features that configure
the button to ignore a rapid second click. If the cause is a slow connection,
give the user a &#39;loading spinner&#39; to show progress.</p>
<h2 id="credit">Credit</h2>
<p>Guidance, original HTML and CSS derived from&nbsp;
<a href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</a>.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"Button"}
      id={"Button"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}

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
import components__Date from '../../commons/examples/components__Date';
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
    The date input component consists of three grouped text fields that invite users to enter a day, a month, and a year.  This is the easiest way for users to enter dates they know well.
</P>

<H2 styleSize="large" id="examples">Examples</H2>
<p>Interact with each example to see how it works.</p>
<ExampleContainer>
    <Example  code={components__Date[0]} iframeProps={{
        id:"iframe_componentsDate0",
        className: "example__iframe",
        src:"/components/Date__example0.html",
        title:"Example: Date input",
        height: 330
      }}></Example>
</ExampleContainer>

<ExampleContainer>
    <ExampleHeading>Error</ExampleHeading>
    <Example  code={components__Date[1]} iframeProps={{
        id:"iframe_componentsDate1",
        className: "example__iframe",
        src:"/components/Date__example1.html",
        title:"Example: Error state #1 (Date input)",
        height: 370
      }}></Example>
</ExampleContainer>

<h2 id="when-to-use-it">When to use it</h2>
<p>Use the date input component when you&#39;re asking users for a date they&#39;ll already know, or one they can look up easily.</p>
<h2 id="when-not-to-use-it">When not to use it</h2>
<p>Do not use the date input component if users are unlikely to know the exact date of the event you&#39;re asking about.</p>
<h2 id="how-it-works">How it works</h2>
<p>The three fields in the date input component are grouped together in a <code>fieldset</code> with a <code>legend</code> that describes them, as shown in the examples on this page. The legend is usually a question, such as &#39;What is your date of birth?&#39;.</p>
<p>If you&#39;re asking one question per page, you can set the contents of the <code>legend</code> as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.</p>
<p>Never automatically move focus between the fields of the date input because this can confuse users and may clash with normal keyboard controls.</p>
<h2 id="use-the-autocomplete-attribute-for-a-date-of-birth">Use the autocomplete attribute for a date of birth</h2>
<p>Use the <code>autocomplete</code> attribute on the date input component when you&#39;re asking for a date of birth. This allows browsers to autofill the information on a user&#39;s behalf if they&#39;ve entered it previously.</p>
<p>To enable this functionality, set the <code>autocomplete</code> attribute on the fields to <code>bday-day</code>, <code>bday-month</code>, and <code>bday-year</code>. You&#39;ll need to do this to meet WCAG 2.1 Level AA.</p>
<ExampleContainer>
    <ExampleHeading white>Code</ExampleHeading>
    <Example codeOnly code={components__Date[2]} iframeProps={{
        id:"iframe_componentsDate2",
        className: "example__iframe",
        src:"/components/Date__example2.html",
        title:"Example: Error state #2 (Date input)",
        height: 280
      }}></Example>
</ExampleContainer>

<h2 id="error-messages">Error messages</h2>
<p>Style error messages as shown in the following example.</p>
<ExampleContainer>
    <ExampleHeading>Error</ExampleHeading>
    <Example  code={components__Date[3]} iframeProps={{
        id:"iframe_componentsDate3",
        className: "example__iframe",
        src:"/components/Date__example3.html",
        title:"Error (Date example)",
        height: 370
      }}></Example>
</ExampleContainer>

<p>Write a specific error message for every possible error state.</p>
<p>When setting up errors, check the entire date as a whole, rather than separately checking the day, month, and year.</p>
<p>Avoid assuming what is wrong with the date entered. For example, if a user enters &#39;31 2 2016&#39;, the day may be right and the month may be wrong. An error message that mentions February may be confusing if they meant to enter &#39;1&#39; in the month field.</p>
<h3 id="if-nothing-is-entered">If nothing is entered</h3>
<p>Say &#39;Enter [type of date]&#39;.</p>
<p>For example, &#39;Enter your date of birth&#39;.</p>
<h3 id="if-an-incomplete-date-is-entered-and-you-know-whats-missing">If an incomplete date is entered and you know what&#39;s missing</h3>
<p>Say &#39;[type of date] must include a [what is missing]&#39;.</p>
<p>For example, &#39;Date of birth must include a month&#39; or &#39;Date of birth must include a day and a month&#39;.</p>
<h3 id="if-an-incomplete-date-is-entered-and-you-dont-know-what-is-missing">If an incomplete date is entered and you don&#39;t know what is missing</h3>
<p>Say &#39;Enter [type of date], and include a day, a month, and a year&#39;.</p>
<p>For example, &#39;Enter your date of birth, and include a day, a month, and a year&#39;.</p>
<h3 id="if-the-date-entered-is-not-a-real-one">If the date entered is not a real one</h3>
<p>Say &#39;Enter a real [type of date]&#39;.</p>
<p>For example, &#39;Enter a real date of birth&#39;.</p>
<h3 id="if-the-date-is-in-the-future-when-it-needs-to-be-in-the-past">If the date is in the future when it needs to be in the past</h3>
<p>Say &#39;[type of date] must be in the past&#39;.</p>
<p>For example, &#39;Date of birth must be in the past&#39;.</p>
<h3 id="if-the-date-is-in-the-future-when-it-needs-to-be-today-or-in-the-past">If the date is in the future when it needs to be today or in the past</h3>
<p>Say &#39;[type of date] must be today or in the past&#39;.</p>
<p>For example, &#39;Date of birth must be today or in the past&#39;.</p>
<h3 id="if-the-date-is-in-the-past-when-it-needs-to-be-in-the-future">If the date is in the past when it needs to be in the future</h3>
<p>Say &#39;[type of date] must be in the future&#39;.</p>
<p>For example, &#39;The date your course ends must be in the future&#39;.</p>
<h3 id="if-the-date-is-in-the-past-when-it-needs-to-be-today-or-in-the-future">If the date is in the past when it needs to be today or in the future</h3>
<p>Say &#39;[type of date] must be today or in the future&#39;.</p>
<p>For example, &#39;The date your course ends must be today or in the future&#39;.</p>
<h3 id="if-the-date-must-be-the-same-as-or-after-another-date">If the date must be the same as or after another date</h3>
<p>Say &#39;[type of date] must be the same as or after
[date and optional description]&#39;.</p>
<p>For example, &#39;The date your course ends must be the same as or after 1
September 2017 when you started the course&#39;.</p>
<h3 id="if-the-date-must-be-after-another-date">If the date must be after another date</h3>
<p>Say &#39;[type of date] must be after [date and optional description]&#39;.</p>
<p>For example, &#39;The date your course ends must be after 1 September 2017&#39;.</p>
<h3 id="if-the-date-must-be-the-same-as-or-before-another-date">If the date must be the same as or before another date</h3>
<p>Say &#39;[type of date] must be the same as or before
[date and optional description]&#39;.</p>
<p>For example, &#39;The date of Gordon&#39;s last exam must be the same as or before 31
August 2017 when they left school&#39;.</p>
<h3 id="if-the-date-must-be-before-another-date">If the date must be before another date</h3>
<p>Say &#39;[type of date] must be before [date and optional description]&#39;.</p>
<p>For example, &#39;The date of Gordon&#39;s last exam must be the same as or before 31 August 2017&#39;.</p>
<h3 id="if-the-date-must-be-between-two-dates">If the date must be between two dates</h3>
<p>Say &#39;[type of date] must be between [date] and [date and optional description]&#39;.</p>
<p>For example, &#39;The date your contract started must be between 1 September 2017 and 30 September 2017 when you became self-employed&#39;.</p>
<h3 id="research-on-this-component">Research on this component</h3>
<p>If you&#39;ve used this component, get in touch to share your
user research findings.</p>
<p>More research is needed to determine the extent to which users struggle to enter months as numbers, and whether allowing them to enter months as text is helpful.</p>
<h2 id="credit">Credit</h2>
<p>Guidance, original HTML and CSS derived from <a href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</a>.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"Date"}
      id={"Date"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}

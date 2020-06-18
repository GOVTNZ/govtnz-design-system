<P styleSize="large">Page alerts attract users’ attention to important information or changes on a page.</P>

## When to use it

Use the page alerts component to inform users of:

- important information
- changes on a page
- successful or unsuccessful completion of a task.

They should be relevant and as minimally disruptive as possible.

## When not to use it

Page alerts should be used sparingly. If used too frequently, they can create a disruptive experience for users. Overuse may also lead to users becoming desensitised to the alerts and missing or ignoring important information.

The page alerts component should not be used for site or system-wide alerts. Its role is to notify users on important information or changes on a page, rather than site or system-wide changes.

Site and system-wide alerts will be developed as part of the banner component during the Design System’s beta phase.

## How it works

All alerts use a colour and icon that corresponds with their message intent. The alert type — information, warning, success, or error — is communicated to all users by:

- the visual appearance, including the icon and colour
- the first word of the alert's heading, for example, ‘Warning’.

Changing the word at the start of the alert heading, or removing it, could make the alert less understandable, and therefore less accessible, to some users. If the type or strength of the alert is not indicated in text or in some other way for assistive technology users, it will also fail the [NZ Government Web Accessibility Standard](https://www.digital.govt.nz/web-accessibility-standard/).

Success and error summary alert messages appear at the top of a page following a submit action. They should give users clear, descriptive next steps.

Information and warning alert messages can appear at the top of the page or in the body of the content. If used in the body, alert messages should appear next to the content they relate to.

### Static alerts

Static alerts are added as part of a new page or view after a [change of context](https://www.w3.org/TR/WCAG21/#dfn-change-of-context), such as following a link or submitting a form. These are considered static because they remain unchanged unless there is another change of context.

Information and warning alerts can be used in a wide range of scenarios. Success and error summary alerts are only ever used following a form submission, which is a change of context for the user. These alerts will always be static and part of a new page or view when it is loaded.

Additionally, when the new page or view is first loaded, the Design System user must ensure that focus is moved to the success or error summary alert. This will cause it to be announced automatically by screen reader software, letting the user know the status of their form submission and what, if anything, they need to do to continue.

The Design System user should also update the `title` element to start with "Success:" or "Error:" so that the feedback is provided in the page’s name.

### Live alerts

Live alerts are dynamically inserted into an existing page or view as an immediate response to a user’s action, such as checking a checkbox. They’re used where the change to the page’s content is not significant enough to constitute a change of context.

When implemented as a live alert, the alert container needs to be empty and present in the document object model (DOM) when the page or view is first loaded. The actual alert message is then dynamically inserted into the container following whatever user action triggers the alert.

To ensure that screen reader users are notified of a live alert, the alert container is marked up as a [live region](https://w3c.github.io/aria/#dfn-live-region). When content is dynamically inserted in a live region container, that content is automatically announced to the user by the screen reader.

Success and error summary alerts are not intended to be used as live alerts. Since they always follow form submission, which is a change of context, they are always static. However, if they are used as live alerts, they should be tested for accessibility. Also, as live alerts are already announced automatically to screen reader users, the alert should not receive focus.

## Information

Use information alerts to inform users of important information or changes on a page only. They should be used sparingly.

<ExampleContainer>
    <Example title="Example title: Warning alert - Static">
        <Alert level="info" headingId="heading1">
            <H2 id="heading1">Note: Nominations are currently closed</H2>
            <P>You can nominate a new provider at the start of the next financial year.</P>
        </Alert>
    </Example>
</ExampleContainer>

<ExampleContainer>
    <Example title="Example title: Information alert - Live">
        <Alert mode="live" level="info" headingId="heading1">
            <H2 id="heading1">Note: There are only 3 spaces remaining</H2>
            <P>Complete your order to reserve your place on the course.</P>
        </Alert>
    </Example>
</ExampleContainer>

## Warning

Use warning alerts to tell users something urgent. Only use this alert if the information will help users avoid a problem.

<ExampleContainer>
    <Example title="Example title: Warning alert - Static">
        <Alert level="warning" headingId="heading2">
            <H2 id="heading2">Warning: Your subscription will expire soon</H2>
            <P>You’ll need to renew your subscription to keep using the service.</P>
        </Alert>
    </Example>
</ExampleContainer>

<ExampleContainer>
    <Example title="Example title: Warning alert - Live">
        <Alert mode="live" level="warning" headingId="heading1">
            <H2 id="heading1">Warning: The option you’ve selected is for people aged 65 or over only</H2>
            <P>You’ll need to provide evidence of your date of birth when you submit your application.</P>
        </Alert>
    </Example>
</ExampleContainer>

## Success

Use success alerts to notify users that a form submission has completed successfully.

Success alerts are always static, as they are included as part of a new page or view, and remain unchanged until the user initiates a change of context.

To orient screen reader users and others to the alert, the Design System user must ensure that when the page or view first loads:

- focus is moved to the alert (the alert container is preset with `tabindex=”-1”` to make it programmatically focusable)
- the document’s `title` starts with "Success:".

<ExampleContainer>
    <Example title="Example: Alerts (static)">
        <Alert level="success" headingId="heading3">
            <H2 id="heading3">Success: Your account has been activated</H2>
            <P>You can now access all features of the service.</P>
        </Alert>
    </Example>
</ExampleContainer>

## Error summary

Use the error summary alert to inform users of every error they need to correct in a form before they can move on to the next step or complete their task.

Form errors must be presented using:

- the error summary alert
- individual error messages next to each form field with an error.

The error summary should be added at the top of the page above the form and link to each form field that has an error.

Error summary alerts are always static, as they are included as part of a new page or view, and remain unchanged until the user initiates a change of context.

To orient screen reader users and others to the alert, the Design System user must ensure that when the page or view first loads:

- focus is moved to the alert (the alert container is preset with `tabindex=”-1”` to make it programmatically focusable)
- the document’s `title` starts with "Error:".

<ExampleContainer>
    <Example title="Example title: Error summary alert">
        <Alert level="error" headingId="heading4">
            <H2 id="heading4">Error: There’s a problem with the following responses
</H2>
            <Ul bulleted>
                <Li><a href="#form">First name must not be empty</a></Li>
                <Li><a href="#form">Last name must only include letters a to z, hyphens, spaces and apostrophes</a></Li>
                <Li><a href="#form">Hours worked a week must be between 16 and 99</a></Li>
            </Ul>
        </Alert>
    </Example>
</ExampleContainer>

## Error messages

Specific error messages must be provided for specific error states. Style error messages as shown in the ‘Error messages’ sections of the guidance for the following form components:

- [Text input](https://design-system-alpha.digital.govt.nz/components/Input/)
- [Radio buttons](https://design-system-alpha.digital.govt.nz/components/Radios/)
- [Date input](https://design-system-alpha.digital.govt.nz/components/Date/)

## Credit

Guidance, original HTML and CSS derived from [GOV.UK Design System](https://github.com/alphagov/govuk-frontend).

Guidance for the page alerts component derived from the [Australian Government Design System](https://github.com/alphagov/govuk-frontend).

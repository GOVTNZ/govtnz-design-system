<P styleSize="large">
    Buttons make important actions stand out within a task flow, and help users
    to do that action easily. Colours, labels or icons are used on buttons to
    guide users about the action that will happen when they touch or
    click the button.
</P>

## Examples

Interact with each example to see how it works.

<ExampleContainer>
    <Example>
        <Button type="Button">Save and continue</Button>
    </Example>
</ExampleContainer>

## When to use it

Use buttons to help users carry out key actions in a task flow, like starting
an application or saving their information.

## How it works

Write button labels in sentence case, describing the action it performs.
For example:

* 'Start now' at the start of the service
* 'Sign in' to an account a user has already created
* 'Continue' when the service does not save a user's information
* 'Save and continue' when the service does save a user's information
* 'Save and come back later' when a user can save their information and
come back later
* 'Add another' to add another item to a list or group
* 'Pay' to make a payment
* 'Confirm and send' on a check answers page that does not have any legal
content a user must agree to
* 'Accept and send' on a check answers page that has legal content a user
must agree to
* 'Sign out' when a user is leaving an account that they signed in to.

You may need to include more or different words to clearly describe a button's
action. For example, 'Add another address' or 'Accept and claim a tax refund'.

Align the primary action button to the left edge of your form.

<ExampleContainer>
    <ExampleHeading>Default buttons</ExampleHeading>
    <Example>
        <Button type="Button">Save and continue</Button>
    </Example>
</ExampleContainer>

Use a default button for the main 'call to action' on a page.

Avoid using multiple default buttons on a single page. Having more than one
main call to action reduces their impact, and makes it harder for users to
know what to do next.

<ExampleContainer>
    <ExampleHeading>Secondary buttons</ExampleHeading>
    <Example>
        <Button type="Button" kind="secondary">Find address</Button>
    </Example>
</ExampleContainer>

Use secondary buttons for secondary calls to action on a page.

Pages with too many calls to action make it hard for users to know what to do
next. Before adding lots of secondary buttons, try to simplify the page or
break the content down into several pages.

<ExampleContainer>
    <ExampleHeading>Primary and secondary combination</ExampleHeading>
    <Example>
        <Button type="Button">Save and continue</Button>
        <Button type="Button" kind="secondary">Save as draft</Button>
    </Example>
</ExampleContainer>

You can use secondary buttons in combination with default buttons. Limit
combinations to two buttons only, as more can confuse users.

<ExampleContainer>
    <ExampleHeading>Warning buttons</ExampleHeading>
    <Example>
        <Button type="Button" kind="warning">Delete account</Button>
    </Example>
</ExampleContainer>

Warning buttons are designed to make users think carefully before they use
them. They only work if used very sparingly. Most services should
not need one.

Only use warning buttons for actions with serious destructive consequences
that cannot be easily undone by a user. For example, permanently
deleting an account.

When letting users carry out an action like this, it's a good idea to include
an additional step beforehand that asks users to confirm they want to do
the destructive action.

In this instance, use another style of button for the initial call to action,
and a warning button for the final confirmation.

Do not only rely solely on the red colour of a warning button to communicate
the serious nature of the action. This is because not all users will be able to
see the colour or may not understand what it signifies. Make sure the context
and button text make clear what will happen if the user selects it.

<ExampleContainer>
    <ExampleHeading>Disabled buttons</ExampleHeading>
    <Example>
        <Button type="Button" disabled>Save and continue</Button>
    </Example>
</ExampleContainer>

Disabled buttons have poor contrast and can confuse some users, so avoid
them if possible.

Only use disabled buttons if research shows it makes the user interface
easier to understand.

## Credit

Guidance, original HTML and CSS derived from [GOV.UK Design System](https://github.com/alphagov/govuk-frontend).

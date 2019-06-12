<P styleSize="large">
    Buttons make important actions stand out within a task flow, and help users
    to take that action easily. Use colour and text in buttons to inform users
    about the action that will happen when they touch or click a button.
</P>

## When to use it

Use buttons to help users carry out key actions in a task flow, like starting
an application or saving their information.

If you are considering using an icon in a button, we suggest you use visible
text as well to ensure all users understand the button's action.

## How it works

Keep button text short. Start with a verb that clearly describes the action
the button performs. Write button text in sentence case.

Some typical examples of button text are:

* 'Start now' at the start of the service
* 'Sign in' to an account a user has already created
* 'Continue' when the service does not save a user's information
* 'Save and continue' when the service does save a user's information
* 'Save and return later' when a user can save their information and come
back to it later
* 'Pay' to make a payment
* 'Confirm and send' on a check answers page that does not have any legal
content a user must agree to
* 'Accept and send' on a check answers page that has legal content a user
must agree to
* 'Sign out' when a user is leaving an account that they signed in to
* 'Add another [name of thing]' to add another item to a list or group. Ensure
the button text describes clearly what this button will add, in case there are
other similar buttons on the same page or form.

Consider if you need to include more words to clearly describe a button's
action. For example, 'Add another address' or 'Accept and claim a tax refund'.

## Primary buttons

Use a primary button for the main 'call to action' on a page, such
as 'Save and send'.

Avoid using several primary buttons on a single page. Having more than one
'call to action' reduces its impact, and makes it harder for users to know
what to do next.

<ExampleContainer>
    <ExampleHeading>Primary buttons</ExampleHeading>
    <Example>
        <Button type="Button">Save and continue</Button>
    </Example>
</ExampleContainer>

## Secondary buttons

Use secondary buttons for alternative or intermediary actions on a page.
Pages with too many calls to action make it hard for users to know what to do
next. Before adding a secondary button, try to simplify the page or break the
content down into several pages.

<ExampleContainer>
    <ExampleHeading>Secondary buttons</ExampleHeading>
    <Example>
        <Button type="Button" level="secondary">Find address</Button>
    </Example>
</ExampleContainer>

You can use secondary buttons in combination with a primary button, such as
offering 'Cancel' or 'Save and return later' options. Consider limiting
combinations to a maximum of two secondary buttons with a single primary
button, as more can confuse users.

<ExampleContainer>
    <ExampleHeading>Primary and secondary combination</ExampleHeading>
    <Example>
        <Button type="Button">Save and continue</Button>
        <Button type="Button" level="secondary">Save as draft</Button>
    </Example>
</ExampleContainer>

## Warning buttons

Warning buttons are designed to make users think carefully before they use
them. They only work if used very sparingly.

Only use warning buttons for actions with serious destructive consequences that
cannot be easily undone by a user, such as permanently deleting an account.

When letting users carry out an action like this, it's a good idea to include
an extra first step that asks users to confirm they want to do
the destructive action.

In this instance, use one warning button for the initial call to action, and
another warning button for the final confirmation.

Do not only rely solely on the red colour of a warning button to communicate
the serious nature of the action. Not all users will be able to see the colour
or may not understand what it signifies. Make sure the context and button text
make clear what will happen if the user selects it.

<ExampleContainer>
    <ExampleHeading>Warning buttons</ExampleHeading>
    <Example>
        <Button type="Button" level="warning">Delete account</Button>
    </Example>
</ExampleContainer>

## 'Disabled' buttons

'Disabled' buttons, which are often greyed out, have poor contrast and can
confuse some users, so avoid them if possible. 'Disabled' buttons may also
impede keyboard accessibility.

Only use 'disabled' buttons if your research shows it makes the user interface
easier to understand.

<ExampleContainer>
    <ExampleHeading>'Disabled' buttons</ExampleHeading>
    <Example>
        <Button type="Button" disabled>Save and continue</Button>
    </Example>
</ExampleContainer>

## Stop users from accidentally sending information twice

You can prevent users from accidentally sending information more than once by
preventing multiple clicks from registering.

Sometimes, users will click buttons more than once because they:

* have used operating systems where they have to rapidly click twice on items
to make them work
* are experiencing a slow connection, which means they are not given feedback
on their action quickly enough
* have motor impairments, such as hand tremors, that cause them to click
the button involuntarily.

In some cases, multiple clicks can mean users' information is sent more than
once. For example, a notify team found that a number of users were receiving
invitations twice, because the person sending them was clicking twice on
the 'Send' button.

If you are working in production and your research shows that users are
frequently sending information twice, consider using features that configure
the button to ignore a rapid second click. If the cause is a slow connection,
give the user a 'loading spinner' to show progress.

## Credit

Guidance, original HTML and CSS derived from&nbsp;
[GOV.UK Design System](https://github.com/alphagov/govuk-frontend).

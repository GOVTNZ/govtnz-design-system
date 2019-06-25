Checkboxes enable users to select one or more options from a visible list of options, and to toggle a single option on or off.

## Examples

Interact with each example to see how it works.

<ExampleContainer>
    <Example title="Example: Checkboxes">
        <FieldsetBlock legend={<H1 styleSize="large" id="providerChoiceTitle1" marginBottom8>Who are your providers?</H1>} hint={<p>Select all that apply.</p>} hintId="hintId1">
            <CheckboxBlock label="Aardvark Access" checkboxId="anyCheckboxId1" value="provider1" name="providerChoice1" labelId="labelId1" />
            <CheckboxBlock label="Bumblebee Business"  checkboxId="anyCheckboxId2" value="provider2" name="providerChoice1" labelId="labelId2" />
    <CheckboxBlock label="Caterpillar Company"  checkboxId="anyCheckboxId3" value="provider3" name="providerChoice1" labelId="labelId3" />
        </FieldsetBlock>
    </Example>
</ExampleContainer>

<ExampleContainer>
    <ExampleHeading>Error</ExampleHeading>
    <Example title="Example: Error state (Checkboxes)">
        <FieldsetBlockWithError legend={<H1 styleSize="large" id="providerChoiceTitle2" marginBottom8>Who are your providers?</H1>} hint={<p>Select all that apply.</p>} hintId="hintId21" errorId="errorId21" error="You must choose at least one provider.">
            <CheckboxBlock label="Aardvark Access"  checkboxId="anyCheckboxId21" value="provider1" name="providerChoice2" labelId="labelId21" />
            <CheckboxBlock label="Bumblebee Business"  checkboxId="anyCheckboxId22" value="provider2"  name="providerChoice2" labelId="labelId22" />
    <CheckboxBlock label="Caterpillar Company"  checkboxId="anyCheckboxId23" value="provider3" name="providerChoice2" labelId="labelId23" />
        </FieldsetBlockWithError>
    </Example>
</ExampleContainer>

<ExampleContainer>
    <ExampleHeading>Checkboxes with hints</ExampleHeading>
    <Example title="Example: Checkboxes with hints">
        <FieldsetBlock legend={<H1 styleSize="large" id="providerChoiceTitle3" marginBottom8>Who are your providers?</H1>} hint={<p>Select all that apply.</p>} hintId="hintId3">
            <CheckboxBlock label="Aardvark Access" checkboxId="anyCheckboxId31" value="provider1" name="providerChoice3" labelId="labelId31" hintId="hintId31" hint="Aardvark Access provides internet" />
            <CheckboxBlock label="Bumblebee Business"  checkboxId="anyCheckboxId32" value="provider2" name="providerChoice3" labelId="labelId32" hintId="hintId32" hint="Bumblebee Business provides electricity" />
            <CheckboxBlock label="Caterpillar Company"  checkboxId="anyCheckboxId33" value="provider3" name="providerChoice3" labelId="labelId33" hintId="hintId33" hint="Caterpillar Company provides telephone" />
        </FieldsetBlock>
    </Example>
</ExampleContainer>

## When to use it

Use the checkboxes component when you need to help users:

- select one or more options from a list
- toggle a single option on or off.

## When not to use it

Do not use the checkboxes component if users can only choose one option from a selection. In this case, use [radio buttons](/components/Radios) instead.

## How it works

Checkboxes are grouped together in a `<fieldset>` with a `<legend>` that describes them, as shown in the examples on this page. This is usually a question, like ‘Who are your providers?’.

If you are asking just one question per page, you can set the contents of the `<legend>` as the page heading. This is good practice because users of screen readers will only hear the contents once.

Always position each checkbox to the left of its label. This makes it easier to find, especially for users of screen magnifiers.

Unlike with radio buttons, users can select multiple checkboxes from a list. Do not assume that users will know how many checkboxes they can select based on only the visual difference between radio buttons and checkboxes.

If needed, add a hint to explain this, like ‘Select all that apply’.

Do not pre-select checkboxes as users are likely to:

- not realise they’ve missed a question
- submit the wrong answer.

Order checkbox labels alphabetically by default.

In some cases, pre-selected ordering can be helpful, such as listing options from the most to the least common. An example is ordering answers to the question ‘What is your nationality?’ based on population size.

Another example of pre-selected ordering is listing options chronologically. For example, you could order possible time periods for contact from earliest to latest, so users can select the periods that suit them best.

However, using pre-selected ordering could reinforce bias in your service, so use it with caution. If in doubt, order alphabetically.

## Credit

Guidance, original HTML and CSS derived from [GOV.UK Design System](https://github.com/alphagov/govuk-frontend).

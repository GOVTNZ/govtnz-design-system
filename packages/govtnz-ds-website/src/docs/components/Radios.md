<P styleSize="large">Radio buttons present users a choice of options from which they can select only one.</P>

## Examples

Interact with each example to see how it works.

<ExampleContainer>
    <Example title="Example: Radio buttons">
        <FieldsetBlock legend={<H1 styleSize="large" id="nameChangeId1">Have you changed your name?</H1>} hint={<p>This includes changing your last name or spelling your name differently.</p>} hintId="hintId1">
            <Radios inline>
                <RadioBlock label="Yes" id="anyRadioId" 
                value="true" name="nameChange1" labelId="labelId1" />
                <RadioBlock label="No" id="anyRadioId255" value="false" name="nameChange1" labelId="labelId255" />
            </Radios>
        </FieldsetBlock>
    </Example>
</ExampleContainer>

<ExampleContainer>
    <ExampleHeading>Error</ExampleHeading>
    <Example title="Example: Error state #1 (Radio buttons)">
        <FieldsetBlock legend={<H1 styleSize="large" id="nameChangeId5">Have you changed your name?</H1>} hint={<p>This includes changing your last name or spelling your name differently.</p>} hintId="hintId5" errorId="errorId5" error="Select 'yes' if you have changed your name.">
            <Radios inline>
                <RadioBlock label="Yes" id="anyRadioId9234" 
                value="true" name="nameChange5" labelId="labelId9" />
                <RadioBlock label="No" id="anyRadioId10" value="false" name="nameChange5" labelId="labelId10" />
            </Radios>
        </FieldsetBlock>
    </Example>
</ExampleContainer>

## When to use it

Use the radio buttons component when users can only select one option from a list.

## When not to use it

Do not use the radio buttons component if users might need to select more than one option. Use the checkboxes component instead.

## How it works

Radio buttons are grouped together in a `<fieldset>` with a `<legend>` that describes them, as shown in the examples on this page. This is usually a question, like ‘Where do you live?’.

If you are asking just one question per page, you can set the contents of the `<legend>` as the page heading.

Always position radio buttons to the left of their labels. This makes them easier to find, especially for users of screen magnifiers.

Unlike with checkboxes, users can only select one option from a list of radio buttons. Do not assume that users will know how many options they can select based on the visual difference between radio buttons and checkboxes alone. If needed, add a hint explaining this, like ‘Select one option’.

Do not pre-select radio button options. Pre-selecting radio button options makes it more likely that users will:

- not realise they’ve missed a question
- submit the wrong answer.

Be aware that, once users have selected one option, they have to refresh their browser window to go back to having no option selected. To avoid this, include ‘None of the above’ or ‘I do not know’, if they are valid options.

Order radio button options alphabetically by default.

In some cases, it can be helpful to order them from most to least common. For example, you could order options for ‘Where do you live?’ based on population size.

Another example of pre-selected ordering is listing options chronologically. For example, you could order available appointment times in a day from earliest to latest.

However, using pre-selected ordering could reinforce bias in your service, so use it with caution. If in doubt, order alphabetically.

<ExampleContainer>
    <ExampleHeading>Stacked radio buttons</ExampleHeading>
    <Example title="Example: Stacked radio buttons">
        <FieldsetBlock legend={<H1 styleSize="large" id="whereLiveTitle">Where do you live?</H1>}>
            <RadioBlock label="North Island" id="anyRadioId3334" name="where" value="north" labelId="labelId3" />
            <RadioBlock label="South Island" id="anyRadioId42344" name="where" value="south" labelId="labelId4" />
            <RadioBlock label="Stewart Island" id="anyRadioId5234" name="where" value="stewart" labelId="labelId5" />
            <RadioBlock label="Chatham Islands" id="anyRadioId6234" name="where" value="chatham" labelId="labelId6" />
        </FieldsetBlock>
    </Example>
</ExampleContainer>

When there are more than 2 options, radio buttons should be stacked.

<ExampleContainer>
    <ExampleHeading>Inline radio buttons</ExampleHeading>
    <Example title="Example: Inline radio buttons">
        <FieldsetBlock legend={<H1 styleSize="large" id="nameChangeId6">Have you changed your name?</H1>} hint={<p>This includes changing your last name or spelling your name differently.</p>} hintId="hintId2221">
            <Radios inline>
                <RadioBlock label="Yes" id="anyRadioId55" 
                value="true" name="nameChange1" labelId="labelId1" />
                <RadioBlock label="No" id="anyRadioId2551" value="false" name="nameChange1" labelId="labelId2"  />
            </Radios>
        </FieldsetBlock>
    </Example>
</ExampleContainer>

If there are only 2 options, you can either stack the radio buttons or display them inline.

<ExampleContainer>
    <ExampleHeading>Radio button items with hints</ExampleHeading>
    <Example title="Example: Radio button items with hints">
            <FieldsetBlock legend={<H1 styleSize="large" id="providerChoiceTitle1">Choose one provider</H1>} hint={<p>Select one provider.</p>} hintId="hintId">
                <RadioBlock label="Sign in with Aardvark services" hint="North Island only" hintId="someHintId7" id="anyRadioId7234" name="providerChoice3" value="provider1" labelId="labelId5" />
                <RadioBlock label="Sign in with Bumblebee services" hint="North and South Island" hintId="someHintId8" id="anyRadioId8234" name="providerChoice3" value="provider2" labelId="labelId8" />
                <RadioBlock label="Sign in with Caterpillar company" hint="All new Zealand territories" hintId="someHintId7234" id="anyRadioId9f" name="providerChoice3" value="provider3" labelId="labelId9" />
        </FieldsetBlock>
    </Example>
</ExampleContainer>

You can add hints to radio button items to provide more information about the options.

<ExampleContainer>
    <ExampleHeading>Radio button items with a text divider</ExampleHeading>
    <Example title="Example: Radio button items with a text divider">
            <FieldsetBlock legend={<H1 styleSize="large" id="providerChoiceTitle2">Choose one provider</H1>} hint={<p>Select one provider.</p>} hintId="hintId234">
                <RadioBlock label="Sign in with Aardvark Services" hint="North Island only" hintId="someHintId72344" id="anyRadioId7345" name="providerChoice3" value="provider1" labelId="labelId5" />
                <RadioBlock label="Sign in with Dandelion Services" hint="South and Stewart Islands only" hintId="someHintId8533" id="anyRadioId8345" name="providerChoice3" value="provider2" labelId="labelId8" />
                <FormDivider><p>-or-</p></FormDivider>
                <RadioBlock label="Sign in with Eel Services" hint="Non-New Zealand residents only" hintId="someHintId7234444" id="anyRadioId3459" name="providerChoice3" value="provider3" labelId="labelId9" />
        </FieldsetBlock>
    </Example>
</ExampleContainer>

If one or more of your radio button options is different from the others, it can help users if you separate them using a text divider. The text is usually the word ‘or’.

## Error messages

Make sure error messages follow the guidance below, and that you have specific error messages for specific error states.

<ExampleContainer>
    <ExampleHeading>Error</ExampleHeading>
    <Example title="Example: Error state #2 (Radio buttons)">
        <FieldsetBlock legend={<H1 styleSize="large" id="nameChangeId8">Have you changed your name?</H1>} hint={<p>This includes changing your last name or spelling your name differently.</p>} hintId="hintId5344" errorId="errorId525" error="Select 'yes' if you have changed your name">
            <Radios inline>
                <RadioBlock label="Yes" id="anyRadioId9" 
                value="true" name="nameChange5" labelId="labelId9" />
                <RadioBlock label="No" id="anyRadioId10234" value="false" name="nameChange5" labelId="labelId10" />
            </Radios>
        </FieldsetBlock>
    </Example>
</ExampleContainer>

#### If nothing is selected and the options are ‘yes’ or ‘no’

Say ‘Select ‘yes’ if [whatever it is] is true’. For example, ‘Select ‘yes’ if Sarah normally lives with you’.

#### If nothing is selected and the question includes options

Say ‘Select if [whatever it is]’. For example, ‘Select if you are employed or self-employed’.

#### If nothing is selected and the question does not include options [H4]

Say ‘Select [whatever it is]’. For example, ‘Select the day of the week you pay your rent’.

## Credit

Guidance, original HTML and CSS derived from [GOV.UK Design System](https://github.com/alphagov/govuk-frontend).

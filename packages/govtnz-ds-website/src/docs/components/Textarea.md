<P styleSize="large">
    The textarea component (also known as multiline input) is used for input fields longer than a single line.
</P>

## Example

Interact with the example to see how it works.

<ExampleContainer>
    <Example title="Example: Textarea">
        <TextareaBlock
            id="detail"
            name="detail"
            label="Can you provide more detail?"
            hintId="hint1"
            hint="Do not include personal or financial information, like your IRD number or credit card details."
        />
    </Example>
</ExampleContainer>

## When to use this component

Use the textarea component when you need to let users enter an amount of text that’s longer than a single line.

## When not to use this component

Users can find open-ended questions difficult to answer. It might be better to break up one complex open question into a series of simple ones.

### Ask a simple closed question

If you need to let users select a single answer from a list of options, use [radio buttons](./components/Radios). For selecting one or more options, or to toggle a single option on or off, use [checkboxes](./components/Checkboxes).

### Ask a simple open question

If you need to let users enter shorter answers no longer than a single line, such as a phone number or name, use the [text input](./components/Input) component.

## How it works

### Label textareas

You must label textareas. Placeholder text is not a suitable substitute for a label, as it may disappear when users click inside the textarea.

Labels must be aligned above the textarea they refer to. They should be short, direct and written in sentence case. Do not use colons at the end of labels.

## Use appropriately-sized textareas

Make the height of a textarea proportional to the amount of text you expect users to enter. You can set the height of a textarea by by specifying the `rows` attribute.

Allow users to resize the textarea by dragging the resize handle icon in the bottom-right corner of the textarea.

## Do not disable copy and paste

Users will often need to copy and paste information into a textarea, so do not stop them from doing this.

## Limiting the number of characters

If there’s a good reason to limit the number of characters users can enter, you can use the [character count](./components/CharacterCount) component.

## Error messages

Error messages should be styled like this:

<ExampleContainer>
    <Example title="Example: Textarea error">
        <TextareaBlock
            id="detail"
            name="detail"
            label="Can you provide more detail?"
            hintId="hint1"
            hint="Do not include personal or financial information, like your IRD number or credit card details."
            errorId="errorId"
            error="Enter more detail"
        />
    </Example>
</ExampleContainer>

Make sure error messages follow the guidance below, and that you have specific error messages for specific error states.

### If the input is empty

Say ‘Enter [whatever it is]’.

For example, ‘Enter summary’.

### If the input is too long

Say ‘[whatever it is] must be [number] characters or fewer’.

For example, ‘Summary must be 400 characters or fewer’.

### If the input is too short

Say ‘[whatever it is] must be [number] characters or more’.

For example, ‘Summary must be 10 characters or more’.

### If the input is too long or too short

Say ‘[whatever it is] must be between [number] and [number] characters’.

For example, ‘Summary must be between 10 and 400 characters’.

### If the input uses characters that are not allowed and you know what the characters are

Say ‘[whatever it is] must not include [characters]’.

For example, ‘Summary must not include ē and \$’.

### If the input uses characters that are not allowed and you do not know what the characters are

Say ‘[whatever it is] must only include [list of allowed characters]’.

For example, ‘Summary must only include letters a to z, hyphens, spaces and apostrophes.’

## Credit

Guidance, original HTML and CSS derived from [GOV.UK Design System](https://github.com/alphagov/govuk-frontend).

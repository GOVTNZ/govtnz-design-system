Fieldset
[INTRO]

<P styleSize="large">
    The date input component consists of three grouped text fields that invite users to enter a day, a month, and a year.  This is the easiest way for users to enter dates they know well.
</P>

## Examples

Interact with the example to see how it works.

<ExampleContainer>
    <Example title="Example: Fieldset address">
        <FieldsetBlock
            id="addressId"            
            legend="Legend"
        >
        </FieldsetBlock>
    </Example>
</ExampleContainer>

## When to use this component

Use the fieldset component when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single fieldset when asking for an address.

If you’re using the [radio buttons](./Radios), [checkboxes](./Checkboxes) or [date input](./Date) components, the fieldset component will already be included.

## How it works

The first element inside a `<fieldset>` must be a `<legend>` which describes the group of inputs. This could be a question, such as ‘What is your current address?’ or a statement like ‘Personal details’.

If you’re asking just one question per page as recommended, you can set the contents of the `<legend>` as the page heading, as shown in the example below. This is good practice as it means that users of screen readers will only hear the contents once.

<ExampleContainer>
    <Example title="Example: Fieldset address as page heading">
        <FieldsetBlock
            id="addressId"            
            legend={<H1 styleSize="large">Page heading</H1>}
        >
        </FieldsetBlock>
    </Example>
</ExampleContainer>

On question pages containing a group of inputs, including the question as the legend helps users of screen readers to understand that the inputs are all related to that question.

Include any general help text which is important for filling in the form and cannot be written as hint text in the legend, but try to keep it as concise as possible.

## Credit

Guidance, original HTML and CSS derived from [GOV.UK Design System](https://github.com/alphagov/govuk-frontend).

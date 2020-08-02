<P styleSize="large">
    Use the fieldset component to group related form fields and labels within a form.
</P>

## Examples

Interact with the example to see how it works.

<ExampleContainer>
    <ExampleHeading></ExampleHeading>
    <Example title="Example: Fieldset">
        <FieldsetBlock
            id="addressId"            
            legend={<H1 styleSize="large">What is your address?</H1>}
        >
            <InputBlock type="text" label="Street address" name="streetAddress" id="streetAddressId" autoComplete="street-address" />
            <InputBlock type="text" label="Town or city" name="town" id="townId" autoComplete="address-level2" />
            <InputBlock type="text" label="Postcode" name="postcode" id="postcodeId" width="5" autoComplete="postal-code" />
        </FieldsetBlock>
    </Example>
</ExampleContainer>

## When to use this component

Use the fieldset component when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single fieldset when asking for an address.

If you’re using the [radio buttons](/components/Radios), [checkboxes](/components/Checkboxes) or [date input](/components/Date) components, the fieldset component will already be included.

## How it works

The first element inside a `<fieldset>` must be a `<legend>` which describes the group of inputs. This could be a question, such as ‘What is your current address?’ or a statement like ‘Personal details’.

If you’re asking just one question per page as recommended, you can set the contents of the `<legend>` as the page heading, as shown in the example below. This is good practice as it means that users of screen readers will only hear the contents once.

<ExampleContainer>
    <Example title="Example: Fieldset legend as page heading">
        <FieldsetBlock
            id="addressId"            
            legend={<H1 styleSize="large">What is your address?</H1>}
        >
        </FieldsetBlock>
    </Example>
</ExampleContainer>

On question pages containing a group of inputs, including the question as the legend helps users of screen readers to understand that the inputs are all related to that question.

Include in the legend any general help text which is important for filling in the form and cannot be written as hint text, but try to keep it as concise as possible.

## Credit

Guidance, original HTML and CSS derived from [GOV.UK Design System](https://github.com/alphagov/govuk-frontend).

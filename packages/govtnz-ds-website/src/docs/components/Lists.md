For detailed documentation see [Unordered List](/components/Ul) and [Ordered List](/components/Ol) with [List item](/components/Li)s inside either. Here is an introductionary paragraph that succinctly describes what this componeent is, and is easy to scan for users looking to see if this page has the things on it they are looking for.

<ExampleContainer>
    <ExampleHeading>Example of Lists</ExampleHeading>
    <Example>
        <Ul bulleted>
            <Li>Unordered item one</Li>
            <Li>Unordered item two</Li>
            <Li>Unordered item three
                <Ul bulleted>
                    <Li>Ordered item one</Li>
                    <Li>Ordered item one</Li>
                </Ul>
            </Li>
            <Li>Unordered item four</Li>
        </Ul>
    </Example>
</ExampleContainer>

<ExampleContainer>
    <ExampleHeading>Example of Lists</ExampleHeading>
    <Example>
        <Ol numbered>
            <Li>Unordered item one</Li>
            <Li>Unordered item two</Li>
            <Li>Unordered item three
                <Ol numbered>
                    <Li>Ordered item one</Li>
                    <Li>Ordered item one</Li>
                </Ol>
            </Li>
            <Li>Unordered item four</Li>
        </Ol>
    </Example>
</ExampleContainer>

## When to use this component

Use the text input component when you need to let users enter text that’s no longer than a single line, such as their name or phone number.

## When not to use this component

Do not use the text input component if you need to let users enter longer answers that might span multiple lines. In this case, you should use the [textarea](/components/Textarea) component.

## How it works

Explanatory text about how to start using the component goes here and it is relatively brief but introuduces how it works I dunno this is not my area of expertise.

<ExampleContainer>
    <ExampleHeading>Example of Lists a second time</ExampleHeading>
    <Example>
        <Ul bulleted>
            <Li>Unordered item one</Li>
            <Li>Unordered item two</Li>
            <Li>Unordered item three
                <Ol>
                    <Li>Ordered item one</Li>
                    <Li>Ordered item one</Li>
                </Ol>
            </Li>
            <Li>Unordered item four</Li>
        </Ul>
    </Example>
</ExampleContainer>

### Label text inputs

All text inputs must have visible labels; placeholder text is not an acceptable replacement for a label as it vanishes when users start typing.

Labels should be aligned above the text input they refer to. They should be short, direct and written in sentence case. Do not use colons at the end of labels.

If you’re asking just one question per page as recommended, you can set the contents of the `<label>` as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.

Read more about why and how to set legends as headings.

## Credit

Guidance, original HTML and CSS derived from [GOV.UK Design System](https://github.com/alphagov/govuk-frontend).

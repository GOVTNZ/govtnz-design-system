<P styleSize="large">Effective, accessible content relies on a clear font, consistent headings, succinct body text paragraphs, descriptive links, and scannable lists.</P>

## Font

We are investigating how font choice will be incorporated into the design system, in order to meet New Zealand language requirements.

## Headings

<ExampleContainer>
    <Example>
        <ExampleSection>
            <H1 styleSize="xlarge">g-heading-xl</H1>
        </ExampleSection>
        <ExampleSection>
            <H2 styleSize="large">g-heading-l</H2>
        </ExampleSection>
        <ExampleSection>
            <H3 styleSize="medium">g-heading-m</H3>
        </ExampleSection>
        <ExampleSection>
            <H4 styleSize="small">g-heading-s</H4>
        </ExampleSection>
        <ExampleSection>
            <H5 styleSize="xsmall">g-heading-xs</H5>
        </ExampleSection>
        <ExampleSection>
            <H6 styleSize="xxsmall">g-heading-xxs</H6>
        </ExampleSection>
    </Example>
</ExampleContainer>

<ExampleContainer>
    <ExampleHeading>Same heading level varying by size only</ExampleHeading>
    <Example>
        <ExampleSection>
            <H3 styleSize="xlarge">H3 g-heading-xl</H3>
        </ExampleSection>
        <ExampleSection>
            <H3 styleSize="large">H3 g-heading-l</H3>
        </ExampleSection>
        <ExampleSection>
            <H3 styleSize="medium">H3 g-heading-m</H3>
        </ExampleSection>
        <ExampleSection>
            <H3 styleSize="small">H3 g-heading-s</H3>
        </ExampleSection>
        <ExampleSection>
            <H3 styleSize="xsmall">H3 g-heading-xs</H3>
        </ExampleSection>
        <ExampleSection>
            <H3 styleSize="xxsmall">H3 g-heading-xxs</H3>
        </ExampleSection>
    </Example>
</ExampleContainer>

Use headings consistently to create a clear hierarchy throughout your content, and to allow people using assistive technology to quickly scan and move through the page.

Mark up headings semantically using the appropriate `<h#>` level HTML element. In our design system, the font size is independent of the heading hierarchy. This allows for design flexibility.

Write all headings in sentence case, with the exception of proper nouns, which require initial capitals.

<ExampleContainer>
    <ExampleHeading>Headings with captions</ExampleHeading>
    <Example>
        <ExampleSection>
            <CaptionXl>caption-xl</CaptionXl>
            <H1 styleSize="xlarge">g-heading-xl</H1>
        </ExampleSection>
        <ExampleSection>
            <CaptionL>caption-l</CaptionL>
            <H2 styleSize="large">g-heading-l</H2>
        </ExampleSection>
        <ExampleSection>
            <CaptionM>caption-m</CaptionM>
            <H3 styleSize="medium">g-heading-m</H3>
        </ExampleSection>
    </Example>
</ExampleContainer>

Sometimes you may need to make it clear that content under a heading is part of a larger section or group. To do this, you can use a heading with a caption.

<ExampleContainer>
    <ExampleHeading>Headings with captions inside the       <code>h1</code></ExampleHeading>
    <Example>
        <H1 styleSize="xlarge">
            <CaptionXl>caption-xl</CaptionXl>
            g-heading-xl
        </H1>
    </Example>
</ExampleContainer>

If the caption should be considered part of the page heading, you can also nest the caption within the `h1`.

## Paragraphs

There are three font sizes for paragraphs, giving you:

- a large size for lead paragraphs
- a medium size for standard body text
- a smaller size for small body text.

You can use these text sizes to indicate the relative importance of the content on the page.

<ExampleContainer>
    <ExampleHeading>Large size for lead paragraph</ExampleHeading>
    <Example>
        <ExampleSection>
            <P styleSize="large">
                Design and build fast, accessible websites backed by user research, so New Zealanders can easily use government services online.</P>
        </ExampleSection>
    </Example>
</ExampleContainer>

A lead paragraph, also called a summary or short description, is the introduction at the top of a page that summarises what a user can expect from that page.

Remember that the summary, along with the title, is usually what users see in search results. Keep the content short, or put the key information at the start, as Google usually only shows the first 160 characters.

Only use one lead paragraph per page.

<ExampleContainer>
    <ExampleHeading>Medium size for standard body text</ExampleHeading>
    <Example>
        <ExampleSection>
            <P styleSize="medium">
                The all-of-government (AOG) design system alpha is a catalogue of reusable basic elements, components and patterns for building websites and applications, along with guidance on how and when to use them.</P>
        </ExampleSection>
    </Example>
</ExampleContainer>

The majority of your body copy should use medium size.

<ExampleContainer>
    <ExampleHeading>Small size for small body text</ExampleHeading>
    <Example>
        <ExampleSection>
            <P styleSize="small">
            Government Information Services is creating the design system now, and you can contribute. This alpha site shows you what we have built so far, what we are working on, and how you can get involved.</P>
        </ExampleSection>
    </Example>
</ExampleContainer>

Use it sparingly for 'small print' content, such as notes and references.

## Links

<ExampleContainer>
    <ExampleHeading>Default</ExampleHeading>
    <Example>
        <P styleSize="medium">
            <A href="#">Discuss typography on 'GitHub issues'</A>
        </P>
    </Example>
</ExampleContainer>

Links are blue and underlined by default. If your link is at the end of a sentence or paragraph, make sure that the linked text does not include the full stop.

Remember to make link text descriptive of the destination. Just “Read more” is not acceptable.

## Lists

Use lists to break up blocks of text into chunks to make them easier to read.

<ExampleContainer>
<ExampleHeading>Bulleted lists</ExampleHeading>
<Example><P styleSize="medium">To help keep the kitchen clean, please:</P>

<Ul bulleted>
    <Li>replace tea and coffee jars on shelf</Li>
    <Li>wipe down bench</Li>
    <Li>wash dishes by: <Ul bulleted>
            <Li>loading the dishwasher, if it's empty</Li>
            <Li>rinsing and stacking, if dishwasher is going</Li>
        </Ul>
    </Li>
    <Li>put recycling in labelled bins</Li>
</Ul>
</Example>
</ExampleContainer>

Introduce bulleted lists with a partial ‘stub’ sentence ending in a colon. Start each list item with a lowercase letter, and do not use a full stop at the end. Ensure each list item makes grammatical sense when read after the stub sentence above.

Use bulleted lists to highlight options and examples in content, especially when a sentence contains more than three clauses.

<ExampleContainer>
    <ExampleHeading>Numbered lists</ExampleHeading>
    <Example>
         <P styleSize="medium">
            To sign up, you need to complete four steps.</P>
        <Ol numbered>
            <Li>Prove your identity, such as with RealMe</Li>
            <Li>Provide a passport-sized photo</Li>
            <Li>
                Enter your address details:
                <Ol numbered>
                    <Li>Postal address</Li>
                    <Li>Delivery address</Li>
                </Ol>
            </Li>
            <Li>Confirm payment methods</Li>
        </Ol>
    </Example>
</ExampleContainer>

Use numbered lists instead of bulleted lists when the order of the items is relevant.

You do not need a lead-in line for numbered lists, although a summary sentence can be helpful for users. If numbered items are complete sentences, use full stops at the end.

## Credit

Guidance, original HTML and CSS derived from [GOV.UK Design System](https://github.com/alphagov/govuk-frontend).

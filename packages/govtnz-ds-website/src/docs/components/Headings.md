Headings are structural parts of your page, ranging from 1 (most important) to 6 (least important), and are used by screen readers to understand the relationship between parts of your page. They are for headings, but they also denote the hierarchy of your page.

There are the conventional [H1](/components/H1/), [H2](/components/H2/), [H3](/components/H3/), [H4](/components/H4/), [H5](/components/H5/), and [H6](/components/H6/). Before headings you may optionally use Captions such as [Caption XL](/components/CaptionXl/), [Caption L](/components/CaptionL/), and [Caption M](/components/CaptionM/).

## How to use

First choose a heading level based on the structure of your page, and then choose the appropriate font size for your design as the font size can be chosen independently, but do not conflate these decisions as they are strictly unrelated.

All these heading elements support sizes, either as classes of "g-heading-xl", "g-heading-l", "g-heading-m", and "g-heading-s", or their equivalent template variable.

<ExampleContainer>
    <ExampleHeading>Example of Headings</ExampleHeading>
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

## Captions before headings

Captions can be either _before_ or _inside_ headings.

<ExampleContainer>
    <ExampleHeading>Example of before headings</ExampleHeading>
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
            <H2 styleSize="medium">g-heading-m</H2>
        </ExampleSection>
    </Example>
</ExampleContainer>
 
<ExampleContainer>
    <ExampleHeading>Example of caption inside heading</ExampleHeading>
    <Example>
        <H1 styleSize="xlarge">
            <CaptionXl>caption-xl</CaptionXl>
            g-heading-xl
        </H1>
    </Example>
</ExampleContainer>

<ExampleContainer>
<ExampleHeading>Example of Paragraph Sizes</ExampleHeading>
<Example>
    <ExampleSection>
    <P styleSize="large">g-body-l</P>
    </ExampleSection>
    <ExampleSection>
    <P styleSize="medium">g-body-m</P>
    </ExampleSection>
    <ExampleSection>
    <P styleSize="small">g-body-s</P>
    </ExampleSection>
</Example>
</ExampleContainer>

## Credit

Guidance, original HTML and CSS derived from [GOV.UK Design System](https://github.com/alphagov/govuk-frontend).

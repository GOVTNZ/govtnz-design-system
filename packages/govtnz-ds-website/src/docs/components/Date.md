<P styleSize="large">
    The date input component consists of three grouped text fields that invite
    users to enter a day, a month, and a year.  This is the easiest way for
    users to enter dates they know well.
</P>

<DateInput
    id="passport-issued"
    hintId="passport-issued-hint"
    errorId="passport-issued-error"
    dayId="passport-issued-day"
    monthId="passport-issued-month"
    yearId="passport-issued-year"
    label="When was your passport issued?"
    hint="For example, 12 11 2007"
    value="6"
    value2="3"
    value3="2076"
    error="The date your passport was issued must be in the past"
    />

## Examples

Interact with each example to see how it works.

<ExampleContainer>
    <Example>
        <DateInput
            id="passport-issued"
            hintId="passport-issued-hint"
            dayId="passport-issued-day"
            monthId="passport-issued-month"
            yearId="passport-issued-year"
            label="When was your passport issued?"
            hint="For example, 12 11 2007"
        />
    </Example>
</ExampleContainer>

<ExampleContainer>
    <ExampleHeading>Error</ExampleHeading>
    <Example>
        <DateInput
            id="passport-issued"
            hintId="passport-issued-hint"
            errorId="passport-issued-error"
            dayId="passport-issued-day"
            monthId="passport-issued-month"
            yearId="passport-issued-year"
            label="When was your passport issued?"
            hint="For example, 12 11 2007"
            value="6"
            value2="3"
            value3="2076"
            error="The date your passport was issued must be in the past"
        />
    </Example>
</ExampleContainer>

## When to use it

Use the date input component when you're asking users for a date they'll
already know, or one they can look up easily.

## When not to use it

Do not use the date input component if users are unlikely to know the exact
date of the event you're asking about.

## How it works

The three fields in the date input component are grouped together in a
`fieldset` with a `legend` that describes them, as shown in the examples on
this page. The legend is usually a question, such as 'What is your
date of birth?'.

If you're asking one question per page, you can set the contents of the
`legend` as the page heading. This is good practice as it means that users of
screen readers will only hear the contents once.

Never automatically tab between the fields of the date input because this can
confuse users and may clash with normal keyboard controls.

## Use the autocomplete attribute for a date of birth

Use the `autocomplete` attribute on the date input component when you're
asking for a date of birth. This allows browsers to autofill the information on
a user's behalf if they've entered it previously.

To enable this functionality, set the `autocomplete` attribute on the fields to
`bday-day`, `bday-month`, and `bday-year`. You'll need to do this to
meet WCAG 2.1 Level AA.

<ExampleContainer>
    <ExampleHeading white>Code</ExampleHeading>
    <Example codeOnly>
        <DateInput
            id="bday"
            hintId="bday-hint"
            dayId="bday-day"
            monthId="bday-month"
            yearId="bday-year"
            label="What is your date of birth?"
            hint="For example, 31 3 1980"
            autoComplete="Birthday: Day"
            autoComplete2="Birthday: Month"
            autoComplete3="Birthday: Year"
        />
    </Example>
</ExampleContainer>

## Error messages

Style error messages as shown in the following example.

<ExampleContainer>
    <ExampleHeading>Error</ExampleHeading>
    <Example>
        <DateInput
            id="passport-issued"
            hintId="passport-issued-hint"
            errorId="passport-issued-error"
            dayId="passport-issued-day"
            monthId="passport-issued-month"
            yearId="passport-issued-year"
            label="When was your passport issued?"
            hint="For example, 12 11 2007"
            value="6"
            value2="3"
            value3="2076"
            error="The date your passport was issued must be in the past"
        />
    </Example>
</ExampleContainer>

Write a specific error message for every possible error state.

When setting up errors, check the entire date as a whole, rather than
separately checking the day, month, and year.

Avoid assuming what is wrong with the date entered. For example, if a user
enters '31 2 2016', the day may be right and the month may be wrong. An error
message that mentions February may be confusing if they meant to enter '1' in
the month field.

### If nothing is entered

Say 'Enter [type of date]'.

For example, 'Enter your date of birth'.

### If an incomplete date is entered and you know what's missing

Say '[type of date] must include a [what is missing]'.

For example, 'Date of birth must include a month' or 'Date of birth must include a day and a month'.

### If an incomplete date is entered and you don't know what is missing

Say 'Enter [type of date], and include a day, a month, and a year'.

For example, 'Enter your date of birth, and include a day, a month, and a year'.

### If the date entered is not a real one

Say 'Enter a real [type of date]'.

For example, 'Enter a real date of birth'.

### If the date is in the future when it needs to be in the past

Say '[type of date] must be in the past'.

For example, 'Date of birth must be in the past'.

### If the date is in the future when it needs to be today or in the past

Say '[type of date] must be today or in the past'.

For example, 'Date of birth must be today or in the past'.

### If the date is in the past when it needs to be in the future

Say '[type of date] must be in the future'.

For example, 'The date your course ends must be in the future'.

### If the date is in the past when it needs to be today or in the future

Say '[type of date] must be today or in the future'.

For example, 'The date your course ends must be today or in the future'.

### If the date must be the same as or after another date

Say '[type of date] must be the same as or after
[date and optional description]'.

For example, 'The date your course ends must be the same as or after 1
September 2017 when you started the course'.

### If the date must be after another date

Say '[type of date] must be after [date and optional description]'.

For example, 'The date your course ends must be after 1 September 2017'.

### If the date must be the same as or before another date

Say '[type of date] must be the same as or before
[date and optional description]'.

For example, 'The date of Gordon's last exam must be the same as or before 31
August 2017 when they left school'.

### If the date must be before another date

Say '[type of date] must be before [date and optional description]'.

For example, 'The date of Gordon's last exam must be the same as or before
31 August 2017'.

### If the date must be between two dates

Say '[type of date] must be between [date] and
[date and optional description]'.

For example, 'The date your contract started must be between 1 September 2017
and 30 September 2017 when you became self-employed'.

### Research on this component

If you've used this component, get in touch to share your
user research findings.

More research is needed to determine the extent to which users struggle to
enter months as numbers, and whether allowing them to enter months as
text is helpful.

## Credit

Guidance, original HTML and CSS derived from [GOV.UK Design System](https://github.com/alphagov/govuk-frontend).

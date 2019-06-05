The select component (sometimes called a dropdown list) allows users to choose a single item from a collapsible list of options.

## Example

Interact with this example to see how it works.

<ExampleContainer>
    <Example>
        <SelectBlock selectId="select1" label="Order by">
            <option value="published">Recently published</option>
            <option value="updated">Recently updated</option>
            <option value="views">Most views</option>
            <option value="comments">Most comments</option>
        </SelectBlock>
    </Example>
</ExampleContainer>

## When to use it

Only use a select component if you have no other option, because research shows many users have difficulty choosing items from dropdown lists. Also, select components are implemented differently on various devices, and can be especially problematic on mobiles. [Watch a video about how some users struggle with select components](https://www.youtube.com/watch?v=CUkMCQR4TpY).

Consider using [radio buttons](/components/Radios) or [checkboxes](/components/Checkboxes) instead of a select dropdown.

## How it works

The select component allows users to choose an option from a list, usually more than 6 and fewer than 15 options.

Before deciding to use a select component, do some research with users to find out if fewer options are feasible. If you can reduce the list to 6 items or fewer, use [radio buttons](/components/Radios) instead.

## Credit

Guidance, original HTML and CSS derived from [GOV.UK Design System](https://github.com/alphagov/govuk-frontend).

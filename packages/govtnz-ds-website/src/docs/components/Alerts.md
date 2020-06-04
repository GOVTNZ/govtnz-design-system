<P styleSize="large">This is the header and main navigation of your site.</P>

## How it works

Alerts can be either 'static' (unchanging) or 'live' (dynamically updated by JavaScript to give live feedback).

## Examples

Interact with each example to see how it works.

<ExampleContainer>
    <Example title="Example: Alerts (static)">
        <Alert level="info" headingId="heading1">
            <H2 id="heading1">Info: You are alive</H2>
            <P>Some text describing what's going on 1.</P>
        </Alert>
         <Alert level="warning" headingId="heading2">
            <H2 id="heading2">Warning: You are alive</H2>
            <P>Some text describing what's going on 2.</P>
        </Alert>
         <Alert level="success" headingId="heading3">
            <H2 id="heading3">Success: You are alive</H2>
            <P>Some text describing what's going on 3.</P>
        </Alert>
         <Alert level="error" headingId="heading4">
            <H2 id="heading4">Error: You are alive</H2>
            <Ul bulleted>
                <li><a href="#">Error in this field 4</a></li>
            </Ul>
        </Alert>
    </Example>
</ExampleContainer>

test

<ExampleContainer>
    <Example title="Example: Alerts (static)">
        <Alert level="info" headingId="heading5" mode="live">
            <H2 id="heading5">Info: You are alive</H2>
            <P>Some text describing what's going on 5.</P>
        </Alert>
         <Alert level="warning" headingId="heading6" mode="live">
            <H2 id="heading6">Warning: You are alive </H2>
            <P>Some text describing what's going on 6.</P>
        </Alert>
         <Alert level="success" headingId="heading7" mode="live">
            <H2 id="heading7">Success: You are alive</H2>
            <P>Some text describing what's going on 7.</P>
        </Alert>
         <Alert level="error" headingId="heading8" mode="live">
            <H2 id="heading8">Error: You are alive</H2>
            <Ul bulleted>
                <li><a href="#">Error in this field 8.</a></li>
            </Ul>
        </Alert>
    </Example>
</ExampleContainer>

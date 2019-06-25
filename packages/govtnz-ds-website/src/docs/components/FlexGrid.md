<P styleSize="large">Use our flexible grid to structure website content. The grid is mobile-first, powered by Flexbox, and based on a 12-column system. The grid includes gutters, column spanning, 4 breakpoints, and column alignment.</P>

## How it works

The grid system uses a series of containers, rows, and columns to lay out and align content.

The following layout (non-responsive) example creates three equal-width columns on tablet, desktop, and widescreen devices using our predefined grid classes. Those columns are centered in the page with the parent flex container.

<div class="flexgrid-preview">
<ExampleContainer>
    <ExampleHeading>3-column Flexbox grid</ExampleHeading>
    <Example title="Example: 3-column Flexbox grid">
        <FlexContainer width="fixed">
            <FlexRow>
                <FlexColumn xs="4" sm="4" md="4" lg="4"> .g-flex-col .g-flex-col-md-4 </FlexColumn>
                <FlexColumn xs="4" sm="4" md="4" lg="4"> .g-flex-col .g-flex-col-md-4 </FlexColumn>
                <FlexColumn xs="4" sm="4" md="4" lg="4"> .g-flex-col .g-flex-col-md-4 </FlexColumn>
            </FlexRow>
        </FlexContainer>
    </Example>
</ExampleContainer>
</div>

### Containers

Flex container width can be fixed or fluid. The fixed container fills the available width until it reaches the maximum of 1366 pixels.

The fluid container has no constraints and fills all of the available space. This is ideal for display uses, such as widescreen HD display.

### Rows

All columns must have a flex row as a parent.

### Columns

Our 12-column grid has gutters, column spanning, four breakpoints, and column alignment.

The "md" in the above example refers to the breakpoint size. Here's the full range of breakpoint options:

- xs = minimum width of 0 pixels
- sm = minimum width of 768 pixels
- md = minimum width of 1024 pixels
- lg = minimum width of 1200 pixels

We also support offsets to allow flexibility of design, essentially allowing blank columns to assist aesthetics in layout.

The following example shows all the possible variants of column widths.

<div class="flexgrid-preview">
<ExampleContainer>
    <ExampleHeading>Flexgrid column variants</ExampleHeading>
    <Example title="Example: Flexgrid column variants (Flexbox grid)">
        <FlexContainer width="fixed">
            <FlexRow>
                <FlexColumn xs="4" sm="4" md="4" lg="4"> .g-flex-col .g-flex-col-md-4 </FlexColumn>
                <FlexColumn xs="4" sm="4" md="4" lg="4"> .g-flex-col .g-flex-col-md-4 </FlexColumn>
                <FlexColumn xs="4" sm="4" md="4" lg="4"> .g-flex-col .g-flex-col-md-4 </FlexColumn>
                <FlexColumn xs="6" sm="6" md="6" lg="6"> .g-flex-col .g-flex-col-md-6 </FlexColumn>
                <FlexColumn xs="6" sm="6" md="6" lg="6"> .g-flex-col .g-flex-col-md-6 </FlexColumn>
                <FlexColumn xs="12" sm="12" md="12" lg="12"> .g-flex-col .g-flex-col-lg-12 </FlexColumn>
                <FlexColumn xs="1" sm="1" md="1" lg="1"> 1/12 </FlexColumn>
                <FlexColumn xs="11" sm="11" md="11" lg="11"> 11/12 </FlexColumn>
                <FlexColumn xs="2" sm="2" md="2" lg="2"> 2/12 </FlexColumn>
                <FlexColumn xs="10" sm="10" md="10" lg="10"> 10/12 </FlexColumn>
                <FlexColumn xs="3" sm="3" md="3" lg="3"> 3/12 </FlexColumn>
                <FlexColumn xs="9" sm="9" md="9" lg="9"> 9/12 </FlexColumn>
                <FlexColumn xs="4" sm="4" md="4" lg="4"> 4/12 </FlexColumn>
                <FlexColumn xs="8" sm="8" md="8" lg="8"> 8/12 </FlexColumn>
                <FlexColumn xs="5" sm="5" md="5" lg="5"> 5/12 </FlexColumn>
                <FlexColumn xs="7" sm="7" md="7" lg="7"> 7/12 </FlexColumn>
                <FlexColumn xs="6" sm="6" md="6" lg="6"> 6/12 </FlexColumn>
                <FlexColumn xs="6" sm="6" md="6" lg="6"> 6/12 </FlexColumn>
                <FlexColumn xs="7" sm="7" md="7" lg="7"> 7/12 </FlexColumn>
                <FlexColumn xs="5" sm="5" md="5" lg="5"> 5/12 </FlexColumn>
                <FlexColumn xs="8" sm="8" md="8" lg="8"> 8/12 </FlexColumn>
                <FlexColumn xs="4" sm="4" md="4" lg="4"> 4/12 </FlexColumn>
                <FlexColumn xs="9" sm="9" md="9" lg="9"> 9/12 </FlexColumn>
                <FlexColumn xs="3" sm="3" md="3" lg="3"> 3/12 </FlexColumn>
                <FlexColumn xs="10" sm="10" md="10" lg="10"> 10/12 </FlexColumn>
                <FlexColumn xs="2" sm="2" md="2" lg="2"> 2/12 </FlexColumn>
                <FlexColumn xs="11" sm="11" md="11" lg="11"> 11/12 </FlexColumn>
                <FlexColumn xs="1" sm="1" md="1" lg="1"> 1/12 </FlexColumn>
            </FlexRow>
        </FlexContainer>
    </Example>
</ExampleContainer>
</div>

## Why use a Flexbox grid?

We chose Flexbox because it's implemented by our supported browsers. We have labelled this grid type "Flex" so that we can add other grid types later. We're considering adding support for CSS Grid.

## Credit

Original HTML and CSS derived from [FlexboxGrid](http://flexboxgrid.com/) version 6.3.2. Licensed under [the Apache Licence version 2.0](https://github.com/kristoferjoseph/flexboxgrid).

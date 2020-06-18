<P styleSize="large">This is the footer of your site.</P>

## How it works

`Footer` is a simple container component for arbitary content.

## Examples

Interact with each example to see how it works.

Please note that only the `Footer` component is part of the example. The other HTML/components are for example purposes only, and are optional. The grid is not required.

<ExampleContainer>
    <Example title="Example: Footer">
        <Footer>
            <FlexContainer width="fixed">
                <FlexRow>
                    <FlexColumn xs="12" sm="12" md="12" lg="12">
                        <FooterLinks>
                            <FooterLink href="#">Contact Us</FooterLink>
                            <FooterLink href="#">Privacy</FooterLink>
                            <FooterLink href="#">Copyright</FooterLink>
                        </FooterLinks>
                    </FlexColumn>
                </FlexRow>
            </FlexContainer>
            <Subfooter>
                <FlexContainer width="fixed">
                    <FlexRow xsReversed="true" smReversed="false" mdReversed="false" lgReversed="false"  xsVerticalAlign="middle" smVerticalAlign="middle" mdVerticalAlign="middle" lgVerticalAlign="middle" className="example-subfooter-row">
                        <FlexColumn xs="12" sm="5" md="5" lg="5" className="example-subfooter-copyright">
                            &copy; Crown Copyright 2020
                        </FlexColumn>
                        <FlexColumn xs="12" sm="7" md="7" lg="7" xsHorizontalAlign="start" smHorizontalAlign="end" mdHorizontalAlign="end" lgHorizontalAlign="end">
                            <a href="https://www.govt.nz/">
                                <NzgLogo id="nzg-logo" className="example-subfooter-logo" />
                            </a>
                        </FlexColumn>
                    </FlexRow>
                </FlexContainer>
            </Subfooter>
        </Footer>
    </Example>

</ExampleContainer>

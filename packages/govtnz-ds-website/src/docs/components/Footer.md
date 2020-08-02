<P styleSize="large">The footer provides links to copyright, contact and privacy information about your website.</P>

## Example

Interact with the example to see how it works.

<ExampleContainer>
    <ExampleHeading></ExampleHeading>
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
                            <a href="https://www.govt.nz/" className="example-invert-logo">
                                <NzgLogo id="nzg-logo" />
                            </a>
                        </FlexColumn>
                    </FlexRow>
                </FlexContainer>
            </Subfooter>
        </Footer>
    </Example>

</ExampleContainer>

## When to use it

Use the footer at the bottom of every page of your website.

## How it works

The footer component is a container that includes links to:

- Govt.nz using the English or te reo Māori version of the All-of-Government brand lockup
- your site's contact information, copyright and privacy statements (link targets are for you to set).

Including these links helps your website meet several requirements of the [Web Usability Standard](https://www.digital.govt.nz/standards-and-guidance/nz-government-web-standards/web-usability-standard-1-3/) for public facing sites. For internally facing websites, the above requirements do not apply and the links can be safely removed without failing the Web Usability Standard.

## Credit

Guidance, original HTML and CSS derived from [GOV.UK Design System](https://github.com/alphagov/govuk-frontend).

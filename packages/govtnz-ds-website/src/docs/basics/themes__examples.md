# Themes

Themes are used to customise your website’s colour and typography to align with your organisation’s branding. The example shows how you’ll be able to apply themes after the Design System comes out of Alpha.

## Example themes

Select one of the following 3 theme options to see how Design System components adapt to different colour schemes. Anything you type in the text fields will remain when you switch between themes. No information is sent if you select the ‘Submit’ button.

### Select a theme

Select one of the following themes to automatically apply it to the example.

<ExampleContainer>
    <Example title="Example: Header containing a MainNav" noPadding>
        <Header>
            <MainNavMobileMenuContext>
                <FlexContainer width="fluid">
                    <FlexRow xsVerticalAlign="middle" smVerticalAlign="middle" mdVerticalAlign="middle" lgVerticalAlign="middle">
                        <FlexColumn xs="8" sm="5" md="4" lg="3">
                            <a href="/" target="_blank" className="example-invert-logo">
                                <DiaLogo id="dia-logo"></DiaLogo>
                            </a>
                        </FlexColumn>
                        <FlexColumn xs="4" sm="hidden" md="hidden" lg="hidden">
                        </FlexColumn>
                        <FlexColumn xs="12" sm="7" md="8" lg="9" >
                            <MainNav id="menuContainer" button="Menu">
                                <MainNavLink href="/" ariaCurrent="page">Services</MainNavLink>
                                <MainNavLink href="/">Resources</MainNavLink>
                                <MainNavLink href="/">News</MainNavLink>
                                <MainNavLink href="/">About</MainNavLink>
                                <MainNavLink href="/">Contact</MainNavLink>
                            </MainNav>
                        </FlexColumn>
                    </FlexRow>
                </FlexContainer>
            </MainNavMobileMenuContext>
        </Header>
        <main role="main" id="main-content" className="main-content theme-main">
            <FlexContainer width="fixed">
                <FlexRow>
                    <FlexColumn xs="12" sm="12" md="12" lg="12">
                        <H1>Contact us</H1>
                        <P styleSize="large">Send a message to let us know about the issue you’re having.</P>
                        <InputBlock type="text" label="What’s your name?" name="anyName" id="anyNameId" />
                        <InputBlock type="email" label="What’s your email address?" name="email" id="anyEmailId"/>
                        <FieldsetBlock
                            legend={
                            <H2 styleSize="small" id="whereLiveTitle">
                                What’s your issue about?
                            </H2>
                            }
                        >
                            <RadioBlock
                                label="Our website"
                                id="radioIssue1"
                                name="issueType"
                            />
                            <RadioBlock
                                label="Our service"
                                id="radioIssue2"
                                name="issueType"
                            />
                            <RadioBlock
                                label="Something else"
                                id="radioIssue3"
                                name="issueType"
                            />
                        </FieldsetBlock>
                        <TextareaBlock
                            label="What's your message?"
                            id="comments"
                            name="comments"
                            cols={20} 
                        />
                        <Button>Submit</Button>
                    </FlexColumn>
                </FlexRow>
            </FlexContainer>
        </main>
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
                    <FlexRow
                        xsReversed="true"
                        smReversed="false"
                        mdReversed="false"
                        lgReversed="false"
                        xsVerticalAlign="middle"
                        smVerticalAlign="middle"
                        mdVerticalAlign="middle"
                        lgVerticalAlign="middle"
                        className="example-subfooter-row"
                    >
                        <FlexColumn
                            xs="12"
                            sm="5"
                            md="5"
                            lg="5"
                            className="example-subfooter-copyright"
                        >
                            &copy; Crown Copyright 2020
                        </FlexColumn>
                        <FlexColumn
                            xs="12"
                            sm="7"
                            md="7"
                            lg="7"
                            xsHorizontalAlign="start"
                            smHorizontalAlign="end"
                            mdHorizontalAlign="end"
                            lgHorizontalAlign="end"
                        >
                            <a href="https://www.govt.nz/" className="example-invert-logo">
                                <NzgLogo id="nzg-logo"></NzgLogo>
                            </a>
                        </FlexColumn>
                    </FlexRow>
                </FlexContainer>
            </Subfooter>
        </Footer>
    </Example>

</ExampleContainer>

## Customising a theme

You can customise the Design System theme to follow your brand guidelines by altering the values in the [Sass variables file](https://github.com/GOVTNZ/govtnz-design-system/blob/master/packages/govtnz-ds/build/scss/_settings.scss).

We encourage you to make the look, feel, and usability of elements as consistent as possible with the Design System. And when you customise, make sure your visual elements continue to meet the NZ [Government Web Accessibility Standard](https://www.digital.govt.nz/standards-and-guidance/nz-government-web-standards/web-accessibility-standard-1-1/).

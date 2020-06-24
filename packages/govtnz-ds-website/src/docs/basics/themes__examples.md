# Themes Example

<ExampleContainer>
    <Example title="Example: Header containing a MainNav">
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
        <p>Page content...</p>        
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

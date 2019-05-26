import React from 'react';
import Container from '@govtnz/ds/build/react-ts/FlexContainer';
import Row from '@govtnz/ds/build/react-ts/FlexRow';
import Column from '@govtnz/ds/build/react-ts/FlexColumn';
//import Search from './search'
import LogoLockUp from './LogoLockUp';
import NavigationLarge from './navigationLarge';
import NavigationSmall from './navigationSmall';

import './header.scss';

type Props = {
  siteTitle: string;
};

const Header = ({ siteTitle }: Props) => (
  <header id="header" role="banner">
    <div className="header">
      <Container width="fixed">
        <Row>
          <Column xs="10" sm="10" md="8" lg="8">
            <LogoLockUp siteTitle={siteTitle} />
          </Column>
          <Column xs="2" sm="2" md="4" lg="4">
            <NavigationSmall siteTitle={siteTitle} />
          </Column>
        </Row>
      </Container>
    </div>
    <NavigationLarge />
  </header>
);

export default Header;

import React from 'react';
import NavigationItem from './navigationItem';
import Container from '@govtnz/ds/build/react-ts/FlexContainer';
import Row from '@govtnz/ds/build/react-ts/FlexRow';
import './navigation-large.scss';

const NavigationLarge = () => {
  return (
    <nav className="navigation-large" aria-label="Main menu">
      <Container width="fixed">
        <Row>
          <ul className="navigation-large__list">
            <NavigationItem to="/get-started/" label="Get started" />
            <NavigationItem to="/basics/" label="Basics" />
            <NavigationItem to="/components/" label="Components" />
            <NavigationItem to="/patterns/" label="Patterns" />
            <NavigationItem
              to="/community/"
              label="Community"
              disabled={true}
            />
            <NavigationItem to="/about/" label="About" disabled={true} />
          </ul>
        </Row>
      </Container>
    </nav>
  );
};

export default NavigationLarge;

import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '@govtnz/ds/build/react-ts/FlexContainer';
import Row from '@govtnz/ds/build/react-ts/FlexRow';
import Column from '@govtnz/ds/build/react-ts/FlexColumn';
import H1 from '@govtnz/ds/build/react-ts/H1';
import H2 from '@govtnz/ds/build/react-ts/H2';
import H3 from '@govtnz/ds/build/react-ts/H3';
import P from '@govtnz/ds/build/react-ts/P';
import A from '@govtnz/ds/build/react-ts/A';
import Ul from '@govtnz/ds/build/react-ts/Ul';
import Li from '@govtnz/ds/build/react-ts/Li';

import GetInTouch from '../components/GetInTouch';
import { Link } from 'gatsby';

const IndexPage = (props) => (
  <Layout {...props}>
    <SEO
      title="Privacy | Design System - Alpha"
      keywords={[
        'government',
        `design system`,
        `nz`,
        'pattern library',
        'style guide',
      ]}
    />
    <Container width="fixed">
      <Row>
        <Column xs="12" sm="12" md="9" lg="8" mdOffset="1" lgOffset="1">
          <H1 styleSize="xlarge" id="main-heading">
            Copyright and attribution
          </H1>
          <P styleSize="large">
            Nearly all Digital.govt.nz content is licensed under Creative
            Commons.
          </P>
          <P>
            This means you must make it clear that any content you use comes
            from the Digital.govt.nz website and is owned by the Crown. Unless
            noted as an exception, or on specific items or collections of
            content:
          </P>
          <Ul>
            <Li>
              any copyright in content on Digital.govt.nz is owned by the New
              Zealand Crown
            </Li>
            <Li>
              the Department of Internal Affairs (on behalf of the Crown)
              licenses you to copy, distribute and adapt that content in
              accordance with the Creative Commons Attribution (CC-BY) 4.0
              International Licence.
            </Li>
          </Ul>
          <P>
            Under the terms of the licence, you must attribute the content to
            the Crown and the Digital.govt.nz website.
          </P>
          <P>
            <A href="https://creativecommons.org/licenses/by/4.0/">
              CC-BY 4.0 international licence terms
            </A>
          </P>
          <H2 styleSize="large">Exceptions</H2>
          <H3 styleSize="medium">Government logos</H3>
          <P>
            The New Zealand Government logo, Coat of Arms and other logos,
            emblems and trade marks on Digital.govt.nz are protected by law. You
            must not copy or use any logo, emblem or trade mark without express
            permission and compliance with applicable laws.
          </P>
          <H3 styleSize="medium">Photographs and images</H3>
          <P>
            Copyright in photographs on Digital.govt.nz is not owned or licensed
            to you by the Crown. Unless otherwise stated in relation to specific
            photographs, you cannot copy, distribute or adapt any photograph
            without the agreement of the copyright owner.
          </P>
          <GetInTouch title="this" />
        </Column>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;

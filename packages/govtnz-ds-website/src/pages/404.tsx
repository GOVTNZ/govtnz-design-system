import React from 'react';
import { PageRendererProps } from 'gatsby';
import H1 from '@govtnz/ds/build/react-ts/H1';
import P from '@govtnz/ds/build/react-ts/P';
import A from '@govtnz/ds/build/react-ts/A';
import GetInTouch from '../components/GetInTouch';
import Container from '@govtnz/ds/build/react-ts/FlexContainer';
import Row from '@govtnz/ds/build/react-ts/FlexRow';
import Column from '@govtnz/ds/build/react-ts/FlexColumn';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = (pageProps: PageRendererProps) => (
  <Layout {...pageProps}>
    <SEO title="Missing Page - (HTTP 404)" />
    <Container width="fixed">
      <Row>
        <Column xs="12" sm="12" md="9" lg="8" mdOffset="1" lgOffset="1">
          <H1 styleSize="xlarge" id="main-heading">
            Missing Page - (HTTP 404)
          </H1>
          <P styleSize="large">
            Sorry, this issue has been logged and we'll look into it.
          </P>
          <P styleSize="large">
            {/* Intetentionally a <a> hyperlink not a <Link> because we want a full page refresh in case that was a bug that caused a 404 */}
            Go to <A href="/">the homepage</A> or tell us what you were looking
            for:
          </P>
          <GetInTouch title="this" />
        </Column>
      </Row>
    </Container>
  </Layout>
);

export default NotFoundPage;

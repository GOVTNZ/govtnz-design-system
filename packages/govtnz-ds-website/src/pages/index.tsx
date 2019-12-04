import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Container from '@govtnz/ds/build/react-ts/FlexContainer';
import '@govtnz/ds/build/css/FlexContainer.css';
import Row from '@govtnz/ds/build/react-ts/FlexRow';
import '@govtnz/ds/build/css/FlexRow.css';
import Column from '@govtnz/ds/build/react-ts/FlexColumn';
import '@govtnz/ds/build/css/FlexColumn.css';
import H1 from '@govtnz/ds/build/react-ts/H1';
import '../commons/styles/ds/themed-H1.scss';
import H2 from '@govtnz/ds/build/react-ts/H2';
import '../commons/styles/ds/themed-H2.scss';
import H3 from '@govtnz/ds/build/react-ts/H3';
import '../commons/styles/ds/themed-H3.scss';

import P from '@govtnz/ds/build/react-ts/P';
import '../commons/styles/ds/themed-P.scss';
import A from '@govtnz/ds/build/react-ts/A';
import '../commons/styles/ds/themed-A.scss';
import Ul from '@govtnz/ds/build/react-ts/Ul';
import '../commons/styles/ds/themed-Ul.scss';
import Li from '@govtnz/ds/build/react-ts/Li';
import '../commons/styles/ds/themed-Li.scss';

import InsetText from '../components/InsetText';

import '../commons/styles/components-banner.scss';
import '../commons/styles/components-card.scss';
import Icon from '../components/Icon';
import HeroIcon from '../commons/svgs/icon-home-hero.svg';
import BasicsIcon from '../commons/svgs/icon-home-basics.svg';
import ComponentsIcon from '../commons/svgs/icon-home-components.svg';
import PatternsIcon from '../commons/svgs/icon-home-patterns.svg';

// import { Details, Summary } from 'react-accessible-details'

const IndexPage = props => {
  return (
    <Layout path={props.path}>
      <SEO
        title="Design System - Alpha"
        description=""
        keywords={[
          'government',
          `design system`,
          `nz`,
          'pattern library',
          'style guide',
        ]}
        robots={true}
      />
      <div className="banner banner--green">
        <Container width="fixed">
          <Row>
            <Column xs="12" sm="8" md="7" lg="6" lgOffset="1">
              <H1 styleSize="xlarge" id="main-heading">
                Design system for NZ public sector websites
              </H1>
              <P styleSize="large">
                Design and build fast, accessible websites backed by user
                research, so New Zealanders can easily use government services
                online.
              </P>
            </Column>
            <Column xs="12" sm="3" md="4" lg="4">
              <Icon
                className="banner__icon"
                role="presentation"
                id={HeroIcon.id}
              />
            </Column>
          </Row>
        </Container>
      </div>
      <Container width="fixed">
        <Row>
          <Column xs="12" sm="12" md="9" lg="8" mdOffset="1" lgOffset="1">
            <P styleSize="medium">
              The all-of-government (AOG) design system alpha is a catalogue of
              reusable basic elements, components, and patterns for building
              websites and applications, along with guidance on how and when to
              use them.
            </P>
            <P styleSize="medium">
              <A href="https://www.digital.govt.nz/digital-government/leadership-and-governance/government-chief-digital-officer-gcdo/who-supports-the-gcdo/">
                Government Information Services
              </A>{' '}
              is creating the design system now, and you can contribute. This
              alpha site shows you what we have built so far, what we're working
              on, and how you can get involved.
            </P>
            <span className="hr hr--large" />
            <H2 styleSize="large">Benefits of the design system</H2>
            <P styleSize="medium">
              A design system builds on a pattern library and style guide — it’s
              all the design standards, documentation, principles and UI
              components you need to prototype and develop digital experiences.
              You get a play box of building blocks from which you can construct
              new websites or improve existing ones.
            </P>
            <P styleSize="medium">
              With the AOG design system, you will soon be able to:
            </P>
            <Ul bulleted>
              <Li>
                prototype, design, and develop websites quickly and efficiently
              </Li>
              <Li>
                select basic elements, components, and patterns that meet the{' '}
                <A href="https://www.digital.govt.nz/standards-and-guidance/nz-government-web-standards/">
                  NZ Government Web Standards
                </A>
                .
              </Li>
            </Ul>
            <InsetText>
              Accessibility and usability are built into every level of the
              design, code, and content.
            </InsetText>
            <H3 styleSize="medium">Leading best practice</H3>
            <P styleSize="medium">
              The New Zealand design system is based on the tried and tested{' '}
              <A href="https://design-system.service.gov.uk/">
                GOV.UK design system
              </A>
              , mixed with the best from the{' '}
              <A href="https://designsystem.digital.gov/">
                United States Web Design System
              </A>{' '}
              (USWDS) and the{' '}
              <A href="https://designsystem.gov.au/">
                Australian Government Design System
              </A>
              , plus some cutting-edge Kiwi innovations. By choosing the AOG
              design system, you can be confident you are at the forefront of
              international best practice.
            </P>
            <P styleSize="medium">
              New Zealanders — your users — will find consistent design and
              functionality across public service websites when the design
              system is implemented. This consistency will breed familiarity,
              increasing user trust and participation in government digital
              services.
            </P>
            <Row>
              <Column xs="12" sm="6" md="4" lg="4">
                <div className="card">
                  <div className="card__icon-container">
                    <Icon
                      className="card__icon"
                      role="presentation"
                      id={BasicsIcon.id}
                    />
                  </div>
                  <H3 styleSize="medium">Basics</H3>
                  <P styleSize="medium">
                    Guidance for applying basic elements, like colour and
                    typography. We’re working on layout, iconography, images,
                    and media now.
                  </P>
                  <P styleSize="medium">
                    <Link to="/basics/">Browse some basics</Link>
                  </P>
                </div>
              </Column>
              <Column xs="12" sm="6" md="4" lg="4">
                <div className="card">
                  <div className="card__icon-container">
                    <Icon
                      className="card__icon"
                      role="presentation"
                      id={ComponentsIcon.id}
                    />
                  </div>
                  <H3 styleSize="medium">Components</H3>
                  <P styleSize="medium">
                    Reusable multiple components for navigation, panels, forms,
                    tables, and more. We’re working on these now.
                  </P>
                  <P styleSize="medium">
                    <Link to="/components/">Browse some components</Link>
                  </P>
                </div>
              </Column>
              <Column xs="12" sm="6" md="4" lg="4">
                <div className="card">
                  <div className="card__icon-container">
                    <Icon
                      className="card__icon"
                      role="presentation"
                      id={PatternsIcon.id}
                    />
                  </div>
                  <H3 styleSize="medium">Patterns (coming soon)</H3>
                  <P styleSize="medium">
                    Help users by providing easy flows to complete specific
                    tasks, like setting up accounts, filling in forms, and
                    checking eligibility. We’ll be inviting you to co-design
                    some patterns with us soon.
                  </P>
                </div>
              </Column>
            </Row>
            <span className="hr hr--large" />
            <H2 styleSize="large">Get involved</H2>
            <P styleSize="medium">
              Since the AOG design system will be for everyone to use, we want a
              strong cross-government community backing it. Our overall aim is
              to improve digital service delivery across the New Zealand public
              service.
            </P>
            <P styleSize="medium">You can contribute by:</P>
            <Ul bulleted>
              <Li>testing our components and patterns</Li>
              <Li>helping to develop new components and patterns</Li>
              <Li>commenting on our guidance.</Li>
            </Ul>
            <H3 styleSize="medium">Get in touch</H3>
            <P styleSize="medium">
              If you have a question, idea, or suggestion about the design
              system, please get in touch through:
            </P>
            <Ul bulleted>
              <Li>
                email{' '}
                <A href="mailto:info@digital.govt.nz">info@digital.govt.nz</A>
              </Li>
              <Li>
                <A href="https://nz-aog-design-system.slack.com">
                  Slack &mdash; open in app
                </A>
              </Li>
              <Li>
                <A href="https://github.com/GOVTNZ/govtnz-design-system/issues">
                  Discuss GitHub issues
                </A>
              </Li>
            </Ul>
          </Column>
        </Row>
      </Container>
    </Layout>
  );
};

export default IndexPage;

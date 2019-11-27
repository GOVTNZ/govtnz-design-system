import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Note from '../components/Note';
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

// import { Details, Summary } from 'react-accessible-details'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Get started | Design System - Alpha"
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
            Get started
          </H1>
          <P styleSize="large">
            Find out how to start using the all-of-government (AOG) design
            system, whether you’re a designer, developer, content designer,
            product owner or project manager.
          </P>
          <H2 styleSize="large">Designer</H2>
          <P styleSize="medium">
            The design system gives designers a common visual style that you can
            apply flexibly to any government digital platform. Our visual style
            offers a clean aesthetic that meets the{' '}
            <A href="https://www.digital.govt.nz/web-accessibility-standard/">
              Web Accessibility Standard
            </A>
            , along with a design consistency that promotes an effortless user
            experience.
          </P>
          <P styleSize="medium">
            Since you may need to customise the basic elements to follow your
            brand guidelines, we encourage you to make their look, feel, and
            usability as consistent as possible with the design system. And when
            you customise, make sure your visual elements continue to meet the{' '}
            <A href="https://www.digital.govt.nz/web-accessibility-standard/">
              Web Accessibility Standard
            </A>
            .
          </P>
          <P styleSize="medium">
            For UX designers, we're working on tools to create high-fidelity
            prototypes. You can use these prototypes for user testing, and to
            help product owners and project managers visualise the end product.
          </P>

          <H2 styleSize="large">Developer</H2>
          <P styleSize="medium">
            Developers can pick and mix the building blocks for a webpage from
            the design system. Consistent UI components can slot into existing
            websites without conflicting with existing CSS. All components meet
            the{' '}
            <A href="https://www.w3.org/TR/WCAG21/">
              Web Content Accessibility Guidelines (WCAG) 2.1
            </A>
            .
          </P>
          <P styleSize="medium">
            <A href="https://github.com/GOVTNZ/govtnz-design-system/">
              Install instructions
            </A>{' '}
            can be found on our GitHub project.
          </P>
          <P styleSize="medium">
            The design system currently provides components in:
          </P>
          <Ul bulleted>
            <Li>HTML and CSS (or Sass (SCSS))</Li>
            <Li>
              <A href="https://reactjs.org/">React</A>, in JavaScript or
              TypeScript, with or without{' '}
              <A href="https://www.styled-components.com/">Styled Components</A>
            </Li>
            <Li>
              <A href="https://vuejs.org/">Vue</A> components, in JavaScript or
              TypeScript
            </Li>
            <Li>
              <A href="https://handlebarsjs.com/">Mustache / Handlebars</A>
            </Li>
          </Ul>
          <P styleSize="medium">Soon we will also be supporting:</P>
          <Ul bulleted>
            <Li>
              SilverStripe for{' '}
              <A href="https://www.silverstripe.org/">SilverStripe</A> 3 and 4.
            </Li>
          </Ul>
          <P styleSize="medium">
            More formats are under development, but if you have particular
            requirements please let us know via{' '}
            <A href="mailto:info@digital.govt.nz?subject=Design System enquiry">
              info@digital.govt.nz
            </A>
            .
          </P>
          <P styleSize="medium">
            For browsers, the design system is supporting Internet Explorer{' '}
            <abbr title="version">v</abbr>11 and latest versions of most other
            browsers. More information is available on our{' '}
            <A href="https://github.com/GOVTNZ/govtnz-design-system/">
              Github project
            </A>
            .
          </P>

          <H2 styleSize="large">Content Designer </H2>
          <P styleSize="medium">
            Components and patterns in the design system help content designers
            by providing a tried and tested structure for content that users can
            easily follow, and that meets the{' '}
            <A href="https://www.digital.govt.nz/web-usability-standard/">
              Web Usability Standard
            </A>
            . You can be confident that all form fields and templates meet the{' '}
            <A href="https://www.digital.govt.nz/web-accessibility-standard/">
              Web Accessibility Standard
            </A>
            .
          </P>
          <P styleSize="medium">
            Guidance on how best to write for each component and pattern is
            integral to the design system. For example, you'll get specific
            guidance for writing labels, help text, and error messages that work
            for forms.
          </P>
          <H2 styleSize="large">Product Owner and Project Manager</H2>
          <P styleSize="medium">
            Using the design system’s tested components and basic elements can
            help speed up project delivery.
          </P>
          <P styleSize="medium">
            Prototypes can be easily produced at any stage to:
          </P>
          <Ul bulleted>
            <Li>
              demonstrate your product vision to stakeholders to get buy-in
            </Li>
            <Li>enable more accurate scoping and planning</Li>
            <Li>speed up the prototyping and testing cycle</Li>
            <Li>help you to visualise the end-product during development.</Li>
          </Ul>
          <P styleSize="medium">You can confidently promote your product as:</P>
          <Ul bulleted>
            <Li>meeting all accessibility requirements</Li>
            <Li>focussed on usability</Li>
            <Li>being at the forefront of international best practice.</Li>
          </Ul>
          <GetInTouch title="this" />
        </Column>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;

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
            Privacy
          </H1>
          <P styleSize="large">
            This policy explains how and when Digital.govt.nz collects personal
            information, what we do with it and your right to see or change it.
          </P>
          <H2 styleSize="large">Purpose</H2>
          <P>
            The purpose of this privacy policy is to let users of
            Digital.govt.nz (the ‘site’) know when we collect personal
            information and what we do with it.
          </P>
          <P>
            The policy also covers the domain name management portal and the
            design system.
          </P>
          <P>
            <A href="https://dns.digital.govt.nz/login">
              Domain name management portal
            </A>
          </P>
          <P>
            <Link to="/" className="g-link">
              Design system
            </Link>
          </P>
          <P>
            We don’t use, share or transfer personal information in connection
            with the site except as set out in this policy, or as otherwise set
            out somewhere on the site (including in terms linking to the site).
          </P>
          <P>
            <A href="https://www.digital.govt.nz/home/about-digital-govt-nz/terms-of-use/">
              Terms of use
            </A>
          </P>
          <H2 styleSize="large">
            Collection, storage and use of personal information
          </H2>
          <H3 styleSize="medium">No need to disclose personal information</H3>
          <P>
            You can use the site — including completing user research tasks —
            without disclosing any personal information.
          </P>
          <H3 styleSize="medium">Your disclosure of personal information</H3>
          <P>
            You may choose to disclose personal information to us when you give
            feedback or in submission forms. This information can be viewed by
            site administrators, certain Department of Internal Affairs (DIA)
            staff and sometimes third-party contractors who administer or work
            on the site, or who work on special projects with us.
          </P>
          <P>
            Don’t send us sensitive personal information or include any
            sensitive personal information in submission forms.
          </P>
          <H3 styleSize="medium">Holding of information</H3>
          <P>
            If you provide personal information, it’s held by DIA. It may be
            shared with third-party contractors to the extent necessary for them
            to administer or work on the site, or to work on special projects
            with us. Email addresses are not made available to the public.
            Unless required by law, we won’t publicise the names or email
            addresses of individuals who provide feedback to us or who provide
            us with submission forms without their consent.
          </P>
          <H3 styleSize="medium">Use of personal information</H3>
          <P>
            We’ll only use personal information provided to us for the purpose
            of:
          </P>
          <Ul>
            <Li>administering, evaluating and improving the site</Li>
            <Li>improving our services, and</Li>
            <Li>
              communicating with you, including responding to your feedback and
              information provided in submission forms.
            </Li>
          </Ul>
          <H3 styleSize="medium">Feedback</H3>
          <P>
            Feedback is important and is used to evaluate and improve the site.
            If you provide feedback by email, that feedback is sent to
            appropriate DIA staff. We may pass on relevant comments to other
            people within DIA who administer or contribute content to the site.
            This could include your email address and other identifying
            information that you’ve provided.
          </P>
          <P>
            <A href="https://www.digital.govt.nz/home/about-digital-govt-nz/terms-of-use/">
              Terms of use
            </A>
          </P>
          <H3 styleSize="medium">Submission forms</H3>
          <P>
            If you provide us with a submission form, that submission form will
            be sent to appropriate public sector staff. We may pass on relevant
            content from that submission form to other people within DIA, other
            government agencies or third parties who administer or are
            participating in the particular project or consultation that the
            submission form relates to. This could include your email address
            and other identifying information.
          </P>
          <H2 styleSize="large">Statistical information and cookies</H2>
          <H3 styleSize="medium">Statistical information collected</H3>
          <P>
            We may collect statistical information about your visit to help us
            improve the site. This information is aggregated and doesn’t
            identify you personally. It includes:
          </P>
          <Ul>
            <Li>your IP address</Li>
            <Li>the search terms you used</Li>
            <Li>
              the pages you visited on our site and the links you clicked on
            </Li>
            <Li>the date and time you visited the site</Li>
            <Li>
              the referring site (if any) from which you clicked through to this
              site
            </Li>
            <Li>your operating system, for example Windows XP, Mac OS X</Li>
            <Li>
              the type of web browser you use, such as Internet Explorer, Chrome
              or Mozilla Firefox
            </Li>
            <Li>
              other things like your screen resolution and the language setting
              of your browser.
            </Li>
          </Ul>
          <h4>Use of statistical information</h4>
          <P>
            The statistical information referred to above can be viewed by site
            administrators and certain other DIA staff. It may also be shared
            with other government agencies.
          </P>
          <H3 styleSize="medium">Cookies</H3>
          <P>
            This site generates persistent session cookies (that is, they have
            an expiry date and are removed on that date) for the purpose of
            monitoring site usage. The cookies don’t collect personal
            information. You can disable them or clear them out of your web
            browser without affecting your ability to use the site.
          </P>
          <H2 styleSize="large">Records and disclosure statement</H2>
          <H3 styleSize="medium">
            Public records, official information and parliament
          </H3>
          <P>
            Your emails and contributions to the site may constitute public
            records and be retained to the extent required by the Public Records
            Act 2005. DIA may also need to disclose those materials under the
            Official Information Act 1982 or to a Parliamentary Select Committee
            or parliament in response to a parliamentary question.
          </P>
          <H2 styleSize="large">Correcting your personal information</H2>
          <H3 styleSize="medium">Your rights</H3>
          <P>
            Under the Privacy Act 1993, you have the right to access and ask us
            to correct any of your personal information provided to DIA in
            connection with your use of this site.
          </P>
          <P>Contact us if:</P>
          <Ul>
            <Li>
              you would like to see or change your personal information DIA has
              stored, or
            </Li>
            <Li>you have any concerns regarding your privacy.</Li>
          </Ul>
          <P>
            DIA may require proof of your identity before being able to provide
            you with any personal information.
          </P>
          <P>
            The Privacy Officer
            <br /> Department of Internal Affairs
            <br /> PO Box 805
            <br /> Wellington 6140
            <br /> Phone: <A href="tel:+64-4-495-7200">+64 4 495 7200</A>
            <br /> Email:{' '}
            <A href="mailto:privacy@dia.govt.nz">privacy@dia.govt.nz</A>
          </P>
          <H2 styleSize="large">If you have a privacy complaint</H2>
          <P>
            If you’re not satisfied with our response to any privacy-related
            concern you may have, you can contact the Privacy Commissioner.
          </P>
          <P>
            <A href="https://www.privacy.org.nz/about-us/contact/">
              Contact details for the Office of the Privacy Commissioner
            </A>
          </P>

          <GetInTouch title="this" />
        </Column>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;

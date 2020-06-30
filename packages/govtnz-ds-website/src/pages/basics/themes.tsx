import React, { useState, useEffect, useRef } from 'react';
import { PageRendererProps, Link } from 'gatsby';
import Layout from '../../components/layout';
import BasicsMenu from '../../components/basicsMenu';
import SEO from '../../components/seo';
import Container from '@govtnz/ds/build/react-ts/FlexContainer';
import Row from '@govtnz/ds/build/react-ts/FlexRow';
import Column from '@govtnz/ds/build/react-ts/FlexColumn';
import H1 from '@govtnz/ds/build/react-ts/H1';
import H2 from '@govtnz/ds/build/react-ts/H2';
import H3 from '@govtnz/ds/build/react-ts/H3';
import P from '@govtnz/ds/build/react-ts/P';
import FieldsetBlock from '@govtnz/ds/build/react-ts/FieldsetBlock';
import RadioBlock from '@govtnz/ds/build/react-ts/RadioBlock';
import '@govtnz/ds/build/css/RadioBlock.css';
import '@govtnz/ds/build/css/FieldsetBlock.css';
import CaptionL from '@govtnz/ds/build/react-ts/CaptionL';
import GetInTouch from '../../components/GetInTouch';
import ExampleHeading from '../../commons/ExampleHeading';

const ThemesPage = (pageProps: PageRendererProps) => {
  const [theme, setTheme] = useState<string>('theme-default');
  const [iframeHeight, setIframeHeight] = useState<string>('100vh');
  const iframeRef = useRef<HTMLIFrameElement>();
  const updateTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };

  const handleMessage = (e) => {
    console.log(e);

    if (e.origin !== window.location.origin) {
      console.info('Ignoring postMessage from', e.origin, e);
      return;
    }
    const data = e.data;
    const resizeById = data && data.resizeById;
    console.log({ resizeById });
    if (resizeById !== 'iframe_basicsthemes__examples0') {
      return;
    }
    const iframeHeightClamped = data.height > 150 ? data.height : 150;
    setIframeHeight(iframeHeightClamped);
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage, false);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  useEffect(() => {
    console.log(iframeRef);

    const iframeEl: HTMLIFrameElement | null = iframeRef.current;
    if (!iframeEl) {
      console.log('No iframe ref available.', iframeEl);
      return;
    }
    // @ts-ignore
    const domDocument = iframeEl.contentWindow?.document;
    if (!domDocument) {
      console.log('No iframe contentWindow document available.', domDocument);
      return;
    }
    const documentElement = domDocument.documentElement;
    if (!documentElement) {
      console.log('No iframe documentElement available.', documentElement);
      return;
    }
    const body: HTMLBodyElement = documentElement.getElementsByTagName(
      'body'
    )[0];

    if (!body) {
      console.log("Couldn't find <body>;");
      return;
    }

    body.classList.remove('theme-default');
    body.classList.remove('theme-light');
    body.classList.remove('theme-dark');

    body.classList.add(theme);
  }, [theme]);

  const humanReadableTheme = {
    'theme-default': 'Default theme',
    'theme-light': 'Light theme',
    'theme-dark': 'Dark theme',
  }[theme];

  return (
    <Layout {...pageProps}>
      <SEO
        title="Themes | Design System - Alpha"
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
          <Column xs="12" sm="3" md="2" lg="2">
            <BasicsMenu pageProps={pageProps} />
          </Column>
          <Column xs="12" sm="9" md="8" lg="8">
            <CaptionL>Basics</CaptionL>
            <H1 styleSize="xlarge" id="main-heading">
              Themes
            </H1>

            <P styleSize="large">
              Themes are used to customise your website’s colour and typography
              to align with your organisation’s branding. The example shows how
              you’ll be able to apply themes after the Design System comes out
              of Alpha.
            </P>

            <H2 styleSize="large">Example themes</H2>
            <p>
              Select one of the following 3 theme options to see how Design
              System components adapt to different colour schemes. Anything you
              type in the text fields will remain when you switch between
              themes. No information is sent if you select the ‘Submit’ button.
            </p>

            <div className="g-ds-font">
              <FieldsetBlock
                legend={
                  <H3 styleSize="medium" id="whereLiveTitle">
                    Choose a theme
                  </H3>
                }
                hintId="selectAThemeHintId"
                hint={
                  <p>
                    Select one of the following themes to automatically apply it
                    to the example.
                  </p>
                }
              >
                <RadioBlock
                  label="Default theme"
                  id="radio1"
                  name="theme"
                  value="theme-default"
                  checked={theme === 'theme-default'}
                  onChange={updateTheme}
                />
                <RadioBlock
                  label="Light theme"
                  id="radio2"
                  name="theme"
                  value="theme-light"
                  checked={theme === 'theme-light'}
                  onChange={updateTheme}
                />
                <RadioBlock
                  label="Dark theme"
                  id="radio3"
                  name="theme"
                  value="theme-dark"
                  checked={theme === 'theme-dark'}
                  onChange={updateTheme}
                />
              </FieldsetBlock>
            </div>

            <div className="example__container ">
              <ExampleHeading>{humanReadableTheme}</ExampleHeading>
              <div className="example">
                <div className="example__iframe-link-container">
                  <a
                    className="g-link"
                    href={`/basics/themes__examples__example0.html#${theme}`}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Open this <span className="visually-hidden"> Themes</span>{' '}
                    example in a new window
                  </a>
                </div>
                <div className="example__iframe-wrapper">
                  <iframe
                    src={`/basics/themes__examples__example0.html#${theme}`}
                    title=""
                    style={{ width: '100%', height: iframeHeight }}
                    ref={iframeRef}
                    className="example__iframe"
                  ></iframe>
                </div>
              </div>
            </div>

            <H2 styleSize="large">Customising a theme</H2>
            <p>
              You can customise the Design System theme to follow your brand
              guidelines by altering the values in the{' '}
              <a
                href="https://github.com/GOVTNZ/govtnz-design-system/blob/master/packages/govtnz-ds/build/scss/_settings.scss"
                target="_blank"
                rel="noreferrer noopener"
              >
                Sass variables
              </a>{' '}
              file.
            </p>
            <p>
              We encourage you to make the look, feel, and usability of elements
              as consistent as possible with the Design System. And when you
              customise, make sure your visual elements continue to meet the{' '}
              <a
                href="https://www.digital.govt.nz/web-accessibility-standard"
                target="_blank"
                rel="noreferrer noopener"
              >
                NZ Government Web Accessibility Standard
              </a>
              .
            </p>
            <H3 styleSize="medium">Colour</H3>
            <p>
              The colour palette provides a colour structure for your website.
              You’ll be able to adapt this to your digital brand’s colour
              requirements.
            </p>
            <p>
              <Link to="/basics/colours/">
                Read about the Design System colour structure
              </Link>
            </p>
            <H3 styleSize="medium">Typography</H3>
            <p>
              We’re investigating how to include font choice in the Design
              System to meet New Zealand language requirements. However, you may
              choose to use your own fonts on your website to align with your
              brand. If so, you’ll still need to make sure you meet the{' '}
              <a
                href="https://www.digital.govt.nz/web-accessibility-standard"
                target="_blank"
                rel="noreferrer noopener"
              >
                NZ Government Web Accessibility Standard
              </a>
              .
            </p>
            <p>
              <Link to="/basics/typography/">
                Read about the typography of the Design System
              </Link>
            </p>

            <GetInTouch title="Themes" />
          </Column>
        </Row>
      </Container>
    </Layout>
  );
};

export default ThemesPage;

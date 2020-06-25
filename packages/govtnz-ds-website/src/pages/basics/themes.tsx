import React, { useState, useEffect, useRef } from 'react';
import { PageRendererProps } from 'gatsby';
import Layout from '../../components/layout';
import BasicsMenu from '../../components/basicsMenu';
import SEO from '../../components/seo';
import Container from '@govtnz/ds/build/react-ts/FlexContainer';
import Row from '@govtnz/ds/build/react-ts/FlexRow';
import Column from '@govtnz/ds/build/react-ts/FlexColumn';
import H1 from '@govtnz/ds/build/react-ts/H1';
import FieldsetBlock from '@govtnz/ds/build/react-ts/FieldsetBlock';
import RadioBlock from '@govtnz/ds/build/react-ts/RadioBlock';
import '@govtnz/ds/build/css/RadioBlock.css';
import '@govtnz/ds/build/css/FieldsetBlock.css';
import CaptionL from '@govtnz/ds/build/react-ts/CaptionL';
import GetInTouch from '../../components/GetInTouch';

const ThemesPage = (pageProps: PageRendererProps) => {
  const [theme, setTheme] = useState('theme-default');
  const iframeRef = useRef<HTMLIFrameElement>();
  const updateTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };

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
            <CaptionL>Themes</CaptionL>
            <H1 styleSize="xlarge" id="main-heading">
              Themes
            </H1>

            <div className="g-ds-font">
              <FieldsetBlock
                legend={
                  <H1 styleSize="large" id="whereLiveTitle">
                    Choose a theme
                  </H1>
                }
              >
                <RadioBlock
                  label="Default"
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
              <div className="example">
                {/* <div className="example__iframe-link-container">
                  <a
                    className="g-link"
                    href="/basics/themes__examples__example0.html"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Open this <span className="visually-hidden"> Themes</span>{' '}
                    example in a new window
                  </a>
                </div> */}
                <div className="example__iframe-wrapper">
                  <iframe
                    src="/basics/themes__examples__example0.html"
                    title=""
                    style={{ width: '100%', height: '400px' }}
                    ref={iframeRef}
                    className="example__iframe"
                  ></iframe>
                </div>
              </div>
            </div>

            <GetInTouch title="Themes" />
          </Column>
        </Row>
      </Container>
    </Layout>
  );
};

export default ThemesPage;

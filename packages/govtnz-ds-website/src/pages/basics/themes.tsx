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

type Theme = {
  'g-theme-font-family': string;
  'g-theme-color-heading': string;
  'g-theme-color-link': string;
  'g-theme-color-black': string;
  'g-theme-color-grey': string;
  'g-theme-color-darkblue': string;
  'g-theme-color-brand-1': string;
  'g-theme-color-light-grey': string;
  'g-theme-color-mid-grey': string;
  'g-theme-color-white': string;
  'g-theme-color-brand-2': string;
  'g-theme-color-brand-3': string;
  'g-theme-color-brand-4': string;
  'g-theme-color-dark2': string;
  'g-theme-color-dark3': string;
  'g-theme-color-dark4': string;
  'g-theme-color-dark5': string;
  'g-theme-color-dark6': string;
  'g-theme-color-dark7': string;
  'g-theme-color-dark8': string;
  'g-theme-color-dark9': string;
  'g-theme-color-dark10': string;
  'g-theme-color-dark11': string;
  'g-theme-button-color': string;
  'g-theme-button-color-hover-focus': string;
  'g-theme-button-color-secondary': string;
  'g-theme-button-color-secondary-hover-focus': string;
  'g-theme-button-color-secondary-box-shadow': string;
  'g-theme-button-color-warning': string;
  'g-theme-button-color-warning-hover-focus': string;
  'g-theme-button-color-warning-box-shadow': string;
  'g-theme-heading-font-weight': string;
};

function getColour(offset: string): string {
  return `#${offset}0${offset}0${offset}0`;
}

function getTheme(offset: string): Theme {
  return {
    'g-theme-font-family': offset ? 'sans-serif' : 'serif',
    'g-theme-color-heading': getColour(offset),
    'g-theme-color-link': getColour(offset),
    'g-theme-color-black': getColour(offset),
    'g-theme-color-grey': getColour(offset),
    'g-theme-color-darkblue': getColour(offset),
    'g-theme-color-brand-1': getColour(offset),
    'g-theme-color-light-grey': getColour(offset),
    'g-theme-color-mid-grey': getColour(offset),
    'g-theme-color-white': getColour(offset),
    'g-theme-color-brand-2': getColour(offset),
    'g-theme-color-brand-3': getColour(offset),
    'g-theme-color-brand-4': getColour(offset),
    'g-theme-color-dark2': getColour(offset),
    'g-theme-color-dark3': getColour(offset),
    'g-theme-color-dark4': getColour(offset),
    'g-theme-color-dark5': getColour(offset),
    'g-theme-color-dark6': getColour(offset),
    'g-theme-color-dark7': getColour(offset),
    'g-theme-color-dark8': getColour(offset),
    'g-theme-color-dark9': getColour(offset),
    'g-theme-color-dark10': getColour(offset),
    'g-theme-color-dark11': getColour(offset),
    'g-theme-button-color': getColour(offset),
    'g-theme-button-color-hover-focus': getColour(offset),
    'g-theme-button-color-secondary': getColour(offset),
    'g-theme-button-color-secondary-hover-focus': getColour(offset),
    'g-theme-button-color-secondary-box-shadow': getColour(offset),
    'g-theme-button-color-warning': getColour(offset),
    'g-theme-button-color-warning-hover-focus': getColour(offset),
    'g-theme-button-color-warning-box-shadow': getColour(offset),
    'g-theme-heading-font-weight': getColour(offset),
  };
}

const themes: Record<string, Theme> = {
  black: getTheme('0'),
  dark: getTheme('3'),
  mid: getTheme('7'),
  bright: getTheme('b'),
} as const;

const ThemesPage = (pageProps: PageRendererProps) => {
  const [theme, setTheme] = useState('black');
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

    const themeMap = themes[theme];

    Object.keys(themeMap).forEach((key: string) => {
      body.style.setProperty(`--${key}`, themeMap[key]);
    });

    console.log(themeMap);
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

            <div style={{ '--g-theme-font-family': 'Arial,sans-serif' }}>
              <FieldsetBlock
                legend={
                  <H1 styleSize="large" id="whereLiveTitle">
                    Choose a theme
                  </H1>
                }
              >
                <RadioBlock
                  label="Default"
                  id="anyRadioId3334"
                  name="where"
                  value="black"
                  onChange={updateTheme}
                />
                <RadioBlock
                  label="South Island"
                  id="anyRadioId42344"
                  name="where"
                  value="dark"
                  onChange={updateTheme}
                />
                <RadioBlock
                  label="Stewart Island"
                  id="anyRadioId5234"
                  name="where"
                  value="mid"
                  onChange={updateTheme}
                />
                <RadioBlock
                  label="Chatham Islands"
                  id="anyRadioId6234"
                  name="where"
                  value="bright"
                  onChange={updateTheme}
                />
              </FieldsetBlock>
            </div>

            <iframe
              src="/basics/themes_example__example0.html"
              title=""
              style={{ width: '100%', height: '400px' }}
              ref={iframeRef}
            ></iframe>

            <GetInTouch title="Themes" />
          </Column>
        </Row>
      </Container>
    </Layout>
  );
};

export default ThemesPage;

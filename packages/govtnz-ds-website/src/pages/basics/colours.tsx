import React from 'react';
import { PageRendererProps } from 'gatsby';
import Layout from '../../components/layout';
import BasicsMenu from '../../components/basicsMenu';
import ColorSwatch from '../../components/ColorSwatch';
import TextColorSwatch from '../../components/TextColorSwatch';
import SEO from '../../components/seo';
import Container from '@govtnz/ds/build/react-ts/FlexContainer';
import Row from '@govtnz/ds/build/react-ts/FlexRow';
import Column from '@govtnz/ds/build/react-ts/FlexColumn';
import H1 from '@govtnz/ds/build/react-ts/H1';
import H2 from '@govtnz/ds/build/react-ts/H2';
import P from '@govtnz/ds/build/react-ts/P';
import A from '@govtnz/ds/build/react-ts/A';
import CaptionL from '@govtnz/ds/build/react-ts/CaptionL';
import GetInTouch from '../../components/GetInTouch';

const swatches = [
  [
    {
      colorCode: '#FFFFFF',
      colorName: 'White',
      description: '',
    },
    {
      colorCode: '#363636',
      colorName: 'Dark grey',
      description: '',
    },
    {
      colorCode: '#000000',
      colorName: 'Black',
      description: '',
    },
  ],
  [
    {
      colorCode: '#2A2A2A',
      colorName: 'Slate',
      description: '',
    },
  ],
  [
    {
      colorCode: '#363636',
      colorName: 'Dark grey',
      description: '',
    },
    {
      colorCode: '#595959',
      colorName: 'Mid grey',
      description: '',
    },
    {
      colorCode: '#D3D3D3',
      colorName: 'Light grey',
      description: '',
    },
    {
      colorCode: '#F4F4F4 ',
      colorName: 'Off white',
      description: '',
    },
  ],
  [
    {
      colorCode: '#23CBA5',
      colorName: 'Primary',
      description: '',
    },
    {
      colorCode: '#24A882',
      colorName: 'Primary 2',
      description:
        'A WCAG 3:1 contrast accessible colour for clickable elements and other objects that describe function.',
    },
    {
      colorCode: '#078766',
      colorName: 'Primary 3',
      description: 'A WCAG 4.5:1 contrast accessible colour for text.',
    },
  ],
  [
    {
      colorCode: '#B53CDE',
      colorName: 'Focus',
      description:
        'Only use this colour to indicate focus, such as moving from element to element.',
    },
    {
      colorCode: '#005DBB',
      colorName: 'Link',
      description:
        'We suggest using a blue hue to highlight link text, since this is common usage.',
    },
    {
      colorCode: '#000C48',
      colorName: 'Link active',
      description:
        'This ‘link active’ colour can be a darker tint of the ‘link text’ colour.',
    },
    {
      colorCode: '#4C2C92',
      colorName: 'Link visited',
      description: 'We recommend a purple hue to show a link has been visited.',
    },
  ],
  [
    {
      colorCode: '#B10E1E',
      colorName: 'Error',
      description: '',
    },
    {
      colorCode: '#D47500',
      colorName: 'Warning',
      description: '',
    },
    {
      colorCode: '#088A20',
      colorName: 'Success',
      description: '',
    },
    {
      colorCode: '#1F1BFB',
      colorName: 'Info',
      description: '',
    },
  ],
];

const ColoursPage = (pageProps: PageRendererProps) => (
  <Layout {...pageProps}>
    <SEO
      title="Colours | Design System - Alpha"
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
            Colours
          </H1>
          <P styleSize="large">
            The colour palette provides a colour structure for your website,
            which you will be able to adapt to the colours of your digital
            brand. Theming for the New Zealand Government Design System (NZGDS)
            palette is being worked on now, and will be available in the near
            future.
          </P>
          <P styleSize="medium">
            Colour choice for the design system was based on a survey of the
            palettes used on websites of 15 core New Zealand government
            agencies. We grouped these colours by hue and brightness, and
            discovered they fell into distinct categories. These categories
            formed the basis of our colour structure.
          </P>
          <H2 styleSize="large">Colour contrast</H2>
          <P styleSize="medium">
            Accessible colour contrast ratios help people with sight and colour
            vision conditions to understand coloured text and design features.
            In New Zealand, over 8% of men have some form of colour-blindness,
            and so do some women. Others have vision affected by colour contrast
            and sizing conditions.
          </P>
          <P styleSize="medium">
            The contrast ratio of text and interactive elements in your website
            must meet the{' '}
            <A href="https://www.digital.govt.nz/web-accessibility-standard">
              NZ Government Web Accessibility Standard
            </A>
            , specifically the{' '}
            <A href="https://www.w3.org/TR/WCAG21/">
              Web Content Accessibility Guidelines ( WCAG) 2.1
            </A>{' '}
            to level AA. The New Zealand Government Design System (NZGDS) has
            been built to meet these standards.
          </P>
          <P styleSize="medium">
            To ensure compliance, only use the variables in the context they are
            designed for.
          </P>
          <H2 styleSize="large">Greys suite</H2>
          <P styleSize="medium">
            The Slate in this grey palette is used for all text and core UI,
            such as borders of text input fields and checkboxes. The suite of
            grey tints can be used for a variety of graphic elements.
          </P>
          <Row>
            {swatches[1].map(swatch => (
              <Column
                xs="12"
                sm="6"
                md="3"
                lg="3"
                key={`1-${swatch.colorCode}`}
              >
                <ColorSwatch
                  colorCode={swatch.colorCode}
                  colorName={swatch.colorName}
                  description={swatch.description}
                />
              </Column>
            ))}
          </Row>
          <Row>
            {swatches[2].map(swatch => (
              <Column
                xs="12"
                sm="6"
                md="3"
                lg="3"
                key={`2-${swatch.colorCode}`}
              >
                <ColorSwatch
                  colorCode={swatch.colorCode}
                  colorName={swatch.colorName}
                  description={swatch.description}
                />
              </Column>
            ))}
          </Row>
          <H2 styleSize="large">Brand colours</H2>
          <P styleSize="medium">
            Once theming is released, you will be able to customise this palette
            to express your digital brand.
          </P>
          <Row>
            {swatches[3].map(swatch => (
              <Column
                xs="12"
                sm="6"
                md="3"
                lg="3"
                key={`3-${swatch.colorCode}`}
              >
                <ColorSwatch
                  colorCode={swatch.colorCode}
                  colorName={swatch.colorName}
                  description={swatch.description}
                />
              </Column>
            ))}
          </Row>
          <H2 styleSize="large">UI colours</H2>
          <P styleSize="medium">
            This range has been carefully selected to meet the{' '}
            <A href="https://www.digital.govt.nz/web-accessibility-standard/">
              Web Accessibility Standard
            </A>{' '}
            for the design system’s user interface.
          </P>
          <Row>
            {swatches[4].map(swatch => (
              <Column
                xs="12"
                sm="6"
                md="3"
                lg="3"
                key={`4-${swatch.colorCode}`}
              >
                <ColorSwatch
                  colorCode={swatch.colorCode}
                  colorName={swatch.colorName}
                  description={swatch.description}
                />
              </Column>
            ))}
          </Row>
          <H2 styleSize="large">Alerts</H2>
          <P styleSize="medium">
            These colours are used for alerts, such as confirming success with
            text input, warnings, and error messages. This ‘traffic light’
            palette is commonly used for this purpose. To avoid confusing the
            user, don’t use these colours — or tints of them — for any other
            purpose.
          </P>
          <Row>
            {swatches[5].map(swatch => (
              <Column
                xs="12"
                sm="6"
                md="3"
                lg="3"
                key={`5-${swatch.colorCode}`}
              >
                <ColorSwatch
                  colorCode={swatch.colorCode}
                  colorName={swatch.colorName}
                  description={swatch.description}
                />
              </Column>
            ))}
          </Row>
          <H2 styleSize="large">Text colours</H2>
          <P styleSize="medium">
            These text and background colour combinations have been tested to
            meet the{' '}
            <A href="https://www.w3.org/TR/WCAG21/#contrast-minimum">
              WCAG 2.1 text contrast requirements
            </A>
            . For each of the background colours below, a list of compliant text
            colours is provided.
          </P>
          <Row>
            <Column xs="12" sm="6" md="3" lg="3">
              <TextColorSwatch
                colorCode="#ffffff"
                colorName="White"
                textColors={[
                  { name: 'Black', color: '#000000' },
                  { name: 'Slate ', color: '#2A2A2A' },
                  { name: 'Dark grey', color: '#363636' },
                  { name: 'Mid grey', color: '#595959' },
                  { name: 'Primary 3', color: '#078766' },
                  { name: 'Link', color: '#005DBB' },
                  { name: 'Link active', color: '#000C48' },
                  { name: 'Link visited', color: '#4C2C92' },
                  { name: 'Error', color: '#B10E1E' },
                  { name: 'Success', color: '#088A20' },
                ]}
              />
            </Column>
            <Column xs="12" sm="6" md="3" lg="3">
              <TextColorSwatch
                colorCode="#363636"
                colorName="Dark grey"
                textColors={[
                  { name: 'Light grey', color: '#D3D3D3' },
                  { name: 'Off-white ', color: '#F4F4F4' },
                  { name: 'Primary ', color: '#23CBA5' },
                  { name: 'White', color: '#FFFFFF' },
                ]}
              />
            </Column>
            <Column xs="12" sm="6" md="3" lg="3">
              <TextColorSwatch
                colorCode="#000000"
                colorName="Black"
                textColors={[
                  { name: 'Light grey', color: '#D3D3D3' },
                  { name: 'Off-white ', color: '#F4F4F4' },
                  { name: 'Primary ', color: '#23CBA5' },
                  { name: 'Primary 2 ', color: '#24A882' },
                  { name: 'Primary 3 ', color: '#078766' },
                  { name: 'White', color: '#FFFFFF' },
                ]}
              />
            </Column>
            <Column xs="12" sm="6" md="3" lg="3">
              <TextColorSwatch
                colorCode="#2a2a2a"
                colorName="Slate"
                textColors={[
                  { name: 'Light grey', color: '#D3D3D3' },
                  { name: 'Off-white ', color: '#F4F4F4' },
                  { name: 'Primary ', color: '#23CBA5' },
                  { name: 'Primary 2 ', color: '#24A882' },
                  { name: 'White', color: '#FFFFFF' },
                ]}
              />
            </Column>
            <Column xs="12" sm="6" md="3" lg="3">
              <TextColorSwatch
                colorCode="#363636"
                colorName="Dark grey"
                textColors={[
                  { name: 'Light grey', color: '#D3D3D3' },
                  { name: 'Off-white ', color: '#F4F4F4' },
                  { name: 'Primary ', color: '#23CBA5' },
                  { name: 'White', color: '#FFFFFF' },
                ]}
              />
            </Column>
            <Column xs="12" sm="6" md="3" lg="3">
              <TextColorSwatch
                colorCode="#595959"
                colorName="Mid grey"
                textColors={[
                  { name: 'Light grey', color: '#D3D3D3' },
                  { name: 'Off-white ', color: '#F4F4F4' },
                  { name: 'White', color: '#FFFFFF' },
                ]}
              />
            </Column>
            <Column xs="12" sm="6" md="3" lg="3">
              <TextColorSwatch
                colorCode="#d3d3d3"
                colorName="Light grey"
                textColors={[
                  { name: 'Black', color: '#000000' },
                  { name: 'Slate ', color: '#2A2A2A' },
                  { name: 'Dark grey', color: '#363636' },
                  { name: 'Mid grey', color: '#595959' },
                ]}
              />
            </Column>
            <Column xs="12" sm="6" md="3" lg="3">
              <TextColorSwatch
                colorCode="#f4f4f4"
                colorName="Off-white"
                textColors={[
                  { name: 'Black', color: '#000000' },
                  { name: 'Slate ', color: '#2A2A2A' },
                  { name: 'Dark grey', color: '#363636' },
                  { name: 'Mid grey', color: '#595959' },
                  { name: 'Link', color: '#005DBB' },
                  { name: 'Link active', color: '#000C48' },
                  { name: 'Link visited', color: '#4C2C92' },
                ]}
              />
            </Column>
          </Row>
          <Row>
            <Column xs="12" sm="6" md="3" lg="3">
              <TextColorSwatch
                colorCode="#23CBA5"
                colorName="Primary"
                textColors={[
                  { name: 'Black', color: '#000000' },
                  { name: 'Slate ', color: '#2A2A2A' },
                  { name: 'Dark grey', color: '#363636' },
                ]}
              />
            </Column>
            <Column xs="12" sm="6" md="3" lg="3">
              <TextColorSwatch
                colorCode="#24A882"
                colorName="Primary 2"
                textColors={[
                  { name: 'Black', color: '#000000' },
                  { name: 'Slate ', color: '#2A2A2A' },
                ]}
              />
            </Column>
            <Column xs="12" sm="6" md="3" lg="3">
              <TextColorSwatch
                colorCode="#078766"
                colorName="Primary 3"
                textColors={[{ name: 'White', color: '#FFFFFF' }]}
              />
            </Column>
          </Row>
          <H2 styleSize="large">Core government brand colours</H2>
          <P styleSize="medium">
            These colours are part of the core all-of-government brand and
            should only be used as shown.
          </P>
          <Row>
            {swatches[0].map(swatch => (
              <Column
                xs="12"
                sm="6"
                md="3"
                lg="3"
                key={`0-${swatch.colorCode}`}
              >
                <ColorSwatch
                  colorCode={swatch.colorCode}
                  colorName={swatch.colorName}
                  description={swatch.description}
                />
              </Column>
            ))}
          </Row>
          <GetInTouch title="Colours" />
        </Column>
      </Row>
    </Container>
  </Layout>
);

export default ColoursPage;

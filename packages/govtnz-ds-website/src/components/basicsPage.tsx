import React from 'react';
import { Link } from 'gatsby';
import Layout, { GatsbyPageProps } from './layout';
import SEO from './seo';
import Container from '@govtnz/ds/build/react-ts/FlexContainer';
import Row from '@govtnz/ds/build/react-ts/FlexRow';
import Column from '@govtnz/ds/build/react-ts/FlexColumn';
import BasicsMenu from './basicsMenu';
import GetInTouch from './GetInTouch';
import H1 from '@govtnz/ds/build/react-ts/H1';
import H2 from '@govtnz/ds/build/react-ts/H2';
import P from '@govtnz/ds/build/react-ts/P';
import A from '@govtnz/ds/build/react-ts/A';
import CaptionL from '@govtnz/ds/build/react-ts/CaptionL';
import basicsMenuItems from './basics.json';

export default function BasePage({ id, pageProps, PageContent }: Props) {
  const menuItem = basicsMenuItems.find(item => item.id === id);
  const title = (menuItem && menuItem.name) || 'Basics';
  return (
    <Layout>
      <SEO
        title={title}
        keywords={[title, id, `design system`, `new zealand government`]}
      />
      <Container width="fixed">
        <Row>
          <Column xs="12" sm="3" md="2" lg="2">
            <BasicsMenu pageProps={pageProps} />
          </Column>
          <Column xs="12" sm="9" md="9" lg="8">
            {menuItem && (
              <>
                <CaptionL>Basics</CaptionL>
                <H1 styleSize="xlarge">{title}</H1>
              </>
            )}
            <PageContent {...pageProps} name={title} id={id} />
            <GetInTouch title={title} />
          </Column>
        </Row>
      </Container>
    </Layout>
  );
}

type ComponentsMenuProps = {
  pageProps: GatsbyPageProps;
};

export const ComponentsMenu = ({ pageProps }: ComponentsMenuProps) => (
  <nav className="sidebar" aria-label="Design System Components">
    <ul className="sidebar__navigation">
      {componentsMenu.map(item => {
        const currentTo =
          pageProps && pageProps.location && pageProps.location.pathname;
        const to = `/components/${item.id}/`;
        const props: Object =
          currentTo === to
            ? {
                'aria-current': 'page',
                className: 'sidebar__link sidebar__link--current',
              }
            : { className: 'sidebar__link' };
        // if (currentTo === to) {
        //   console.log(currentTo === to, currentTo, to, props)
        // }
        return (
          <li key={item.id} className="sidebar__item">
            <Link to={to} {...props}>
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);

type TemplateId = {
  importName: string;
  name: string;
};

export type TemplateIds = TemplateId[];

type Props = {
  title: string;
  id?: string | undefined;
  pageProps: GatsbyPageProps;
  PageContent: Function;
};

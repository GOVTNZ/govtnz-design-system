import React from 'react';
import { Link } from 'gatsby';
import Layout, { GatsbyPageProps } from '../components/layout';
import SEO from '../components/seo';
import Container from '@govtnz/ds/build/react-ts/FlexContainer';
import Row from '@govtnz/ds/build/react-ts/FlexRow';
import Column from '@govtnz/ds/build/react-ts/FlexColumn';
import GetInTouch from '../components/GetInTouch';
import H1 from '@govtnz/ds/build/react-ts/H1';
import H2 from '@govtnz/ds/build/react-ts/H2';
import P from '@govtnz/ds/build/react-ts/P';
import A from '@govtnz/ds/build/react-ts/A';
import CaptionL from '@govtnz/ds/build/react-ts/CaptionL';
import Note from '../components/Note';
import componentsMenu from './component-menu.json';

export default function ComponentPage({ id, pageProps, PageContent }: Props) {
  let menuItem;
  let isStable: boolean | undefined;
  componentsMenu.forEach(category => {
    const itemMatch = category.items.find(item => item.id === id);
    if (itemMatch) {
      menuItem = itemMatch;
      isStable = category.stable;
    }
  });
  const title = (menuItem && menuItem.name) || 'Components';

  return (
    <Layout>
      <SEO
        title={title}
        keywords={[title, id, `design system`, `new zealand government`]}
      />
      <Container width="fixed">
        <Row>
          <Column xs="12" sm="3" md="2" lg="2">
            <ComponentsMenu pageProps={pageProps} />
          </Column>
          <Column xs="12" sm="9" md="9" lg="8">
            {menuItem ? (
              <>
                <CaptionL>Components</CaptionL>
                <H1 styleSize="xlarge" id="main-heading">
                  {title} {id} 1
                </H1>
              </>
            ) : id !== 'index' ? (
              <>
                <CaptionL>Components</CaptionL>
                <H1 styleSize="xlarge" id="main-heading">
                  {title} {id} 2
                </H1>
              </>
            ) : null}
            {isStable === false && (
              <Note>
                <H2 styleSize="medium">Note: Component coming soon</H2>
                <P styleSize="medium">
                  We are still working on this component. We will release it
                  soon, and we would appreciate your feedback then.
                </P>
              </Note>
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
    <div className="sidebar__navigation">
      {componentsMenu.map((category, index) => {
        return (
          <div className="sidebar__category" key={index}>
            <h2 className="sidebar__category-title">{category.title}</h2>
            <ul className="sidebar__category__items">
              {category.items.map(item => {
                const currentTo =
                  pageProps &&
                  pageProps.location &&
                  pageProps.location.pathname;
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
          </div>
        );
      })}
    </div>
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

import React, { useEffect } from 'react';
import { StaticQuery, graphql, PageRendererProps } from 'gatsby';
import { generatePrintLinksList } from '../utils';
import Container from '@govtnz/ds/build/react-ts/FlexContainer';
import Row from '@govtnz/ds/build/react-ts/FlexRow';
import Column from '@govtnz/ds/build/react-ts/FlexColumn';
import LogoLockUp from './LogoLockUp';
import Header from './header';
import Footer from './footer';
import SkipLink from './SkipLink';
import '../commons/styles/elements-global.scss';
import '../commons/styles/elements-typography.scss';
import '../commons/styles/overrides-typography.scss';
import '../commons/styles/overrides-flexgrid.scss';
import './layout.scss';
import '../commons/styles/components-sidebar.scss';
import '../commons/styles/utilities-display.scss';

type Props = { children: React.ReactNode; path: string } & PageRendererProps;

const Layout = (props: Props) => {
  const { children, path } = props;

  useEffect(() => {
    if (document.body.classList) {
      document.documentElement.classList.add('theme-default', 'js');
    }

    window.onbeforeprint = () => {
      generatePrintLinksList();
    };
  }, []);

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <>
          <SkipLink href="#main-heading" key={path} />
          <Header siteTitle={data.site.siteMetadata.title} />
          <main role="main" id="main-content" className="main-content">
            <div className="main-content__logo--show@print">
              <Container width="fixed">
                <Row>
                  <Column xs="12" sm="12" md="12" lg="12">
                    <LogoLockUp siteTitle={data.site.siteMetadata.title} />
                  </Column>
                </Row>
              </Container>
            </div>
            {children}
          </main>
          <Footer />
        </>
      )}
    />
  );
};

export default Layout;

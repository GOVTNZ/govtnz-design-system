import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import Footer from './footer';
import Analytics from './analytics';
import '../commons/styles/elements-global.scss';
import '../commons/styles/elements-typography.scss';
import '../commons/styles/overrides-typography.scss';
import '../commons/styles/overrides-flexgrid.scss';
import './layout.scss';
import '../commons/styles/components-sidebar.scss';
import '../commons/styles/utilities-display.scss';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
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
    render={data => (
      <>
        <Analytics />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main role="main" id="main-content" className="main-content">
          {children}
        </main>
        <Footer />
      </>
    )}
  />
);

export default Layout;

export type GatsbyPageProps = {
  // FIXME: Replace with proper Gatsby typing
  uri: string;
  location: {
    pathname: string;
    search: string;
    hash: string;
  };
  children: React.ReactNode;
  pageContext: Object;
  pathContext: Object;
};

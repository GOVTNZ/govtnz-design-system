import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

type Props = {
  description: string;
  lang: string;
  meta: any; // FIXME: improve typing
  robots: any;
  keywords?: string[];
  title: string;
};

function SEO({ description, lang, meta, keywords, title, robots }: Props) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const robotsValue = !robots ? 'all' : 'noindex';
        return (
          <Helmet
            htmlAttributes={{
              lang: 'en-nz',
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: 'robots',
                content: robotsValue,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
            // Was needed for this bug and is left here to reenable if the bug returns https://github.com/cssnano/cssnano/issues/733
            // style={[
            //   {
            //     cssText: `
            //     /* The reason we're setting this CSS is to bypass CSS minification due to a bug in CSS Nano https://github.com/cssnano/cssnano/issues/733 */
            //     .g-checkboxes__input+.g-checkboxes__label:after {
            //       border-width: 0 0 5px 5px;
            //     }
            //   `,
            //   },
            // ]}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

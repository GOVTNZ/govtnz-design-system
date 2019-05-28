const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Design System - Alpha`,
    description: `Design and build fast, accessible websites backed by user research, so New Zealanders can easily use government services online`,
    author: `New Zealand Government`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [
          `query-string`,
          // `react-accessible-details`,
          // `react-helmet`,
          // `react-modal`,
          // `prismjs-mt`,
          // `marked`,
          // `lodash-es`,
          // `css-sniff`,
          `copy-text-to-clipboard`,
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `New Zealand Government Design System`,
        short_name: `NZDS`,
        start_url: `/`,
        background_color: `#23cba5`,
        theme_color: `#23cba5`,
        display: `minimal-ui`,
        icon: `src/images/favicon-512.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-svg-sprite`,
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://de00fe7270e347e7922f66eafa89ff32@sentry.io/1436389',
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
      },
    },
  ],
};

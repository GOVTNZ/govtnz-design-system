import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

export const GA_MEASUREMENT_ID = 'UA-109491125-3';

export const getGaEventTarget = () => {
  return `gtag_${GA_MEASUREMENT_ID.replace(new RegExp('-', 'g'), '_')}`;
};

const Analytics = () => (
  <Fragment>
    <Helmet
      script={[
        {
          async: true,
          type: 'text/javascript',
          src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
        },
        {
          type: 'text/javascript',
          innerHTML: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_MEASUREMENT_ID}');`,
        },
        {
          type: 'text/javascript',
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5SZGJ9K');`,
        },
      ]}
    />
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SZGJ9K" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
  </Fragment>
);

export default Analytics;

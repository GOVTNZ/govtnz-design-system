import React from 'react';

// @dynamicImports

import AboutPage from '../../components/AboutPage';
import onChangeGenerator from '../../commons/onChangeGenerator';

// @pageContentComponent

const template = (props) => {
    return (
        <AboutPage
            title="About"
            pageProps={props}
            PageContent={PageContent}
        />
    );
};

export default template;

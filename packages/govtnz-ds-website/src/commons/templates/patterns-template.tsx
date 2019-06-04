import React from 'react';

// @dynamicImports

import PatternsPage from '../../components/PatternsPage';
import onChangeGenerator from '../../commons/onChangeGenerator';

// @pageContentComponent

const template = (props) => {
    return (
        <PatternsPage
            title="Patterns"
            pageProps={props}
            PageContent={PageContent}
        />
    );
};

export default template;

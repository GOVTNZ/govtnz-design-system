import React from 'react';

// @dynamicImports

import CommunityPage from '../../components/CommunityPage';
import onChangeGenerator from '../../commons/onChangeGenerator';

// @pageContentComponent

const template = (props) => {
    return (
        <CommunityPage
            title="Community"
            pageProps={props}
            PageContent={PageContent}
        />
    );
};

export default template;

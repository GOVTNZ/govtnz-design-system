// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React from 'react';

import H1 from '@govtnz/ds/build/react-ts/H1.tsx';
import '../../commons/styles/ds/themed-H1.scss';
import P from '@govtnz/ds/build/react-ts/P.tsx';
import '../../commons/styles/ds/themed-P.scss';
import Ul from '@govtnz/ds/build/react-ts/Ul.tsx';
import '../../commons/styles/ds/themed-Ul.scss';
import Li from '@govtnz/ds/build/react-ts/Li.tsx';
import '../../commons/styles/ds/themed-Li.scss';

import CommunityPage from '../../components/CommunityPage';
import onChangeGenerator from '../../commons/onChangeGenerator';

const PageContent = (props) => <React.Fragment><H1 {...onChangeGenerator(H1)} styleSize="xlarge" id="community">Community</H1>
<P styleSize="large">
    <a href="https://www.digital.govt.nz/digital-government/leadership-and-governance/government-chief-digital-officer-gcdo/who-supports-the-gcdo/">
        Government Information Services
    </a>&nbsp;
    is creating New Zealand’s all-of-government (AOG) Design System now. Our
    overall aim is to improve digital service delivery across the New Zealand
    public service.
</P>

<p>Since the AOG Design System will be available for everyone in central and local
government — and beyond — to use, we want a strong cross-government community
backing it.</p>
<p>You can contribute by:</p>
<Ul {...onChangeGenerator(Ul)} bulleted>
<Li {...onChangeGenerator(Li)}>testing our components and patterns</Li>
<Li {...onChangeGenerator(Li)}>helping to develop new components and patterns</Li>
<Li {...onChangeGenerator(Li)}>commenting on our guidance.</Li>
</Ul>
<p>This alpha website shows you what we have built so far, what we&#39;re working on,
and how you can get involved.&nbsp;
<a href="https://design-system-alpha.digital.govt.nz/">Read about the benefits of using the AOG Design System, and how we are building it, on the homepage</a>.</p>
<h2 id="keep-updated">Keep updated</h2>
<p>The input and feedback we received from the initial user research, meetups,
workshop, and user testing has been invaluable in shaping the alpha Design
System.</p>
<p>To keep updated with what we are doing now, what we are planning to do next,
and how you can get involved,&nbsp;
<a href="https://confirmsubscription.com/h/j/712F84D0A3086D2B">subscribe to the AOG Design System newsletter</a>.</p>
</React.Fragment>

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

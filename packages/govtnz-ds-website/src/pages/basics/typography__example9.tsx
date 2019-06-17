// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';

import P from '@govtnz/ds/build/react-ts/P.tsx';
import '@govtnz/ds/build/css/P.css';
import Ol from '@govtnz/ds/build/react-ts/Ol.tsx';
import '@govtnz/ds/build/css/Ol.css';
import Li from '@govtnz/ds/build/react-ts/Li.tsx';
import '@govtnz/ds/build/css/Li.css';

import IframePage from '../../components/IframePage';
import onChangeGenerator from '../../commons/onChangeGenerator';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => <Fragment>{children}</Fragment>;
const Example = ({ children }) => <Fragment>{children}</Fragment>;

const PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
         <P styleSize="medium">
            To sign up, you need to complete four steps.</P>
        <Ol {...onChangeGenerator(Ol)} numbered>
            <Li {...onChangeGenerator(Li)}>Prove your identity, such as with RealMe</Li>
            <Li {...onChangeGenerator(Li)}>Provide a passport-sized photo</Li>
            <Li {...onChangeGenerator(Li)}>
                Enter your address details:
                <Ol {...onChangeGenerator(Ol)} numbered>
                    <Li {...onChangeGenerator(Li)}>Postal address</Li>
                    <Li {...onChangeGenerator(Li)}>Delivery address</Li>
                </Ol>
            </Li>
            <Li {...onChangeGenerator(Li)}>Confirm payment methods</Li>
        </Ol>
    </Example>);

const template = props => {
  return (
    <IframePage
      title={"Numbered lists"}
      id={"iframe_basicstypography9"}
      parentUrl={"../typography"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;

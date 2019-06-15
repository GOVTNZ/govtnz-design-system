// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';

import Ol from '@govtnz/ds/build/react-ts/Ol.tsx';
import '@govtnz/ds/build/css/Ol.css';
import Li from '@govtnz/ds/build/react-ts/Li.tsx';
import '@govtnz/ds/build/css/Li.css';

import IframePage from '../../components/IframePage';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import onChangeGenerator from '../../commons/onChangeGenerator';
const Example = ({ children }) => <Fragment>{children}</Fragment>;

const PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <Ol {...onChangeGenerator(Ol)} numbered>
            <Li {...onChangeGenerator(Li)}>Unordered item one</Li>
            <Li {...onChangeGenerator(Li)}>Unordered item two</Li>
            <Li {...onChangeGenerator(Li)}>Unordered item three
                <Ol {...onChangeGenerator(Ol)} numbered>
                    <Li {...onChangeGenerator(Li)}>Ordered item one</Li>
                    <Li {...onChangeGenerator(Li)}>Ordered item one</Li>
                </Ol>
            </Li>
            <Li {...onChangeGenerator(Li)}>Unordered item four</Li>
        </Ol>
    </Example>);

const template = props => {
  return (
    <IframePage
      title={"Example of Lists"}
      id={"iframe_componentsLists1"}
      parentUrl={"../Lists"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;
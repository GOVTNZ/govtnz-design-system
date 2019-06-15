// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';

import FieldsetBlock from '@govtnz/ds/build/react-ts/FieldsetBlock.tsx';
import '@govtnz/ds/build/css/FieldsetBlock.css';
import H1 from '@govtnz/ds/build/react-ts/H1.tsx';
import '@govtnz/ds/build/css/H1.css';
import RadioBlockWithHint from '@govtnz/ds/build/react-ts/RadioBlockWithHint.tsx';
import '@govtnz/ds/build/css/RadioBlockWithHint.css';

import IframePage from '../../components/IframePage';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import onChangeGenerator from '../../commons/onChangeGenerator';
const Example = ({ children }) => <Fragment>{children}</Fragment>;

const PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
            <FieldsetBlock {...onChangeGenerator(FieldsetBlock)} legend={<H1 {...onChangeGenerator(H1)} styleSize="large" id="providerChoiceTitle1">Choose one provider</H1>} hint={<p>Select one provider.</p>} hintId="hintId">
                <RadioBlockWithHint {...onChangeGenerator(RadioBlockWithHint)} label="Sign in with Aardvark services" hint="North Island only" hintId="someHintId7" radioId="anyRadioId7234" name="providerChoice3" value="provider1" labelId="labelId5" />
                <RadioBlockWithHint {...onChangeGenerator(RadioBlockWithHint)} label="Sign in with Bumblebee services" hint="North and South Island" hintId="someHintId8" radioId="anyRadioId8234" name="providerChoice3" value="provider2" labelId="labelId8" />
                <RadioBlockWithHint {...onChangeGenerator(RadioBlockWithHint)} label="Sign in with Caterpillar company" hint="All new Zealand territories" hintId="someHintId7234" radioId="anyRadioId9f" name="providerChoice3" value="provider3" labelId="labelId9" />
        </FieldsetBlock>
    </Example>);

const template = props => {
  return (
    <IframePage
      title={"Radio button items with hints"}
      id={"iframe_componentsRadios4"}
      parentUrl={"../Radios"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;
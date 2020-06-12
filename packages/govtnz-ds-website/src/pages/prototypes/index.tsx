import React, { Component, Fragment } from 'react';

import H1 from '@govtnz/ds/build/react-ts/H1';
import '../../commons/styles/ds/themed-H1.scss';

import H2 from '@govtnz/ds/build/react-ts/H2';
import '../../commons/styles/ds/themed-H2.scss';

import Container from '@govtnz/ds/build/react-ts/FlexContainer';
import '@govtnz/ds/build/css/FlexContainer.css';

import InputBlock from '@govtnz/ds/build/react-ts/InputBlock';
import '@govtnz/ds/build/css/inputBlock.css';

import TextareaBlock from '@govtnz/ds/build/react-ts/TextareaBlock';
import '@govtnz/ds/build/css/TextareaBlock.css';

import FieldsetBlock from '@govtnz/ds/build/react-ts/FieldsetBlock';

import RadioBlock from '@govtnz/ds/build/react-ts/RadioBlock';
import '@govtnz/ds/build/css/RadioBlock.css';

import Button from '@govtnz/ds/build/react-ts/Button';

import Radios from '@govtnz/ds/build/react-ts/Radios';

import PatternsPage from '../../components/PatternsPage';

class ErrorMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: 0 };
  }

  componentDidMount = state => {
    this.setState({
      key: ++state.key,
    });
  };

  render() {
    const { key } = this.state;
    const { text } = this.props;

    return <div key={key}>{text}</div>;
  }
}

class ContactusForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!event.target.checkValidity()) {
      this.setState({
        invalid: true,
        displayErrors: true,
      });
      return;
    }

    const data = new FormData(event.target);

    this.setState({
      response: stringifyFormData(data),
      invalid: false,
      displayErrors: false,
    });
  }

  render() {
    const { response, invalid, displayErrors } = this.state;

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          noValidate
          className={displayErrors ? 'displayErrors' : ''}
        >
          <InputBlock
            width="30"
            maxLength={30}
            hintId="anyHintId3"
            label="Name"
            id="username"
            name="username"
            type="text"
            required
          ></InputBlock>
          <InputBlock
            width="30"
            label="Email address"
            name="email address"
            maxLength={30}
            hintId="anyHintId3"
            id="email"
            type="email"
            required
          ></InputBlock>
          <Radios inline>
            <RadioBlock
              label="Our website"
              id="anyRadioId9234"
              value="true"
              name="nameChange5"
              labelId="labelId9"
              required
            ></RadioBlock>
            <RadioBlock
              label="One of our services"
              id="anyRadioId10"
              value="false"
              name="nameChange5"
              labelId="labelId10"
              required
            ></RadioBlock>
            <RadioBlock
              label="Something else"
              id="anyRadioId10"
              value="false"
              name="nameChange5"
              labelId="labelId10"
              required
            ></RadioBlock>
          </Radios>
          <TextareaBlock
            id="textarea"
            name="textarea"
            label="Can you provide more detail?"
            hintId="hint1"
            hint="Do not include personal or financial information, like your IRD number or credit card details."
            required
          ></TextareaBlock>{' '}
          <Button aria-label="Submit">Submit</Button>
        </form>

        <div className="res-block">
          {invalid && <ErrorMessage text="Error, incorrect details" />}

          {!invalid && response && <div>Data {response}</div>}

          {!invalid && response && (
            <H2 styleSize="large" id="main-heading">
              Thanks for contacting us. We will reply to your email within 1-3
              working days.
            </H2>
          )}
        </div>
      </div>
    );
  }
}

function stringifyFormData(fd) {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}

const PageContent = props => (
  <React.Fragment>
    <H1 styleSize="xlarge" id="main-heading">
      Prototypes
    </H1>
    <p>
      Intorduction paragraph tp tell users that they can fiond prototypes of DS
      here. More cotent content goes here.
    </p>
    <H2 styleSize="large" id="main-heading">
      Contact us form prototype
    </H2>

    <p>
      Intro copy i.e here you can see how we use DS for elements to assemble
      example of a comtact us for <a href="/">Link to source code</a>.
    </p>
    <p>This is purely for demonstration purpose. Not an advice</p>
    <ContactusForm />

    {/* 

    {/* <Button aria-label="Submit">Submit</Button> */}
  </React.Fragment>
);

const template = props => {
  return (
    <PatternsPage
      title="Patterns"
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;

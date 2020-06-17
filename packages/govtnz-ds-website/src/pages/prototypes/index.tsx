import React, { Component, Fragment } from 'react';

import ExampleContainer from '../../commons/ExampleContainer';
// import Example from '../../commons/Example';
import Row from '@govtnz/ds/build/react-ts/FlexRow';
import Column from '@govtnz/ds/build/react-ts/FlexColumn';

import H1 from '@govtnz/ds/build/react-ts/H1';
import '../../commons/styles/ds/themed-H1.scss';

import H3 from '@govtnz/ds/build/react-ts/H3';
import '../../commons/styles/ds/themed-H3.scss';

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

class ContactusForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (!event.target.checkValidity()) {
      this.setState({
        invalid: true,
      });
      return;
    }

    const form = event.target;
    const data = new FormData(form);

    this.setState({
      response: data,
      invalid: false,
    });
  };

  render() {
    const { response, invalid } = this.state;

    return (
      <ExampleContainer>
        <Row>
          <Column xs="12" sm="12" md="9" lg="8" mdOffset="1" lgOffset="1">
            <H2 styleSize="large" id="main-heading">
              Contact us form prototype
            </H2>

            <p>
              Intro copy i.e here you can see how we use DS for elements to
              assemble example of a comtact us for{' '}
              <a href="/">Link to source code</a>.
            </p>
            <p>This is purely for demonstration purpose. Not an advice</p>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="username" className="g-inputBlock-label">
                User name
              </label>
              <input
                maxLength={30}
                id="username"
                className="g-inputBlock-input g-inputBlock-input--width-30"
                hasLabel
                htmlFor="textInput"
                label="Text input"
                required
                type="text"
              />

              <InputBlock
                width="30"
                maxLength={30}
                hintId="anyHintId3"
                label="Name"
                id="username"
                name="username"
                type="text"
                autocomplete="example"
                required
              ></InputBlock>

              <label className="g-inputBlock-label">Email address</label>
              <input
                id="email address"
                maxLength={30}
                className="g-inputBlock-input g-inputBlock-input--width-30"
                hasLabel="true"
                htmlFor="emailInput"
                label="Email input"
                required
                type="email"
              />

              <label className="g-inputBlock-label">Text Area</label>
              <textarea
                className="g-textareaBlock-textarea"
                hasLabel="true"
                htmlFor="textarea"
                label="Textarea"
                required
              ></textarea>

              <label htmlFor="" label="">
                <input
                  hasLabel="true"
                  htmlFor="radioOne"
                  label="Radio one"
                  name="radios"
                  required
                  className="g-radios__input"
                  type="radio"
                />
                <input
                  hasLabel="true"
                  htmlFor="radioOne"
                  label="Radio one"
                  name="radios"
                  required
                  className="g-radios__input"
                  type="radio"
                />
              </label>

              <Radios inline></Radios>

              <Radios inline>
                <label htmlFor="" label="">
                  <input
                    hasLabel="true"
                    htmlFor="radioOne"
                    label="Radio one"
                    name="radios"
                    required
                    className="g-radios__input"
                    type="radio"
                  />
                </label>
                <RadioBlock
                  htmlFor="radioOne"
                  label="Radio one"
                  name="radios"
                  required
                  type="radio"
                ></RadioBlock>
                <RadioBlock
                  hasLabel="true"
                  htmlFor="radioOne"
                  label="Radio one"
                  name="radios"
                  required
                  type="radio"
                ></RadioBlock>
                <RadioBlock
                  hasLabel="true"
                  htmlFor="radioOne"
                  label="Radio one"
                  name="radios"
                  required
                  type="radio"
                ></RadioBlock>
              </Radios>
              {/* </FieldsetBlock> */}

              <Button type="submit" aria-label="Submit">
                Submit
              </Button>
            </form>

            {!invalid && response && (
              <H3 styleSize="large" id="main-heading">
                Thanks for contacting us. We will reply to your email within 1-3
                working days.
              </H3>
            )}
          </Column>
        </Row>
      </ExampleContainer>
    );
  }
}

const PageContent = () => (
  <React.Fragment>
    <H1 styleSize="xlarge" id="main-heading">
      Prototypes
    </H1>
    <p>
      Intorduction paragraph tp tell users that they can fiond prototypes of DS
      here. More cotent content goes here.
    </p>
    <ContactusForm />
  </React.Fragment>
);

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

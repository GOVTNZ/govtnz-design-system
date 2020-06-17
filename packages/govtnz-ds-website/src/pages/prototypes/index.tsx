import React from 'react';

import ExampleContainer from '../../commons/ExampleContainer';
import Row from '@govtnz/ds/build/react-ts/FlexRow';
import Column from '@govtnz/ds/build/react-ts/FlexColumn';

import H1 from '@govtnz/ds/build/react-ts/H1';
import '../../commons/styles/ds/themed-H1.scss';

import Alert from '@govtnz/ds/build/react-js/Alert';
import '@govtnz/ds/build/css/Alert.css'; // or @govtnz/ds/build/scss/Alert.scss

import H2 from '@govtnz/ds/build/react-js/H2';
import '@govtnz/ds/build/css/H2.css'; // or @govtnz/ds/build/scss/H2.scss

import P from '@govtnz/ds/build/react-js/P';
import '@govtnz/ds/build/css/P.css'; // or @govtnz/ds/build/scss/P.scss

import InputBlock from '@govtnz/ds/build/react-ts/InputBlock';
import '@govtnz/ds/build/css/inputBlock.css';

import TextareaBlock from '@govtnz/ds/build/react-ts/TextareaBlock';
import '@govtnz/ds/build/css/TextareaBlock.css';

import RadioBlock from '@govtnz/ds/build/react-ts/RadioBlock';
import '@govtnz/ds/build/css/RadioBlock.css';

import Radios from '@govtnz/ds/build/react-ts/Radios';

import PatternsPage from '../../components/PatternsPage';

const fieldState = {
  value: '',
  valid: true,
};

const ErrorMessage = ({ label }) => (
  <div className="g-inputBlock-error-message">
    <span className="g-fieldsetBlock-visually-hidden">Error:</span>
    <label htmlFor="">{label}</label>
  </div>
);

class ContactusForm extends React.Component {
  state = {
    firstname: {
      ...fieldState,
      errorMessage: 'Enter your name',
    },
    email: {
      ...fieldState,
      typeMismatch: false,
      errorMessage: 'Enter your email',
      emailFormatError: 'Check your email address',
    },
    radio: {
      ...fieldState,
      errorMessage: 'Select where you live',
    },
    textarea: {
      ...fieldState,
      errorMessage: 'Enter your message',
    },
    isFieldsValid: false,
  };

  getformFieldvalues = (formElements) => {
    const elements = Array.prototype.slice.call(formElements);

    const formfieldValues = elements
      .filter((elem) => elem.name.length > 0)
      .map((field) => {
        const { typeMismatch } = field.validity;
        const { name, type, value } = field;

        return {
          name,
          type,
          typeMismatch,
          value,
          valid: field.checkValidity(),
        };
      })

      .reduce((acc, currentVal) => {
        const { value, valid, typeMismatch } = currentVal;
        const { errorMessage, emailFormatError } = this.state[currentVal.name];

        acc[currentVal.name] = {
          value,
          valid,
          typeMismatch,
          errorMessage,
          emailFormatError,
        };

        return acc;
      }, {});

    return formfieldValues;
  };

  onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const formValues = this.getformFieldvalues(form.elements);

    const isFieldsValid = !Object.keys(formValues)
      .map((value) => formValues[value])
      .some((field) => !field.valid);

    this.setState({ ...formValues, isFieldsValid });
  };

  render() {
    const { email, firstname, textarea, radio, isFieldsValid } = this.state;
    const successMessage = isFieldsValid ? 'block' : 'none';

    return (
      <>
        <form style={{ padding: '20px' }} onSubmit={this.onSubmit} noValidate>
          <H2 styleSize="large">Contact form</H2>
          <div
            className={
              firstname.valid
                ? 'g-inputBlock-form-group'
                : 'g-inputBlock-form-group--error'
            }
          >
            {firstname.valid ? (
              ''
            ) : (
              <ErrorMessage label={firstname.errorMessage} />
            )}
            <InputBlock
              width="30"
              maxLength={30}
              label="What is your name?"
              id="username"
              name="firstname"
              type="text"
              autoComplete="autoComplete"
              required
            />
          </div>
          <div
            className={
              email.valid
                ? 'g-inputBlock-form-group'
                : 'g-inputBlock-form-group--error'
            }
          >
            {email.valid ? (
              ''
            ) : (
              <ErrorMessage
                label={
                  email.typeMismatch
                    ? email.emailFormatError
                    : email.errorMessage
                }
              />
            )}

            <InputBlock
              width="30"
              maxLength={30}
              hintId="anyHintId3"
              label="What is your email?"
              autoComplete="autoComplete"
              type="email"
              name="email"
              required
            />
          </div>
          <div
            className={
              textarea.valid
                ? 'g-inputBlock-form-group'
                : 'g-textareaBlock-form-group--error'
            }
          >
            {textarea.valid ? (
              ''
            ) : (
              <ErrorMessage label={textarea.errorMessage} />
            )}

            <TextareaBlock
              autoComplete="autoComplete"
              name="textarea"
              error={textarea.valid}
              required
            />
          </div>

          <div
            className={
              radio.valid
                ? 'g-fieldsetBlock-form-group'
                : 'g-fieldsetBlock-form-group--error'
            }
          >
            {radio.valid ? '' : <ErrorMessage label={radio.errorMessage} />}

            <Radios inline>
              <RadioBlock
                label="North Island"
                name="radio"
                required
              ></RadioBlock>
              <RadioBlock
                label="South Island"
                name="radio"
                required
              ></RadioBlock>
              <RadioBlock
                label="Stewart Island"
                name="radio"
                required
              ></RadioBlock>
              <RadioBlock
                label="Chatham Islands"
                name="radio"
                required
              ></RadioBlock>
            </Radios>
          </div>

          <button
            style={{ marginTop: '20px' }}
            className="g-button"
            type="submit"
          >
            Submit
          </button>

          <div style={{ display: successMessage }}>
            <Alert level="success" headingId="heading3">
              <H2 id="heading3">
                Success: Your message has been sent Thanks for contacting us.
              </H2>
              <P>We will reply to your email within 1-3 working days</P>
            </Alert>
          </div>
        </form>
      </>
    );
  }
}

const PrototypePageContent = () => (
  <React.Fragment>
    <H1 styleSize="xlarge">Prototypes</H1>
    <p>
      See examples of web pages built using Design System components. These
      prototypes show you how components work alongside each other, and can help
      you to demonstrate your product vision to stakeholders.
    </p>
    <H2 styleSize="large">Contact form</H2>
    <p>
      A contact form gives visitors to your site an easy way to send you a
      message. This example demonstrates how form components can be used
      together. It is not guidance for creating a contact form. Interact with
      the example to see how it works.
    </p>
    <p>This is purely for demonstration purpose. Not an advice</p>

    <ExampleContainer>
      <Row>
        <Column className="" xs="12" sm="12" md="9" lg="12">
          <ContactusForm />
        </Column>
      </Row>
    </ExampleContainer>
  </React.Fragment>
);

const template = (props) => {
  return (
    <PatternsPage
      title="Patterns"
      pageProps={props}
      PageContent={PrototypePageContent}
    />
  );
};

export default template;

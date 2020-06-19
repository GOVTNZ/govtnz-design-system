import React from 'react';

import ExampleContainer from '../../commons/ExampleContainer';
import Row from '@govtnz/ds/build/react-ts/FlexRow';
import Column from '@govtnz/ds/build/react-ts/FlexColumn';

import H1 from '@govtnz/ds/build/react-ts/H1';
import '../../commons/styles/ds/themed-H1.scss';

import Alert from '@govtnz/ds/build/react-js/Alert';
import '@govtnz/ds/build/css/Alert.css';

import H2 from '@govtnz/ds/build/react-js/H2';
import '@govtnz/ds/build/css/H2.css';

import P from '@govtnz/ds/build/react-js/P';
import '@govtnz/ds/build/css/P.css';

import Ul from '@govtnz/ds/build/react-ts/Ul';
import '../../commons/styles/ds/themed-Ul.scss';

import Li from '@govtnz/ds/build/react-ts/Li';
import '../../commons/styles/ds/themed-Li.scss';

import InputBlock from '@govtnz/ds/build/react-ts/InputBlock';
import '@govtnz/ds/build/css/InputBlock.css';

import TextareaBlock from '@govtnz/ds/build/react-ts/TextareaBlock';
import '@govtnz/ds/build/css/TextareaBlock.css';

import RadioBlock from '@govtnz/ds/build/react-ts/RadioBlock';
import '@govtnz/ds/build/css/RadioBlock.css';

import FieldsetBlock from '@govtnz/ds/build/react-js/FieldsetBlock';
import '@govtnz/ds/build/css/FieldsetBlock.css';

import Radios from '@govtnz/ds/build/react-ts/Radios';

import PrototypesPage from '../../components/PrototypesPage';

const fieldState = {
  value: '',
  valid: true,
};

class ContactusForm extends React.Component {
  state = {
    username: {
      ...fieldState,
    },
    email: {
      ...fieldState,
      typeMismatch: false,
    },
    radio: {
      ...fieldState,
    },
    textarea: {
      ...fieldState,
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

        acc[currentVal.name] = {
          value,
          valid,
          typeMismatch,
        };

        return acc;
      }, {});

    return formfieldValues;
  };

  scrollToElement = () => {
    const scrollElement: Element | null = document.getElementById('field');

    if (scrollElement) {
      scrollElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formValues = this.getformFieldvalues(form.elements);

    const isFieldsValid = !Object.keys(formValues)
      .map((value) => formValues[value])
      .some((field) => !field.valid);

    this.setState({ ...formValues, isFieldsValid });
  };

  render() {
    const { email, username, textarea, radio, isFieldsValid } = this.state;
    const successMessage = isFieldsValid ? 'block' : 'none';

    const isInvalidEmail = email.typeMismatch
      ? 'Check your email address'
      : 'Enter your email address';

    const errorMessageFields = [
      username.valid ? '' : 'Enter your name',
      email.valid ? '' : isInvalidEmail,
      textarea.valid ? '' : 'Enter your message',
      radio.valid ? '' : 'Select where you live',
    ];

    return (
      <>
        <form
          style={{ padding: '20px' }}
          onSubmit={this.handleSubmit}
          noValidate
        >
          <H1 styleSize="xlarge" id="main-heading">
            Contact form
          </H1>

          {username.valid && email.valid && radio.valid && textarea.valid ? (
            ''
          ) : (
            <Alert level="error" headingId="heading3">
              <H2 id="heading3">
                Error: There’s a problem with the following responses
              </H2>
              <Ul bulleted>
                {errorMessageFields.map((message) => (
                  <>
                    {message ? (
                      <Li>
                        <a
                          href="#scroll-field"
                          onClick={() => {
                            this.scrollToElement();
                          }}
                        >
                          {message}
                        </a>
                      </Li>
                    ) : (
                      ''
                    )}
                  </>
                ))}
              </Ul>
            </Alert>
          )}

          <div style={{ display: successMessage }}>
            <Alert level="success" headingId="heading3">
              <H2 id="heading3">
                Success: Your message has been sent Thanks for contacting us.
              </H2>
              <P>We will reply to your email within 1-3 working days</P>
            </Alert>
          </div>

          <InputBlock
            width="30"
            maxLength={30}
            type="text"
            label="What’s your name?"
            name="username"
            id="field"
            errorId={username.valid ? '' : 'anyErrorId2Error'}
            error={username.valid ? '' : 'Enter your name'}
            required
          />

          <InputBlock
            id="scroll-field"
            width="30"
            maxLength={30}
            hintId="anyHintId3"
            label="What’s your email address?"
            errorId={email.valid ? '' : 'anyErrorId2Error'}
            error={email.valid ? '' : isInvalidEmail}
            type="email"
            name="email"
            required
          />

          <FieldsetBlock
            id="scroll-field"
            legend={
              <H1 styleSize="medium" id="nameChangeId5">
                Where do you live?
              </H1>
            }
            errorId={radio.valid ? '' : 'errorId5'}
            error={radio.valid ? '' : 'Select where you live'}
          >
            <Radios>
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
          </FieldsetBlock>

          <TextareaBlock
            autoComplete="example"
            id="scroll-field"
            name="textarea"
            label="What’s your message?"
            errorId={textarea.valid ? '' : 'anyErrorId2Error'}
            error={textarea.valid ? '' : 'Enter your message'}
            required
          />

          <button
            style={{ marginTop: '20px' }}
            className="g-button"
            type="submit"
          >
            Submit
          </button>
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
    <PrototypesPage
      title="Prototypes"
      pageProps={props}
      PageContent={PrototypePageContent}
    />
  );
};

export default template;

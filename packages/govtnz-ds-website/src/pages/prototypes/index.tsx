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

import H3 from '@govtnz/ds/build/react-js/H3';
import '@govtnz/ds/build/css/H3.css';

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

  scrollToElement = (id) => {
    const scrollElement: Element | null = document.getElementById(id);

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

    const errorMessages = [
      {
        id: '#scroll-field-name',
        message: username.valid ? '' : 'Enter your name',
      },
      {
        id: '#scroll-field-email',
        message: email.valid ? '' : isInvalidEmail,
      },
      {
        id: '#scroll-field-radio',
        message: radio.valid ? '' : 'Select where you live',
      },
      {
        id: '#scroll-field-text-area',
        message: textarea.valid ? '' : 'Enter your message',
      },
    ];

    return (
      <React.Fragment>
        <form
          style={{ padding: '20px' }}
          onSubmit={this.handleSubmit}
          noValidate
        >
          <H2 styleSize="large">Contact us</H2>

          {username.valid && email.valid && radio.valid && textarea.valid ? (
            ''
          ) : (
            <Alert level="error" headingId="heading3">
              <H3 id="heading3">
                Error: There’s a problem with the following responses
              </H3>
              {errorMessages.map(
                (error): React.ReactElement => (
                  <>
                    {error.message ? (
                      <Ul spacing key={error.message}>
                        <Li>
                          <a
                            href={error.id}
                            onClick={() => this.scrollToElement(error.id)}
                          >
                            {error.message}
                          </a>
                        </Li>
                      </Ul>
                    ) : (
                      ''
                    )}
                  </>
                )
              )}
            </Alert>
          )}

          <div style={{ display: successMessage }}>
            <Alert level="success" headingId="heading3">
              <H3 id="heading3">Success: Your message has been sent</H3>
              <P>
                Thanks for contacting us. We’ll get back to you in 1–3 working
                days.
              </P>
            </Alert>
          </div>

          <div style={{ marginTop: '40px' }}>
            <InputBlock
              autoComplete="name"
              id="scroll-field-name"
              width="30"
              maxLength={30}
              type="text"
              label="What’s your name?"
              name="username"
              errorId={username.valid ? '' : 'anyErrorId2Error'}
              error={username.valid ? '' : 'Enter your name'}
              required
            />
          </div>

          <div style={{ marginTop: '40px' }}>
            <InputBlock
              autoComplete="email"
              id="scroll-field-email"
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
          </div>

          <div>
            <FieldsetBlock
              legend={
                <H3 styleSize="medium" id="nameChangeId5">
                  Where do you live?
                </H3>
              }
              errorId={radio.valid ? '' : 'errorId5'}
              error={radio.valid ? '' : 'Select where you live'}
            >
              <Radios>
                <RadioBlock
                  id="scroll-field-radio"
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
          </div>
          <div style={{ marginTop: '40px' }}>
            <TextareaBlock
              id="scroll-field-text-area"
              autoComplete="off"
              name="textarea"
              label="What’s your message?"
              errorId={textarea.valid ? '' : 'anyErrorId2Error'}
              error={textarea.valid ? '' : 'Enter your message'}
              required
            />
          </div>
          <button
            style={{ marginTop: '20px' }}
            className="g-button"
            type="submit"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

const PrototypePageContent = () => (
  <React.Fragment>
    <H1 styleSize="xlarge" id="main-heading">
      Prototypes
    </H1>
    <p>
      See example prototypes built using Design System components. We’ll
      continue to update this page with prototypes to show how components look
      and work when used together.
    </p>
    <H2 styleSize="large">Contact form</H2>
    <p>
      A contact form gives visitors to your site an easy way to send you a
      message.
    </p>
    <p>
      This example demonstrates how form components can be used together. It is
      not guidance for creating a contact form.
    </p>
    <p>
      Interact with the example to see how it works. No information is sent if
      you select the ‘Submit’ button.
    </p>
    <ExampleContainer>
      <Row>
        <Column className="" xs="12" sm="12" md="9" lg="12">
          <ContactusForm />
        </Column>
      </Row>
    </ExampleContainer>

    <p>
      <a href="https://github.com/GOVTNZ/govtnz-design-system/blob/master/packages/govtnz-ds-website/src/pages/prototypes/index.tsx">
        View source code on GitHub
      </a>
    </p>

    <h2 id="credit">Credit</h2>
    <p>
      Original HTML and CSS derived from{' '}
      <a href="https://github.com/alphagov/govuk-frontend">
        GOV.UK Design System
      </a>
      .
    </p>
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

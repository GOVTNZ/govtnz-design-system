import React from 'react';
import Prism from 'prismjs-mt';
import { localStorageWrapper } from './storage';
import CONSTANTS from '../commons/constants.json';
import './prism-theme.css';
import './styles/components-example.scss';

const LSKEY = 'ds:user-metatemplateid';
const GA_EVENT_TARGET = `gtag_${CONSTANTS.GA_MEASUREMENT_ID.replace(new RegExp('-', 'g'), '_')}`;

let preferredFormatId: string = 'html';

export const getPreferredFormat = (): string => {
  const resp = localStorageWrapper.getItem(LSKEY);
  if (resp) {
    preferredFormatId = resp;
  }
  return preferredFormatId;
};

// Via https://developers.google.com/analytics/devguides/collection/analyticsjs/sending-hits#knowing_when_the_hit_has_been_sent
function createFunctionWithTimeout(callback, opt_timeout?: number | undefined) {
  var called = false;
  function fn(...args) {
    if (!called) {
      called = true;
      callback(...args);
    }
  }
  setTimeout(() => {
    fn('timeout');
  }, opt_timeout || 1000);
  return fn;
}

export const setPreferredFormat = (formatId: string): string => {
  preferredFormatId = formatId;
  localStorageWrapper.setItem(LSKEY, formatId);

  // Stats...
  const eventId = 'template-format-change';
  const GA_eventArgs = [
    `${GA_EVENT_TARGET}.send`,
    'event',
    eventId,
    formatId,
    {
      hitCallback: createFunctionWithTimeout(function(...args) {
        if (args && args[0] === 'timeout') {
          console.info('GA: Event timed out.', ...args);
        } else {
          console.info('GA: Successfully sent event.', ...args);
        }
      }, 10000),
    },
  ];
  if (window['ga']) {
    // Google Analytics
    window['ga'](...GA_eventArgs);
    console.info('GA: Sending', GA_eventArgs, ' given to ', window['ga']);
  } else {
    console.info(
      'GA: Unable to send GA event',
      GA_eventArgs,
      " because there's no  ",
      window['ga']
    );
  }
  // Google Tag Manager
  window['dataLayer'] = window['dataLayer'] || [];
  const GTM_eventArgs = {
    event: eventId,
    templateId: formatId,
  };
  window['dataLayer'].push(GTM_eventArgs);
  console.info(
    'GTM: Adding GTM event',
    GTM_eventArgs,
    ' given to ',
    window['dataLayer']
  );

  return preferredFormatId;
};

type SelectProps = {
  id: string;
  formatId: string;
  onChange: Function;
};

export const SelectComponentFormat = ({
  id,
  formatId,
  onChange,
}: SelectProps) => (
  <select
    id={id}
    value={formatId}
    onChange={e => {
      const formatId = e.target.value;
      setPreferredFormat(formatId);
      onChange(formatId);
    }}
  >
    <option value="html">HTML</option>
    <option value="css" style={{ paddingBottom: '10px' }}>
      CSS
    </option>
    <option value="scss" style={{ paddingBottom: '10px' }}>
      Sass (SCSS)
    </option>
    <option value="silverstripe-components">
      SilverStripe / Common Web Platform (CWP)
    </option>
    <option value="mustache">Mustache / Handlebars</option>
    <optgroup label="React">
      <option value="react-js">React (JavaScript)</option>
      <option value="react-ts">React (TypeScript)</option>
      <option value="react-js-styled-components">
        React with Styled Components (JavaScript)
      </option>
      <option value="react-ts-styled-components">
        React with Styled Components (TypeScript)
      </option>
    </optgroup>

    <optgroup label="Vue">
      <option value="vue-js">{CodeToName['vue-js']}</option>
      <option value="vue-ts">{CodeToName['vue-ts']}</option>
    </optgroup>
  </select>
);

// <optgroup label="Vue">
// <option value="vue-js">Vue (JavaScript)</option>
// <option value="vue-ts">Vue (TypeScript)</option>
// </optgroup>

export const SelectExampleFormat = ({
  id,
  formatId,
  onChange,
}: SelectProps) => {
  return (
    <>
      <select
        id={id}
        value={formatId}
        onChange={e => {
          const formatId = e.target.value;
          setPreferredFormat(formatId);
          onChange(formatId);
        }}
      >
        <option value="html">{CodeToName.html}</option>
        <option value="silverstripe-components">
          {CodeToName['silverstripe-components']}
        </option>
        <option value="mustache">{CodeToName.mustache}</option>
        <optgroup label="React">
          <option value="react-js">{CodeToName['react-js']}</option>
          <option value="react-ts">{CodeToName['react-ts']}</option>
          <option value="react-js-styled-components">
            {CodeToName['react-js-styled-components']}
          </option>
          <option value="react-ts-styled-components">
            {CodeToName['react-ts-styled-components']}
          </option>
        </optgroup>
        <optgroup label="Vue">
          <option value="vue-js">{CodeToName['vue-js']}</option>
          <option value="vue-ts">{CodeToName['vue-ts']}</option>
        </optgroup>
      </select>
    </>
  );
};

export const CodeToName = {
  html: 'HTML',
  'react-js': 'React (JavaScript)',
  'silverstripe-components': 'SilverStripe / Common Web Platform (CWP)',
  mustache: 'Mustache / Handlebars',
  'react-ts': 'React (TypeScript)',
  'react-js-styled-components': 'React with Styled Components (JavaScript)',
  'react-ts-styled-components': 'React with Styled Components (TypeScript)',
  'vue-js': 'Vue (JavaScript)',
  'vue-ts': 'Vue (TypeScript)',
};

// Valid choices in 'prismjs-mt' build:
// "markup", "xml", "html", "mathml", "s  vg", "css", "clike",
// "javascript", "js", "markup-templating", "handlebars",
// "typescript", "ts", "jsx", "tsx"
export const metaTemplateIdToPrismLanguage = {
  html: 'html',
  css: 'css',
  'react-js': 'jsx',
  'react-ts': 'tsx',
  'react-js-styled-components': 'jsx',
  'react-ts-styled-components': 'tsx',
  'react-js-no-css-import': 'jsx',
  'react-ts-no-css-import': 'tsx',
  mustache: 'handlebars',
  'silverstripe-components': 'handlebars', // closest choice afaik. other suggestions welcome!
  'vue-ts': 'tsx',
  'vue-js': 'jsx',
};

export const highlightCode = (code, formatId): string => {
  const prismFormatId = metaTemplateIdToPrismLanguage[formatId];
  const prismFormat = Prism.languages[prismFormatId];

  if (!code) return ``;

  if (!prismFormatId || !prismFormat) {
    console.info(
      `No prismFormatId/prismFormat for "${formatId}". Valid choices were ${JSON.stringify(
        metaTemplateIdToPrismLanguage
      )} .`
    );

    // Return plaintext
    return escapeHTML(code);
  }

  const highlightedCode: string = Prism.highlight(
    code,
    prismFormat || Prism.languages.clike,
    formatId
  ) // Remove unnecessary title attributes as per DS-29
    .replace(/title=["'][^"']+["']/gi, '');

  return highlightedCode;
};

function escapeHTML(unsafe) {
  return unsafe.replace(/[&<"'>]/g, function(c) {
    switch (c) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '"':
        return '&quot;';
      case '>':
        return '&gt;';
      default:
        return '&#039;';
    }
  });
}

import normalizeSelector from 'normalize-selector';
import { camelCase } from 'lodash';
import { CSSVariablePattern } from '@springload/metatemplate';
import ProgressBar from 'progress';
import { sleep } from '@govtnz/ds-common';
import { ReleaseVersion, Component } from '@govtnz/ds-upstream';
import {
  filterCSSByClassName,
  setCSSValues,
  MetaTemplateDef,
  toId
} from './normalize';
import { gc, cssPropertiesToObject, splitSelectors, AnyObject } from './utils';
import svgToDataURL from 'svg-to-dataurl';

const ONE_REM_IN_PIXELS = 16; // in our DS

export const normalizeReleaseVersionGovUk = async (
  upstreamReleaseVersion: ReleaseVersion
): Promise<ReleaseVersion> => {
  let components: Component[] = [];

  const bar = new ProgressBar(
    `${upstreamReleaseVersion.sourceId}@${
      upstreamReleaseVersion.version
    } conversion to GovtNZ MetaTemplate Inputs... :bar :percent`,
    {
      total: upstreamReleaseVersion.components.length
    }
  );

  // The 'All CSS' from GovUK is the same per-component
  let css = '';
  if (upstreamReleaseVersion.components.length) {
    css = await govUKToGovtNZCSS(upstreamReleaseVersion.components[0].css);
  }

  let messages = '';
  // This was previously 'await Promise.all(upstreamReleaseVersion.components.map( async'
  // but executing that many at once was exhausting memory
  for (let i = 0; i < upstreamReleaseVersion.components.length; i++) {
    const component: Component = upstreamReleaseVersion.components[i];

    const metaTemplateDefs: MetaTemplateDef[] = await govukToMetaTemplateInput(
      component.id,
      removeGovUkIdentifiers(component.html),
      css,
      component.version
    );

    metaTemplateDefs.forEach(
      ({ id, html, css, message, calculatedDynamicKeys }: MetaTemplateDef) => {
        if (id !== toId(id)) {
          // id should be normalized by now...
          throw new Error(
            `${__filename}: Bad id generated of ${id} (vs ${toId(
              id
            )}). Current message was: ${message}`
          );
        }
        const metaTemplateComponent: Component = {
          id,
          version: component.version,
          html,
          css,
          cssVariables,
          calculatedDynamicKeys
        };
        components.push(metaTemplateComponent);
      }
    );

    bar.tick();
    gc(); // JSDOM can use a lot of memory. GC time after we've used it.
    await sleep(1); // give GC a bit of time

    if (metaTemplateDefs.length > 0 && metaTemplateDefs[0].message) {
      messages += metaTemplateDefs[0].message;
    }
  }

  console.info(messages); // info from govukToMetaTemplate

  const releaseVersion: ReleaseVersion = {
    ...upstreamReleaseVersion,
    components
  };

  return releaseVersion;
};

export const removeGovUkIdentifiers = (data: string) => {
  // Remove Gov UK-specific styles
  // When we contacted them they were keen to share but
  // they had some minor requests like removing their font
  // and crest, so we remove some of those things here...
  const nonUk = data
    .replace(/govuk-/gi, 'g-') // we don't use their namespace...
    .replace(/govuk-/gi, 'g-') // we don't use their namespace...
    .replace(/\\?["']nta\\?["'],/gi, '') // ...nor their fonts... in a list
    .replace(/\\?["']nta\\?["'];/gi, '"Name";') // or on their own
    .replace(/GOV\.UK/gi, 'Govt.NZ')
    .replace(/£/g, '$');

  // There appear to be some data attribute markers in govuk templates
  // that we don't need, so should we remove them? They're harmless, but...
  // FIXME: Remove (ie) data-module="header" attributes?

  const thingsThatShouldNeverAppear = [
    'govuk',
    'govtuk', // I don't think this term ever appeared in it but it seems like a harmless check
    /["']nta\\?["']/g
  ];
  thingsThatShouldNeverAppear.forEach(thingThatShouldNeverAppear => {
    const found = nonUk.match(thingThatShouldNeverAppear);
    if (found) {
      const index = nonUk.search(thingThatShouldNeverAppear);
      throw Error(
        `Removal of "${thingThatShouldNeverAppear}" failed because it matched "${found}" from "${nonUk.substring(
          index - 20,
          index + 20
        )}". Was: ${data.replace(/[\n\r]/g, ' ')}`
      );
    }
  });

  return nonUk;
};

type additionalTemplate = {
  id: string;
  html: string;
  cssNamespace?: string | undefined;
  calculatedDynamicKeys?: AnyObject;
};

export const govukToMetaTemplateInput = async (
  oldTemplateId: string,
  oldHTML: string,
  css: string,
  semVer: string
): Promise<MetaTemplateDef[]> => {
  let html = oldHTML;
  let message = '';
  const calculatedDynamicKeys: AnyObject = {};

  let id: string | undefined = oldTemplateId;
  const additionalPrefixesToBypassNamespacing: string[] = [];
  let cssNamespace;
  let additionalTemplates: additionalTemplate[] = [];
  switch (id) {
    // Components that we want to ignore
    case 'input':
    case 'input__with-hint-text':
    case 'input__with-width-2-class':
    case 'input__with-width-3-class':
    case 'input__with-width-4-class':
    case 'input__with-width-5-class':
    case 'input__with-width-10-class':
    case 'input__with-width-20-class':
    case 'input__with-width-30-class':
    case 'input__with-autocomplete-attribute':
    case 'input__with-label-as-page-heading':
    case 'input__with-optional-form-group-classes': {
      message += `Note: Ignoring govuk upstream component "${id}".\n`;
      id = undefined; // setting id to `undefined` means ignore this component
      break;
    }
    case 'back-link':
    case 'back-link__with-custom-text': {
      html = `<a class="g-back-link" href="#"><mt-variable key="children">Example text</mt-variable></a>`;
      break;
    }

    case 'button':
    case 'button__disabled':
    case 'button__with-active-state':
    case 'button__with-focus-state':
    case 'button__with-hover-state':
    case 'button__secondary':
    case 'button__warning': {
      id = 'button';
      html = `<button
          class="g-button {{ disabled!?: g-button--disabled }} {{ level: g-button--secondary as secondary | g-button--warning as warning }}"
          type="submit"
          aria-disabled="{{ disabled!?: true }}"
          disabled="{{ disabled!?: true }}"
        >
          <mt-variable key="children">
            Example text
          </mt-variable>
        </button>`;
      break;
    }

    case 'input__with-error-message': {
      id = 'InputBlock';
      html = `<div class="g-form-group {{ hasError!?: g-form-group--error }}">
      <label class="g-label" for="inputId"><mt-variable key="label">Example text</mt-variable></label>
      <div class="g-hint" id="hintId"><mt-variable key="hint">Example text</mt-variable></div>
      <mt-if key="!hasError"><div class="g-error-message" id="errorId"><span class="g-visually-hidden">Error: </span><mt-variable key="error">Example text</mt-variable></div></mt-if>
      <input class="g-input {{ width?: g-input--width-30 as 30 | g-input--width-20 as 20 | g-input--width-10 as 10 | g-input--width-5 as 5 | g-input--width-4 as 4 | g-input--width-3 as 3 | g-input--width-2 as 2 }} {{ hasError!?: g-input--error }}" id="inputId" name="test-name-3" type="text" aria-describedby="hintId errorId">
    </div>`;
      // Derive a version that's just the input tag
      additionalTemplates.push({
        id: 'input',
        html: `<input class="g-input {{ width?: g-input--width-30 as 30 | g-input--width-20 as 20 | g-input--width-10 as 10 | g-input--width-5 as 5 | g-input--width-4 as 4 | g-input--width-3 as 3 | g-input--width-2 as 2 }} {{ hasError!?: g-input--error }} {{ fakeFocus?: :focus }}" id="inputId" name="test-name-3" type="text" aria-describedby="describedBy">`
      });
      break;
    }
    case 'heading--style-size': {
      id = 'H1';
      html =
        '<h1 class="{{ styleSize: g-heading-xl as xlarge | g-heading-l as large | g-heading-m as medium | g-heading-s as small | g-heading-xs as xsmall | g-heading-xxs as xxsmall }}{{ marginBottom8?: g-heading-mb-8 }}" id="id"><mt-variable key="children">Example text</mt-variable></h1>';

      additionalTemplates = [2, 3, 4, 5, 6].map(headingLevel => ({
        id: `H${headingLevel}`,
        html: html.replace(/h1/gi, `h${headingLevel}`)
      }));
      break;
    }
    case 'paragraph--style-size': {
      id = 'P';
      html = `<p class="{{ styleSize: g-body-l as large | g-body-m as medium | g-body-s as small | g-body-xs as x-small }}"><mt-variable key="children">Example text</mt-variable></p> `;
      break;
    }
    case 'unordered-list': {
      id = 'Ul';
      html = `<ul class="g-list {{ bulleted?: g-list--bullet }}"><mt-variable key="children">Example text</mt-variable></ul>`;

      break;
    }
    case 'ordered-list': {
      id = 'Ol';
      html = `<ol class="g-list {{ numbered?: g-list--number }}"><mt-variable key="children">Example text</mt-variable></ol>`;
      additionalTemplates = [
        {
          id: 'Li',
          html: `<li><mt-variable key="children">Example text</mt-variable></li>`
        }
      ];
      break;
    }
    case 'radios__with-all-fieldset-attributes': {
      // START FIELDSET BLOCK WITH ERROR
      additionalTemplates.push({
        id: 'fieldsetBlockWithError',
        html: `<div class="g-form-group g-form-group--error">
        <fieldset class="g-fieldset" aria-describedby="hintId errorId">
          <legend class="g-fieldset__legend"><mt-variable key="legend">Legend text</mt-variable></legend>
          <div class="g-hint" id="hintId"><mt-variable key="hint">Hint text</mt-variable></div>
          <div class="g-error-message" id="errorId"><span class="g-visually-hidden">Error: </span><mt-variable key="error">Error text</mt-variable></div>
          <div class="g-children"><mt-variable key="children">Fieldset contents</mt-variable></div>
        </fieldset>
      </div>`
      });

      additionalTemplates.push({
        id: 'fieldsetBlock',
        html: `<div class="g-form-group">
        <fieldset class="g-fieldset" aria-describedby="hintId">
          <legend class="g-fieldset__legend"><mt-variable key="legend">Legend text</mt-variable></legend>
          <mt-if key="!hintId">
            <div class="g-hint" id="hintId"><mt-variable key="hint">Hint text</mt-variable></div>
          </mt-if>
          <div><mt-variable key="children">Fieldset contents</mt-variable></div>
        </fieldset>
      </div>`
      });

      additionalPrefixesToBypassNamespacing.push('fieldset');

      id = 'fieldset';
      html = `<div class="g-form-group">
      <fieldset class="g-fieldset" aria-describedby="hintId"><mt-variable key="children">Legend and other fieldset contents...</mt-variable></fieldset>
    </div>`;
      additionalTemplates.push({
        id: 'legend',
        html: `<legend class="g-fieldset__legend"><mt-variable key="children">Legend text</mt-variable></legend>`
      });
      additionalTemplates.push({
        id: 'fieldsetLabel',
        html: `<div class="g-hint" id="hintId"><mt-variable key="hint">Hint text</mt-variable></div`
      });
      break;
    }
    case 'select': {
      html = `<select class="g-select" id="selectId">
      <mt-variable key="children"><option>Options</option></mt-variable>
    </select>`;

      additionalTemplates.push({
        id: 'selectBlock',
        html: `<div>
        <label class="g-label" for="selectId">
          <mt-variable key="label">Example label text</mt-variable>
        </label>
        <select class="g-select {{ hasError: g-select--error }}" id="selectId"><mt-variable key="children"><option>Options</option></mt-variable></select>
      </div>`
      });
      break;
    }
    case 'character-count__with-custom-rows': {
      html = `<div class="g-character-count" data-maxlength="{{ maxLength }}">
      <div class="g-form-group">
        <label class="g-label" for="id">
          Full address
        </label>
        <textarea
          class="g-textarea"
          id="id"
          name="custom"
          rows="8"
        ></textarea>
        <span
          class="g-hint g-character-count__message"
          aria-live="polite"
          >You have <mt-variable key="remainingCharacters"></mt-variable> characters remaining</span
        >
      </div>
    </div>`;
      calculatedDynamicKeys.remainingCharacters =
        'props.value !== undefined && props.maxLength !== undefined ? parseInt(props.maxLength, 10) - props.value.length : props.maxLength';
      break;
    }
    case 'radios__with-hints-on-items': {
      // some attributes will be added automatically by MetaTemplate
      // such as:
      //  'name'
      //  'value'
      additionalPrefixesToBypassNamespacing.push('radios');
      additionalTemplates.push({
        id: 'radioBlock',
        html: `<div class="g-radios__item">
               <input class="g-radios__input {{ fakeFocus?: :focus }}" id="radioId" name="gov" type="radio" aria-describedby="hintId">
               <label class="g-label g-radios__label" for="radioId"><mt-variable key="label">Label text</mt-variable></label>
             </div>`,
        cssNamespace: 'radios'
      });
      additionalTemplates.push({
        id: 'radioBlockWithHint',
        html: `<div class="g-radios__item">
        <input class="g-radios__input {{ fakeFocus?: :focus }}" id="radioId" type="radio" aria-describedby="hintId">
        <label class="g-label g-radios__label" for="radioId"><mt-variable key="label">Label text</mt-variable></label>
        <div class="g-hint g-radios__hint" id="hintId"><mt-variable key="hint">Hint text</mt-variable></div>
      </div>`,
        cssNamespace: 'radios'
      });

      // INPUT ELEMENT ON ITS OWN
      additionalTemplates.push({
        id: 'radio',
        html: `<input class="g-radios__input {{ fakeFocus?: :focus }}" id="gov-1" name="gov" type="radio" aria-describedby="hintId">`,
        cssNamespace: 'radios'
      });
      // END INPUT ELEMENT ON ITS OWN

      // FORM FIELD DIVIDER
      additionalTemplates.push({
        id: 'FormDivider',
        html: `<div class="g-form-divider"><mt-variable key="children">Example Text</mt-variable></div>`
      });
      // END RADIO DIVIDER

      // RADIOS CONTAINER
      id = 'radios';
      cssNamespace = 'radios';
      html = `<div class="g-radios {{ inline!?: g-radios--inline }}"><mt-variable key="children">Radio components</mt-variable></div>`;
      // END RADIOS CONTAINER
      break;
    }
    case 'checkboxes__with-hints-on-items': {
      // Some attributes will be added automatically by MetaTemplate
      // such as:
      //  'name'
      //  'value'

      additionalTemplates.push({
        id: 'checkboxBlock',
        html: `<div class="g-checkboxes__item">
        <input class="g-checkboxes__input {{ fakeFocus?: :focus }}" id="checkboxId" type="checkbox" aria-describedby="hintId">
        <label class="g-label g-checkboxes__label" for="checkboxId"><mt-variable key="label">Label text</mt-variable></label>
        <mt-if key="!hintId">
          <div class="g-hint g-checkboxes__hint" id="hintId"><mt-variable key="hint">Hint text</mt-variable></div>
        </mt-if>
      </div>`
      });
      additionalPrefixesToBypassNamespacing.push('checkboxes');

      additionalTemplates.push({
        id: 'checkbox',
        html: `<input class="g-checkboxes__input {{ fakeFocus?: :focus }}" id="checkboxId" type="checkbox" aria-describedby="hintId">`
      });

      id = '';

      // id = 'checkboxes';
      // html = `<div class="g-checkboxes {{ inline!?: g-checkboxes--inline }}"><mt-variable key="children">Checkbox components</mt-variable></div>`;
      break;
    }
    case 'a': {
      html = `<a class="g-link {{ isMuted?: g-link--muted }}" href="#"><mt-variable key="children">Example text</mt-variable></a>`;
      break;
    }
    case 'caption-m':
    case 'caption-l':
    case 'caption-xl': {
      html = `<span class="g-${id}"><mt-variable key="children">Example text</mt-variable></span>`;
      break;
    }
  }

  if (id) {
    if (id !== oldTemplateId) {
      message += `Note: ${oldTemplateId} renamed to ${id}.\n`;
    }
    additionalTemplates.forEach(template => {
      message += `Note: Additional template ${
        template.id
      } made (probably based on ${id}).\n`;
    });
    // 'unshift' because it must be the first index because we're adding 'message' here
    additionalTemplates.unshift({ id, html, calculatedDynamicKeys });
  } else {
    additionalTemplates.forEach(template => {
      message += `Note: Additional template ${template.id} made.\n`;
    });
  }

  return additionalTemplates.map(template => {
    if (template.id.match(/H[1-6]/)) {
      message += `Note: template ${
        template.id
      } bypassed additional namespacing of the component id (eg. g-... to g-list-...).\n`;
      // don't namespace these headings
      return {
        ...template,
        id: toId(template.id),
        css,
        message
      };
    }
    return normalizeGovUkTemplate({
      ...template,
      css,
      cssNamespace,
      message,
      additionalPrefixesToBypassNamespacing
    });
  });
};

const pxToRem = (px: number): string => {
  return `${px / ONE_REM_IN_PIXELS}rem`;
};

type CSSReplacementRuleOnlyReplace = [
  'all' | 'print' | 'screen-big',
  string, // selector
  string // css properties to REPLACE (will error if unable to replace)
];
type CSSReplacementRuleWithAdd = [
  'all' | 'print' | 'screen-big',
  string, // selector
  string, // css properties to REPLACE (will error if unable to replace)
  string // css properties to ADD
];

type CSSReplacementRuleWithRemove = [
  'all' | 'print' | 'screen-big',
  string, // selector
  string, // css properties to REPLACE (will error if unable to replace)
  string, // css properties to ADD
  string // css properties to REMOVE using comma separated properties
];

type CSSReplacementRule =
  | CSSReplacementRuleOnlyReplace
  | CSSReplacementRuleWithAdd
  | CSSReplacementRuleWithRemove;

type GovUkMediaCategory =
  | 'all'
  | 'print'
  | 'screen-big'
  | 'hover-none' // https://stackoverflow.com/q/40532204
  | 'high-dpi' // ie. "@media only screen and (-webkit-min-device-pixel-ratio: 2)
  | 'min-width-1024'
  | undefined;

type CSSReplacementRuleObject = [
  GovUkMediaCategory,
  string[], // selectors, split by comma
  AnyObject, // css properties to replace
  string | undefined, // css properties to add
  string[]
];

export const updateCSS = (css: string, rules: CSSReplacementRule[]): string => {
  const newRules: CSSReplacementRuleObject[] = rules.map(rule => {
    const newRule: CSSReplacementRuleObject = [
      rule[0],
      splitSelectors(rule[1]).map(selectorPart =>
        normalizeSelector(selectorPart)
      ),
      rule[2] && cssPropertiesToObject(rule[2]),
      rule[3],
      rule[4] && rule[4].split(',').map(propertyName => propertyName.trim())
    ];
    return newRule;
  });

  const matchedRules = newRules.map(newRule =>
    newRule[1].map(s => ({
      replace: newRule[2]
        ? Object.keys(newRule[2]).reduce((obj, key) => {
            obj[key] = false;
            return obj;
          }, {})
        : {},
      add: newRule[3] ? false : undefined
    }))
  );

  const newCSS = setCSSValues(
    css,
    ({ atRule, selector, name, value }) => {
      let govUkMediaCategory: GovUkMediaCategory = atRuleToGovMediaCategory(
        atRule
      );

      for (let i = 0; i < newRules.length; i++) {
        const rule = newRules[i];
        if (rule[0] !== govUkMediaCategory) {
          continue;
        }

        for (let x = 0; x < rule[1].length; x++) {
          const ruleSelector = rule[1][x];
          const normalizedSelector = normalizeSelector(selector);
          if (ruleSelector === normalizedSelector) {
            const replaceValue: string | undefined = rule[2] && rule[2][name];
            if (replaceValue !== undefined) {
              matchedRules[i][x].replace[name] = true; // keep note of which replacements were made so that we can identify replacement rules that don't match anything
              return replaceValue;
            }
          }
        }
      }
      return undefined;
    },
    undefined,
    ({ atRule, selector }) => {
      let govUkMediaCategory: GovUkMediaCategory = atRuleToGovMediaCategory(
        atRule
      );
      for (let i = 0; i < newRules.length; i++) {
        const rule = newRules[i];
        if (rule[0] !== govUkMediaCategory) {
          continue;
        }

        for (let x = 0; x < rule[1].length; x++) {
          const ruleSelector = rule[1][x];
          const normalizedSelector = normalizeSelector(selector);
          if (ruleSelector === normalizedSelector) {
            if (rule[3]) {
              matchedRules[i][x].add = true; // keep note of which replacements were made so that we can identify replacement rules that don't match anything
              return rule[3];
            }
          }
        }
      }
      return undefined;
    },
    ({ atRule, selector, name, value }): boolean => {
      // Whether to remove the property
      let govUkMediaCategory: GovUkMediaCategory = atRuleToGovMediaCategory(
        atRule
      );
      for (let i = 0; i < newRules.length; i++) {
        const rule = newRules[i];
        if (rule[0] !== govUkMediaCategory || !rule[4]) {
          continue;
        }

        for (let x = 0; x < rule[1].length; x++) {
          const ruleSelector = rule[1][x];
          const normalizedSelector = normalizeSelector(selector);
          if (ruleSelector === normalizedSelector) {
            if (rule[4]) {
              for (let y = 0; y < rule[4].length; y++) {
                const propertyName = rule[4][y];
                if (propertyName === name) {
                  // Removal match!
                  // (we don't currently support matching values as well)
                  return true;
                }
              }
            }
          }
        }
      }
      return false;
    }
  );

  const unmatchedRules = [];
  matchedRules.forEach((objs, i) => {
    objs.forEach((obj, x) => {
      const unusedReplaceStyles =
        obj.replace &&
        Object.keys(obj.replace).reduce((replaceObj, key) => {
          if (obj.replace[key] === false) {
            replaceObj[key] = newRules[i][2][key];
          }
          return replaceObj;
        }, {});

      const unusedAddStyles = obj.add === false ? newRules[i][3] : undefined;

      if (
        (unusedReplaceStyles && Object.keys(unusedReplaceStyles).length) ||
        unusedAddStyles
      ) {
        unmatchedRules.push([
          newRules[i][0],
          newRules[i][1][x],
          unusedReplaceStyles,
          unusedAddStyles
        ]);
      }
    });
  });

  if (unmatchedRules.length > 0) {
    console.log('Unmatched CSS rules that should be reviewed', unmatchedRules);
    throw Error(
      `${__filename} given CSS rules to match that didn't match anything. Unmatched CSS rules were ${JSON.stringify(
        unmatchedRules,
        null,
        0
      )}`
    );
  }

  return newCSS;
};

const atRuleToGovMediaCategory = (atRule: string): GovUkMediaCategory => {
  switch (
    atRule.trim() // strangely .trim() is required because atRule can be "@font-face " with a trailing space!
  ) {
    case '@media print':
      return 'print';
    case '@media (min-width: 20em)':
    case '@media (min-width: 40.0625em)':
    case '@media (min-width: 48.0625em)':
    case '@media (min-width: 40.0625em) and (min-width: 40.0625em)': // Bad CSS from GOV Uk?
      return 'screen-big';
    case '': // empty is a default meaning 'all'
    case '@media (max-width: 40.0525em)':
    case '@media (max-width: 48.0525em)':
    case '@media (max-width: 40.0525em) and (min-width: 40.0625em)':
      return 'all';
    case '@media (hover: none)':
      return 'hover-none';
    case '@media (min-width: 1020px)':
      return 'min-width-1024';
    case '@font-face':
    case '@media screen':
    case '@supports (margin: max(calc(0px)))':
    case '@supports (padding: max(calc(0px)))':
    case '@supports not (caret-color: auto)':
    case '@media (hover: none), (pointer: coarse)':
      return undefined;
    default: {
      if (
        atRule.includes(
          '@media only screen and (-webkit-min-device-pixel-ratio: 2)'
        )
      ) {
        return 'high-dpi';
      }
      break;
    }
  }
  throw Error(
    `Unknown atRule "${atRule}". Unable to map to govUKMediaCategory.`
  );
};

const cssVariables: CSSVariablePattern[] = [
  {
    id: 'g-theme-font-family',
    valueSubstringMatch: 'Arial, sans-serif',
    defaultValue: 'Arial, sans-serif'
  },
  {
    id: 'g-theme-color-heading',
    valueSubstringMatch: '#ff0000',
    defaultValue: '#0b0c0c'
  },
  {
    id: 'g-theme-color-link',
    valueSubstringMatch: '#ff0000',
    defaultValue: '#0000ff'
  },

  {
    id: 'g-theme-color-black',
    valueSubstringMatch: '#000000',
    defaultValue: '#000000'
  },
  {
    id: 'g-theme-color-grey',
    valueSubstringMatch: '#bfc1c3',
    defaultValue: '#bfc1c3'
  },
  {
    id: 'g-theme-color-darkblue',
    valueSubstringMatch: '#005ea5',
    defaultValue: '#005ea5'
  },
  {
    id: 'g-theme-color-brand-1', // focus
    valueSubstringMatch: '#ffbf47',
    defaultValue: '#b53cde'
  },
  {
    id: 'g-theme-color-light-grey',
    valueSubstringMatch: '#f8f8f8',
    defaultValue: '#f8f8f8'
  },
  {
    id: 'g-theme-color-mid-grey',
    valueSubstringMatch: '#6f777b',
    defaultValue: '#6f777b'
  },
  {
    id: 'g-theme-color-white',
    valueSubstringMatch: '#ffffff',
    defaultValue: '#ffffff'
  },
  {
    id: 'g-theme-color-brand-2',
    valueSubstringMatch: '#00823b',
    defaultValue: '#00823b'
  },
  {
    id: 'g-theme-color-brand-3',
    valueSubstringMatch: '#003618',
    defaultValue: '#003618'
  },
  {
    id: 'g-theme-color-brand-4',
    valueSubstringMatch: '#00692f',
    defaultValue: '#00692f'
  },
  {
    id: 'g-theme-color-dark2',
    valueSubstringMatch: '#b10e1e',
    defaultValue: '#b10e1e'
  },
  {
    id: 'g-theme-color-dark3',
    valueSubstringMatch: '#2b8cc4',
    defaultValue: '#2b8cc4'
  },
  {
    id: 'g-theme-color-dark4',
    valueSubstringMatch: '#a1acb2',
    defaultValue: '#a1acb2'
  },
  {
    id: 'g-theme-color-dark5',
    valueSubstringMatch: '#454a4c',
    defaultValue: '#454a4c'
  },
  {
    id: 'g-theme-color-dark6',
    valueSubstringMatch: '#dee0e2',
    defaultValue: '#dee0e2'
  },
  {
    id: 'g-theme-color-dark7',
    valueSubstringMatch: '#171819',
    defaultValue: '#171819'
  },
  {
    id: 'g-theme-color-dark8',
    valueSubstringMatch: '#2e3133',
    defaultValue: '#2e3133'
  },
  {
    id: 'g-theme-color-dark9',
    valueSubstringMatch: '#1d8feb',
    defaultValue: '#1d8feb'
  },
  {
    id: 'g-theme-color-dark10',
    valueSubstringMatch: '#4c2c92',
    defaultValue: '#4c2c92'
  },
  {
    id: 'g-theme-color-dark11',
    valueSubstringMatch: '#28a197',
    defaultValue: '#28a197'
  },
  {
    id: 'g-theme-button-color',
    valueSubstringMatch: '#00823b',
    defaultValue: '#078766'
  },
  {
    id: 'g-theme-button-color-hover-focus',
    valueSubstringMatch: '#00682f',
    defaultValue: '#0c6c53'
  },
  {
    id: 'g-theme-button-color-secondary',
    valueSubstringMatch: '#dee0e2',
    defaultValue: '#d3d3d3'
  },
  {
    id: 'g-theme-button-color-secondary-hover-focus',
    valueSubstringMatch: '#c8cacb',
    defaultValue: '#b2b2b2'
  },
  {
    id: 'g-theme-button-color-secondary-box-shadow',
    valueSubstringMatch: '#858688',
    defaultValue: '#2a2a2a'
  },
  {
    id: 'g-theme-button-color-warning',
    valueSubstringMatch: '#b10e1e',
    defaultValue: '#b10e1e'
  },
  {
    id: 'g-theme-button-color-warning-hover-focus',
    valueSubstringMatch: '#8e0b18',
    defaultValue: '#900815'
  },
  {
    id: 'g-theme-button-color-warning-box-shadow',
    valueSubstringMatch: '#47060c',
    defaultValue: '#2a2a2a'
  }
];

const govUKToGovtNZCSS = async (oldCSS: string) => {
  let css = removeGovUkIdentifiers(oldCSS);
  css = css.replace(/@charset.*?;/g, ''); // don't need this.. we're using UTF-8 everywhere

  // UK have 4 sizes for headings, but we want 6 so we'll select their
  // smallest one...
  const headingS = await filterCSSByClassName('g-heading-s', css);
  if (headingS.length === 0) {
    console.log('\n\nProblem finding .g-heading-s in template CSS...\n\n');
    console.log(css);
    console.log('\n\n');
    // fs.writeFileSync('/tmp/debug.css', css, { encoding: 'utf-8' });
    throw Error("Unable to find 'g-heading-s' in CSS.");
  }
  // ...and use that as a template to derive smaller sizes...
  const headingXS = headingS.replace(/\.g-heading-s/gi, '.g-heading-xs');
  const headingXXS = headingS.replace(/\.g-heading-s/gi, '.g-heading-xxs');
  // ... which we'll subsequently replace in replaceCSS
  css += headingXS + headingXXS;
  css += '.g-heading-mb-8 { margin-bottom: 8px; }'; // Sometimes in code such as the examples
  css = css.replace(/\.g-radios__divider/gi, '.g-form-divider'); // GovUK includes a radio-specific divider which we can generalise
  css += '.g-select::-ms-expand { display: none; }'; // https://stackoverflow.com/a/15933790

  css = updateCSS(css, [
    // FORM
    // Label
    [
      'all',
      '.g-label',
      `color: #2a2a2a; font-weight: 500; font-size: ${pxToRem(20)}`,
      undefined
    ],

    // INPUT
    ['all', '.g-input', 'border: 1px solid #2a2a2a; padding: .5rem'],

    // Hint
    ['all', '.g-hint', 'color: #595959'],

    // Errors
    ['all', '.g-input--error', 'border: 1px solid #b10e1e'],
    ['all', '.g-error-message', 'font-weight: 700'],

    // HEADING
    [
      'all',
      '.g-heading-xl, .g-heading-l, .g-heading-s, .g-heading-xs, .g-heading-xxs',
      'font-weight: 500; color: #2a2a2a;'
    ],
    // Heading size ranges
    //  - larger sizes
    [
      'all',
      '.g-heading-l, .g-heading-m, .g-heading-s, .g-heading-xs',
      'margin-bottom: 0.5rem;'
    ],
    [
      'screen-big',
      '.g-heading-m, .g-heading-s, .g-heading-xs',
      'margin-bottom: 0.5rem;'
    ],
    //  - smaller sizes
    ['all', '.g-heading-xs, .g-heading-xxs', 'margin-top: 2.5rem;'],

    // heading xl
    [
      'all',
      '.g-heading-xl',
      'font-size: 3rem; line-height: 1.125; margin-bottom: 1rem;'
    ],
    [
      'screen-big',
      '.g-heading-xl',
      'font-size: 3.5rem; line-height: 1.15; margin-bottom: 1rem'
    ],

    // heading l
    [
      'all',
      '.g-heading-l',
      'font-size: 2rem; line-height: 1.2; margin-top: 3.5rem;'
    ],
    ['screen-big', '.g-heading-l', 'font-size: 2.5rem; line-height: 1.25'],

    // heading m
    [
      'all',
      '.g-heading-m',
      'font-size: 1.5rem; line-height: 1.25; margin-top: 2.5rem; font-weight: 500'
    ],

    // heading s
    [
      'all',
      '.g-heading-s',
      'font-size: 1.25rem; line-height: 1.25; margin-top: 2.5rem;'
    ],

    // heading xs
    ['all', '.g-heading-xs', 'font-size: 1.125rem'],
    ['screen-big', '.g-heading-xs', 'font-size: 0.9375rem'],
    ['print', '.g-heading-xs', 'font-size: 13pt'],

    // heading xxs
    ['all', '.g-heading-xxs', 'font-size: 1rem'],
    ['screen-big', '.g-heading-xxs', 'font-size: 0.875rem'],
    ['print', '.g-heading-xxs', 'font-size: 12pt'],

    // BUTTONS
    [
      'all',
      '.g-button',
      `
        padding: 16px;
        padding-top: 16px;
        padding-bottom: 16px;
        font-size: 20px;
        font-weight: 500;
        line-height: 1.2;
        color: #ffffff;
        border-radius: 4px;
        box-shadow: 0 2px 0 0 #2a2a2a;
      `
    ],

    // BODY
    [
      'all',
      '.g-body-l, .g-body-m, .g-body-s',
      'color: #2a2a2a; line-height: 1.625; margin-bottom: 1rem;'
    ],

    // Fieldset
    ['all', '.g-fieldset__legend', 'margin-bottom: 0px'],

    // LINK
    // ['all', '.g-link', 'color: #005dbb'], // Doesn't match. Review later.
    ['all', '.g-link:visited', 'color: #4c2c92'],
    ['all', '.g-link:hover', 'color: #000c48'],
    ['all', '.g-link:focus', '', '', 'background-color'], // Removes background colour
    ['all', '.g-error-summary__list a:focus', '', '', 'background-color'],

    // LISTS
    [
      'all',
      '.g-list',
      'line-height: 1.625; color: #2a2a2a; font-size: 20px; margin-bottom: 1rem;'
    ],
    // ['all', '.g-list li, .g-ol-list li', 'margin-bottom: 0.25rem;']

    // Checkboxes
    ['all', '.g-checkboxes__item', 'margin-bottom: 16px'],

    // Selects
    [
      'all',
      '.g-select',
      'border: 1px solid #000000; height: auto;', // replace
      ` -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        padding: .4rem 2.5rem .5rem .6rem;
        background-repeat: no-repeat;
        border-radius: 0;
        background-position: right .7em top 50%;
        background-size: 1rem auto;        
        background-image: url('${svgToDataURL(
          `<?xml version="1.0" encoding="utf-8"?>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="8.5" viewBox="0 0 16 10.5">
            <path d="M1 1 L8 8.5 L15 1" stroke-width="3" stroke="currentColor" fill="transparent" />
          </svg>` // https://css-tricks.com/styling-a-select-like-its-2019/
        )}')`
    ],
    ['all', '.g-select--error', 'border: 1px solid #b10e1e']
  ]);

  return css;
};

const govUkClassNameToGenericClassName = (
  namespace: string,
  className: string,
  originalIds: string[],
  fullMatch: string
): { replacement: string; newMessage?: string | undefined } => {
  let g: string;
  // We want to namespace CSS classes (in both HTML and CSS to keep them in sync) so
  // that CSS tweaks per-component don't affect other components (ie. setting a distinct
  // border colour for each .g-label... one as .g-usage1-label and the other as
  // .g-usage2-label
  //
  // However we could be namespacing "g-radios" to "g-radios-radios" which is rather
  // pointless.
  //
  // So if it already starts with the namespace then we don't a insert a namespace
  if (
    originalIds &&
    originalIds.some(
      anId =>
        !!className.match(new RegExp(`^${anId}[-_]`)) || anId === className
    )
  ) {
    return {
      newMessage: `Note: Using CSS concated namespace of "g-${className}" because of the duplicate start of "g-${namespace}-${className}")\n`,
      replacement: `g-${className}`
    };
  }
  return { replacement: `g-${namespace}-${className}` };
};

export const normalizeGovUkTemplate = ({
  id,
  html,
  css,
  cssNamespace,
  message,
  calculatedDynamicKeys,
  additionalPrefixesToBypassNamespacing
}) => {
  // FIXME: Replace with a real HTML/CSS parser-based replacement
  const normalizedId = toId(id);
  const newCssNamespace = cssNamespace || camelCase(normalizedId);
  // console.log({ id, cssNamespace, newCssNamespace });
  const namespacedHTML = html.replace(/g-([A-Za-z0-9-_]+)/g, (all, p1) => {
    // The regex ^^ doesn't need to encompass the whole class name, just the g-something part
    // that we're using to test
    const { newMessage, replacement } = govUkClassNameToGenericClassName(
      newCssNamespace,
      p1,
      [id, newCssNamespace, ...additionalPrefixesToBypassNamespacing],
      all
    );
    if (newMessage) {
      message += newMessage;
    }
    return replacement;
  });
  // This regex should only match the part of a selector that starts with
  // "g-something-" or "g-something" not more than that such as
  // "g-something-notthis" and definitely not
  // ".g-something-anything .g-another-thing" because each "g-" should be
  // matched individually so that it may be optionally namespaced
  const namespacedCSS = css.replace(/\.g-([A-Za-z0-9-_]+)/g, (all, p1) => {
    // The regex ^^ doesn't need to encompass the whole class name, just the g-something part
    // that we're using to test
    const { newMessage, replacement } = govUkClassNameToGenericClassName(
      newCssNamespace,
      p1,
      [id, newCssNamespace, ...additionalPrefixesToBypassNamespacing],
      all
    );
    if (newMessage) {
      message += newMessage;
    }
    return `.${replacement}`;
  });

  let newMessage = message;
  if (normalizedId !== id) {
    newMessage += `Note: Id of "${id}" was normalized to "${normalizedId}".\n`;
  }

  return {
    id: normalizedId,
    html: namespacedHTML,
    css: namespacedCSS,
    message: newMessage,
    calculatedDynamicKeys
  };
};

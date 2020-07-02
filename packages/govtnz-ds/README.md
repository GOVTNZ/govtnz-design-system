# New Zealand Government Design System (Alpha)

This is the GitHub repo for developers. More documentation is available on the [Design System (Alpha) website](https://design-system-alpha.digital.govt.nz/).

This is a new service – your feedback will help us to improve it.

- Email the Design System (DS) team at [info@digital.govt.nz](mailto:info@digital.govt.nz)
- Use our [NZGDS Slack app](https://nz-aog-design-system.slack.com/)
- Open an Issue in this GitHub repo.

## Contributions

We welcome contributions to the New Zealand Government Design System (NZGDS). See [CONTRIBUTING](https://github.com/GOVTNZ/govtnz-design-system/blob/master/CONTRIBUTING.md).

## Install

Currently the design system is hosted on [NPM](https://npmjs.com/), although we are investigating using other distribution networks too (for example, [Packagist](https://packagist.org/)). If you'd prefer a particular network, please let us know.

The NPM package name is `@govtnz/ds` so, from [an NPM project](https://docs.npmjs.com/cli/init), use the command `npm i @govtnz/ds` (or `yarn add @govtnz/ds` for users of [Yarn](https://yarnpkg.com/)) to add the design system.

Once installed, the design system files can be found at `node_modules/@govtnz/ds/build/INTEGRATION_TYPE` where `INTEGRATION_TYPE` is one of the following:

- `html` (HTML)
- `css` (CSS)
- `scss` (SCSS Sass)
- `react-js` (React JavaScript)
- `react-ts` (React TypeScript)
- `react-js-styled-components` (React JavaScript with Styled Components)
- `react-ts-styled-components` (React TypeScript with Styled Components)
- `silverstripe-components` (SilverStripe, alpha quality)
- `vue-js` (Vue JavaScript, beta quality)
- `vue-js` (Vue TypeScript, beta quality)
- `mustache` (Mustacle / Handlebars, beta quality)

There may be other integration types included. However, these are provided for testing purposes only, and to give more transparency about our intentions to support more template formats.

## Component Usage

This project adheres to a naming convention where a component has an ID with different filename extensions for each `INTEGRATION_TYPE`.

For example, the `H1` component has:

- HTML at `node_modules/@govtnz/ds/build/html/H1.html` and
- CSS at `node_modules/@govtnz/ds/build/css/H1.css`.

For example, the `FlexContainer` component has:

- HTML at `node_modules/@govtnz/ds/build/html/FlexContainer.html` and
- CSS at `node_modules/@govtnz/ds/build/css/FlexContainer.css`, and so on.

Find the list of possible components by browsing on [the Design System (Alpha) website](https://design-system-alpha.digital.govt.nz/), or browsing `INTEGRATION_TYPE` directory under `node_modules/@govtnz/ds/build/INTEGRATION_TYPE`.

## Updates and versions

As there will be updates we recommend that you email [info@digital.govt.nz](mailto:info@digital.govt.nz) to subscribe to our newsletter.

Information about new versions will also be available on NPMJS.

Each release of the design system is given a version number (adhereing to [semver](https://semver.org/)) so that specific versions can be installed.

You can upgrade to later versions of the design system by typing `npm i @govtnz/ds@SEMVER` (or `yarn add @govtnz/ds@SEMVER` for users of [Yarn](https://yarnpkg.com/)) where `SEMVER` is the specific version string .

## Integration types

### HTML

HTML is provided as a reference. Sometimes these examples may include CSS classes showing optional classes (eg, `g-radios--inline`) that you may not need, so consult the website documentation to ensure you're using the correct HTML.

### CSS

CSS may be imported directly, and will include [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/var) for some design system components.

There is a `index.css` that imports every CSS file. Take care when using this without a CSS Preprocessor as it may result in many network requests for each individual file.

We recommend the best practice of choosing specific CSS files to bundle and minify, rather than including all CSS files.

### SCSS (Sass)

SCSS may be imported directly, and will include both Sass and [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/var) for some design system components.

There is a `index.scss` that imports every SCSS file. Take care importing every file because this may result in unused SCSS.

We recommend the best practice of choosing specific SCSS files to bundle and minify, rather than including all SCSS files.

There is a `_settings.scss` file for Sass variable configuration. These settings may change as we develop theming features.

### React

Import from an `INTEGRATION_TYPE` as either `react-js`, `react-ts`, `react-js-styled-components`, or `react-ts-styled-components`. You can then name the specific component you wish to install.

Eg. for the `H1` component:

```javascript
import H1 from "@govtnz/ds/build/react-js/H1.js";
```

You may import CSS as `import "@govtnz/ds/build/css/H1.css";`, or SCSS as `import "@govtnz/ds/build/css/H1.scss";`, or include those classes via some other SCSS or CSS preprocessor.

For '[Styled Components](https://www.styled-components.com/)', you do not need to import CSS or SCSS.

Read the component source code or use the TypeScript types to learn about the props each component accepts.

### SilverStripe

Please note that our SilverStripe Components are currently alpha quality. We recommend using HTML until we can give you guidance on how to integrate specific technologies.

However, if you wish to help us test these components, they are available at
`node_modules/@govtnz-ds/build/silverstripe-components` as `.ss` template files.

We intend to use the [SilverStripe Components](https://github.com/symbiote/silverstripe-components) syntax. However, there are currently bugs in this library that prevent us from using it. We have two boilerplate sites included in this repo under `/packages/` for both SilverStripe 3 and SilverStripe 4 that show potential SilverStripe Components integrations.

### Vue

After installation, use files as

```javascript
import H1 from "@govtnz/ds/build/vue-js/H1.vue";
```

These `.vue` files currently include CSS. Should they? Let us know.

Read the component source code or use the TypeScript types to learn about the variables each component accepts.

### Mustache

[Mustache](https://mustache.github.io/) / [Handlebars](https://handlebarsjs.com/) template files are included as an `INTEGRATION_TYPE`.

We have a boilerplate demo included in this repo under `/packages/` for Mustache.

Mustache templates can be converted into HTML by using a Mustache or Handlebars template processor. These processors accept a Mustache template string, and an `Object` of properties to apply to the template called a `context`.

When providing a `context` value that sets an enumeration (a multichoice option) provide the value as `"OPTION=VALUE": true, "OPTION": true` where `OPTION` is the enumerated key and `VALUE` is the enumerated value. This is required because Mustache is a "logic-less" template format that has no way of comparing values so the enumeration must be precomputed.

Some Mustache templates use triple-bracket `{{{ variable }}}` which bypasses HTML escaping. This is necessary because some variables are expected to render HTML, not just text nodes or attribute values. Be careful to [encode input to avoid security issues](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.md#why-cant-i-just-html-entity-encode-untrusted-data) when using Mustache templates.

### Other formats?

What other formats would you like us to support? Please let us know. (See contact details at the top of this page.)

## Browser support

Note that `N` refers to the current version number, and so `N-3` means that the site would support the 3 previous versions of that browser.

**Supported browser / device versions:**

| Browser              | Device/OS | Version |
| -------------------- | --------- | ------- |
| Mobile Safari        | iOS       | N-3     |
| Chrome               | Android   | N-3     |
| Chrome               | Desktop   | N-3     |
| MS Internet Explorer | Desktop   | 11      |
| MS Edge              | Desktop   | N-2     |
| Firefox              | Desktop   | N-3     |
| Safari               | OSX       | N-2     |

What other browsers would you like us to support? Please let us know. (See contact details at the top of this page.)

## Changelog

See [CHANGELOG](https://github.com/GOVTNZ/govtnz-design-system/blob/master/CHANGELOG.md).

# MetaTemplate 🦚

MetaTemplate is a web template/component generator that can take a single template definition and output multiple templates/components in:

- React JavaScript or TypeScript, with or without Styled-Components
- Vue (beta)
- SilverStripe Components (alpha)
- Mustache/Handlebars (beta)
- Twig (Drupal / PHP) (beta)
- CSS/SCSS with SCSS Variables and CSS Variables
- HTML

This is particularly useful for Design Systems / Pattern Libraries where a single template definition could be converted into multiple template/components.

The input format to generate these is standard CSS, and _almost_ standard HTML (called MetaHTML -- see docs below).

## :gift: Features

- Single-source template generator.
- MetaTemplate bundles only the CSS relevant to your HTML, so give it your whole CSS file and then MetaTemplate will try to 'tree shake' your CSS, SCSS, and Styled Components declarations.
- It can generate code examples to show example usage of these component formats.
- SCSS/CSS Variable replacement... define substring matches in CSS values and replace them with Scss Variables and [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/var). Match a colour of `"#336699"` and replace it with variable named `theme-color-background` that will be replaced in situ with references to CSS Variables of `--theme-color-background`, and those will also be Scss/CSS variables that you can define at `./scss/_settings.scss`.

## :palm_tree: Examples

### 🌰 Very basic example: input tag

_Input:_ [MetaHTML](https://github.com/springload/metatemplate/blob/master/examples/input/input.html) and standard [CSS](https://github.com/springload/metatemplate/blob/master/examples/input/input.css).

_Output:_ [React JS](https://github.com/springload/metatemplate/blob/master/examples/input/react-js/input.js), [React TS](https://github.com/springload/metatemplate/blob/master/examples/input/react-ts/input.tsx), [React JS with Styled Components](https://github.com/springload/metatemplate/blob/master/examples/input/react-js-styled-components/input.js), [React TS with Styled Components](https://github.com/springload/metatemplate/blob/master/examples/input/react-ts-styled-components/input.tsx), [Mustache/Handlebars](https://github.com/springload/metatemplate/blob/master/examples/input/mustache/input.mustache), [SilverStripe Components](https://github.com/springload/metatemplate/blob/master/examples/input/silverstripe-components/input.ss), [Vue](https://github.com/springload/metatemplate/blob/master/examples/input/vue-js/input.vue), [Twig](https://github.com/springload/metatemplate/blob/master/examples/input/twig-embed/input.html.twig), [Sass (SCSS)](https://github.com/springload/metatemplate/blob/master/examples/input/scss/input.scss), and finally [HTML](https://github.com/springload/metatemplate/blob/master/examples/input/html/input.html) and [CSS](https://github.com/springload/metatemplate/blob/master/examples/input/css/input.css).

---

These next two examples come from [FlexBoxGrid.com](http://flexboxgrid.com/) and we've chosen two components with different complexities.

### :seedling: Slightly more complicated example: FlexBox Container

_Input:_ [MetaHTML](https://github.com/springload/metatemplate/blob/master/examples/container/input.html) and standard [CSS](https://github.com/springload/metatemplate/blob/master/examples/container/input.css).

_Output:_ [React JS](https://github.com/springload/metatemplate/blob/master/examples/container/react-js/container.js), [React TS](https://github.com/springload/metatemplate/blob/master/examples/container/react-ts/container.tsx), [React JS with Styled Components](https://github.com/springload/metatemplate/blob/master/examples/container/react-js-styled-components/container.js), [React TS with Styled Components](https://github.com/springload/metatemplate/blob/master/examples/container/react-ts-styled-components/container.tsx), [Mustache/Handlebars](https://github.com/springload/metatemplate/blob/master/examples/container/mustache/container.mustache), [SilverStripe Components](https://github.com/springload/metatemplate/blob/master/examples/container/silverstripe-components/container.ss), [Sass (SCSS)](https://github.com/springload/metatemplate/blob/master/examples/container/scss/container.scss), [Vue](https://github.com/springload/metatemplate/blob/master/examples/container/vue-js/container.vue), [Twig](https://github.com/springload/metatemplate/blob/master/examples/container/twig-embed/container.html.twig), and finally [HTML](https://github.com/springload/metatemplate/blob/master/examples/container/html/container.html) and [CSS](https://github.com/springload/metatemplate/blob/master/examples/container/css/container.css).

### :deciduous_tree: Complex example: FlexBox Column

_Input:_ [MetaHTML](https://github.com/springload/metatemplate/blob/master/examples/column/input.html) and standard [CSS](https://github.com/springload/metatemplate/blob/master/examples/column/input.css).

_Output:_ [React JS](https://github.com/springload/metatemplate/blob/master/examples/column/react-js/column.js), [React TS](https://github.com/springload/metatemplate/blob/master/examples/column/react-ts/column.tsx), [React JS with Styled Components](https://github.com/springload/metatemplate/blob/master/examples/column/react-js-styled-components/column.js), [React TS with Styled Components](https://github.com/springload/metatemplate/blob/master/examples/column/react-ts-styled-components/column.tsx), [Mustache/Handlebars](https://github.com/springload/metatemplate/blob/master/examples/column/mustache/column.mustache), [SilverStripe](https://github.com/springload/metatemplate/blob/master/examples/column/silverstripe-components/column.ss), [Sass (SCSS)](https://github.com/springload/metatemplate/blob/master/examples/column/scss/column.scss), [Vue](https://github.com/springload/metatemplate/blob/master/examples/column/vue-js/column.vue), [Twig](https://github.com/springload/metatemplate/blob/master/examples/column/twig-embed/column.html.twig), and finally [HTML](https://github.com/springload/metatemplate/blob/master/examples/column/html/column.html) and [CSS](https://github.com/springload/metatemplate/blob/master/examples/column/css/column.css).

## Install

`npm i @springload/metatemplate` or `yarn add @springload/metatemplate`.

## :crystal_ball: Future

- More template formats... contribute your favourite!
- Better CSS support.
- Loops, although because we support `children` (childNode) values you could just nest other components instead. Maybe we don't need this.
- More tests..we have basic Jest tests, and basic React tests.

## :warning: Limitations

- The CSS 'tree shaking' can't handle complicated CSS such as `:not(.class)` and probably other features too, so check the output formats yourself.
- This library uses `JSDOM` and optionally `Puppeteer` to parse HTML/CSS which mimics a browser environment inside Node.js. The JSDOM developers themselves note that it's possible to escape their sandbox when given malicious input, so don't use untrusted input, ya dingus.

## :satellite: API

TypeScript types are provided.

### makeTemplate

    async function makeTemplates(template, formatIds, options) => {}

The purpose of this function is to return templates in a variety of formats.

It's an async function that takes a `Template` object, an optional array of template format ids, and optional –well– _options_. If the 2nd argument isn't provided a default list of template format ids is used instead. `options` is an Object shaped like `{ async: true, dom: "jsdom", log: false }`. The `async` configures the internal processing of templates as either syncronous or asyncronous (the default). The `dom` can be either `jsdom` (the default) or `puppeteer`. Finally, `log` just makes MetaTemplate `console.log` a few more details about the conversion, like a verbose mode.

_Returns_ a promise that resolves to a `{ metaTemplates, disposeAll }`.

- `metaTemplates` is an array of `{ templateFormat, files }` where
  - `files` is an Object that represents a file archive, with Object keys as paths and values as strings of the templates. ie, `{ 'scss/button.scss': 'scss file data', 'mustache/button.mustache': 'mustache template data' }`.
  - `templateFormat` is a string of the template format (`react-js` or `scss` or `react-ts-styled-components` etc).
- `disposeAll` is a function to dispose of shared resources and after you finish using MetaTemplate. `disposeAll` should be called to avoid memory/CPU waste. This should be called regardless of your configuration, however this is most important for people using Puppeteer rather than JSDOM (JSDOM is the default). Why `disposeAll`? Well if MetaTemplate automatically cleaned up and called `disposeAll` internally before returning your templates then it would be slower at batch processing, which is what MetaTemplate is typically used for. Perhaps this behaviour should be in `options`.

---

The 1st argument `Template` Object looks like,

    { id, html, css, cssVariables }

- `id` is a required string that is used as the `TemplateId`. This is your arbitrary but unique name for this template so use something meaningful. ie, FlexColumn.
- `html` is a required string of _MetaHTML_.
- `css` is a required string of standard CSS.
- `cssVariables` is an optional Array of Objects shaped like `{ id, defaultValue, nameMatch, valueMatch, valueSubstringMatch }`,
  - `id` is a required string for the variable name that will be made in Scss Variables and CSS Variables.
  - `defaultValue`: is a required string of your preferred default value for this variable.
  - `nameMatch`, `valueMatch`, and `valueSubstringMatch` are all optional strings, and you would choose one of them to match the CSS that you want to insert a variable at. If you want to replace a substring ie, "#000000" with "theme-color-dark" then you might write `[{ id: 'theme-color-black', defaultValue: '#000000', valueSubstringMatch: '#000000' }]` to match that substring and replace it with variables. Currently there's no way of not outputting CSS Variables.

#### MetaHTML ?

The reason why we need to use non-standard HTML is to know which parts should be configurable, as variables.

MetaHTML is standard HTML with two types of template variables:

- Those variables in attribute values:

  - For making a required variable string: `{{ variableName }}` eg `<span class="{{ class }}">`
    - Use a `?` after the variable name to make it optional
    - Multiple variables can exist in an attribute value, write them like `<span class="{{ class }}{{ otherClass }}">`
  - For making a required variable with enumerations `{{ variableName: option1 | option2 }}` eg `<span class="{{ color: class-red | class-blue }}">`
  - For making a variable with enumerations that have friendly names `{{ variableName: option1 as Option1 | option2 as Option2 }}` eg `&lt;span class="{{ color: class-red as Red | class-blue as Blue }}"&gt;`

- Those variables that are childNodes between elements:

  - Use `<mt-variable key="variableName">default value</mt-variable>` eg if you want a component variable named "children" in an `&lt;h1&gt;` you'd write `<h1><mt-variable key="children">placeholder</mt-variable></h1>`

There is also template `if` support as `<mt-if key="isShown">thing to show</mt-if>`.

#### makeIndexImports

    async function makeIndexImports( files, cssVariables ) => {}

The purpose of this function is to provide "index" definitions for each format. The exact details vary by format, but the Sass (Scss) makes an `index.scss` file with lots of `@import "thing.scss"`, and a `_settings.scss` for the Scss variables (hence the `cssVariables` argument). The JavaScript/TypeScript templates have lazy-loaded imports in `index.js` or `index.ts`.

The `files` Object is a required variable that represents a file archive, with Object keys as paths and values as strings of the file data. Typically you'd want to return the `files` object returned by the default export.

`cssVariables` is an optional Object with the same shape as the `cssVariables` argument given to the default export.

_Returns_ a `files` Object that represents a file archive, but now it has index files for each format (ie, `"scss/index.scss"`) to assist with importing files for that format.

#### makeUsage

    async function makeUsage( code, templates, formatIds ) => {}

The purpose of this function is to convert a single code example (eg, in documentation) into examples from a variety of template formats.

`code` is a code example,

- _TIP:_ Try `jsxToUsageCode` for a slightly easier way of generating `code`.

It's datastructure is an Array of `TemplateConfig` Objects shaped like,

    { templateId, variables }

Where `templateId` is a string of the `TemplateId` (same as the default export... your arbitrary id for the template), and `variables` is an Object keyed by `variableName`s whose values can be strings or other TemplateConfig Objects. ie, `[{ templateId: 'H1', variables: { children: 'Hello' } }]` or `[{ templateId: 'H1', variables: { children: [{ templateId: 'A', variables: { href: 'https://html5zombo.com/', children: 'Click me' } }] } }]`.

`templates` is a required Object keyed by strings of `TemplateId`s whose values are `Template` Objects (like the default export). This must include every `templateId` referenced in `code`.

`formatIds` is an optional array of strings of the formats to use, with a complete list of formatIds as the default.

# jsxToUsageCode

    async function jsxToUsageCode( jsx ) => {}

A convenience function that parses a string of React JSX and returns a `code` variable for the makeUsage function.

- jsx is a required string of JSX ie, `'<H1><A href="https://html5zombo.com/">Click me</A></H1>'` will return `[{ templateId: 'H1', variables: { children: [{ templateId: 'A', variables: { href: 'https://html5zombo.com/', children: 'Click me' } }] } }]`

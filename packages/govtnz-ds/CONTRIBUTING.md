# Contributing

## Copyright and licensing

The source code for this Design System project is licensed under the MIT License. By contributing source code to this Design System project, you are agreeing to license your contributions under and on the terms of MIT License. Please note that your licence is irrevocable and royalty-free. You or your licensors retain any copyright in your contributions while allowing others to re-use the source code in any way they like as long as they meet the requirements of the licence.

## Security issues

Please don't file security related issues in the bug tracker or publicly disclose them without first contacting us. We operate a Coordinated Disclosure approach and will work with you in good faith to responsibly fix and publicly disclose security issues appropriately.

Checklist for reporting security issues

- Don’t disclose the issue publicly
- Document the issue to help us understand how to fix it
- Report the security issue to us directly via info@digital.govt.nz
- Be professional and clear in your communications
- Wait to hear back from us
- Provide any follow up information if requested to help resolve the issue
- Work with us on timing and publishing of the security issue

### Contributing Components

We are currently developing the acceptance criteria for new components.

1. Components should be licenced under the MIT.
2. Component contributions should be accessible, and tested in screenreaders such as NVDA and JAWS.
3. Contributions should adhere to the coding patterns in the Design System (ie, Prettier and naming conventions).

### Contributing examples or documentation fixes

Most documentation is under `packages/govtnz-ds-website/src/docs/` as markdown files with React JSX used for examples (these are converted into examples for each language).

Some pages are React TSX under `packages/govtnz-ds-website/src/`.

Please raise a Github PR with your changes, or contact us to discuss changes.

## Development

### Install

A `Development install` is only necessary for contributing components or bug-fixes.

This Git repo uses [Symlinks](https://en.wikipedia.org/wiki/Symbolic_link). When you clone the repo you must have symlinks enabled. To set this globally run the command,

```
git config --global core.symlinks true
```

Then clone the repo and follow these steps

1. Install [`NVM`](https://github.com/creationix/nvm#installation).
2. `nvm install`
3. `yarn` (installs)
4. `yarn build:all` (this may take a while, about 5 minutes)

#### Adding new components

Adding new components isn't just a matter of adding HTML and CSS because our Design System provides template definitions in many formats such as React, Vue, SilverStripe, and so on.

So contributing involves providing an abstract template definition to MetaTemplate (`/packages/metatemplate`).

First see if there is an existing component available from the [GOV.UK Design System](https://design-system.service.gov.uk/). If so, then identify the HTML and CSS from that component in `packages/govtnz-ds-upstream/src/upstream/govuk/ANY_VERSION/` and note down the filenames. If the filenames were "h1.html" and "h1.css" then the `patternId` would be "h1", so add that to `build-spec.json` (within `packages/govtnz-ds/src/build-types`).

If you were to run `yarn build:all` then it would include that component in the build at `packages/govtnz-ds/build`, however you may want to make parts of the component configurable using MetaHTML (see MetaTemplate docs) and these can be added at `normalize-govuk.ts`.

If you wish to add a new component from elsewhere then please ensure it's accessible (get the advice of a web acccessibility expert), and then add the appropriate HTML and CSS to `govtnz-ds-upstream/src/upstream/YOUR_SOURCE_ID/YOUR_VERSION/`. `YOUR_SOURCE_ID` is a unique identifier (such as "flexboxgrid"), and `VERSION` is a [semver](https://semver.org/) compatible version. Then reference them from `govtnz-ds` and the `build-spec.json` and make them configurable as per `normalize-govuk.ts` above.

Be sure to test your new component:

1. With an accessibility expert. Also try using "aXe Coconut" in Chrome or Firefox which is an accessibility testing tool.
2. In our supported browsers.
3. In our supported breakpoints.

Be sure to follow our coding conventions for components such as `g-` prefixes, using [BEM](http://getbem.com/naming/). Changes to TypeScript code should be formatted with [Prettier](https://prettier.io/).

Then [raise a PR](https://help.github.com/en/articles/creating-a-pull-request) and we'll review your submission. Thanks!

#### Fixes to existing components

If it's an HTML or CSS fix to a GOV.UK-derived component then you can contribute fixes to `normalize-govuk.ts` and [raise a PR](https://help.github.com/en/articles/creating-a-pull-request).

If it's a framework-specific fix then please raise an issue on MetaTemplate (`/packages/metatemplate`).

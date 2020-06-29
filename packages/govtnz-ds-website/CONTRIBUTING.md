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

## Development

### Install

A `Development install` is only necessary for contributing components or bug-fixes.

1. Install [`NVM`](https://github.com/creationix/nvm#installation).
2. `nvm install`
3. `yarn` (installs)
4. `yarn build:all` (this may take a while)

Then, under `packages` add components to `govtnz-ds/src/templates-sources`.

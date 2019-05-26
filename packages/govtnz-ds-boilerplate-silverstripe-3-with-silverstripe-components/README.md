# In a SilverStripe 3 Example integration of SilverStripe Components

The Design System doesn't use conventional SilverStripe templates, it uses [SilverStripe Components](https://github.com/symbiote/silverstripe-components).

This SilverStripe 3 project shows an example integration of the Design System using SilverStripe Components.

(looking for SilverStripe 4? Try `/packages/govtnz-ds-boilerplate-silverstripe-4-with-silverstripe-components` )

There are two main changes needed:

-   Add support for `symbiote/silverstripe-components:~1.0` as specified in the `composer.json`. See SilverStripe Components documentation for more details, and;
-   In this project `themes/template/components` is symlinked to `../govtnz-ds/build/silverstripe-components` however when you NPM install the Design System the path you'll want to symlink is `node_modules/@govtnz/ds/build/silverstripe-components`. If symlinking is unavailable on your platform then copy the contents of `node_modules/@govtnz/ds/build/silverstripe-components` into a directory at `themes/template/components`.

The file `themes/simple/templates/Layout/Page.ss` has an example use of SilverStripe Components.

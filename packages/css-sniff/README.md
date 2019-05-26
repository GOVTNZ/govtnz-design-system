# CSS Sniff

A tiny utility that looks at parts of webpages (elements) and returns all the matching CSS Rules (selectors+properties). So it's essentially a CSS scraper but only for particular parts of the page.

Because real CSS Rules are extracted it includes responsive modes and pseudo-elements etc.

Requires a browser-like environment, so it works in browsers and [JSDOM](https://www.npmjs.com/package/jsdom).

It's used by [React-Patterns](https://github.com/springload/react-patterns/) to extract CSS Rules from components to make a Pattern Library, but could also be used for extracting crucial CSS 'above the fold' etc.

## Install

<pre>
npm install <a href="https://www.npmjs.com/package/css-sniff">css-sniff</a>

yarn add <a href="https://www.npmjs.com/package/css-sniff">css-sniff</a>
</pre>

## Usage

```javascript
import { getCSSRules, serializeCSSRules } from "css-sniff";

// Inside an async function...
const elements = document.querySelectorAll("header, .logo");
const matchedCSS = await getCSSRules([...elements]);
const cssString = serializeCSSRules(matchedCSS);
```

cssString is now a string that might look like:

```css
header {
  background: red;
}
.logo {
  width: 250px;
}
@media only screen and (max-width: 250px) {
  .logo {
    width: 100%;
  }
}
```

Usage with JSDOM

```javascript
import { getCSSRules, serializeCSSRules } from "css-sniff";

const main = async () => {
  dom = await JSDOM.fromURL(url, {
    resources: "usable",
    pretendToBeVisual: true
  });

  // Wait for subresources (external CSS) to load so
  // that CSS is in the DOM and CSS detection will work
  await new Promise(resolve => {
    dom.window.document.addEventListener("load", resolve);
  });

  const elements = document.querySelectorAll("header, .logo");
  const matchedCSS = await getCSSRules([...elements], {
    document: dom.window.document
  });
  const cssString = serializeCSSRules(matchedCSS);
};
main();
```

## API

### getCSSRules(children, options, matchedCSS)

The bulk of CSS Sniff. This returns a `matchedCSS` variable that may be given to `serializeCSSRules` to produce a CSS string.

It's an `async` function.

##### • children (required)

An array of Nodes (not a NodeList).

All nodes below these are searched for CSS Rules.

##### • options (optional)

A map to set options in format

```javascript
{
   whitelist: {
         // optional pattern to only include
         // CSS if it matches these patterns,
       media: ["media substring match"],
         // useful for only allowing some
         // types of @media such as print
       stylesheet: ["url substring match"],
         // useful for only allowing some
         // CSS files
       rule: ["selector substring match"]
   },
   blacklist: {
       media: ["media substring match"],
       stylesheet: ["url substring match"],
          // Useful for blocking some CSS files
          // such as a site's template.
          rule: ["selector substring match"]
   },
   document, // optional in browsers, but required
             // for JSDOM to provide the `document`
             // instance
   ignoreChildren: false,
             // don't descend childNodes looking
             // for CSS matches (ie, only check
             // top-level nodes).
}
```

#### • matchedCSS (optional)

You may provide a previously returned value to add more matched rules to, in order to build up a more complete set of CSS Rules.

This may be useful to chunk up jobs over several event loop cycles, or perhaps it's an easier API to use in some code patterns (ie. a progress indicator pattern).

### serializeCSSRules(matchedCSS)

Serializes `matchedCSS` into a CSS string.

## Limitations

### Inherited properties (and _sorta_-inherited properties)

Some CSS properties are inherited (or effectively inherited) from parent elements.

For example, if you have a `header` with a red background but that red colour comes from `body { background: red; }` then searching for CSS Rules for `header` won't include the red background CSS.

Similarly, if a parent element defines a `line-height` which is used by descendant elements then that won't be included.

# split-css-selector

Thanks to @joakimbeng for this useful library which I've inlined in src/index.js. The reason this was inlined is because this utility is a single file and can avoid Webpack (ie, just use Babel).

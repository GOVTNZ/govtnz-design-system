# Prism

This is a custom build of https://prismjs.com/ with a few changes

- it includes support for our languages at build-time
- it doesn't autoformat on DOMContentReady.

## Update

To update,

- GOTO https://prismjs.com/download.html
- Select the formats you want... the top of `prism.js` has a custom link with some hash state indicating which formats we need.
- Click the 'Download JS" button their site and overwrite this directory's "prism.js".
- Edit `prism.js` and change two things,
  - change the line that reads `manual: _self.Prism && _self.Prism.manual,` to `manual: true,`.
  - Replace the `DOMContentLoaded` event listener line with null, ie replace `document.addEventListener("DOMContentLoaded", C.highlightAll)` with `null`.

That's it.

import { getBrowser } from "../browser";
import { getCSSMatches, serializeCSSMatches } from "./css-sniff";

describe("CSS Rules", () => {
  // it("Simple global rules", async () => {
  //   const dom = await getJSDom("p { background: red;}", "<p>test</p>");
  //   const paragraphs = [...dom.window.document.querySelectorAll("p")];
  //   const matchedCSS = await getCSSMatches(paragraphs, {
  //     document: dom.window.document
  //   });
  //   const css = serializeCSSRules(matchedCSS);
  //   expect(css).toBe("p{background: red;}");
  // });

  // it("Filters unused selectors", async () => {
  //   const dom = await getJSDom("p,a { background: red;}", "<p>test</p>");
  //   const paragraphs = [...dom.window.document.querySelectorAll("p")];
  //   const matchedCSS = await getCSSMatches(paragraphs, {
  //     document: dom.window.document
  //   });
  //   const css = serializeCSSRules(matchedCSS);
  //   expect(css).toBe("p{background: red;}");
  // });

  // it("Includes @media queries", async () => {
  //   const dom = await getJSDom(
  //     "p,a { background: red;} @media print { p { color: purple } } ",
  //     "<p>test</p>"
  //   );
  //   const paragraphs = [...dom.window.document.querySelectorAll("p")];
  //   const matchedCSS = await getCSSMatches(paragraphs, {
  //     document: dom.window.document
  //   });
  //   const css = serializeCSSRules(matchedCSS);
  //   expect(css).toBe("p{background: red;}@media print {p{color: purple;}}");
  // });

  // it("Includes pseudo-elements", async () => {
  //   const dom = await getJSDom(
  //     'p,a { background: red;} p:after { content: "aftery"} @media print { p:before { content: "test"; } } ',
  //     "<p>test</p>"
  //   );
  //   const paragraphs = [...dom.window.document.querySelectorAll("p")];
  //   const matchedCSS = await getCSSMatches(paragraphs, {
  //     document: dom.window.document
  //   });
  //   const css = serializeCSSRules(matchedCSS);
  //   expect(css).toBe(
  //     'p{background: red;}p:after{content: "aftery";}@media print {p:before{content: "test";}}'
  //   );
  // });

  // it("Filters @media queries", async () => {
  //   const dom = await getJSDom(
  //     "p,a { background: red;} @media print { p,a { color: purple } } ",
  //     "<p>test</p>"
  //   );
  //   const paragraphs = [...dom.window.document.querySelectorAll("p")];
  //   const matchedCSS = await getCSSMatches(paragraphs, {
  //     document: dom.window.document
  //   });
  //   const css = serializeCSSRules(matchedCSS);
  //   expect(css).toBe("p{background: red;}@media print {p{color: purple;}}");
  // });

  // it("Handles escaping \\: in class (2 chars: a backslash and colon)", async () => {
  //   const dom = await getJSDom(
  //     ".link { background: blue;} .link.\\:focus { background: red;} ",
  //     '<p class="link :focus">test</p>'
  //   );
  //   const paragraphs = [...dom.window.document.querySelectorAll("p")];
  //   const matchedCSS = await getCSSMatches(paragraphs, {
  //     document: dom.window.document
  //   });
  //   const css = serializeCSSRules(matchedCSS);
  //   expect(css).toBe(
  //     ".link{background: blue;}.link.\\:focus{background: red;}"
  //   );
  // });

  // it("Serializes !important", async () => {
  //   const dom = await getJSDom(
  //     ".link { background: blue !important;} .link.\\:focus { background: red;} ",
  //     '<p class="link :focus">test</p>'
  //   );
  //   const paragraphs = [...dom.window.document.querySelectorAll("p")];
  //   const matchedCSS = await getCSSMatches(paragraphs, {
  //     document: dom.window.document
  //   });
  //   const css = serializeCSSRules(matchedCSS);
  //   expect(css).toBe(
  //     ".link{background: blue !important;}.link.\\:focus{background: red;}"
  //   );
  // });

  // it("Ignores @charset", async () => {
  //   const data = `@charset "UTF-8" ;\n  body:before { background: red;}`;
  //   const dom = await getJSDom(data, '<body class="no-match"><p>test</p></body>');
  //   const body = [...dom.window.document.querySelectorAll("body")];
  //   const matchedCSS = await getCSSMatches(body, {
  //     document: dom.window.document
  //   });
  //   const css = serializeCSSRules(matchedCSS);
  //   expect(css).not.toContain("@charset");
  // });

  it("Handles bad case", async () => {
    const html = `<div class="g-form-group {{ error?: g-form-group--error }}">
    <fieldset class="g-fieldset" aria-describedby="hintId errorId" role="group">
      <legend class="g-fieldset__legend g-fieldset__legend--xl">
        <mt-variable key="label">Example label</mt-variable>
      </legend>
      <span id="hintId" class="g-hint">
        <mt-variable key="hint">Example hint</mt-variable>
      </span>
      <mt-if key="?error">
        <span id="errorId" class="g-error-message">
          <span class="g-visually-hidden">Error: </span>
          <mt-variable key="?error">Example error</mt-variable>
        </span>
      </mt-if>
      <div id="id" class="g-date-input">
        <div class="g-date-input__item">
          <div class="g-form-group">
            <label class="g-label g-date-input__label" for="dayId">
              Day
            </label>
            <input
              id="dayId"
              class="g-input g-date-input__input g-input--width-2 {{ error?: g-input--error }}"
              name="dayId"
              type="text"
              maxlength="2"
              pattern="[0-9]*"
            />
          </div>
        </div>
        <div class="g-date-input__item">
          <div class="g-form-group">
            <label class="g-label g-date-input__label" for="monthId">
              Month
            </label>
            <input
              id="monthId"
              class="g-input g-date-input__input g-input--width-2 {{ error?: g-input--error }}"
              name="monthId"
              type="text"
              maxlength="2"
              pattern="[0-9]*"
            />
          </div>
        </div>
        <div class="g-date-input__item">
          <div class="g-form-group">
            <label class="g-label g-date-input__label" for="yearId">
              Year
            </label>
            <input
              id="yearId"
              class="g-input g-date-input__input g-input--width-4 {{ error?: g-input--error }}"
              name="yearId"
              type="text"
              maxlength="4"
              pattern="[0-9]*"
            />
          </div>
        </div>
      </div>
    </fieldset>
  </div>`;
    var css = `body:before {
      background-color: #fcf8e3;
      border-bottom: 1px solid #fbeed5;
      border-left: 1px solid #fbeed5;
      color: #c09853;
      font: small-caption;
      padding: 3px 6px;
      pointer-events: none;
      position: fixed;
      right: 0;
      top: 0;
      z-index: 100;
    }
    @media (min-width: 20em) {
      body:before {
        content: 'mobile ≥ 320px (20em)';
      }
    }
    @media (min-width: 40.0625em) {
      body:before {
        content: 'tablet ≥ 641px (40.0625em)';
      }
    }
    @media (min-width: 48.0625em) {
      body:before {
        content: 'desktop ≥ 769px (48.0625em)';
      }
    }
    .g-link {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    @font-face {
      font-family: 'Name';
      src: url('/assets/fonts/light-2c037cf7e1-v1.eot');
      src: url('/assets/fonts/light-2c037cf7e1-v1.eot?#iefix')
          format('embedded-opentype'),
        url('/assets/fonts/light-f38ad40456-v1.woff2') format('woff2'),
        url('/assets/fonts/light-458f8ea81c-v1.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: fallback;
    }
    @font-face {
      font-family: 'Name';
      src: url('/assets/fonts/bold-fb2676462a-v1.eot');
      src: url('/assets/fonts/bold-fb2676462a-v1.eot?#iefix')
          format('embedded-opentype'),
        url('/assets/fonts/bold-a2452cb66f-v1.woff2') format('woff2'),
        url('/assets/fonts/bold-f38c792ac2-v1.woff') format('woff');
      font-weight: bold;
      font-style: normal;
      font-display: fallback;
    }
    @font-face {
      font-family: 'ntatabularnumbers';
      src: url('/assets/fonts/light-tabular-498ea8ffe2-v1.eot');
      src: url('/assets/fonts/light-tabular-498ea8ffe2-v1.eot?#iefix')
          format('embedded-opentype'),
        url('/assets/fonts/light-tabular-851b10ccdd-v1.woff2') format('woff2'),
        url('/assets/fonts/light-tabular-62cc6f0a28-v1.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: fallback;
    }
    @font-face {
      font-family: 'ntatabularnumbers';
      src: url('/assets/fonts/bold-tabular-357fdfbcc3-v1.eot');
      src: url('/assets/fonts/bold-tabular-357fdfbcc3-v1.eot?#iefix')
          format('embedded-opentype'),
        url('/assets/fonts/bold-tabular-b89238d840-v1.woff2') format('woff2'),
        url('/assets/fonts/bold-tabular-784c21afb8-v1.woff') format('woff');
      font-weight: bold;
      font-style: normal;
      font-display: fallback;
    }
    @media print {
      .g-link {
        font-family: sans-serif;
      }
    }
    .g-link:focus,
    .g-link.\:focus {
      outline: 3px solid #ffbf47;
      outline-offset: 0;
    }
    .g-link:link,
    .g-link.\:link {
      color: #005ea5;
    }
    .g-link:visited,
    .g-link.\:visited {
      color: #4c2c92;
    }
    .g-link:hover,
    .g-link.\:hover {
      color: #2b8cc4;
    }
    .g-link:active,
    .g-link.\:active {
      color: #2b8cc4;
    }
    .g-link:focus,
    .g-link.\:focus {
      color: #0b0c0c;
    }
    @media print {
      .g-link[href^="/"]::after, .g-link[href^="http://"]::after, .g-link[href^="https://"]::after,
    .g-link[href^="http.\://"]::after,
    .g-link[href^="https.\://"]::after {
        content: ' (' attr(href) ')';
        font-size: 90%;
        word-wrap: break-word;
      }
    }
    .g-link--muted:link,
    .g-link--muted:visited,
    .g-link--muted:hover,
    .g-link--muted:active,
    .g-link--muted.\:link,
    .g-link--muted.\:visited,
    .g-link--muted.\:hover,
    .g-link--muted.\:active {
      color: #6f777b;
    }
    .g-link--muted:focus,
    .g-link--muted.\:focus {
      color: #0b0c0c;
    }
    .g-link--text-colour:link,
    .g-link--text-colour:visited,
    .g-link--text-colour:hover,
    .g-link--text-colour:active,
    .g-link--text-colour:focus,
    .g-link--text-colour.\:link,
    .g-link--text-colour.\:visited,
    .g-link--text-colour.\:hover,
    .g-link--text-colour.\:active,
    .g-link--text-colour.\:focus {
      color: #0b0c0c;
    }
    @media print {
      .g-link--text-colour:link,
      .g-link--text-colour:visited,
      .g-link--text-colour:hover,
      .g-link--text-colour:active,
      .g-link--text-colour:focus,
      .g-link--text-colour.\:link,
      .g-link--text-colour.\:visited,
      .g-link--text-colour.\:hover,
      .g-link--text-colour.\:active,
      .g-link--text-colour.\:focus {
        color: #000000;
      }
    }
    .g-link--no-visited-state:link,
    .g-link--no-visited-state.\:link {
      color: #005ea5;
    }
    .g-link--no-visited-state:visited,
    .g-link--no-visited-state.\:visited {
      color: #005ea5;
    }
    .g-link--no-visited-state:hover,
    .g-link--no-visited-state.\:hover {
      color: #2b8cc4;
    }
    .g-link--no-visited-state:active,
    .g-link--no-visited-state.\:active {
      color: #2b8cc4;
    }
    .g-link--no-visited-state:focus,
    .g-link--no-visited-state.\:focus {
      color: #0b0c0c;
    }
    .g-list {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 1.25rem;
      font-size: 1.25rem;
      line-height: 1.625;
      color: #2a2a2a;
      margin-top: 0;
      margin-bottom: 1rem;
      padding-left: 0;
      list-style-type: none;
    }
    @media print {
      .g-list {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-list {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-list {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    @media print {
      .g-list {
        color: #000000;
      }
    }
    @media (min-width: 40.0625em) {
      .g-list {
        margin-bottom: 1rem;
      }
    }
    .g-list .g-list {
      margin-top: 10px;
    }
    .g-list > li {
      margin-bottom: 0.25rem;
    }
    .g-list--bullet {
      padding-left: 20px;
      list-style-type: disc;
    }
    .g-list--number {
      padding-left: 20px;
      list-style-type: decimal;
    }
    .g-list--bullet > li,
    .g-list--number > li {
      margin-bottom: 0;
    }
    @media (min-width: 40.0625em) {
      .g-list--bullet > li,
      .g-list--number > li {
        margin-bottom: 5px;
      }
    }
    .g-template {
      background-color: #dee0e2;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      text-size-adjust: 100%;
    }
    @media screen {
      .g-template {
        overflow-y: scroll;
      }
    }
    .g-template__body {
      margin: 0;
      background-color: #ffffff;
    }
    .g-heading-xl {
      color: #2a2a2a;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: g-heading-font-weight;
      font-size: 3rem;
      font-size: 3rem;
      line-height: 1.125;
      display: block;
      margin-top: 0;
      margin-bottom: 1rem;
    }
    @media print {
      .g-heading-xl {
        color: #000000;
      }
    }
    @media print {
      .g-heading-xl {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-heading-xl {
        font-size: 3.5rem;
        font-size: 3.5rem;
        line-height: 1.15;
      }
    }
    @media print {
      .g-heading-xl {
        font-size: 32pt;
        line-height: 1.15;
      }
    }
    @media (min-width: 40.0625em) {
      .g-heading-xl {
        margin-bottom: 1rem;
      }
    }
    .g-heading-l {
      color: #2a2a2a;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: g-heading-font-weight;
      font-size: 2rem;
      font-size: 2rem;
      line-height: 1.2;
      display: block;
      margin-top: 3.5rem;
      margin-bottom: 0.5rem;
    }
    @media print {
      .g-heading-l {
        color: #000000;
      }
    }
    @media print {
      .g-heading-l {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-heading-l {
        font-size: 2.5rem;
        font-size: 2.5rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-heading-l {
        font-size: 24pt;
        line-height: 1.05;
      }
    }
    @media (min-width: 40.0625em) {
      .g-heading-l {
        margin-bottom: 30px;
      }
    }
    .g-heading-m {
      color: #0b0c0c;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: g-heading-font-weight;
      font-size: 1.5rem;
      font-size: 1.5rem;
      line-height: 1.25;
      display: block;
      margin-top: 2.5rem;
      margin-bottom: 0.5rem;
    }
    @media print {
      .g-heading-m {
        color: #000000;
      }
    }
    @media print {
      .g-heading-m {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-heading-m {
        font-size: 24px;
        font-size: 1.5rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-heading-m {
        font-size: 18pt;
        line-height: 1.15;
      }
    }
    @media (min-width: 40.0625em) {
      .g-heading-m {
        margin-bottom: 0.5rem;
      }
    }
    .g-heading-s {
      color: #2a2a2a;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: g-heading-font-weight;
      font-size: 1.25rem;
      font-size: 1.25rem;
      line-height: 1.25;
      display: block;
      margin-top: 2.5rem;
      margin-bottom: 0.5rem;
    }
    @media print {
      .g-heading-s {
        color: #000000;
      }
    }
    @media print {
      .g-heading-s {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-heading-s {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-heading-s {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    @media (min-width: 40.0625em) {
      .g-heading-s {
        margin-bottom: 0.5rem;
      }
    }
    .g-caption-xl {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 18px;
      font-size: 1.125rem;
      line-height: 1.11111;
      display: block;
      margin-bottom: 5px;
      color: #6f777b;
    }
    @media print {
      .g-caption-xl {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-caption-xl {
        font-size: 27px;
        font-size: 1.6875rem;
        line-height: 1.11111;
      }
    }
    @media print {
      .g-caption-xl {
        font-size: 18pt;
        line-height: 1.15;
      }
    }
    .g-caption-l {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 18px;
      font-size: 1.125rem;
      line-height: 1.11111;
      display: block;
      margin-bottom: 5px;
      color: #6f777b;
    }
    @media print {
      .g-caption-l {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-caption-l {
        font-size: 24px;
        font-size: 1.5rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-caption-l {
        font-size: 18pt;
        line-height: 1.15;
      }
    }
    @media (min-width: 40.0625em) {
      .g-caption-l {
        margin-bottom: 0;
      }
    }
    .g-caption-m {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      display: block;
      color: #6f777b;
    }
    @media print {
      .g-caption-m {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-caption-m {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-caption-m {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    .g-body-l,
    .g-body-lead {
      color: #0b0c0c;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 18px;
      font-size: 1.125rem;
      line-height: 1.11111;
      margin-top: 0;
      margin-bottom: 20px;
    }
    @media print {
      .g-body-l,
      .g-body-lead {
        color: #000000;
      }
    }
    @media print {
      .g-body-l,
      .g-body-lead {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-body-l,
      .g-body-lead {
        font-size: 24px;
        font-size: 1.5rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-body-l,
      .g-body-lead {
        font-size: 18pt;
        line-height: 1.15;
      }
    }
    @media (min-width: 40.0625em) {
      .g-body-l,
      .g-body-lead {
        margin-bottom: 30px;
      }
    }
    .g-body-m,
    .g-body {
      color: #0b0c0c;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      margin-top: 0;
      margin-bottom: 15px;
    }
    @media print {
      .g-body-m,
      .g-body {
        color: #000000;
      }
    }
    @media print {
      .g-body-m,
      .g-body {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-body-m,
      .g-body {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-body-m,
      .g-body {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    @media (min-width: 40.0625em) {
      .g-body-m,
      .g-body {
        margin-bottom: 20px;
      }
    }
    .g-body-s {
      color: #2a2a2a;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 14px;
      font-size: 0.875rem;
      line-height: 1.625;
      margin-top: 0;
      margin-bottom: 1rem;
    }
    @media print {
      .g-body-s {
        color: #000000;
      }
    }
    @media print {
      .g-body-s {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-body-s {
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-body-s {
        font-size: 14pt;
        line-height: 1.2;
      }
    }
    @media (min-width: 40.0625em) {
      .g-body-s {
        margin-bottom: 20px;
      }
    }
    .g-body-xs {
      color: #0b0c0c;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 12px;
      font-size: 0.75rem;
      line-height: 1.25;
      margin-top: 0;
      margin-bottom: 15px;
    }
    @media print {
      .g-body-xs {
        color: #000000;
      }
    }
    @media print {
      .g-body-xs {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-body-xs {
        font-size: 14px;
        font-size: 0.875rem;
        line-height: 1.42857;
      }
    }
    @media print {
      .g-body-xs {
        font-size: 12pt;
        line-height: 1.2;
      }
    }
    @media (min-width: 40.0625em) {
      .g-body-xs {
        margin-bottom: 20px;
      }
    }
    .g-body-l + .g-heading-l,
    .g-body-lead + .g-heading-l {
      padding-top: 5px;
    }
    @media (min-width: 40.0625em) {
      .g-body-l + .g-heading-l,
      .g-body-lead + .g-heading-l {
        padding-top: 10px;
      }
    }
    .g-body-m + .g-heading-l,
    .g-body + .g-heading-l,
    .g-body-s + .g-heading-l,
    .g-list + .g-heading-l {
      padding-top: 15px;
    }
    @media (min-width: 40.0625em) {
      .g-body-m + .g-heading-l,
      .g-body + .g-heading-l,
      .g-body-s + .g-heading-l,
      .g-list + .g-heading-l {
        padding-top: 20px;
      }
    }
    .g-body-m + .g-heading-m,
    .g-body + .g-heading-m,
    .g-body-s + .g-heading-m,
    .g-list + .g-heading-m,
    .g-body-m + .g-heading-s,
    .g-body + .g-heading-s,
    .g-body-s + .g-heading-s,
    .g-list + .g-heading-s {
      padding-top: 5px;
    }
    @media (min-width: 40.0625em) {
      .g-body-m + .g-heading-m,
      .g-body + .g-heading-m,
      .g-body-s + .g-heading-m,
      .g-list + .g-heading-m,
      .g-body-m + .g-heading-s,
      .g-body + .g-heading-s,
      .g-body-s + .g-heading-s,
      .g-list + .g-heading-s {
        padding-top: 10px;
      }
    }
    .g-section-break {
      margin: 0;
      border: 0;
    }
    .g-section-break--xl {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    @media (min-width: 40.0625em) {
      .g-section-break--xl {
        margin-top: 50px;
      }
    }
    @media (min-width: 40.0625em) {
      .g-section-break--xl {
        margin-bottom: 50px;
      }
    }
    .g-section-break--l {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    @media (min-width: 40.0625em) {
      .g-section-break--l {
        margin-top: 30px;
      }
    }
    @media (min-width: 40.0625em) {
      .g-section-break--l {
        margin-bottom: 30px;
      }
    }
    .g-section-break--m {
      margin-top: 15px;
      margin-bottom: 15px;
    }
    @media (min-width: 40.0625em) {
      .g-section-break--m {
        margin-top: 20px;
      }
    }
    @media (min-width: 40.0625em) {
      .g-section-break--m {
        margin-bottom: 20px;
      }
    }
    .g-section-break--visible {
      border-bottom: 1px solid #bfc1c3;
    }
    .g-form-group {
      margin-bottom: 20px;
    }
    .g-form-group:after {
      content: '';
      display: block;
      clear: both;
    }
    @media (min-width: 40.0625em) {
      .g-form-group {
        margin-bottom: 30px;
      }
    }
    .g-form-group .g-form-group:last-of-type,
    .g-form-group .g-form-group.\:last-of-type {
      margin-bottom: 0;
    }
    .g-form-group--error {
      padding-left: 15px;
      border-left: 5px solid #b10e1e;
    }
    .g-form-group--error .g-form-group {
      padding: 0;
      border: 0;
    }
    .g-grid-row {
      margin-right: -15px;
      margin-left: -15px;
    }
    .g-grid-row:after {
      content: '';
      display: block;
      clear: both;
    }
    .g-grid-column-one-quarter {
      box-sizing: border-box;
      width: 100%;
      padding: 0 15px;
    }
    @media (min-width: 40.0625em) {
      .g-grid-column-one-quarter {
        width: 25%;
        float: left;
      }
    }
    .g-grid-column-one-third {
      box-sizing: border-box;
      width: 100%;
      padding: 0 15px;
    }
    @media (min-width: 40.0625em) {
      .g-grid-column-one-third {
        width: 33.3333%;
        float: left;
      }
    }
    .g-grid-column-one-half {
      box-sizing: border-box;
      width: 100%;
      padding: 0 15px;
    }
    @media (min-width: 40.0625em) {
      .g-grid-column-one-half {
        width: 50%;
        float: left;
      }
    }
    .g-grid-column-two-thirds {
      box-sizing: border-box;
      width: 100%;
      padding: 0 15px;
    }
    @media (min-width: 40.0625em) {
      .g-grid-column-two-thirds {
        width: 66.6666%;
        float: left;
      }
    }
    .g-grid-column-three-quarters {
      box-sizing: border-box;
      width: 100%;
      padding: 0 15px;
    }
    @media (min-width: 40.0625em) {
      .g-grid-column-three-quarters {
        width: 75%;
        float: left;
      }
    }
    .g-grid-column-full {
      box-sizing: border-box;
      width: 100%;
      padding: 0 15px;
    }
    @media (min-width: 40.0625em) {
      .g-grid-column-full {
        width: 100%;
        float: left;
      }
    }
    .g-grid-column-one-quarter-from-desktop {
      box-sizing: border-box;
      padding: 0 15px;
    }
    @media (min-width: 48.0625em) {
      .g-grid-column-one-quarter-from-desktop {
        width: 25%;
        float: left;
      }
    }
    .g-grid-column-one-third-from-desktop {
      box-sizing: border-box;
      padding: 0 15px;
    }
    @media (min-width: 48.0625em) {
      .g-grid-column-one-third-from-desktop {
        width: 33.3333%;
        float: left;
      }
    }
    .g-grid-column-one-half-from-desktop {
      box-sizing: border-box;
      padding: 0 15px;
    }
    @media (min-width: 48.0625em) {
      .g-grid-column-one-half-from-desktop {
        width: 50%;
        float: left;
      }
    }
    .g-grid-column-two-thirds-from-desktop {
      box-sizing: border-box;
      padding: 0 15px;
    }
    @media (min-width: 48.0625em) {
      .g-grid-column-two-thirds-from-desktop {
        width: 66.6666%;
        float: left;
      }
    }
    .g-grid-column-three-quarters-from-desktop {
      box-sizing: border-box;
      padding: 0 15px;
    }
    @media (min-width: 48.0625em) {
      .g-grid-column-three-quarters-from-desktop {
        width: 75%;
        float: left;
      }
    }
    .g-grid-column-full-from-desktop {
      box-sizing: border-box;
      padding: 0 15px;
    }
    @media (min-width: 48.0625em) {
      .g-grid-column-full-from-desktop {
        width: 100%;
        float: left;
      }
    }
    .g-main-wrapper {
      display: block;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    @media (min-width: 40.0625em) {
      .g-main-wrapper {
        padding-top: 40px;
        padding-bottom: 40px;
      }
    }
    .g-main-wrapper--l {
      padding-top: 30px;
    }
    @media (min-width: 40.0625em) {
      .g-main-wrapper--l {
        padding-top: 50px;
      }
    }
    .g-width-container {
      max-width: 960px;
      margin: 0 15px;
    }
    @supports (margin: max(calc(0px))) {
      .g-width-container {
        margin-right: max(15px, calc(15px + env(safe-area-inset-right)));
        margin-left: max(15px, calc(15px + env(safe-area-inset-left)));
      }
    }
    @media (min-width: 40.0625em) {
      .g-width-container {
        margin: 0 30px;
      }
      @supports (margin: max(calc(0px))) {
        .g-width-container {
          margin-right: max(30px, calc(15px + env(safe-area-inset-right)));
          margin-left: max(30px, calc(15px + env(safe-area-inset-left)));
        }
      }
    }
    @media (min-width: 1020px) {
      .g-width-container {
        margin: 0 auto;
      }
      @supports (margin: max(calc(0px))) {
        .g-width-container {
          margin: 0 auto;
        }
      }
    }
    .g-accordion {
      margin-bottom: 20px;
    }
    @media (min-width: 40.0625em) {
      .g-accordion {
        margin-bottom: 30px;
      }
    }
    .g-accordion__section {
      padding-top: 15px;
    }
    .g-accordion__section-header {
      padding-bottom: 15px;
    }
    .g-accordion__section-heading {
      margin-top: 0;
      margin-bottom: 0;
    }
    .g-accordion__section-button {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 700;
      font-size: 18px;
      font-size: 1.125rem;
      line-height: 1.11111;
      display: inline-block;
      margin-bottom: 0;
      padding-top: 15px;
    }
    @media print {
      .g-accordion__section-button {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-accordion__section-button {
        font-size: 24px;
        font-size: 1.5rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-accordion__section-button {
        font-size: 18pt;
        line-height: 1.15;
      }
    }
    .g-accordion__section-summary {
      margin-top: 10px;
      margin-bottom: 0;
    }
    .g-accordion__section-content > :last-child,
    .g-accordion__section-content > .\:last-child {
      margin-bottom: 0;
    }
    .js-enabled .g-accordion {
      border-bottom: 1px solid #bfc1c3;
    }
    .js-enabled .g-accordion__section {
      padding-top: 0;
      border-top: 1px solid #bfc1c3;
    }
    .js-enabled .g-accordion__section-content {
      display: none;
      padding-top: 15px;
      padding-bottom: 15px;
    }
    @media (min-width: 40.0625em) {
      .js-enabled .g-accordion__section-content {
        padding-top: 15px;
      }
    }
    @media (min-width: 40.0625em) {
      .js-enabled .g-accordion__section-content {
        padding-bottom: 15px;
      }
    }
    .js-enabled .g-accordion__section--expanded .g-accordion__section-content {
      display: block;
    }
    .js-enabled .g-accordion__open-all {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 14px;
      font-size: 0.875rem;
      line-height: 1.14286;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      display: inline;
      border-width: 0;
      color: #005ea5;
      background: none;
      cursor: pointer;
    }
    @media print {
      .js-enabled .g-accordion__open-all {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .js-enabled .g-accordion__open-all {
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
      }
    }
    @media print {
      .js-enabled .g-accordion__open-all {
        font-size: 14pt;
        line-height: 1.2;
      }
    }
    @media print {
      .js-enabled .g-accordion__open-all {
        font-family: sans-serif;
      }
    }
    .js-enabled .g-accordion__open-all:focus,
    .js-enabled .g-accordion__open-all.\:focus {
      outline: 3px solid #ffbf47;
      outline-offset: 0;
      background-color: #ffbf47;
    }
    .js-enabled .g-accordion__open-all:focus,
    .js-enabled .g-accordion__open-all.\:focus {
      background: none;
    }
    .js-enabled .g-accordion__section-header {
      position: relative;
      padding-right: 40px;
      cursor: pointer;
    }
    .js-enabled .g-accordion__section-header:hover,
    .js-enabled .g-accordion__section-header.\:hover {
      background-color: #f8f8f8;
    }
    @media (hover: none) {
      .js-enabled .g-accordion__section-header:hover,
      .js-enabled .g-accordion__section-header.\:hover {
        background-color: initial;
      }
    }
    .js-enabled .g-accordion__section-header--focused {
      outline: 3px solid #ffbf47;
      outline-offset: 0;
    }
    .js-enabled .g-accordion__section-button {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 100%;
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 0;
      padding-top: 15px;
      padding-bottom: 0;
      padding-left: 0;
      border-width: 0;
      color: #005ea5;
      background: none;
      text-align: left;
      cursor: pointer;
    }
    @media print {
      .js-enabled .g-accordion__section-button {
        font-family: sans-serif;
      }
    }
    .js-enabled .g-accordion__section-button:focus,
    .js-enabled .g-accordion__section-button.\:focus {
      outline: 3px solid #ffbf47;
      outline-offset: 0;
      background-color: #ffbf47;
    }
    .js-enabled .g-accordion__section-button:focus,
    .js-enabled .g-accordion__section-button.\:focus {
      outline: none;
      background: none;
    }
    .js-enabled .g-accordion__section-button:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    .js-enabled .g-accordion__controls {
      text-align: right;
    }
    .js-enabled .g-accordion__icon {
      position: absolute;
      top: 50%;
      right: 15px;
      width: 16px;
      height: 16px;
      margin-top: -8px;
    }
    .js-enabled .g-accordion__icon:after,
    .js-enabled .g-accordion__icon:before {
      content: '';
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 25%;
      height: 25%;
      margin: auto;
      border: 2px solid transparent;
      background-color: #0b0c0c;
    }
    .js-enabled .g-accordion__icon:before {
      width: 100%;
    }
    .js-enabled .g-accordion__icon:after {
      height: 100%;
    }
    .js-enabled .g-accordion__section--expanded .g-accordion__icon:after {
      content: ' ';
      display: none;
    }
    .g-back-link {
      font-size: 14px;
      font-size: 0.875rem;
      line-height: 1.14286;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      display: inline-block;
      position: relative;
      margin-top: 15px;
      margin-bottom: 15px;
      padding-left: 14px;
      border-bottom: 1px solid #0b0c0c;
      text-decoration: none;
    }
    @media (min-width: 40.0625em) {
      .g-back-link {
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-back-link {
        font-size: 14pt;
        line-height: 1.2;
      }
    }
    @media print {
      .g-back-link {
        font-family: sans-serif;
      }
    }
    .g-back-link:focus,
    .g-back-link.\:focus {
      outline: 3px solid #ffbf47;
      outline-offset: 0;
      background-color: #ffbf47;
    }
    .g-back-link:link,
    .g-back-link:visited,
    .g-back-link:hover,
    .g-back-link:active,
    .g-back-link:focus,
    .g-back-link.\:link,
    .g-back-link.\:visited,
    .g-back-link.\:hover,
    .g-back-link.\:active,
    .g-back-link.\:focus {
      color: #0b0c0c;
    }
    @media print {
      .g-back-link:link,
      .g-back-link:visited,
      .g-back-link:hover,
      .g-back-link:active,
      .g-back-link:focus,
      .g-back-link.\:link,
      .g-back-link.\:visited,
      .g-back-link.\:hover,
      .g-back-link.\:active,
      .g-back-link.\:focus {
        color: #000000;
      }
    }
    .g-back-link:before {
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-color: transparent;
      -webkit-clip-path: polygon(0% 50%, 100% 100%, 100% 0%);
      clip-path: polygon(0% 50%, 100% 100%, 100% 0%);
      border-width: 5px 6px 5px 0;
      border-right-color: inherit;
      content: '';
      position: absolute;
      top: -1px;
      bottom: 1px;
      left: 0;
      margin: auto;
    }
    .g-back-link:before {
      top: -1px;
      bottom: 1px;
    }
    .g-breadcrumbs {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 14px;
      font-size: 0.875rem;
      line-height: 1.14286;
      color: #0b0c0c;
      margin-top: 15px;
      margin-bottom: 10px;
    }
    @media print {
      .g-breadcrumbs {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-breadcrumbs {
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-breadcrumbs {
        font-size: 14pt;
        line-height: 1.2;
      }
    }
    @media print {
      .g-breadcrumbs {
        color: #000000;
      }
    }
    .g-breadcrumbs__list {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    .g-breadcrumbs__list:after {
      content: '';
      display: block;
      clear: both;
    }
    .g-breadcrumbs__list-item {
      display: inline-block;
      position: relative;
      margin-bottom: 5px;
      margin-left: 10px;
      padding-left: 15.655px;
      float: left;
    }
    .g-breadcrumbs__list-item:before {
      content: '';
      display: block;
      position: absolute;
      top: -1px;
      bottom: 1px;
      left: -3.31px;
      width: 7px;
      height: 7px;
      margin: auto 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      border: solid;
      border-width: 1px 1px 0 0;
      border-color: #6f777b;
    }
    .g-breadcrumbs__list-item:first-child,
    .g-breadcrumbs__list-item.\:first-child {
      margin-left: 0;
      padding-left: 0;
    }
    .g-breadcrumbs__list-item:first-child:before,
    .g-breadcrumbs__list-item.\:first-child:before {
      content: none;
      display: none;
    }
    .g-breadcrumbs__link {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    @media print {
      .g-breadcrumbs__link {
        font-family: sans-serif;
      }
    }
    .g-breadcrumbs__link:focus,
    .g-breadcrumbs__link.\:focus {
      outline: 3px solid #ffbf47;
      outline-offset: 0;
      background-color: #ffbf47;
    }
    .g-breadcrumbs__link:link,
    .g-breadcrumbs__link:visited,
    .g-breadcrumbs__link:hover,
    .g-breadcrumbs__link:active,
    .g-breadcrumbs__link:focus,
    .g-breadcrumbs__link.\:link,
    .g-breadcrumbs__link.\:visited,
    .g-breadcrumbs__link.\:hover,
    .g-breadcrumbs__link.\:active,
    .g-breadcrumbs__link.\:focus {
      color: #0b0c0c;
    }
    @media print {
      .g-breadcrumbs__link:link,
      .g-breadcrumbs__link:visited,
      .g-breadcrumbs__link:hover,
      .g-breadcrumbs__link:active,
      .g-breadcrumbs__link:focus,
      .g-breadcrumbs__link.\:link,
      .g-breadcrumbs__link.\:visited,
      .g-breadcrumbs__link.\:hover,
      .g-breadcrumbs__link.\:active,
      .g-breadcrumbs__link.\:focus {
        color: #000000;
      }
    }
    .g-button {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 500;
      font-size: 20px;
      font-size: 20px;
      line-height: 1.2;
      box-sizing: border-box;
      display: inline-block;
      position: relative;
      width: 100%;
      margin-top: 0;
      margin-bottom: 22px;
      padding: 16px;
      border: 2px solid transparent;
      border-radius: 4px;
      color: #ffffff;
      background-color: #00823b;
      box-shadow: 0 2px 0 0 #2a2a2a;
      text-align: center;
      vertical-align: top;
      cursor: pointer;
      -webkit-appearance: none;
    }
    @media print {
      .g-button {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-button {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1;
      }
    }
    @media print {
      .g-button {
        font-size: 14pt;
        line-height: 19px;
      }
    }
    .g-button:focus,
    .g-button.\:focus {
      outline: 3px solid #ffbf47;
      outline-offset: 0;
    }
    @media (min-width: 40.0625em) {
      .g-button {
        margin-bottom: 32px;
      }
    }
    @media (min-width: 40.0625em) {
      .g-button {
        width: auto;
      }
    }
    .g-button:link,
    .g-button:visited,
    .g-button:active,
    .g-button:hover,
    .g-button.\:link,
    .g-button.\:visited,
    .g-button.\:active,
    .g-button.\:hover {
      color: #ffffff;
      text-decoration: none;
    }
    .g-button::-moz-focus-inner {
      padding: 0;
      border: 0;
    }
    .g-button:hover,
    .g-button:focus,
    .g-button.\:hover,
    .g-button.\:focus {
      background-color: #00682f;
    }
    .g-button:active,
    .g-button.\:active {
      top: 2px;
      box-shadow: none;
    }
    .g-button::before {
      content: '';
      display: block;
      position: absolute;
      top: -2px;
      right: -2px;
      bottom: -4px;
      left: -2px;
      background: transparent;
    }
    .g-button:active::before,
    .g-button.\:active::before {
      top: -4px;
    }
    .g-button--disabled,
    .g-button[disabled='disabled'],
    .g-button[disabled] {
      opacity: 0.5;
      background: #00823b;
    }
    .g-button--disabled:hover,
    .g-button[disabled='disabled']:hover,
    .g-button[disabled]:hover,
    .g-button--disabled.\:hover,
    .g-button[disabled='disabled'].\:hover,
    .g-button[disabled].\:hover {
      background-color: #00823b;
      cursor: default;
    }
    .g-button--disabled:focus,
    .g-button[disabled='disabled']:focus,
    .g-button[disabled]:focus,
    .g-button--disabled.\:focus,
    .g-button[disabled='disabled'].\:focus,
    .g-button[disabled].\:focus {
      outline: none;
    }
    .g-button--disabled:active,
    .g-button[disabled='disabled']:active,
    .g-button[disabled]:active,
    .g-button--disabled.\:active,
    .g-button[disabled='disabled'].\:active,
    .g-button[disabled].\:active {
      top: 0;
      box-shadow: 0 2px 0 #003418;
    }
    .g-button--secondary {
      background-color: #dee0e2;
      box-shadow: 0 2px 0 #858688;
    }
    .g-button--secondary,
    .g-button--secondary:link,
    .g-button--secondary:visited,
    .g-button--secondary:active,
    .g-button--secondary:hover,
    .g-button--secondary.\:link,
    .g-button--secondary.\:visited,
    .g-button--secondary.\:active,
    .g-button--secondary.\:hover {
      color: #0b0c0c;
    }
    .g-button--secondary:hover,
    .g-button--secondary:focus,
    .g-button--secondary.\:hover,
    .g-button--secondary.\:focus {
      background-color: #c8cacb;
    }
    .g-button--warning {
      background-color: #b10e1e;
      box-shadow: 0 2px 0 #47060c;
    }
    .g-button--warning,
    .g-button--warning:link,
    .g-button--warning:visited,
    .g-button--warning:active,
    .g-button--warning:hover,
    .g-button--warning.\:link,
    .g-button--warning.\:visited,
    .g-button--warning.\:active,
    .g-button--warning.\:hover {
      color: #ffffff;
    }
    .g-button--warning:hover,
    .g-button--warning:focus,
    .g-button--warning.\:hover,
    .g-button--warning.\:focus {
      background-color: #8e0b18;
    }
    .g-button--start {
      font-weight: 700;
      font-size: 18px;
      font-size: 1.125rem;
      line-height: 1;
      min-height: auto;
      padding-top: 8px;
      padding-right: 40px;
      padding-bottom: 8px;
      padding-left: 15px;
      background-image: url('/assets/images/icon-pointer.png');
      background-repeat: no-repeat;
      background-position: 100% 50%;
    }
    @media (min-width: 40.0625em) {
      .g-button--start {
        font-size: 24px;
        font-size: 1.5rem;
        line-height: 1;
      }
    }
    @media print {
      .g-button--start {
        font-size: 18pt;
        line-height: 1;
      }
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      .g-button--start {
        background-image: url('/assets/images/icon-pointer-2x.png');
        background-size: 30px 19px;
      }
    }
    .g-button {
      padding-top: 16px;
      padding-bottom: 16px;
    }
    .g-button--start {
      padding-top: 9px;
      padding-bottom: 6px;
    }
    .g-error-message {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 700;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      display: block;
      margin-bottom: 15px;
      clear: both;
      color: #b10e1e;
    }
    @media print {
      .g-error-message {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-error-message {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-error-message {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    .g-fieldset {
      min-width: 0;
      margin: 0;
      padding: 0;
      border: 0;
    }
    .g-fieldset:after {
      content: '';
      display: block;
      clear: both;
    }
    @supports not (caret-color: auto) {
      .g-fieldset,
      x:-moz-any-link,
      x.\:-moz-any-link {
        display: table-cell;
      }
    }
    .g-fieldset__legend {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      color: #0b0c0c;
      box-sizing: border-box;
      display: table;
      max-width: 100%;
      margin-bottom: 0px;
      padding: 0;
      overflow: hidden;
      white-space: normal;
    }
    @media print {
      .g-fieldset__legend {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-fieldset__legend {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-fieldset__legend {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    @media print {
      .g-fieldset__legend {
        color: #000000;
      }
    }
    .g-fieldset__legend--xl {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 700;
      font-size: 32px;
      font-size: 2rem;
      line-height: 1.09375;
      margin-bottom: 15px;
    }
    @media print {
      .g-fieldset__legend--xl {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-fieldset__legend--xl {
        font-size: 48px;
        font-size: 3rem;
        line-height: 1.04167;
      }
    }
    @media print {
      .g-fieldset__legend--xl {
        font-size: 32pt;
        line-height: 1.15;
      }
    }
    .g-fieldset__legend--l {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 700;
      font-size: 24px;
      font-size: 1.5rem;
      line-height: 1.04167;
      margin-bottom: 15px;
    }
    @media print {
      .g-fieldset__legend--l {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-fieldset__legend--l {
        font-size: 36px;
        font-size: 2.25rem;
        line-height: 1.11111;
      }
    }
    @media print {
      .g-fieldset__legend--l {
        font-size: 24pt;
        line-height: 1.05;
      }
    }
    .g-fieldset__legend--m {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 700;
      font-size: 18px;
      font-size: 1.125rem;
      line-height: 1.11111;
      margin-bottom: 15px;
    }
    @media print {
      .g-fieldset__legend--m {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-fieldset__legend--m {
        font-size: 24px;
        font-size: 1.5rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-fieldset__legend--m {
        font-size: 18pt;
        line-height: 1.15;
      }
    }
    .g-fieldset__legend--s {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 700;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
    }
    @media print {
      .g-fieldset__legend--s {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-fieldset__legend--s {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-fieldset__legend--s {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    .g-fieldset__heading {
      margin: 0;
      font-size: inherit;
      font-weight: inherit;
    }
    .g-hint {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      display: block;
      margin-bottom: 15px;
      color: #595959;
    }
    @media print {
      .g-hint {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-hint {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-hint {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    .g-label:not(.g-label--m):not(.g-label--l):not(.g-label--xl) + .g-hint,
    .g-label.\:not\(.g-label--m\).\:not\(.g-label--l\).\:not\(.g-label--xl\)
      + .g-hint {
      margin-bottom: 10px;
    }
    .g-fieldset__legend:not(.g-fieldset__legend--m):not(.g-fieldset__legend--l):not(.g-fieldset__legend--xl)
      + .g-hint,
    .g-fieldset__legend.\:not\(.g-fieldset__legend--m\).\:not\(.g-fieldset__legend--l\).\:not\(.g-fieldset__legend--xl\)
      + .g-hint {
      margin-bottom: 10px;
    }
    .g-fieldset__legend + .g-hint,
    .g-fieldset__legend + .g-hint {
      margin-top: -5px;
    }
    .g-label {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: bold;
      font-size: 1.25rem;
      font-size: 1.25rem;
      line-height: 1.25;
      color: #2a2a2a;
      display: block;
      margin-bottom: 5px;
    }
    @media print {
      .g-label {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-label {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-label {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    @media print {
      .g-label {
        color: #000000;
      }
    }
    .g-label--xl {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 700;
      font-size: 32px;
      font-size: 2rem;
      line-height: 1.09375;
      margin-bottom: 15px;
    }
    @media print {
      .g-label--xl {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-label--xl {
        font-size: 48px;
        font-size: 3rem;
        line-height: 1.04167;
      }
    }
    @media print {
      .g-label--xl {
        font-size: 32pt;
        line-height: 1.15;
      }
    }
    .g-label--l {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 700;
      font-size: 24px;
      font-size: 1.5rem;
      line-height: 1.04167;
      margin-bottom: 15px;
    }
    @media print {
      .g-label--l {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-label--l {
        font-size: 36px;
        font-size: 2.25rem;
        line-height: 1.11111;
      }
    }
    @media print {
      .g-label--l {
        font-size: 24pt;
        line-height: 1.05;
      }
    }
    .g-label--m {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 700;
      font-size: 18px;
      font-size: 1.125rem;
      line-height: 1.11111;
      margin-bottom: 10px;
    }
    @media print {
      .g-label--m {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-label--m {
        font-size: 24px;
        font-size: 1.5rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-label--m {
        font-size: 18pt;
        line-height: 1.15;
      }
    }
    .g-label--s {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 700;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
    }
    @media print {
      .g-label--s {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-label--s {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-label--s {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    .g-label-wrapper {
      margin: 0;
    }
    .g-checkboxes__item {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      display: block;
      position: relative;
      min-height: 40px;
      margin-bottom: 16px;
      padding-left: 40px;
      clear: left;
    }
    @media print {
      .g-checkboxes__item {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-checkboxes__item {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-checkboxes__item {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    .g-checkboxes__item:last-child,
    .g-checkboxes__item:last-of-type,
    .g-checkboxes__item.\:last-child,
    .g-checkboxes__item.\:last-of-type {
      margin-bottom: 0;
    }
    .g-checkboxes__input {
      cursor: pointer;
      position: absolute;
      z-index: 1;
      top: -2px;
      left: -2px;
      width: 44px;
      height: 44px;
      margin: 0;
      opacity: 0;
    }
    .g-checkboxes__label {
      display: inline-block;
      margin-bottom: 0;
      padding: 8px 15px 5px;
      cursor: pointer;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
    }
    .g-checkboxes__label::before {
      content: '';
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
      border: 2px solid currentColor;
      background: transparent;
    }
    .g-checkboxes__label::after {
      content: '';
      position: absolute;
      top: 11px;
      left: 9px;
      width: 18px;
      height: 7px;
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
      border: solid;
      border-width: 0 0 5px 5px;
      border-top-color: transparent;
      opacity: 0;
      background: transparent;
    }
    .g-checkboxes__hint {
      display: block;
      padding-right: 15px;
      padding-left: 15px;
    }
    .g-checkboxes__input:focus + .g-checkboxes__label::before,
    .g-checkboxes__input.\:focus + .g-checkboxes__label::before {
      outline: 3px solid transparent;
      outline-offset: 3px;
      box-shadow: 0 0 0 3px #ffbf47;
    }
    .g-checkboxes__input:checked + .g-checkboxes__label::after,
    .g-checkboxes__input.\:checked + .g-checkboxes__label::after {
      opacity: 1;
    }
    .g-checkboxes__input:disabled,
    .g-checkboxes__input:disabled + .g-checkboxes__label,
    .g-checkboxes__input.\:disabled,
    .g-checkboxes__input.\:disabled + .g-checkboxes__label {
      cursor: default;
    }
    .g-checkboxes__input:disabled + .g-checkboxes__label,
    .g-checkboxes__input.\:disabled + .g-checkboxes__label {
      opacity: 0.5;
    }
    .g-checkboxes__conditional {
      margin-bottom: 15px;
      margin-left: 18px;
      padding-left: 33px;
      border-left: 4px solid #bfc1c3;
    }
    @media (min-width: 40.0625em) {
      .g-checkboxes__conditional {
        margin-bottom: 20px;
      }
    }
    .js-enabled .g-checkboxes__conditional--hidden {
      display: none;
    }
    .g-checkboxes__conditional > :last-child,
    .g-checkboxes__conditional > .\:last-child {
      margin-bottom: 0;
    }
    .g-checkboxes--small .g-checkboxes__item {
      min-height: 0;
      margin-bottom: 0;
      padding-left: 34px;
      float: left;
    }
    .g-checkboxes--small .g-checkboxes__item:after {
      content: '';
      display: block;
      clear: both;
    }
    .g-checkboxes--small .g-checkboxes__input {
      left: -10px;
    }
    .g-checkboxes--small .g-checkboxes__label {
      margin-top: -2px;
      padding: 13px 15px 13px 1px;
      float: left;
    }
    @media (min-width: 40.0625em) {
      .g-checkboxes--small .g-checkboxes__label {
        padding: 11px 15px 10px 1px;
      }
    }
    .g-checkboxes--small .g-checkboxes__label::before {
      top: 8px;
      width: 24px;
      height: 24px;
    }
    .g-checkboxes--small .g-checkboxes__label::after {
      top: 15px;
      left: 6px;
      width: 9px;
      height: 3.5px;
      border-width: 0 0 3px 3px;
    }
    .g-checkboxes--small .g-checkboxes__hint {
      padding: 0;
      clear: both;
    }
    .g-checkboxes--small .g-checkboxes__conditional {
      margin-left: 10px;
      padding-left: 20px;
      clear: both;
    }
    .g-checkboxes--small
      .g-checkboxes__item:hover
      .g-checkboxes__input:not(:disabled)
      + .g-checkboxes__label::before,
    .g-checkboxes--small
      .g-checkboxes__item.\:hover
      .g-checkboxes__input:not(:disabled)
      + .g-checkboxes__label::before {
      box-shadow: 0 0 0 10px #dee0e2;
    }
    .g-checkboxes--small
      .g-checkboxes__item:hover
      .g-checkboxes__input:focus
      + .g-checkboxes__label::before,
    .g-checkboxes--small
      .g-checkboxes__item.\:hover
      .g-checkboxes__input.\:focus
      + .g-checkboxes__label::before {
      box-shadow: 0 0 0 3px #ffbf47, 0 0 0 10px #dee0e2;
    }
    @media (hover: none), (pointer: coarse) {
      .g-checkboxes--small
        .g-checkboxes__item:hover
        .g-checkboxes__input:not(:disabled)
        + .g-checkboxes__label::before,
      .g-checkboxes--small
        .g-checkboxes__item.\:hover
        .g-checkboxes__input:not(:disabled)
        + .g-checkboxes__label::before {
        box-shadow: initial;
      }
      .g-checkboxes--small
        .g-checkboxes__item:hover
        .g-checkboxes__input:focus
        + .g-checkboxes__label::before,
      .g-checkboxes--small
        .g-checkboxes__item.\:hover
        .g-checkboxes__input.\:focus
        + .g-checkboxes__label::before {
        box-shadow: 0 0 0 3px #ffbf47;
      }
    }
    .g-character-count {
      margin-bottom: 20px;
    }
    @media (min-width: 40.0625em) {
      .g-character-count {
        margin-bottom: 30px;
      }
    }
    .g-character-count .g-form-group,
    .g-character-count .g-textarea {
      margin-bottom: 5px;
    }
    .g-character-count .g-textarea--error {
      padding: 3px;
    }
    .g-character-count__message {
      margin-top: 0;
      margin-bottom: 0;
    }
    .g-character-count__message--disabled {
      visibility: hidden;
    }
    .g-summary-list {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      color: #0b0c0c;
      margin: 0;
      margin-bottom: 20px;
    }
    @media print {
      .g-summary-list {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-summary-list {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-summary-list {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    @media print {
      .g-summary-list {
        color: #000000;
      }
    }
    @media (min-width: 40.0625em) {
      .g-summary-list {
        display: table;
        width: 100%;
        table-layout: fixed;
      }
    }
    @media (min-width: 40.0625em) {
      .g-summary-list {
        margin-bottom: 30px;
      }
    }
    @media (max-width: 40.0525em) {
      .g-summary-list__row {
        margin-bottom: 15px;
        border-bottom: 1px solid #bfc1c3;
      }
    }
    @media (min-width: 40.0625em) {
      .g-summary-list__row {
        display: table-row;
      }
    }
    .g-summary-list__key,
    .g-summary-list__value,
    .g-summary-list__actions {
      margin: 0;
    }
    @media (min-width: 40.0625em) {
      .g-summary-list__key,
      .g-summary-list__value,
      .g-summary-list__actions {
        display: table-cell;
        padding-right: 20px;
      }
    }
    @media (min-width: 40.0625em) {
      .g-summary-list__key,
      .g-summary-list__value,
      .g-summary-list__actions {
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #bfc1c3;
      }
    }
    .g-summary-list__actions {
      margin-bottom: 15px;
    }
    @media (min-width: 40.0625em) {
      .g-summary-list__actions {
        width: 20%;
        padding-right: 0;
        text-align: right;
      }
    }
    .g-summary-list__key,
    .g-summary-list__value {
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
    .g-summary-list__key {
      margin-bottom: 5px;
      font-weight: 700;
    }
    @media (min-width: 40.0625em) {
      .g-summary-list__key {
        width: 30%;
      }
    }
    @media (max-width: 40.0525em) {
      .g-summary-list__value {
        margin-bottom: 15px;
      }
    }
    @media (min-width: 40.0625em) {
      .g-summary-list__value {
        width: 50%;
      }
    }
    @media (min-width: 40.0625em) {
      .g-summary-list__value:last-child,
      .g-summary-list__value.\:last-child {
        width: 70%;
      }
    }
    .g-summary-list__value > p {
      margin-bottom: 10px;
    }
    .g-summary-list__value > :last-child,
    .g-summary-list__value > .\:last-child {
      margin-bottom: 0;
    }
    .g-summary-list__actions-list {
      width: 100%;
      margin: 0;
      padding: 0;
    }
    .g-summary-list__actions-list-item {
      display: inline;
      margin-right: 10px;
      padding-right: 10px;
    }
    .g-summary-list__actions-list-item:not(:last-child) {
      border-right: 1px solid #bfc1c3;
    }
    .g-summary-list__actions-list-item:last-child,
    .g-summary-list__actions-list-item.\:last-child {
      margin-right: 0;
      padding-right: 0;
      border: 0;
    }
    @media (max-width: 40.0525em) {
      .g-summary-list--no-border .g-summary-list__row {
        border: 0;
      }
    }
    @media (min-width: 40.0625em) {
      .g-summary-list--no-border .g-summary-list__key,
      .g-summary-list--no-border .g-summary-list__value,
      .g-summary-list--no-border .g-summary-list__actions {
        padding-bottom: 11px;
        border: 0;
      }
    }
    @media (max-width: 40.0525em) {
      .g-summary-list__row--no-border {
        border: 0;
      }
    }
    @media (min-width: 40.0625em) {
      .g-summary-list__row--no-border .g-summary-list__key,
      .g-summary-list__row--no-border .g-summary-list__value,
      .g-summary-list__row--no-border .g-summary-list__actions {
        padding-bottom: 11px;
        border: 0;
      }
    }
    .g-input {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      margin-top: 0;
      padding: 0.5rem;
      border: 1px solid #2a2a2a;
      border-radius: 0;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    @media print {
      .g-input {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-input {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-input {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    .g-input:focus,
    .g-input.\:focus {
      outline: 3px solid #ffbf47;
      outline-offset: 0;
    }
    .g-input::-webkit-outer-spin-button,
    .g-input::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
    .g-input[type='number'] {
      -moz-appearance: textfield;
    }
    .g-input--error {
      border: 1px solid #b10e1e;
    }
    .g-input--width-30 {
      max-width: 59ex;
    }
    .g-input--width-20 {
      max-width: 41ex;
    }
    .g-input--width-10 {
      max-width: 23ex;
    }
    .g-input--width-5 {
      max-width: 10.8ex;
    }
    .g-input--width-4 {
      max-width: 9ex;
    }
    .g-input--width-3 {
      max-width: 7.2ex;
    }
    .g-input--width-2 {
      max-width: 5.4ex;
    }
    .g-date-input {
      font-size: 0;
    }
    .g-date-input:after {
      content: '';
      display: block;
      clear: both;
    }
    .g-date-input__item {
      display: inline-block;
      margin-right: 20px;
      margin-bottom: 0;
    }
    .g-date-input__label {
      display: block;
    }
    .g-date-input__input {
      margin-bottom: 0;
    }
    .g-details {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      color: #0b0c0c;
      margin-bottom: 20px;
      display: block;
    }
    @media print {
      .g-details {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-details {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-details {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    @media print {
      .g-details {
        color: #000000;
      }
    }
    @media (min-width: 40.0625em) {
      .g-details {
        margin-bottom: 30px;
      }
    }
    .g-details__summary {
      display: inline-block;
      position: relative;
      margin-bottom: 5px;
      padding-left: 25px;
      color: #005ea5;
      cursor: pointer;
    }
    .g-details__summary-text {
      text-decoration: underline;
    }
    .g-details__summary:hover,
    .g-details__summary.\:hover {
      color: #2b8cc4;
    }
    .g-details__summary:focus,
    .g-details__summary.\:focus {
      outline: 4px solid #ffbf47;
      outline-offset: -1px;
      color: #0b0c0c;
      background: #ffbf47;
    }
    .g-details__summary::-webkit-details-marker {
      display: none;
    }
    .g-details__summary:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-color: transparent;
      -webkit-clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
      clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
      border-width: 7px 0 7px 12.124px;
      border-left-color: inherit;
    }
    .g-details[open] > .g-details__summary:before {
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-color: transparent;
      -webkit-clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
      clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
      border-width: 12.124px 7px 0 7px;
      border-top-color: inherit;
    }
    .g-details__text {
      padding: 15px;
      padding-left: 20px;
      border-left: 5px solid #bfc1c3;
    }
    .g-details__text p {
      margin-top: 0;
      margin-bottom: 20px;
    }
    .g-details__text > :last-child,
    .g-details__text > .\:last-child {
      margin-bottom: 0;
    }
    .g-error-summary {
      color: #0b0c0c;
      padding: 15px;
      margin-bottom: 30px;
      border: 4px solid #b10e1e;
    }
    @media print {
      .g-error-summary {
        color: #000000;
      }
    }
    @media (min-width: 40.0625em) {
      .g-error-summary {
        padding: 20px;
      }
    }
    @media (min-width: 40.0625em) {
      .g-error-summary {
        margin-bottom: 50px;
      }
    }
    .g-error-summary:focus,
    .g-error-summary.\:focus {
      outline: 3px solid #ffbf47;
      outline-offset: 0;
    }
    @media (min-width: 40.0625em) {
      .g-error-summary {
        border: 5px solid #b10e1e;
      }
    }
    .g-error-summary__title {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 700;
      font-size: 18px;
      font-size: 1.125rem;
      line-height: 1.11111;
      margin-top: 0;
      margin-bottom: 15px;
    }
    @media print {
      .g-error-summary__title {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-error-summary__title {
        font-size: 24px;
        font-size: 1.5rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-error-summary__title {
        font-size: 18pt;
        line-height: 1.15;
      }
    }
    @media (min-width: 40.0625em) {
      .g-error-summary__title {
        margin-bottom: 20px;
      }
    }
    .g-error-summary__body {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
    }
    @media print {
      .g-error-summary__body {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-error-summary__body {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-error-summary__body {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    .g-error-summary__body p {
      margin-top: 0;
      margin-bottom: 15px;
    }
    @media (min-width: 40.0625em) {
      .g-error-summary__body p {
        margin-bottom: 20px;
      }
    }
    .g-error-summary__list {
      margin-top: 0;
      margin-bottom: 0;
    }
    .g-error-summary__list a {
      font-weight: 700;
    }
    .g-error-summary__list a:focus,
    .g-error-summary__list a.\:focus {
      outline: 3px solid #ffbf47;
      outline-offset: 0;
    }
    .g-error-summary__list a:link,
    .g-error-summary__list a:visited,
    .g-error-summary__list a:hover,
    .g-error-summary__list a:active,
    .g-error-summary__list a.\:link,
    .g-error-summary__list a.\:visited,
    .g-error-summary__list a.\:hover,
    .g-error-summary__list a.\:active {
      color: #b10e1e;
    }
    .g-error-summary__list a:focus,
    .g-error-summary__list a.\:focus {
      color: #0b0c0c;
    }
    .g-file-upload {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      color: #0b0c0c;
    }
    @media print {
      .g-file-upload {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-file-upload {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-file-upload {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    @media print {
      .g-file-upload {
        color: #000000;
      }
    }
    .g-file-upload:focus,
    .g-file-upload.\:focus {
      outline: 3px solid #ffbf47;
      outline-offset: 0;
    }
    .g-file-upload--error {
      border: 4px solid #b10e1e;
    }
    .g-footer {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 14px;
      font-size: 0.875rem;
      line-height: 1.14286;
      padding-top: 25px;
      padding-bottom: 15px;
      border-top: 1px solid #a1acb2;
      color: #454a4c;
      background: #dee0e2;
    }
    @media print {
      .g-footer {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-footer {
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-footer {
        font-size: 14pt;
        line-height: 1.2;
      }
    }
    @media (min-width: 40.0625em) {
      .g-footer {
        padding-top: 40px;
      }
    }
    @media (min-width: 40.0625em) {
      .g-footer {
        padding-bottom: 25px;
      }
    }
    .g-footer__link:focus,
    .g-footer__link.\:focus {
      outline: 3px solid #ffbf47;
      outline-offset: 0;
      background-color: #ffbf47;
    }
    .g-footer__link:link,
    .g-footer__link:visited,
    .g-footer__link.\:link,
    .g-footer__link.\:visited {
      color: #454a4c;
    }
    .g-footer__link:hover,
    .g-footer__link:active,
    .g-footer__link.\:hover,
    .g-footer__link.\:active {
      color: #171819;
    }
    .g-footer__link:focus,
    .g-footer__link.\:focus {
      color: #0b0c0c;
    }
    .g-footer__section-break {
      margin: 0;
      margin-bottom: 30px;
      border: 0;
      border-bottom: 1px solid #bfc1c3;
    }
    @media (min-width: 40.0625em) {
      .g-footer__section-break {
        margin-bottom: 50px;
      }
    }
    .g-footer__meta {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin-right: -15px;
      margin-left: -15px;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-align: end;
      -webkit-align-items: flex-end;
      -ms-flex-align: end;
      align-items: flex-end;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
    }
    .g-footer__meta-item {
      margin-right: 15px;
      margin-bottom: 25px;
      margin-left: 15px;
    }
    .g-footer__meta-item--grow {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
    @media (max-width: 40.0525em) {
      .g-footer__meta-item--grow {
        -webkit-flex-basis: 320px;
        -ms-flex-preferred-size: 320px;
        flex-basis: 320px;
      }
    }
    .g-footer__licence-logo {
      display: inline-block;
      margin-right: 10px;
      vertical-align: top;
    }
    @media (max-width: 48.0525em) {
      .g-footer__licence-logo {
        margin-bottom: 15px;
      }
    }
    .g-footer__licence-description {
      display: inline-block;
    }
    .g-footer__copyright-logo {
      display: inline-block;
      min-width: 125px;
      padding-top: 112px;
      background-image: url('/assets/images/g-crest.png');
      background-repeat: no-repeat;
      background-position: 50% 0%;
      background-size: 125px 102px;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      .g-footer__copyright-logo {
        background-image: url('/assets/images/g-crest-2x.png');
      }
    }
    .g-footer__inline-list {
      margin-top: 0;
      margin-bottom: 15px;
      padding: 0;
    }
    .g-footer__meta-custom {
      margin-bottom: 20px;
    }
    .g-footer__inline-list-item {
      display: inline-block;
      margin-right: 15px;
      margin-bottom: 5px;
    }
    .g-footer__heading {
      margin-bottom: 25px;
      padding-bottom: 20px;
      border-bottom: 1px solid #bfc1c3;
    }
    @media (min-width: 40.0625em) {
      .g-footer__heading {
        margin-bottom: 40px;
      }
    }
    @media (max-width: 40.0525em) {
      .g-footer__heading {
        padding-bottom: 10px;
      }
    }
    .g-footer__navigation {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin-right: -15px;
      margin-left: -15px;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    .g-footer__section {
      display: inline-block;
      margin-right: 15px;
      margin-bottom: 30px;
      margin-left: 15px;
      vertical-align: top;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -webkit-flex-shrink: 1;
      -ms-flex-negative: 1;
      flex-shrink: 1;
    }
    @media (max-width: 48.0525em) {
      .g-footer__section {
        -webkit-flex-basis: 200px;
        -ms-flex-preferred-size: 200px;
        flex-basis: 200px;
      }
    }
    @media (min-width: 48.0625em) {
      .g-footer__section:first-child,
      .g-footer__section.\:first-child {
        -webkit-box-flex: 2;
        -webkit-flex-grow: 2;
        -ms-flex-positive: 2;
        flex-grow: 2;
      }
    }
    .g-footer__list {
      margin: 0;
      padding: 0;
      list-style: none;
      -webkit-column-gap: 30px;
      -moz-column-gap: 30px;
      column-gap: 30px;
    }
    @media (min-width: 48.0625em) {
      .g-footer__list--columns-2 {
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
      }
      .g-footer__list--columns-3 {
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
      }
    }
    .g-footer__list-item {
      margin-bottom: 15px;
    }
    @media (min-width: 40.0625em) {
      .g-footer__list-item {
        margin-bottom: 20px;
      }
    }
    .g-footer__list-item:last-child,
    .g-footer__list-item.\:last-child {
      margin-bottom: 0;
    }
    .g-header {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 14px;
      font-size: 0.875rem;
      line-height: 1.14286;
      border-bottom: 10px solid #ffffff;
      color: #ffffff;
      background: #0b0c0c;
    }
    @media print {
      .g-header {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-header {
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-header {
        font-size: 14pt;
        line-height: 1.2;
      }
    }
    .g-header__container--full-width {
      padding: 0 15px;
      border-color: #005ea5;
    }
    .g-header__container--full-width .g-header__menu-button {
      right: 15px;
    }
    .g-header__container {
      position: relative;
      margin-bottom: -10px;
      padding-top: 10px;
      border-bottom: 10px solid #005ea5;
    }
    .g-header__container:after {
      content: '';
      display: block;
      clear: both;
    }
    .g-header__logotype {
      margin-right: 5px;
    }
    .g-header__logotype-crown {
      margin-right: 1px;
      fill: currentColor;
      vertical-align: middle;
    }
    .g-header__logotype-crown-fallback-image {
      width: 36px;
      height: 32px;
      border: 0;
      vertical-align: middle;
    }
    .g-header__product-name {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 18px;
      font-size: 1.125rem;
      line-height: 1.11111;
      display: inline-table;
      padding-right: 10px;
    }
    @media print {
      .g-header__product-name {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-header__product-name {
        font-size: 24px;
        font-size: 1.5rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-header__product-name {
        font-size: 18pt;
        line-height: 1.15;
      }
    }
    .g-header__link {
      text-decoration: none;
    }
    .g-header__link:focus,
    .g-header__link.\:focus {
      outline: 3px solid #ffbf47;
      outline-offset: 0;
      background-color: #ffbf47;
    }
    .g-header__link:link,
    .g-header__link:visited,
    .g-header__link.\:link,
    .g-header__link.\:visited {
      color: #ffffff;
    }
    .g-header__link:hover,
    .g-header__link.\:hover {
      text-decoration: underline;
    }
    .g-header__link:focus,
    .g-header__link.\:focus {
      color: #0b0c0c;
    }
    .g-header__link--homepage {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 700;
      display: inline-block;
      font-size: 30px;
      line-height: 30px;
    }
    @media print {
      .g-header__link--homepage {
        font-family: sans-serif;
      }
    }
    .g-header__link--homepage:link,
    .g-header__link--homepage:visited,
    .g-header__link--homepage.\:link,
    .g-header__link--homepage.\:visited {
      text-decoration: none;
    }
    .g-header__link--homepage:hover,
    .g-header__link--homepage:active,
    .g-header__link--homepage.\:hover,
    .g-header__link--homepage.\:active {
      margin-bottom: -1px;
      border-bottom: 1px solid;
    }
    .g-header__link--service-name {
      display: inline-block;
      margin-bottom: 10px;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 700;
      font-size: 18px;
      font-size: 1.125rem;
      line-height: 1.11111;
    }
    @media print {
      .g-header__link--service-name {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-header__link--service-name {
        font-size: 24px;
        font-size: 1.5rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-header__link--service-name {
        font-size: 18pt;
        line-height: 1.15;
      }
    }
    .g-header__logo,
    .g-header__content {
      box-sizing: border-box;
    }
    .g-header__logo {
      margin-bottom: 10px;
      padding-right: 50px;
    }
    @media (min-width: 40.0625em) {
      .g-header__logo {
        margin-bottom: 10px;
      }
    }
    @media (min-width: 48.0625em) {
      .g-header__logo {
        width: 33.33%;
        padding-right: 15px;
        float: left;
        vertical-align: top;
      }
    }
    @media (min-width: 48.0625em) {
      .g-header__content {
        width: 66.66%;
        padding-left: 15px;
        float: left;
      }
    }
    .g-header__menu-button {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 14px;
      font-size: 0.875rem;
      line-height: 1.14286;
      display: none;
      position: absolute;
      top: 20px;
      right: 0;
      margin: 0;
      padding: 0;
      border: 0;
      color: #ffffff;
      background: none;
    }
    @media print {
      .g-header__menu-button {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-header__menu-button {
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-header__menu-button {
        font-size: 14pt;
        line-height: 1.2;
      }
    }
    .g-header__menu-button:hover,
    .g-header__menu-button.\:hover {
      text-decoration: underline;
    }
    .g-header__menu-button::after {
      display: inline-block;
      width: 0;
      height: 0;
      border-style: solid;
      border-color: transparent;
      -webkit-clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
      clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
      border-width: 8.66px 5px 0 5px;
      border-top-color: inherit;
      content: '';
      margin-left: 5px;
    }
    .g-header__menu-button:focus,
    .g-header__menu-button.\:focus {
      outline: 3px solid #ffbf47;
      outline-offset: 0;
    }
    @media (min-width: 40.0625em) {
      .g-header__menu-button {
        top: 15px;
      }
    }
    .g-header__menu-button--open::after {
      display: inline-block;
      width: 0;
      height: 0;
      border-style: solid;
      border-color: transparent;
      -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      border-width: 0 5px 8.66px 5px;
      border-bottom-color: inherit;
    }
    .g-header__navigation {
      margin-bottom: 10px;
      display: block;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    @media (min-width: 40.0625em) {
      .g-header__navigation {
        margin-bottom: 10px;
      }
    }
    .js-enabled .g-header__menu-button {
      display: block;
    }
    @media (min-width: 48.0625em) {
      .js-enabled .g-header__menu-button {
        display: none;
      }
    }
    .js-enabled .g-header__navigation {
      display: none;
    }
    @media (min-width: 48.0625em) {
      .js-enabled .g-header__navigation {
        display: block;
      }
    }
    .js-enabled .g-header__navigation--open {
      display: block;
    }
    @media (min-width: 48.0625em) {
      .g-header__navigation--end {
        margin: 0;
        padding: 5px 0;
        text-align: right;
      }
    }
    .g-header__navigation--no-service-name {
      padding-top: 40px;
    }
    .g-header__navigation-item {
      padding: 10px 0;
      border-bottom: 1px solid #2e3133;
    }
    @media (min-width: 48.0625em) {
      .g-header__navigation-item {
        display: inline-block;
        margin-right: 15px;
        padding: 5px 0;
        border: 0;
      }
    }
    .g-header__navigation-item a {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 700;
      font-size: 14px;
      font-size: 0.875rem;
      line-height: 1.14286;
      white-space: nowrap;
    }
    @media print {
      .g-header__navigation-item a {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-header__navigation-item a {
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-header__navigation-item a {
        font-size: 14pt;
        line-height: 1.2;
      }
    }
    .g-header__navigation-item--active a:link,
    .g-header__navigation-item--active a:hover,
    .g-header__navigation-item--active a:visited,
    .g-header__navigation-item--active a.\:link,
    .g-header__navigation-item--active a.\:hover,
    .g-header__navigation-item--active a.\:visited {
      color: #1d8feb;
    }
    .g-header__navigation-item--active a:focus,
    .g-header__navigation-item--active a.\:focus {
      color: #0b0c0c;
    }
    .g-header__navigation-item:last-child,
    .g-header__navigation-item.\:last-child {
      margin-right: 0;
    }
    @media print {
      .g-header {
        border-bottom-width: 0;
        color: #0b0c0c;
        background: transparent;
      }
      .g-header__logotype-crown-fallback-image {
        display: none;
      }
      .g-header__link:link,
      .g-header__link:visited,
      .g-header__link.\:link,
      .g-header__link.\:visited {
        color: #0b0c0c;
      }
      .g-header__link:after {
        display: none;
      }
    }
    .g-header__logotype-crown,
    .g-header__logotype-crown-fallback-image {
      position: relative;
      top: -4px;
    }
    .g-header {
      padding-top: 3px;
    }
    .g-inset-text {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      color: #0b0c0c;
      padding: 15px;
      margin-top: 20px;
      margin-bottom: 20px;
      clear: both;
      border-left: 8px solid #23cba5;
      background: #f4f4f4;
    }
    @media print {
      .g-inset-text {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-inset-text {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-inset-text {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    @media print {
      .g-inset-text {
        color: #000000;
      }
    }
    @media (min-width: 40.0625em) {
      .g-inset-text {
        margin-top: 30px;
      }
    }
    @media (min-width: 40.0625em) {
      .g-inset-text {
        margin-bottom: 30px;
      }
    }
    .g-inset-text > :first-child,
    .g-inset-text > .\:first-child {
      margin-top: 0;
    }
    .g-inset-text > :only-child,
    .g-inset-text > :last-child,
    .g-inset-text > .\:only-child,
    .g-inset-text > .\:last-child {
      margin-bottom: 0;
    }
    .g-panel {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      box-sizing: border-box;
      margin-bottom: 15px;
      padding: 35px;
      border: 5px solid transparent;
      text-align: center;
    }
    @media print {
      .g-panel {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-panel {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-panel {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    @media (max-width: 40.0525em) {
      .g-panel {
        padding: 25px;
      }
    }
    .g-panel--confirmation {
      color: #ffffff;
      background: #28a197;
    }
    .g-panel__title {
      margin-top: 0;
      margin-bottom: 30px;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 700;
      font-size: 32px;
      font-size: 2rem;
      line-height: 1.09375;
    }
    @media print {
      .g-panel__title {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-panel__title {
        font-size: 48px;
        font-size: 3rem;
        line-height: 1.04167;
      }
    }
    @media print {
      .g-panel__title {
        font-size: 32pt;
        line-height: 1.15;
      }
    }
    .g-panel__title:last-child,
    .g-panel__title.\:last-child {
      margin-bottom: 0;
    }
    .g-panel__body {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 24px;
      font-size: 1.5rem;
      line-height: 1.04167;
    }
    @media print {
      .g-panel__body {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-panel__body {
        font-size: 36px;
        font-size: 2.25rem;
        line-height: 1.11111;
      }
    }
    @media print {
      .g-panel__body {
        font-size: 24pt;
        line-height: 1.05;
      }
    }
    .g-tag {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 700;
      font-size: 14px;
      font-size: 0.875rem;
      line-height: 1.25;
      display: inline-block;
      padding: 4px 8px;
      padding-bottom: 1px;
      outline: 2px solid transparent;
      outline-offset: -2px;
      color: #ffffff;
      background-color: #005ea5;
      letter-spacing: 1px;
      text-decoration: none;
      text-transform: uppercase;
    }
    @media print {
      .g-tag {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-tag {
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-tag {
        font-size: 14pt;
        line-height: 1.25;
      }
    }
    .g-tag--inactive {
      background-color: #6f777b;
    }
    .g-phase-banner {
      padding-top: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #bfc1c3;
    }
    .g-phase-banner__content {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 14px;
      font-size: 0.875rem;
      line-height: 1.14286;
      color: #0b0c0c;
      display: table;
      margin: 0;
    }
    @media print {
      .g-phase-banner__content {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-phase-banner__content {
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-phase-banner__content {
        font-size: 14pt;
        line-height: 1.2;
      }
    }
    @media print {
      .g-phase-banner__content {
        color: #000000;
      }
    }
    .g-phase-banner__content__tag {
      margin-right: 10px;
    }
    .g-phase-banner__text {
      display: table-cell;
      vertical-align: baseline;
    }
    .g-tabs {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      color: #0b0c0c;
      margin-top: 5px;
      margin-bottom: 20px;
    }
    @media print {
      .g-tabs {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-tabs {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-tabs {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    @media print {
      .g-tabs {
        color: #000000;
      }
    }
    @media (min-width: 40.0625em) {
      .g-tabs {
        margin-top: 5px;
      }
    }
    @media (min-width: 40.0625em) {
      .g-tabs {
        margin-bottom: 30px;
      }
    }
    .g-tabs__title {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      margin-bottom: 5px;
    }
    @media print {
      .g-tabs__title {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-tabs__title {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-tabs__title {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    .g-tabs__list {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    @media (max-width: 40.0525em) {
      .g-tabs__list {
        margin-bottom: 20px;
      }
    }
    @media (max-width: 40.0525em) and (min-width: 40.0625em) {
      .g-tabs__list {
        margin-bottom: 30px;
      }
    }
    .g-tabs__list-item {
      margin-left: 25px;
    }
    .g-tabs__list-item::before {
      content: '\\2014 ';
      margin-left: -25px;
      padding-right: 5px;
    }
    .g-tabs__tab {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      display: inline-block;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    @media print {
      .g-tabs__tab {
        font-family: sans-serif;
      }
    }
    .g-tabs__tab:focus,
    .g-tabs__tab.\:focus {
      outline: 3px solid #ffbf47;
      outline-offset: 0;
      background-color: #ffbf47;
    }
    .g-tabs__tab:link,
    .g-tabs__tab.\:link {
      color: #005ea5;
    }
    .g-tabs__tab:visited,
    .g-tabs__tab.\:visited {
      color: #4c2c92;
    }
    .g-tabs__tab:hover,
    .g-tabs__tab.\:hover {
      color: #2b8cc4;
    }
    .g-tabs__tab:active,
    .g-tabs__tab.\:active {
      color: #2b8cc4;
    }
    .g-tabs__tab:focus,
    .g-tabs__tab.\:focus {
      color: #0b0c0c;
    }
    @media print {
      .g-tabs__tab {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-tabs__tab {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-tabs__tab {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    .g-tabs__tab[aria-current='true'] {
      color: #0b0c0c;
      text-decoration: none;
    }
    .g-tabs__panel {
      margin-bottom: 30px;
    }
    @media (min-width: 40.0625em) {
      .g-tabs__panel {
        margin-bottom: 50px;
      }
    }
    @media (min-width: 40.0625em) {
      .js-enabled .g-tabs__list {
        border-bottom: 1px solid #bfc1c3;
      }
      .js-enabled .g-tabs__list:after {
        content: '';
        display: block;
        clear: both;
      }
      .js-enabled .g-tabs__list-item {
        margin-left: 0;
      }
      .js-enabled .g-tabs__list-item::before {
        content: none;
      }
      .js-enabled .g-tabs__title {
        display: none;
      }
      .js-enabled .g-tabs__tab {
        margin-right: 5px;
        padding-right: 20px;
        padding-left: 20px;
        float: left;
        color: #0b0c0c;
        background-color: #f8f8f8;
        text-align: center;
        text-decoration: none;
      }
      .js-enabled .g-tabs__tab--selected {
        margin-top: -5px;
        margin-bottom: -1px;
        padding-top: 14px;
        padding-right: 19px;
        padding-bottom: 16px;
        padding-left: 19px;
        border: 1px solid #bfc1c3;
        border-bottom: 0;
        color: #0b0c0c;
        background-color: #ffffff;
      }
      .js-enabled .g-tabs__tab--selected:focus,
      .js-enabled .g-tabs__tab--selected.\:focus {
        background-color: transparent;
      }
      .js-enabled .g-tabs__panel {
        margin-bottom: 0;
        padding-top: 30px;
        padding-right: 20px;
        padding-bottom: 30px;
        padding-left: 20px;
        border: 1px solid #bfc1c3;
        border-top: 0;
      }
    }
    @media (min-width: 40.0625em) and (min-width: 40.0625em) {
      .js-enabled .g-tabs__panel {
        margin-bottom: 0;
      }
    }
    @media (min-width: 40.0625em) {
      .js-enabled .g-tabs__panel--hidden {
        display: none;
      }
      .js-enabled .g-tabs__panel > :last-child,
      .js-enabled .g-tabs__panel > .\:last-child {
        margin-bottom: 0;
      }
    }
    .g-radios__item {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      display: block;
      position: relative;
      min-height: 40px;
      margin-bottom: 10px;
      padding-left: 40px;
      clear: left;
    }
    @media print {
      .g-radios__item {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-radios__item {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-radios__item {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    .g-radios__item:last-child,
    .g-radios__item:last-of-type,
    .g-radios__item.\:last-child,
    .g-radios__item.\:last-of-type {
      margin-bottom: 0;
    }
    .g-radios__input {
      cursor: pointer;
      position: absolute;
      z-index: 1;
      top: -2px;
      left: -2px;
      width: 44px;
      height: 44px;
      margin: 0;
      opacity: 0;
    }
    .g-radios__label {
      display: inline-block;
      margin-bottom: 0;
      padding: 8px 15px 5px;
      cursor: pointer;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
    }
    .g-radios__label::before {
      content: '';
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
      border: 2px solid currentColor;
      border-radius: 50%;
      background: transparent;
    }
    .g-radios__label::after {
      content: '';
      position: absolute;
      top: 10px;
      left: 10px;
      width: 0;
      height: 0;
      border: 10px solid currentColor;
      border-radius: 50%;
      opacity: 0;
      background: currentColor;
    }
    .g-radios__hint {
      display: block;
      padding-right: 15px;
      padding-left: 15px;
    }
    .g-radios__input:focus + .g-radios__label::before,
    .g-radios__input.\:focus + .g-radios__label::before {
      outline: 3px solid transparent;
      outline-offset: 3px;
      box-shadow: 0 0 0 4px #ffbf47;
    }
    .g-radios__input:checked + .g-radios__label::after,
    .g-radios__input.\:checked + .g-radios__label::after {
      opacity: 1;
    }
    .g-radios__input:disabled,
    .g-radios__input:disabled + .g-radios__label,
    .g-radios__input.\:disabled,
    .g-radios__input.\:disabled + .g-radios__label {
      cursor: default;
    }
    .g-radios__input:disabled + .g-radios__label,
    .g-radios__input.\:disabled + .g-radios__label {
      opacity: 0.5;
    }
    @media (min-width: 40.0625em) {
      .g-radios--inline:after {
        content: '';
        display: block;
        clear: both;
      }
      .g-radios--inline .g-radios__item {
        margin-right: 20px;
        float: left;
        clear: none;
      }
    }
    .g-radios--inline.g-radios--conditional .g-radios__item {
      margin-right: 0;
      float: none;
    }
    .g-form-divider {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      color: #0b0c0c;
      width: 40px;
      margin-bottom: 10px;
      text-align: center;
    }
    @media print {
      .g-form-divider {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-form-divider {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-form-divider {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    @media print {
      .g-form-divider {
        color: #000000;
      }
    }
    .g-radios__conditional {
      margin-bottom: 15px;
      margin-left: 18px;
      padding-left: 33px;
      border-left: 4px solid #bfc1c3;
    }
    @media (min-width: 40.0625em) {
      .g-radios__conditional {
        margin-bottom: 20px;
      }
    }
    .js-enabled .g-radios__conditional--hidden {
      display: none;
    }
    .g-radios__conditional > :last-child,
    .g-radios__conditional > .\:last-child {
      margin-bottom: 0;
    }
    .g-radios--small .g-radios__item {
      min-height: 0;
      margin-bottom: 0;
      padding-left: 34px;
      float: left;
    }
    .g-radios--small .g-radios__item:after {
      content: '';
      display: block;
      clear: both;
    }
    .g-radios--small .g-radios__input {
      left: -10px;
    }
    .g-radios--small .g-radios__label {
      margin-top: -2px;
      padding: 13px 15px 13px 1px;
      float: left;
    }
    @media (min-width: 40.0625em) {
      .g-radios--small .g-radios__label {
        padding: 11px 15px 10px 1px;
      }
    }
    .g-radios--small .g-radios__label::before {
      top: 8px;
      width: 24px;
      height: 24px;
    }
    .g-radios--small .g-radios__label::after {
      top: 14px;
      left: 6px;
      border-width: 6px;
    }
    .g-radios--small .g-radios__hint {
      padding: 0;
      clear: both;
      pointer-events: none;
    }
    .g-radios--small .g-radios__conditional {
      margin-left: 10px;
      padding-left: 20px;
      clear: both;
    }
    .g-radios--small .g-form-divider {
      width: 24px;
      margin-bottom: 5px;
    }
    .g-radios--small
      .g-radios__item:hover
      .g-radios__input:not(:disabled)
      + .g-radios__label::before,
    .g-radios--small
      .g-radios__item.\:hover
      .g-radios__input:not(:disabled)
      + .g-radios__label::before {
      box-shadow: 0 0 0 10px #dee0e2;
    }
    .g-radios--small
      .g-radios__item:hover
      .g-radios__input:focus
      + .g-radios__label::before,
    .g-radios--small
      .g-radios__item.\:hover
      .g-radios__input.\:focus
      + .g-radios__label::before {
      box-shadow: 0 0 0 4px #ffbf47, 0 0 0 10px #dee0e2;
    }
    @media (hover: none), (pointer: coarse) {
      .g-radios--small
        .g-radios__item:hover
        .g-radios__input:not(:disabled)
        + .g-radios__label::before,
      .g-radios--small
        .g-radios__item.\:hover
        .g-radios__input:not(:disabled)
        + .g-radios__label::before {
        box-shadow: initial;
      }
      .g-radios--small
        .g-radios__item:hover
        .g-radios__input:focus
        + .g-radios__label::before,
      .g-radios--small
        .g-radios__item.\:hover
        .g-radios__input.\:focus
        + .g-radios__label::before {
        box-shadow: 0 0 0 4px #ffbf47;
      }
    }
    .g-select {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      box-sizing: border-box;
      max-width: 100%;
      height: auto;
      padding: 5px;
      border: 1px solid #000000;
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      padding: 0.4rem 2.5rem 0.5rem 0.6rem;
      background-repeat: no-repeat;
      border-radius: 0;
      background-position: right 0.7em top 50%;
      background-size: 1rem auto;
      background-image: url('data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%228.5%22%20viewBox%3D%220%200%2016%2010.5%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M1%201%20L8%208.5%20L15%201%22%20stroke-width%3D%223%22%20stroke%3D%22currentColor%22%20fill%3D%22transparent%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fsvg%3E');
    }
    @media print {
      .g-select {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-select {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-select {
        font-size: 14pt;
        line-height: 1.25;
      }
    }
    .g-select:focus,
    .g-select.\:focus {
      outline: 3px solid #ffbf47;
      outline-offset: 0;
    }
    .g-select option:active,
    .g-select option:checked,
    .g-select:focus::-ms-value,
    .g-select option.\:active,
    .g-select option.\:checked,
    .g-select.\:focus::-ms-value {
      color: #ffffff;
      background-color: #005ea5;
    }
    .g-select--error {
      border: 1px solid #b10e1e;
    }
    .g-skip-link {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      margin: 0 !important;
      overflow: hidden !important;
      clip: rect(0 0 0 0) !important;
      -webkit-clip-path: inset(50%) !important;
      clip-path: inset(50%) !important;
      white-space: nowrap !important;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 14px;
      font-size: 0.875rem;
      line-height: 1.14286;
      display: block;
      padding: 10px 15px;
    }
    .g-skip-link:active,
    .g-skip-link:focus,
    .g-skip-link.\:active,
    .g-skip-link.\:focus {
      position: static !important;
      width: auto !important;
      height: auto !important;
      margin: inherit !important;
      overflow: visible !important;
      clip: auto !important;
      -webkit-clip-path: none !important;
      clip-path: none !important;
      white-space: inherit !important;
    }
    @media print {
      .g-skip-link {
        font-family: sans-serif;
      }
    }
    .g-skip-link:focus,
    .g-skip-link.\:focus {
      outline: 3px solid #ffbf47;
      outline-offset: 0;
      background-color: #ffbf47;
    }
    .g-skip-link:link,
    .g-skip-link:visited,
    .g-skip-link:hover,
    .g-skip-link:active,
    .g-skip-link:focus,
    .g-skip-link.\:link,
    .g-skip-link.\:visited,
    .g-skip-link.\:hover,
    .g-skip-link.\:active,
    .g-skip-link.\:focus {
      color: #0b0c0c;
    }
    @media print {
      .g-skip-link:link,
      .g-skip-link:visited,
      .g-skip-link:hover,
      .g-skip-link:active,
      .g-skip-link:focus,
      .g-skip-link.\:link,
      .g-skip-link.\:visited,
      .g-skip-link.\:hover,
      .g-skip-link.\:active,
      .g-skip-link.\:focus {
        color: #000000;
      }
    }
    @media (min-width: 40.0625em) {
      .g-skip-link {
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-skip-link {
        font-size: 14pt;
        line-height: 1.2;
      }
    }
    @supports (padding: max(calc(0px))) {
      .g-skip-link {
        padding-right: max(15px, calc(15px + env(safe-area-inset-right)));
        padding-left: max(15px, calc(15px + env(safe-area-inset-left)));
      }
    }
    .g-table {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      color: #0b0c0c;
      width: 100%;
      margin-bottom: 20px;
      border-spacing: 0;
      border-collapse: collapse;
    }
    @media print {
      .g-table {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-table {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-table {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    @media print {
      .g-table {
        color: #000000;
      }
    }
    @media (min-width: 40.0625em) {
      .g-table {
        margin-bottom: 30px;
      }
    }
    .g-table__header {
      font-weight: 700;
    }
    .g-table__header,
    .g-table__cell {
      padding: 10px 20px 10px 0;
      border-bottom: 1px solid #bfc1c3;
      text-align: left;
    }
    .g-table__cell--numeric {
      font-family: 'ntatabularnumbers', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
    }
    @media print {
      .g-table__cell--numeric {
        font-family: sans-serif;
      }
    }
    .g-table__header--numeric,
    .g-table__cell--numeric {
      text-align: right;
    }
    .g-table__header:last-child,
    .g-table__cell:last-child,
    .g-table__header.\:last-child,
    .g-table__cell.\:last-child {
      padding-right: 0;
    }
    .g-table__caption {
      font-weight: 700;
      display: table-caption;
      text-align: left;
    }
    .g-textarea {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      box-sizing: border-box;
      display: block;
      width: 100%;
      min-height: 40px;
      margin-bottom: 20px;
      padding: 5px;
      resize: vertical;
      border: 2px solid #0b0c0c;
      border-radius: 0;
      -webkit-appearance: none;
    }
    @media print {
      .g-textarea {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-textarea {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.25;
      }
    }
    @media print {
      .g-textarea {
        font-size: 14pt;
        line-height: 1.25;
      }
    }
    .g-textarea:focus,
    .g-textarea.\:focus {
      outline: 3px solid #ffbf47;
      outline-offset: 0;
    }
    @media (min-width: 40.0625em) {
      .g-textarea {
        margin-bottom: 30px;
      }
    }
    .g-textarea--error {
      border: 4px solid #b10e1e;
    }
    .g-warning-text {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.25;
      color: #0b0c0c;
      position: relative;
      margin-bottom: 20px;
      padding: 10px 0;
    }
    @media print {
      .g-warning-text {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-warning-text {
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-warning-text {
        font-size: 14pt;
        line-height: 1.15;
      }
    }
    @media print {
      .g-warning-text {
        color: #000000;
      }
    }
    @media (min-width: 40.0625em) {
      .g-warning-text {
        margin-bottom: 30px;
      }
    }
    .g-warning-text__assistive {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      margin: 0 !important;
      padding: 0 !important;
      overflow: hidden !important;
      clip: rect(0 0 0 0) !important;
      -webkit-clip-path: inset(50%) !important;
      clip-path: inset(50%) !important;
      border: 0 !important;
      white-space: nowrap !important;
    }
    .g-warning-text__icon {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 700;
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 0;
      min-width: 32px;
      min-height: 29px;
      margin-top: -20px;
      padding-top: 3px;
      border: 3px solid #0b0c0c;
      border-radius: 50%;
      color: #ffffff;
      background: #0b0c0c;
      font-size: 1.6em;
      line-height: 29px;
      text-align: center;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    @media print {
      .g-warning-text__icon {
        font-family: sans-serif;
      }
    }
    .g-warning-text__text {
      display: block;
      padding-left: 50px;
    }
    .g-clearfix:after {
      content: '';
      display: block;
      clear: both;
    }
    .g-visually-hidden {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      margin: 0 !important;
      padding: 0 !important;
      overflow: hidden !important;
      clip: rect(0 0 0 0) !important;
      -webkit-clip-path: inset(50%) !important;
      clip-path: inset(50%) !important;
      border: 0 !important;
      white-space: nowrap !important;
    }
    .g-visually-hidden-focusable {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      margin: 0 !important;
      overflow: hidden !important;
      clip: rect(0 0 0 0) !important;
      -webkit-clip-path: inset(50%) !important;
      clip-path: inset(50%) !important;
      white-space: nowrap !important;
    }
    .g-visually-hidden-focusable:active,
    .g-visually-hidden-focusable:focus,
    .g-visually-hidden-focusable.\:active,
    .g-visually-hidden-focusable.\:focus {
      position: static !important;
      width: auto !important;
      height: auto !important;
      margin: inherit !important;
      overflow: visible !important;
      clip: auto !important;
      -webkit-clip-path: none !important;
      clip-path: none !important;
      white-space: inherit !important;
    }
    .g-\!-display-inline {
      display: inline !important;
    }
    .g-\!-display-inline-block {
      display: inline-block !important;
    }
    .g-\!-display-block {
      display: block !important;
    }
    .g-\!-margin-0 {
      margin: 0 !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-0 {
        margin: 0 !important;
      }
    }
    .g-\!-margin-top-0 {
      margin-top: 0 !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-top-0 {
        margin-top: 0 !important;
      }
    }
    .g-\!-margin-right-0 {
      margin-right: 0 !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-right-0 {
        margin-right: 0 !important;
      }
    }
    .g-\!-margin-bottom-0 {
      margin-bottom: 0 !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-bottom-0 {
        margin-bottom: 0 !important;
      }
    }
    .g-\!-margin-left-0 {
      margin-left: 0 !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-left-0 {
        margin-left: 0 !important;
      }
    }
    .g-\!-margin-1 {
      margin: 5px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-1 {
        margin: 5px !important;
      }
    }
    .g-\!-margin-top-1 {
      margin-top: 5px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-top-1 {
        margin-top: 5px !important;
      }
    }
    .g-\!-margin-right-1 {
      margin-right: 5px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-right-1 {
        margin-right: 5px !important;
      }
    }
    .g-\!-margin-bottom-1 {
      margin-bottom: 5px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-bottom-1 {
        margin-bottom: 5px !important;
      }
    }
    .g-\!-margin-left-1 {
      margin-left: 5px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-left-1 {
        margin-left: 5px !important;
      }
    }
    .g-\!-margin-2 {
      margin: 10px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-2 {
        margin: 10px !important;
      }
    }
    .g-\!-margin-top-2 {
      margin-top: 10px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-top-2 {
        margin-top: 10px !important;
      }
    }
    .g-\!-margin-right-2 {
      margin-right: 10px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-right-2 {
        margin-right: 10px !important;
      }
    }
    .g-\!-margin-bottom-2 {
      margin-bottom: 10px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-bottom-2 {
        margin-bottom: 10px !important;
      }
    }
    .g-\!-margin-left-2 {
      margin-left: 10px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-left-2 {
        margin-left: 10px !important;
      }
    }
    .g-\!-margin-3 {
      margin: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-3 {
        margin: 15px !important;
      }
    }
    .g-\!-margin-top-3 {
      margin-top: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-top-3 {
        margin-top: 15px !important;
      }
    }
    .g-\!-margin-right-3 {
      margin-right: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-right-3 {
        margin-right: 15px !important;
      }
    }
    .g-\!-margin-bottom-3 {
      margin-bottom: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-bottom-3 {
        margin-bottom: 15px !important;
      }
    }
    .g-\!-margin-left-3 {
      margin-left: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-left-3 {
        margin-left: 15px !important;
      }
    }
    .g-\!-margin-4 {
      margin: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-4 {
        margin: 20px !important;
      }
    }
    .g-\!-margin-top-4 {
      margin-top: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-top-4 {
        margin-top: 20px !important;
      }
    }
    .g-\!-margin-right-4 {
      margin-right: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-right-4 {
        margin-right: 20px !important;
      }
    }
    .g-\!-margin-bottom-4 {
      margin-bottom: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-bottom-4 {
        margin-bottom: 20px !important;
      }
    }
    .g-\!-margin-left-4 {
      margin-left: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-left-4 {
        margin-left: 20px !important;
      }
    }
    .g-\!-margin-5 {
      margin: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-5 {
        margin: 25px !important;
      }
    }
    .g-\!-margin-top-5 {
      margin-top: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-top-5 {
        margin-top: 25px !important;
      }
    }
    .g-\!-margin-right-5 {
      margin-right: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-right-5 {
        margin-right: 25px !important;
      }
    }
    .g-\!-margin-bottom-5 {
      margin-bottom: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-bottom-5 {
        margin-bottom: 25px !important;
      }
    }
    .g-\!-margin-left-5 {
      margin-left: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-left-5 {
        margin-left: 25px !important;
      }
    }
    .g-\!-margin-6 {
      margin: 20px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-6 {
        margin: 30px !important;
      }
    }
    .g-\!-margin-top-6 {
      margin-top: 20px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-top-6 {
        margin-top: 30px !important;
      }
    }
    .g-\!-margin-right-6 {
      margin-right: 20px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-right-6 {
        margin-right: 30px !important;
      }
    }
    .g-\!-margin-bottom-6 {
      margin-bottom: 20px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-bottom-6 {
        margin-bottom: 30px !important;
      }
    }
    .g-\!-margin-left-6 {
      margin-left: 20px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-left-6 {
        margin-left: 30px !important;
      }
    }
    .g-\!-margin-7 {
      margin: 25px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-7 {
        margin: 40px !important;
      }
    }
    .g-\!-margin-top-7 {
      margin-top: 25px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-top-7 {
        margin-top: 40px !important;
      }
    }
    .g-\!-margin-right-7 {
      margin-right: 25px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-right-7 {
        margin-right: 40px !important;
      }
    }
    .g-\!-margin-bottom-7 {
      margin-bottom: 25px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-bottom-7 {
        margin-bottom: 40px !important;
      }
    }
    .g-\!-margin-left-7 {
      margin-left: 25px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-left-7 {
        margin-left: 40px !important;
      }
    }
    .g-\!-margin-8 {
      margin: 30px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-8 {
        margin: 50px !important;
      }
    }
    .g-\!-margin-top-8 {
      margin-top: 30px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-top-8 {
        margin-top: 50px !important;
      }
    }
    .g-\!-margin-right-8 {
      margin-right: 30px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-right-8 {
        margin-right: 50px !important;
      }
    }
    .g-\!-margin-bottom-8 {
      margin-bottom: 30px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-bottom-8 {
        margin-bottom: 50px !important;
      }
    }
    .g-\!-margin-left-8 {
      margin-left: 30px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-left-8 {
        margin-left: 50px !important;
      }
    }
    .g-\!-margin-9 {
      margin: 40px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-9 {
        margin: 60px !important;
      }
    }
    .g-\!-margin-top-9 {
      margin-top: 40px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-top-9 {
        margin-top: 60px !important;
      }
    }
    .g-\!-margin-right-9 {
      margin-right: 40px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-right-9 {
        margin-right: 60px !important;
      }
    }
    .g-\!-margin-bottom-9 {
      margin-bottom: 40px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-bottom-9 {
        margin-bottom: 60px !important;
      }
    }
    .g-\!-margin-left-9 {
      margin-left: 40px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-margin-left-9 {
        margin-left: 60px !important;
      }
    }
    .g-\!-padding-0 {
      padding: 0 !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-0 {
        padding: 0 !important;
      }
    }
    .g-\!-padding-top-0 {
      padding-top: 0 !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-top-0 {
        padding-top: 0 !important;
      }
    }
    .g-\!-padding-right-0 {
      padding-right: 0 !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-right-0 {
        padding-right: 0 !important;
      }
    }
    .g-\!-padding-bottom-0 {
      padding-bottom: 0 !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-bottom-0 {
        padding-bottom: 0 !important;
      }
    }
    .g-\!-padding-left-0 {
      padding-left: 0 !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-left-0 {
        padding-left: 0 !important;
      }
    }
    .g-\!-padding-1 {
      padding: 5px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-1 {
        padding: 5px !important;
      }
    }
    .g-\!-padding-top-1 {
      padding-top: 5px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-top-1 {
        padding-top: 5px !important;
      }
    }
    .g-\!-padding-right-1 {
      padding-right: 5px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-right-1 {
        padding-right: 5px !important;
      }
    }
    .g-\!-padding-bottom-1 {
      padding-bottom: 5px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-bottom-1 {
        padding-bottom: 5px !important;
      }
    }
    .g-\!-padding-left-1 {
      padding-left: 5px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-left-1 {
        padding-left: 5px !important;
      }
    }
    .g-\!-padding-2 {
      padding: 10px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-2 {
        padding: 10px !important;
      }
    }
    .g-\!-padding-top-2 {
      padding-top: 10px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-top-2 {
        padding-top: 10px !important;
      }
    }
    .g-\!-padding-right-2 {
      padding-right: 10px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-right-2 {
        padding-right: 10px !important;
      }
    }
    .g-\!-padding-bottom-2 {
      padding-bottom: 10px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-bottom-2 {
        padding-bottom: 10px !important;
      }
    }
    .g-\!-padding-left-2 {
      padding-left: 10px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-left-2 {
        padding-left: 10px !important;
      }
    }
    .g-\!-padding-3 {
      padding: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-3 {
        padding: 15px !important;
      }
    }
    .g-\!-padding-top-3 {
      padding-top: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-top-3 {
        padding-top: 15px !important;
      }
    }
    .g-\!-padding-right-3 {
      padding-right: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-right-3 {
        padding-right: 15px !important;
      }
    }
    .g-\!-padding-bottom-3 {
      padding-bottom: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-bottom-3 {
        padding-bottom: 15px !important;
      }
    }
    .g-\!-padding-left-3 {
      padding-left: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-left-3 {
        padding-left: 15px !important;
      }
    }
    .g-\!-padding-4 {
      padding: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-4 {
        padding: 20px !important;
      }
    }
    .g-\!-padding-top-4 {
      padding-top: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-top-4 {
        padding-top: 20px !important;
      }
    }
    .g-\!-padding-right-4 {
      padding-right: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-right-4 {
        padding-right: 20px !important;
      }
    }
    .g-\!-padding-bottom-4 {
      padding-bottom: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-bottom-4 {
        padding-bottom: 20px !important;
      }
    }
    .g-\!-padding-left-4 {
      padding-left: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-left-4 {
        padding-left: 20px !important;
      }
    }
    .g-\!-padding-5 {
      padding: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-5 {
        padding: 25px !important;
      }
    }
    .g-\!-padding-top-5 {
      padding-top: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-top-5 {
        padding-top: 25px !important;
      }
    }
    .g-\!-padding-right-5 {
      padding-right: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-right-5 {
        padding-right: 25px !important;
      }
    }
    .g-\!-padding-bottom-5 {
      padding-bottom: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-bottom-5 {
        padding-bottom: 25px !important;
      }
    }
    .g-\!-padding-left-5 {
      padding-left: 15px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-left-5 {
        padding-left: 25px !important;
      }
    }
    .g-\!-padding-6 {
      padding: 20px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-6 {
        padding: 30px !important;
      }
    }
    .g-\!-padding-top-6 {
      padding-top: 20px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-top-6 {
        padding-top: 30px !important;
      }
    }
    .g-\!-padding-right-6 {
      padding-right: 20px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-right-6 {
        padding-right: 30px !important;
      }
    }
    .g-\!-padding-bottom-6 {
      padding-bottom: 20px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-bottom-6 {
        padding-bottom: 30px !important;
      }
    }
    .g-\!-padding-left-6 {
      padding-left: 20px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-left-6 {
        padding-left: 30px !important;
      }
    }
    .g-\!-padding-7 {
      padding: 25px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-7 {
        padding: 40px !important;
      }
    }
    .g-\!-padding-top-7 {
      padding-top: 25px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-top-7 {
        padding-top: 40px !important;
      }
    }
    .g-\!-padding-right-7 {
      padding-right: 25px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-right-7 {
        padding-right: 40px !important;
      }
    }
    .g-\!-padding-bottom-7 {
      padding-bottom: 25px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-bottom-7 {
        padding-bottom: 40px !important;
      }
    }
    .g-\!-padding-left-7 {
      padding-left: 25px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-left-7 {
        padding-left: 40px !important;
      }
    }
    .g-\!-padding-8 {
      padding: 30px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-8 {
        padding: 50px !important;
      }
    }
    .g-\!-padding-top-8 {
      padding-top: 30px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-top-8 {
        padding-top: 50px !important;
      }
    }
    .g-\!-padding-right-8 {
      padding-right: 30px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-right-8 {
        padding-right: 50px !important;
      }
    }
    .g-\!-padding-bottom-8 {
      padding-bottom: 30px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-bottom-8 {
        padding-bottom: 50px !important;
      }
    }
    .g-\!-padding-left-8 {
      padding-left: 30px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-left-8 {
        padding-left: 50px !important;
      }
    }
    .g-\!-padding-9 {
      padding: 40px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-9 {
        padding: 60px !important;
      }
    }
    .g-\!-padding-top-9 {
      padding-top: 40px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-top-9 {
        padding-top: 60px !important;
      }
    }
    .g-\!-padding-right-9 {
      padding-right: 40px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-right-9 {
        padding-right: 60px !important;
      }
    }
    .g-\!-padding-bottom-9 {
      padding-bottom: 40px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-bottom-9 {
        padding-bottom: 60px !important;
      }
    }
    .g-\!-padding-left-9 {
      padding-left: 40px !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-padding-left-9 {
        padding-left: 60px !important;
      }
    }
    .g-\!-font-size-80 {
      font-size: 53px !important;
      font-size: 3.3125rem !important;
      line-height: 1.03774 !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-font-size-80 {
        font-size: 80px !important;
        font-size: 5rem !important;
        line-height: 1 !important;
      }
    }
    @media print {
      .g-\!-font-size-80 {
        font-size: 53pt !important;
        line-height: 1.1 !important;
      }
    }
    .g-\!-font-size-48 {
      font-size: 32px !important;
      font-size: 2rem !important;
      line-height: 1.09375 !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-font-size-48 {
        font-size: 48px !important;
        font-size: 3rem !important;
        line-height: 1.04167 !important;
      }
    }
    @media print {
      .g-\!-font-size-48 {
        font-size: 32pt !important;
        line-height: 1.15 !important;
      }
    }
    .g-\!-font-size-36 {
      font-size: 24px !important;
      font-size: 1.5rem !important;
      line-height: 1.04167 !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-font-size-36 {
        font-size: 36px !important;
        font-size: 2.25rem !important;
        line-height: 1.11111 !important;
      }
    }
    @media print {
      .g-\!-font-size-36 {
        font-size: 24pt !important;
        line-height: 1.05 !important;
      }
    }
    .g-\!-font-size-27 {
      font-size: 18px !important;
      font-size: 1.125rem !important;
      line-height: 1.11111 !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-font-size-27 {
        font-size: 27px !important;
        font-size: 1.6875rem !important;
        line-height: 1.11111 !important;
      }
    }
    @media print {
      .g-\!-font-size-27 {
        font-size: 18pt !important;
        line-height: 1.15 !important;
      }
    }
    .g-\!-font-size-24 {
      font-size: 18px !important;
      font-size: 1.125rem !important;
      line-height: 1.11111 !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-font-size-24 {
        font-size: 24px !important;
        font-size: 1.5rem !important;
        line-height: 1.25 !important;
      }
    }
    @media print {
      .g-\!-font-size-24 {
        font-size: 18pt !important;
        line-height: 1.15 !important;
      }
    }
    .g-\!-font-size-19 {
      font-size: 16px !important;
      font-size: 1rem !important;
      line-height: 1.25 !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-font-size-19 {
        font-size: 19px !important;
        font-size: 1.1875rem !important;
        line-height: 1.31579 !important;
      }
    }
    @media print {
      .g-\!-font-size-19 {
        font-size: 14pt !important;
        line-height: 1.15 !important;
      }
    }
    .g-\!-font-size-16 {
      font-size: 14px !important;
      font-size: 0.875rem !important;
      line-height: 1.14286 !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-font-size-16 {
        font-size: 16px !important;
        font-size: 1rem !important;
        line-height: 1.25 !important;
      }
    }
    @media print {
      .g-\!-font-size-16 {
        font-size: 14pt !important;
        line-height: 1.2 !important;
      }
    }
    .g-\!-font-size-14 {
      font-size: 12px !important;
      font-size: 0.75rem !important;
      line-height: 1.25 !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-font-size-14 {
        font-size: 14px !important;
        font-size: 0.875rem !important;
        line-height: 1.42857 !important;
      }
    }
    @media print {
      .g-\!-font-size-14 {
        font-size: 12pt !important;
        line-height: 1.2 !important;
      }
    }
    .g-\!-font-weight-regular {
      font-weight: 400 !important;
    }
    .g-\!-font-weight-bold {
      font-weight: 700 !important;
    }
    .g-\!-width-full {
      width: 100% !important;
    }
    .g-\!-width-three-quarters {
      width: 100% !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-width-three-quarters {
        width: 75% !important;
      }
    }
    .g-\!-width-two-thirds {
      width: 100% !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-width-two-thirds {
        width: 66.66% !important;
      }
    }
    .g-\!-width-one-half {
      width: 100% !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-width-one-half {
        width: 50% !important;
      }
    }
    .g-\!-width-one-third {
      width: 100% !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-width-one-third {
        width: 33.33% !important;
      }
    }
    .g-\!-width-one-quarter {
      width: 100% !important;
    }
    @media (min-width: 40.0625em) {
      .g-\!-width-one-quarter {
        width: 25% !important;
      }
    }
    .app-no-canvas-background {
      background-color: #ffffff;
    }
    .app-iframe-in-component-preview {
      margin: 15px 0;
    }
    
    .app-iframe-in-component-preview:before {
      display: none;
    }
    .app-\!-di {
      display: inline;
    }
    .app-component-preview {
      position: relative;
      margin-top: -15px;
      margin-bottom: 15px;
      width: 100%;
    }
    .app-component-preview__iframe {
      z-index: 20;
      display: block;
      position: relative;
      border: none;
      width: 100%;
    }
    .app-iframe-in-component-preview .app-whitespace-highlight {
      content: ' ';
      display: table;
      clear: both;
      width: 100%;
      box-shadow: 0 0 0 5px #e4f2ff;
    }
    .app-iframe-in-component-preview .app-whitespace-highlight:after {
      content: '';
      display: block;
      clear: both;
    }
    .app-banner {
      padding-top: 30px;
      padding-bottom: 30px;
      overflow: hidden;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 24px;
      font-size: 1.5rem;
      line-height: 1.5;
      font-family: sans-serif;
    }
    @media print {
      .app-banner {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .app-banner {
        font-size: 36px;
        font-size: 2.25rem;
        line-height: 1.5;
      }
    }
    @media print {
      .app-banner {
        font-size: 24pt;
        line-height: 1.5;
      }
    }
    .app-banner .app-banner__button {
      margin-bottom: 0;
    }
    .app-banner .g-body {
      color: inherit;
      font-size: inherit;
    }
    .app-banner .g-link {
      color: #ffffff;
    }
    .app-banner .g-link:focus,
    .app-banner .g-link.\:focus {
      color: #0b0c0c;
    }
    .app-banner--warning {
      color: #ffffff;
      background: #b10e1e;
    }
    .app-banner--warning .app-banner__button,
    .app-banner--warning .app-banner__button:active,
    .app-banner--warning .app-banner__button:hover,
    .app-banner--warning .app-banner__button:focus,
    .app-banner--warning .app-banner__button.\:active,
    .app-banner--warning .app-banner__button.\:hover,
    .app-banner--warning .app-banner__button.\:focus {
      margin-bottom: 0;
      color: #0b0c0c;
      background: #ffffff;
      box-shadow: 0 2px 0 #0b0c0c;
    }
    .g-heading-xs {
      color: #2a2a2a;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: g-heading-font-weight;
      font-size: 1.125rem;
      line-height: 1.25;
      display: block;
      margin-top: 2.5rem;
      margin-bottom: 0.5rem;
    }
    @media print {
      .g-heading-xs {
        color: #000000;
      }
    }
    @media print {
      .g-heading-xs {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-heading-xs {
        font-size: 0.9375rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-heading-xs {
        font-size: 13pt;
        line-height: 1.15;
      }
    }
    @media (min-width: 40.0625em) {
      .g-heading-xs {
        margin-bottom: 0.5rem;
      }
    }
    .g-body-m + .g-heading-xs,
    .g-body + .g-heading-xs,
    .g-body-s + .g-heading-xs,
    .g-list + .g-heading-xs {
      padding-top: 5px;
    }
    @media (min-width: 40.0625em) {
      .g-body-m + .g-heading-xs,
      .g-body + .g-heading-xs,
      .g-body-s + .g-heading-xs,
      .g-list + .g-heading-xs {
        padding-top: 10px;
      }
    }
    .g-heading-xxs {
      color: #2a2a2a;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: g-heading-font-weight;
      font-size: 1rem;
      line-height: 1.25;
      display: block;
      margin-top: 2.5rem;
      margin-bottom: 15px;
    }
    @media print {
      .g-heading-xxs {
        color: #000000;
      }
    }
    @media print {
      .g-heading-xxs {
        font-family: sans-serif;
      }
    }
    @media (min-width: 40.0625em) {
      .g-heading-xxs {
        font-size: 0.875rem;
        line-height: 1.31579;
      }
    }
    @media print {
      .g-heading-xxs {
        font-size: 12pt;
        line-height: 1.15;
      }
    }
    @media (min-width: 40.0625em) {
      .g-heading-xxs {
        margin-bottom: 20px;
      }
    }
    .g-body-m + .g-heading-xxs,
    .g-body + .g-heading-xxs,
    .g-body-s + .g-heading-xxs,
    .g-list + .g-heading-xxs {
      padding-top: 5px;
    }
    @media (min-width: 40.0625em) {
      .g-body-m + .g-heading-xxs,
      .g-body + .g-heading-xxs,
      .g-body-s + .g-heading-xxs,
      .g-list + .g-heading-xxs {
        padding-top: 10px;
      }
    }
    .g-heading-mb-8 {
      margin-bottom: 8px;
    }
    .g-heading-mb-0 {
      margin-bottom: 0px;
    }
    .g-select::-ms-expand {
      display: none;
    }
    .g-hint > * {
      margin-top: 0px;
    }
    .g-list li .g-list {
      margin-top: 0.5rem;
    }
    `;

    const dom = await getBrowser(
      {
        template: {
          id: "test",
          html,
          css
        }
      },
      { type: "jsdom" }
    );

    const body = dom.bodyNodes;
    const matchedCSS = await getCSSMatches(body, {
      document: dom.bodyNodes[0].ownerDocument
    });
    const cssSubset = serializeCSSMatches(matchedCSS);
    expect(cssSubset).toContain("g-date-input__item");
  });
});

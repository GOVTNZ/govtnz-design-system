// @autogenerated


export default [
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport TextareaBlock from \"@govtnz/ds/build/mustache/TextareaBlock.mustache\";\n\n// The variables TextareaBlock are all strings that are mustache templates.\n\nexport default `${Mustache.render(TextareaBlock, {\n  id: `id`,\n  hint: `Don't include personal or financial information, eg your Insurance number or credit card details.`,\n  hintId: `myHint`\n})}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport TextareaBlock from \"@govtnz/ds/build/react-js/TextareaBlock\";\nimport \"@govtnz/ds/build/css/TextareaBlock.css\"; // or @govtnz/ds/build/scss/TextareaBlock.scss\n\nexport default () => (\n  <TextareaBlock\n    id=\"id\"\n    hint=\"Don't include personal or financial information, eg your Insurance number or credit card details.\"\n    hintId=\"myHint\"\n  />\n);\n",
    "react-ts": "import * as React from \"react\";\nimport * as TextareaBlock from \"@govtnz/ds/build/react-ts/TextareaBlock\";\nimport \"@govtnz/ds/build/css/TextareaBlock.css\"; // or @govtnz/ds/build/scss/TextareaBlock.scss\n\nexport default () => (\n  <TextareaBlock\n    id=\"id\"\n    hint=\"Don't include personal or financial information, eg your Insurance number or credit card details.\"\n    hintId=\"myHint\"\n  />\n);\n",
    "react-js-styled-components": "import React from \"react\";\nimport TextareaBlock from \"@govtnz/ds/build/react-js-styled-components/TextareaBlock\";\n\nexport default () => (\n  <TextareaBlock\n    id=\"id\"\n    hint=\"Don't include personal or financial information, eg your Insurance number or credit card details.\"\n    hintId=\"myHint\"\n  />\n);\n",
    "react-ts-styled-components": "import * as React from \"react\";\nimport * as TextareaBlock from \"@govtnz/ds/build/react-ts-styled-components/TextareaBlock\";\n\nexport default () => (\n  <TextareaBlock\n    id=\"id\"\n    hint=\"Don't include personal or financial information, eg your Insurance number or credit card details.\"\n    hintId=\"myHint\"\n  />\n);\n",
    "vue-js": "<template>\n  <textarea-block\n    id=\"id\"\n    hint=\"Don't include personal or financial information, eg your Insurance number or credit card details.\"\n    hintId=\"myHint\"\n  />\n</template>\n<script>\nimport Vue from \"vue\";\nimport TextareaBlock from \"@govtnz/ds/build/vue-js/TextareaBlock.vue\";\n\nexport default { components: { \"textarea-block\": TextareaBlock } };\n</script>\n",
    "vue-ts": "<template>\n  <textarea-block\n    id=\"id\"\n    hint=\"Don't include personal or financial information, eg your Insurance number or credit card details.\"\n    hintId=\"myHint\"\n  />\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport TextareaBlock from \"@govtnz/ds/build/vue-ts/TextareaBlock.vue\";\n\nexport default { components: { \"textarea-block\": TextareaBlock } };\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: TextareaBlock.css\nOR in Sass (SCSS): TextareaBlock.scss\n-->\n<div class=\"g-textareaBlock-form-group\">\n  <label class=\"g-textareaBlock-label\" for=\"id\"> </label>\n  <span class=\"g-textareaBlock-hint\" id=\"myHint\">\n    Don't include personal or financial information, eg your Insurance number or\n    credit card details.\n  </span>\n  <textarea class=\"g-textareaBlock-textarea\" id=\"id\" aria-describedby=\"myHint\">\n  </textarea>\n</div>\n",
    "css": "",
    "twig-embed": "{% embed \"TextareaBlock.html.twig\"  with {'id':'id', 'hint':'Don't include personal or financial information, eg your Insurance number or credit card details.', 'hintId':'myHint'} only %}{% endembed %}",
    "angular": ""
  }
]
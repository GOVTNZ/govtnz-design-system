// @autogenerated


export default [
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport InsetText from \"@govtnz/ds/build/mustache/InsetText.mustache\";\n\n// The variables InsetText are all strings that are mustache templates.\n\nexport default `${Mustache.render(InsetText, {})}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport InsetText from \"@govtnz/ds/build/react-js/InsetText\";\nimport \"@govtnz/ds/build/css/InsetText.css\"; // or @govtnz/ds/build/scss/InsetText.scss\n\nexport default () => <InsetText />;\n",
    "react-ts": "import React from \"react\";\nimport InsetText from \"@govtnz/ds/build/react-ts/InsetText\";\nimport \"@govtnz/ds/build/css/InsetText.css\"; // or @govtnz/ds/build/scss/InsetText.scss\n\nexport default () => <InsetText />;\n",
    "react-js-styled-components": "import React from \"react\";\nimport InsetText from \"@govtnz/ds/build/react-js-styled-components/InsetText\";\n\nexport default () => <InsetText />;\n",
    "react-ts-styled-components": "import React from \"react\";\nimport InsetText from \"@govtnz/ds/build/react-ts-styled-components/InsetText\";\n\nexport default () => <InsetText />;\n",
    "vue-js": "<template>\n  <inset-text />\n</template>\n<script>\nimport Vue from \"vue\";\nimport InsetText from \"@govtnz/ds/build/vue-js/InsetText.vue\";\n\nexport default { components: { \"inset-text\": InsetText } };\n</script>\n",
    "vue-ts": "<template>\n  <inset-text />\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport InsetText from \"@govtnz/ds/build/vue-ts/InsetText.vue\";\n\nexport default { components: { \"inset-text\": InsetText } };\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: InsetText.css\nOR in Sass (SCSS): InsetText.scss\n-->\n<div class=\"g-inset-text\">\n  It can take up to 8 weeks to register a lasting power of attorney if there are\n  no mistakes in the application.\n</div>\n",
    "css": "",
    "twig-embed": "{% embed \"InsetText.html.twig\" %}{% endembed %}",
    "angular": ""
  }
]
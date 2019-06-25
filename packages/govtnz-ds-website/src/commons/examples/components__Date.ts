// @autogenerated


export default [
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport DateInput from \"@govtnz/ds/build/mustache/DateInput.mustache\";\nimport H1 from \"@govtnz/ds/build/mustache/H1.mustache\";\n\n// The variables DateInput, H1 are all strings that are mustache templates.\n\nexport default `${Mustache.render(DateInput, {\n  id: `passport-issued`,\n  hintId: `passport-issued-hint`,\n  dayId: `passport-issued-day`,\n  monthId: `passport-issued-month`,\n  yearId: `passport-issued-year`,\n  label: `${Mustache.render(H1, {\n    \"styleSize=large\": true,\n    styleSize: true,\n    marginBottom0: ``,\n    children: `When was your passport issued?`\n  })}`,\n  hint: `For example, 12 11 2007`\n})}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport DateInput from \"@govtnz/ds/build/react-js/DateInput\";\nimport \"@govtnz/ds/build/css/DateInput.css\"; // or @govtnz/ds/build/scss/DateInput.scss\nimport H1 from \"@govtnz/ds/build/react-js/H1\";\nimport \"@govtnz/ds/build/css/H1.css\"; // or @govtnz/ds/build/scss/H1.scss\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label={\n      <H1 styleSize=\"large\" marginBottom0>\n        When was your passport issued?\n      </H1>\n    }\n    hint=\"For example, 12 11 2007\"\n  />\n);\n",
    "react-ts": "import * as React from \"react\";\nimport * as DateInput from \"@govtnz/ds/build/react-ts/DateInput\";\nimport \"@govtnz/ds/build/css/DateInput.css\"; // or @govtnz/ds/build/scss/DateInput.scss\nimport * as H1 from \"@govtnz/ds/build/react-ts/H1\";\nimport \"@govtnz/ds/build/css/H1.css\"; // or @govtnz/ds/build/scss/H1.scss\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label={\n      <H1 styleSize=\"large\" marginBottom0>\n        When was your passport issued?\n      </H1>\n    }\n    hint=\"For example, 12 11 2007\"\n  />\n);\n",
    "react-js-styled-components": "import React from \"react\";\nimport DateInput from \"@govtnz/ds/build/react-js-styled-components/DateInput\";\nimport H1 from \"@govtnz/ds/build/react-js-styled-components/H1\";\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label={\n      <H1 styleSize=\"large\" marginBottom0>\n        When was your passport issued?\n      </H1>\n    }\n    hint=\"For example, 12 11 2007\"\n  />\n);\n",
    "react-ts-styled-components": "import * as React from \"react\";\nimport * as DateInput from \"@govtnz/ds/build/react-ts-styled-components/DateInput\";\nimport * as H1 from \"@govtnz/ds/build/react-ts-styled-components/H1\";\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label={\n      <H1 styleSize=\"large\" marginBottom0>\n        When was your passport issued?\n      </H1>\n    }\n    hint=\"For example, 12 11 2007\"\n  />\n);\n",
    "vue-js": "<template>\n  <date-input\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n  />\n</template>\n<script>\nimport Vue from \"vue\";\nimport DateInput from \"@govtnz/ds/build/vue-js/DateInput.vue\";\nimport H1 from \"@govtnz/ds/build/vue-js/H1.vue\";\n\nexport default { components: { \"date-input\": DateInput, \"c-h1\": H1 } };\n</script>\n",
    "vue-ts": "<template>\n  <date-input\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n  />\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport DateInput from \"@govtnz/ds/build/vue-ts/DateInput.vue\";\nimport H1 from \"@govtnz/ds/build/vue-ts/H1.vue\";\n\nexport default { components: { \"date-input\": DateInput, \"c-h1\": H1 } };\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: DateInput.css, H1.css\nOR in Sass (SCSS): DateInput.scss, H1.scss\n-->\n<div class=\"g-dateInput-form-group\">\n  <fieldset\n    class=\"g-dateInput-fieldset\"\n    aria-describedby=\"passport-issued-hint\"\n    role=\"group\"\n  >\n    <legend\n      class=\"g-dateInput-fieldset__legend g-dateInput-fieldset__legend--xl\"\n    >\n      <h1 class=\"g-heading-l g-heading-mb-0\">When was your passport issued?</h1>\n    </legend>\n    <span id=\"passport-issued-hint\" class=\"g-dateInput-hint\">\n      For example, 12 11 2007\n    </span>\n    <div id=\"passport-issued\" class=\"g-dateInput-date-input\">\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label g-dateInput-date-input__label\"\n            for=\"passport-issued-day\"\n          >\n            Day\n          </label>\n          <input\n            id=\"passport-issued-day\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2\"\n            type=\"text\"\n            maxlength=\"2\"\n            pattern=\"[0-9]*\"\n          />\n        </div>\n      </div>\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label g-dateInput-date-input__label\"\n            for=\"passport-issued-month\"\n          >\n            Month\n          </label>\n          <input\n            id=\"passport-issued-month\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2\"\n            type=\"text\"\n            maxlength=\"2\"\n            pattern=\"[0-9]*\"\n          />\n        </div>\n      </div>\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label govuk-date-input__label\"\n            for=\"passport-issued-year\"\n          >\n            Year\n          </label>\n          <input\n            id=\"passport-issued-year\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-4\"\n            type=\"text\"\n            maxlength=\"4\"\n            pattern=\"[0-9]*\"\n          />\n        </div>\n      </div>\n    </div>\n  </fieldset>\n</div>\n",
    "css": "",
    "twig-embed": "{% embed \"DateInput.html.twig\"  with {'id':'passport-issued', 'hintId':'passport-issued-hint', 'dayId':'passport-issued-day', 'monthId':'passport-issued-month', 'yearId':'passport-issued-year', 'hint':'For example, 12 11 2007'} only %}{% block label %}{% embed \"H1.html.twig\"  with {'styleSize':'large', 'marginBottom0':'true', 'children':'When was your passport issued?'} only %}{% endembed %}{% endblock %}{% endembed %}"
  },
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport DateInput from \"@govtnz/ds/build/mustache/DateInput.mustache\";\nimport H1 from \"@govtnz/ds/build/mustache/H1.mustache\";\n\n// The variables DateInput, H1 are all strings that are mustache templates.\n\nexport default `${Mustache.render(DateInput, {\n  id: `passport-issued`,\n  hintId: `passport-issued-hint`,\n  errorId: `passport-issued-error`,\n  dayId: `passport-issued-day`,\n  monthId: `passport-issued-month`,\n  yearId: `passport-issued-year`,\n  label: `${Mustache.render(H1, {\n    \"styleSize=large\": true,\n    styleSize: true,\n    marginBottom0: ``,\n    children: `When was your passport issued?`\n  })}`,\n  hint: `For example, 12 11 2007`,\n  value: `6`,\n  value2: `3`,\n  value3: `2076`,\n  error: true\n})}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport DateInput from \"@govtnz/ds/build/react-js/DateInput\";\nimport \"@govtnz/ds/build/css/DateInput.css\"; // or @govtnz/ds/build/scss/DateInput.scss\nimport H1 from \"@govtnz/ds/build/react-js/H1\";\nimport \"@govtnz/ds/build/css/H1.css\"; // or @govtnz/ds/build/scss/H1.scss\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label={\n      <H1 styleSize=\"large\" marginBottom0>\n        When was your passport issued?\n      </H1>\n    }\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    error=\"The date your passport was issued must be in the past\"\n  />\n);\n",
    "react-ts": "import * as React from \"react\";\nimport * as DateInput from \"@govtnz/ds/build/react-ts/DateInput\";\nimport \"@govtnz/ds/build/css/DateInput.css\"; // or @govtnz/ds/build/scss/DateInput.scss\nimport * as H1 from \"@govtnz/ds/build/react-ts/H1\";\nimport \"@govtnz/ds/build/css/H1.css\"; // or @govtnz/ds/build/scss/H1.scss\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label={\n      <H1 styleSize=\"large\" marginBottom0>\n        When was your passport issued?\n      </H1>\n    }\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    error=\"The date your passport was issued must be in the past\"\n  />\n);\n",
    "react-js-styled-components": "import React from \"react\";\nimport DateInput from \"@govtnz/ds/build/react-js-styled-components/DateInput\";\nimport H1 from \"@govtnz/ds/build/react-js-styled-components/H1\";\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label={\n      <H1 styleSize=\"large\" marginBottom0>\n        When was your passport issued?\n      </H1>\n    }\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    error=\"The date your passport was issued must be in the past\"\n  />\n);\n",
    "react-ts-styled-components": "import * as React from \"react\";\nimport * as DateInput from \"@govtnz/ds/build/react-ts-styled-components/DateInput\";\nimport * as H1 from \"@govtnz/ds/build/react-ts-styled-components/H1\";\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label={\n      <H1 styleSize=\"large\" marginBottom0>\n        When was your passport issued?\n      </H1>\n    }\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    error=\"The date your passport was issued must be in the past\"\n  />\n);\n",
    "vue-js": "<template>\n  <date-input\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    error=\"The date your passport was issued must be in the past\"\n  />\n</template>\n<script>\nimport Vue from \"vue\";\nimport DateInput from \"@govtnz/ds/build/vue-js/DateInput.vue\";\nimport H1 from \"@govtnz/ds/build/vue-js/H1.vue\";\n\nexport default { components: { \"date-input\": DateInput, \"c-h1\": H1 } };\n</script>\n",
    "vue-ts": "<template>\n  <date-input\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    error=\"The date your passport was issued must be in the past\"\n  />\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport DateInput from \"@govtnz/ds/build/vue-ts/DateInput.vue\";\nimport H1 from \"@govtnz/ds/build/vue-ts/H1.vue\";\n\nexport default { components: { \"date-input\": DateInput, \"c-h1\": H1 } };\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: DateInput.css, H1.css\nOR in Sass (SCSS): DateInput.scss, H1.scss\n-->\n<div class=\"g-dateInput-form-group\">\n  <fieldset\n    class=\"g-dateInput-fieldset\"\n    aria-describedby=\"passport-issued-hint passport-issued-error\"\n    role=\"group\"\n  >\n    <legend\n      class=\"g-dateInput-fieldset__legend g-dateInput-fieldset__legend--xl\"\n    >\n      <h1 class=\"g-heading-l g-heading-mb-0\">When was your passport issued?</h1>\n    </legend>\n    <span id=\"passport-issued-hint\" class=\"g-dateInput-hint\">\n      For example, 12 11 2007\n    </span>\n    <div id=\"passport-issued\" class=\"g-dateInput-date-input\">\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label g-dateInput-date-input__label\"\n            for=\"passport-issued-day\"\n          >\n            Day\n          </label>\n          <input\n            id=\"passport-issued-day\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2\"\n            type=\"text\"\n            maxlength=\"2\"\n            pattern=\"[0-9]*\"\n            value=\"6\"\n          />\n        </div>\n      </div>\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label g-dateInput-date-input__label\"\n            for=\"passport-issued-month\"\n          >\n            Month\n          </label>\n          <input\n            id=\"passport-issued-month\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2\"\n            type=\"text\"\n            maxlength=\"2\"\n            pattern=\"[0-9]*\"\n            value=\"3\"\n          />\n        </div>\n      </div>\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label govuk-date-input__label\"\n            for=\"passport-issued-year\"\n          >\n            Year\n          </label>\n          <input\n            id=\"passport-issued-year\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-4\"\n            type=\"text\"\n            maxlength=\"4\"\n            pattern=\"[0-9]*\"\n            value=\"2076\"\n          />\n        </div>\n      </div>\n    </div>\n  </fieldset>\n</div>\n",
    "css": "",
    "twig-embed": "{% embed \"DateInput.html.twig\"  with {'id':'passport-issued', 'hintId':'passport-issued-hint', 'errorId':'passport-issued-error', 'dayId':'passport-issued-day', 'monthId':'passport-issued-month', 'yearId':'passport-issued-year', 'hint':'For example, 12 11 2007', 'value':'6', 'value2':'3', 'value3':'2076', 'error':'The date your passport was issued must be in the past'} only %}{% block label %}{% embed \"H1.html.twig\"  with {'styleSize':'large', 'marginBottom0':'true', 'children':'When was your passport issued?'} only %}{% endembed %}{% endblock %}{% endembed %}"
  },
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport DateInput from \"@govtnz/ds/build/mustache/DateInput.mustache\";\nimport H1 from \"@govtnz/ds/build/mustache/H1.mustache\";\n\n// The variables DateInput, H1 are all strings that are mustache templates.\n\nexport default `${Mustache.render(DateInput, {\n  id: `bday`,\n  hintId: `bday-hint`,\n  dayId: `bday-day`,\n  monthId: `bday-month`,\n  yearId: `bday-year`,\n  label: `${Mustache.render(H1, {\n    \"styleSize=large\": true,\n    styleSize: true,\n    marginBottom0: ``,\n    children: `What is your date of birth?`\n  })}`,\n  hint: `For example, 31 3 1980`,\n  autoComplete: `Birthday: Day`,\n  autoComplete2: `Birthday: Month`,\n  autoComplete3: `Birthday: Year`\n})}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport DateInput from \"@govtnz/ds/build/react-js/DateInput\";\nimport \"@govtnz/ds/build/css/DateInput.css\"; // or @govtnz/ds/build/scss/DateInput.scss\nimport H1 from \"@govtnz/ds/build/react-js/H1\";\nimport \"@govtnz/ds/build/css/H1.css\"; // or @govtnz/ds/build/scss/H1.scss\n\nexport default () => (\n  <DateInput\n    id=\"bday\"\n    hintId=\"bday-hint\"\n    dayId=\"bday-day\"\n    monthId=\"bday-month\"\n    yearId=\"bday-year\"\n    label={\n      <H1 styleSize=\"large\" marginBottom0>\n        What is your date of birth?\n      </H1>\n    }\n    hint=\"For example, 31 3 1980\"\n    autoComplete=\"Birthday: Day\"\n    autoComplete2=\"Birthday: Month\"\n    autoComplete3=\"Birthday: Year\"\n  />\n);\n",
    "react-ts": "import * as React from \"react\";\nimport * as DateInput from \"@govtnz/ds/build/react-ts/DateInput\";\nimport \"@govtnz/ds/build/css/DateInput.css\"; // or @govtnz/ds/build/scss/DateInput.scss\nimport * as H1 from \"@govtnz/ds/build/react-ts/H1\";\nimport \"@govtnz/ds/build/css/H1.css\"; // or @govtnz/ds/build/scss/H1.scss\n\nexport default () => (\n  <DateInput\n    id=\"bday\"\n    hintId=\"bday-hint\"\n    dayId=\"bday-day\"\n    monthId=\"bday-month\"\n    yearId=\"bday-year\"\n    label={\n      <H1 styleSize=\"large\" marginBottom0>\n        What is your date of birth?\n      </H1>\n    }\n    hint=\"For example, 31 3 1980\"\n    autoComplete=\"Birthday: Day\"\n    autoComplete2=\"Birthday: Month\"\n    autoComplete3=\"Birthday: Year\"\n  />\n);\n",
    "react-js-styled-components": "import React from \"react\";\nimport DateInput from \"@govtnz/ds/build/react-js-styled-components/DateInput\";\nimport H1 from \"@govtnz/ds/build/react-js-styled-components/H1\";\n\nexport default () => (\n  <DateInput\n    id=\"bday\"\n    hintId=\"bday-hint\"\n    dayId=\"bday-day\"\n    monthId=\"bday-month\"\n    yearId=\"bday-year\"\n    label={\n      <H1 styleSize=\"large\" marginBottom0>\n        What is your date of birth?\n      </H1>\n    }\n    hint=\"For example, 31 3 1980\"\n    autoComplete=\"Birthday: Day\"\n    autoComplete2=\"Birthday: Month\"\n    autoComplete3=\"Birthday: Year\"\n  />\n);\n",
    "react-ts-styled-components": "import * as React from \"react\";\nimport * as DateInput from \"@govtnz/ds/build/react-ts-styled-components/DateInput\";\nimport * as H1 from \"@govtnz/ds/build/react-ts-styled-components/H1\";\n\nexport default () => (\n  <DateInput\n    id=\"bday\"\n    hintId=\"bday-hint\"\n    dayId=\"bday-day\"\n    monthId=\"bday-month\"\n    yearId=\"bday-year\"\n    label={\n      <H1 styleSize=\"large\" marginBottom0>\n        What is your date of birth?\n      </H1>\n    }\n    hint=\"For example, 31 3 1980\"\n    autoComplete=\"Birthday: Day\"\n    autoComplete2=\"Birthday: Month\"\n    autoComplete3=\"Birthday: Year\"\n  />\n);\n",
    "vue-js": "<template>\n  <date-input\n    id=\"bday\"\n    hintId=\"bday-hint\"\n    dayId=\"bday-day\"\n    monthId=\"bday-month\"\n    yearId=\"bday-year\"\n    label=\"What is your date of birth?\"\n    hint=\"For example, 31 3 1980\"\n    autoComplete=\"Birthday: Day\"\n    autoComplete2=\"Birthday: Month\"\n    autoComplete3=\"Birthday: Year\"\n  />\n</template>\n<script>\nimport Vue from \"vue\";\nimport DateInput from \"@govtnz/ds/build/vue-js/DateInput.vue\";\nimport H1 from \"@govtnz/ds/build/vue-js/H1.vue\";\n\nexport default { components: { \"date-input\": DateInput, \"c-h1\": H1 } };\n</script>\n",
    "vue-ts": "<template>\n  <date-input\n    id=\"bday\"\n    hintId=\"bday-hint\"\n    dayId=\"bday-day\"\n    monthId=\"bday-month\"\n    yearId=\"bday-year\"\n    label=\"What is your date of birth?\"\n    hint=\"For example, 31 3 1980\"\n    autoComplete=\"Birthday: Day\"\n    autoComplete2=\"Birthday: Month\"\n    autoComplete3=\"Birthday: Year\"\n  />\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport DateInput from \"@govtnz/ds/build/vue-ts/DateInput.vue\";\nimport H1 from \"@govtnz/ds/build/vue-ts/H1.vue\";\n\nexport default { components: { \"date-input\": DateInput, \"c-h1\": H1 } };\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: DateInput.css, H1.css\nOR in Sass (SCSS): DateInput.scss, H1.scss\n-->\n<div class=\"g-dateInput-form-group\">\n  <fieldset\n    class=\"g-dateInput-fieldset\"\n    aria-describedby=\"bday-hint\"\n    role=\"group\"\n  >\n    <legend\n      class=\"g-dateInput-fieldset__legend g-dateInput-fieldset__legend--xl\"\n    >\n      <h1 class=\"g-heading-l g-heading-mb-0\">What is your date of birth?</h1>\n    </legend>\n    <span id=\"bday-hint\" class=\"g-dateInput-hint\">\n      For example, 31 3 1980\n    </span>\n    <div id=\"bday\" class=\"g-dateInput-date-input\">\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label g-dateInput-date-input__label\"\n            for=\"bday-day\"\n          >\n            Day\n          </label>\n          <input\n            id=\"bday-day\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2\"\n            type=\"text\"\n            maxlength=\"2\"\n            pattern=\"[0-9]*\"\n            autocomplete=\"bday-day\"\n          />\n        </div>\n      </div>\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label g-dateInput-date-input__label\"\n            for=\"bday-month\"\n          >\n            Month\n          </label>\n          <input\n            id=\"bday-month\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2\"\n            type=\"text\"\n            maxlength=\"2\"\n            pattern=\"[0-9]*\"\n            autocomplete=\"bday-month\"\n          />\n        </div>\n      </div>\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label govuk-date-input__label\"\n            for=\"bday-year\"\n          >\n            Year\n          </label>\n          <input\n            id=\"bday-year\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-4\"\n            type=\"text\"\n            maxlength=\"4\"\n            pattern=\"[0-9]*\"\n            autocomplete=\"bday-year\"\n          />\n        </div>\n      </div>\n    </div>\n  </fieldset>\n</div>\n",
    "css": "",
    "twig-embed": "{% embed \"DateInput.html.twig\"  with {'id':'bday', 'hintId':'bday-hint', 'dayId':'bday-day', 'monthId':'bday-month', 'yearId':'bday-year', 'hint':'For example, 31 3 1980', 'autoComplete':'Birthday: Day', 'autoComplete2':'Birthday: Month', 'autoComplete3':'Birthday: Year'} only %}{% block label %}{% embed \"H1.html.twig\"  with {'styleSize':'large', 'marginBottom0':'true', 'children':'What is your date of birth?'} only %}{% endembed %}{% endblock %}{% endembed %}"
  },
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport DateInput from \"@govtnz/ds/build/mustache/DateInput.mustache\";\nimport H1 from \"@govtnz/ds/build/mustache/H1.mustache\";\n\n// The variables DateInput, H1 are all strings that are mustache templates.\n\nexport default `${Mustache.render(DateInput, {\n  id: `passport-issued`,\n  hintId: `passport-issued-hint`,\n  errorId: `passport-issued-error`,\n  dayId: `passport-issued-day`,\n  monthId: `passport-issued-month`,\n  yearId: `passport-issued-year`,\n  label: `${Mustache.render(H1, {\n    \"styleSize=large\": true,\n    styleSize: true,\n    marginBottom0: ``,\n    children: `When was your passport issued?`\n  })}`,\n  hint: `For example, 12 11 2007`,\n  value: `6`,\n  value2: `3`,\n  value3: `2076`,\n  error: true\n})}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport DateInput from \"@govtnz/ds/build/react-js/DateInput\";\nimport \"@govtnz/ds/build/css/DateInput.css\"; // or @govtnz/ds/build/scss/DateInput.scss\nimport H1 from \"@govtnz/ds/build/react-js/H1\";\nimport \"@govtnz/ds/build/css/H1.css\"; // or @govtnz/ds/build/scss/H1.scss\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label={\n      <H1 styleSize=\"large\" marginBottom0>\n        When was your passport issued?\n      </H1>\n    }\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    error=\"The date your passport was issued must be in the past\"\n  />\n);\n",
    "react-ts": "import * as React from \"react\";\nimport * as DateInput from \"@govtnz/ds/build/react-ts/DateInput\";\nimport \"@govtnz/ds/build/css/DateInput.css\"; // or @govtnz/ds/build/scss/DateInput.scss\nimport * as H1 from \"@govtnz/ds/build/react-ts/H1\";\nimport \"@govtnz/ds/build/css/H1.css\"; // or @govtnz/ds/build/scss/H1.scss\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label={\n      <H1 styleSize=\"large\" marginBottom0>\n        When was your passport issued?\n      </H1>\n    }\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    error=\"The date your passport was issued must be in the past\"\n  />\n);\n",
    "react-js-styled-components": "import React from \"react\";\nimport DateInput from \"@govtnz/ds/build/react-js-styled-components/DateInput\";\nimport H1 from \"@govtnz/ds/build/react-js-styled-components/H1\";\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label={\n      <H1 styleSize=\"large\" marginBottom0>\n        When was your passport issued?\n      </H1>\n    }\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    error=\"The date your passport was issued must be in the past\"\n  />\n);\n",
    "react-ts-styled-components": "import * as React from \"react\";\nimport * as DateInput from \"@govtnz/ds/build/react-ts-styled-components/DateInput\";\nimport * as H1 from \"@govtnz/ds/build/react-ts-styled-components/H1\";\n\nexport default () => (\n  <DateInput\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label={\n      <H1 styleSize=\"large\" marginBottom0>\n        When was your passport issued?\n      </H1>\n    }\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    error=\"The date your passport was issued must be in the past\"\n  />\n);\n",
    "vue-js": "<template>\n  <date-input\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    error=\"The date your passport was issued must be in the past\"\n  />\n</template>\n<script>\nimport Vue from \"vue\";\nimport DateInput from \"@govtnz/ds/build/vue-js/DateInput.vue\";\nimport H1 from \"@govtnz/ds/build/vue-js/H1.vue\";\n\nexport default { components: { \"date-input\": DateInput, \"c-h1\": H1 } };\n</script>\n",
    "vue-ts": "<template>\n  <date-input\n    id=\"passport-issued\"\n    hintId=\"passport-issued-hint\"\n    errorId=\"passport-issued-error\"\n    dayId=\"passport-issued-day\"\n    monthId=\"passport-issued-month\"\n    yearId=\"passport-issued-year\"\n    label=\"When was your passport issued?\"\n    hint=\"For example, 12 11 2007\"\n    value=\"6\"\n    value2=\"3\"\n    value3=\"2076\"\n    error=\"The date your passport was issued must be in the past\"\n  />\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport DateInput from \"@govtnz/ds/build/vue-ts/DateInput.vue\";\nimport H1 from \"@govtnz/ds/build/vue-ts/H1.vue\";\n\nexport default { components: { \"date-input\": DateInput, \"c-h1\": H1 } };\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: DateInput.css, H1.css\nOR in Sass (SCSS): DateInput.scss, H1.scss\n-->\n<div class=\"g-dateInput-form-group\">\n  <fieldset\n    class=\"g-dateInput-fieldset\"\n    aria-describedby=\"passport-issued-hint passport-issued-error\"\n    role=\"group\"\n  >\n    <legend\n      class=\"g-dateInput-fieldset__legend g-dateInput-fieldset__legend--xl\"\n    >\n      <h1 class=\"g-heading-l g-heading-mb-0\">When was your passport issued?</h1>\n    </legend>\n    <span id=\"passport-issued-hint\" class=\"g-dateInput-hint\">\n      For example, 12 11 2007\n    </span>\n    <div id=\"passport-issued\" class=\"g-dateInput-date-input\">\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label g-dateInput-date-input__label\"\n            for=\"passport-issued-day\"\n          >\n            Day\n          </label>\n          <input\n            id=\"passport-issued-day\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2\"\n            type=\"text\"\n            maxlength=\"2\"\n            pattern=\"[0-9]*\"\n            value=\"6\"\n          />\n        </div>\n      </div>\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label g-dateInput-date-input__label\"\n            for=\"passport-issued-month\"\n          >\n            Month\n          </label>\n          <input\n            id=\"passport-issued-month\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-2\"\n            type=\"text\"\n            maxlength=\"2\"\n            pattern=\"[0-9]*\"\n            value=\"3\"\n          />\n        </div>\n      </div>\n      <div class=\"g-dateInput-date-input__item\">\n        <div class=\"g-dateInput-form-group\">\n          <label\n            class=\"g-dateInput-label govuk-date-input__label\"\n            for=\"passport-issued-year\"\n          >\n            Year\n          </label>\n          <input\n            id=\"passport-issued-year\"\n            class=\"g-dateInput-input g-dateInput-date-input__input g-dateInput-input--width-4\"\n            type=\"text\"\n            maxlength=\"4\"\n            pattern=\"[0-9]*\"\n            value=\"2076\"\n          />\n        </div>\n      </div>\n    </div>\n  </fieldset>\n</div>\n",
    "css": "",
    "twig-embed": "{% embed \"DateInput.html.twig\"  with {'id':'passport-issued', 'hintId':'passport-issued-hint', 'errorId':'passport-issued-error', 'dayId':'passport-issued-day', 'monthId':'passport-issued-month', 'yearId':'passport-issued-year', 'hint':'For example, 12 11 2007', 'value':'6', 'value2':'3', 'value3':'2076', 'error':'The date your passport was issued must be in the past'} only %}{% block label %}{% embed \"H1.html.twig\"  with {'styleSize':'large', 'marginBottom0':'true', 'children':'When was your passport issued?'} only %}{% endembed %}{% endblock %}{% endembed %}"
  }
]
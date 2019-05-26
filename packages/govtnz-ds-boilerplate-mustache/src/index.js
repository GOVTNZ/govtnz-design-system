const prettier = require("prettier");

const fs = require("fs");
require.extensions[".mustache"] = function(module, filename) {
  module.exports = fs.readFileSync(filename, "utf8");
};

// Developer note: ensure your ".mustache" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader
const Mustache = require("mustache");

const TemplateFieldsetBlockWithError = require("@govtnz/ds/build/mustache/FieldsetBlockWithError.mustache");
const TemplateH1 = require("@govtnz/ds/build/mustache/H1.mustache");
const TemplateRadios = require("@govtnz/ds/build/mustache/Radios.mustache");
const TemplateRadioBlock = require("@govtnz/ds/build/mustache/RadioBlock.mustache");

const rawHTML = `${Mustache.render(TemplateFieldsetBlockWithError, {
  legend: `${Mustache.render(TemplateH1, {
    "styleSize=large": true,
    styleSize: true,
    id: `nameChangeId5`,
    children: `Have you changed your name?`
  })}`,
  hint: `<p >This includes changing your last name or spelling your name differently.</p>`,
  hintId: `hintId5`,
  errorId: `errorId5`,
  error: `Select 'yes' if you have changed your name.`,
  children: `${Mustache.render(TemplateRadios, {
    inline: true,
    children: `${Mustache.render(TemplateRadioBlock, {
      label: `Yes`,
      radioId: `anyRadioId9234`,
      value: `true`,
      name: `nameChange5`,
      labelId: `labelId9`,
      hintId: `hintId5`
    })}${Mustache.render(TemplateRadioBlock, {
      label: `No`,
      radioId: `anyRadioId10`,
      value: `false`,
      name: `nameChange5`,
      hintId: `hintId5`,
      labelId: `labelId10`
    })}`
  })}`
})}`;

const html = prettier.format(rawHTML, { parser: "html" });

console.log(html);

module.exports = html;

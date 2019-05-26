const fs = require("fs");
const prettier = require("prettier");
const Mustache = require("mustache");

function getImportPath(importPath) {
  return (
    require.resolve
      .paths(importPath)
      .filter(nodeModule => fs.existsSync(nodeModule + "/" + importPath))[0] +
    "/" +
    importPath
  );
}

const TemplateFieldsetBlockWithError = fs.readFileSync(
  getImportPath("@govtnz/ds/build/mustache/FieldsetBlockWithError.mustache"),
  { encoding: "utf-8" }
);
const TemplateH1 = fs.readFileSync(
  getImportPath("@govtnz/ds/build/mustache/H1.mustache"),
  {
    encoding: "utf-8"
  }
);
const TemplateRadios = fs.readFileSync(
  getImportPath("@govtnz/ds/build/mustache/Radios.mustache"),
  { encoding: "utf-8" }
);
const TemplateRadioBlock = fs.readFileSync(
  getImportPath("@govtnz/ds/build/mustache/RadioBlock.mustache"),
  { encoding: "utf-8" }
);

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

describe("HTML Snapshot", () => {
  it("Simple global rules", async () => {
    expect(html).toMatchSnapshot();
  });

  it("Rendered templates", async () => {
    expect(TemplateFieldsetBlockWithError).toMatchSnapshot();
    expect(TemplateH1).toMatchSnapshot();
    expect(TemplateRadios).toMatchSnapshot();
    expect(TemplateRadioBlock).toMatchSnapshot();
  });
});

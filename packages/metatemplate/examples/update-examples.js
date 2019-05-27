const fs = require("fs");
const path = require("path");
const glob = require("glob-promise");
const rmfr = require("rmfr");
const { makeTemplates } = require("../dist/index");

async function main() {
  const inputs = await getInputs();
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const result = await makeTemplates(input, ["*"]);
    const inputPaths = await glob(path.join(__dirname, input.id, "*/")); // trailing slash to only get directories
    await Promise.all(inputPaths.map(inputPath => rmfr(inputPath)));
    await Promise.all(
      result.metaTemplates.map(async mT => {
        const fileKeys = Object.keys(mT.files);
        await Promise.all(
          fileKeys.map(async fileKey => {
            const dirname = path.join(
              __dirname,
              input.id,
              path.dirname(fileKey)
            );
            try {
              await fs.promises.mkdir(dirname);
            } catch (e) {
              if (!e || e.code !== "EEXIST") {
                console.log(e);
              }
            }
            const targetPath = path.join(dirname, path.basename(fileKey));
            const data = mT.files[fileKey];
            if (!data || data.length === 0) {
              console.error(
                `ERROR: MetaTemplate: internal error generating data for "${
                  input.id
                }". ${targetPath} was empty!`
              );
            } else {
              await fs.promises.writeFile(targetPath, data, {
                encoding: "utf-8"
              });
            }
          })
        );
      })
    );
  }
  console.log("Updated.");
}

async function getInputs() {
  const inputPaths = await glob(path.join(__dirname, "*/input.*"));
  const inputData = await Promise.all(
    inputPaths.map(inputPath =>
      fs.promises.readFile(inputPath, { encoding: "utf-8" })
    )
  );
  const inputsObj = {};
  for (let i = 0; i < inputPaths.length; i++) {
    const part = inputPaths[i].substring(__dirname.length + 1);
    const id = path.dirname(part);
    const extname = path.extname(part).replace(/^\.?/, "");
    if (!inputsObj[id]) {
      inputsObj[id] = { id };
    }
    inputsObj[id][extname] = inputData[i];
  }
  const inputs = Object.values(inputsObj);
  inputs.forEach(anInput => {
    if (!anInput.html) throw Error("Unable to load HTML");
    if (!anInput.css) throw Error("Unable to load CSS");
  });
  return inputs;
}

main();

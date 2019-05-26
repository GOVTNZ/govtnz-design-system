import path from "path";
import fs from "fs";
import glob from "glob";

const releasePath = path.resolve(__dirname, "../release");
const stablePath = path.resolve(__dirname, "../stable");

const testSnapshots = (category: Category, formatId: string) => {
  const root = category === "release" ? releasePath : stablePath;
  describe(`${category}/${formatId} snapshots`, () => {
    const files = glob.sync(path.join(root, formatId, "*"));
    files.forEach(aFile => {
      it(`${category}/${formatId}/${path.basename(aFile)}`, async () => {
        if (fs.lstatSync(aFile).isDirectory()) {
          return;
        }
        const data = await fs.promises.readFile(aFile, {
          encoding: "utf-8"
        });
        expect(data).toMatchSnapshot();
      });
    });
  });
};

const releaseFormatPaths = glob.sync(path.join(releasePath, "*"));
const releaseFormats = releaseFormatPaths.map(aPath => path.basename(aPath));
releaseFormats.forEach(releaseFormat =>
  testSnapshots("release", releaseFormat)
);

const stableFormatPaths = glob.sync(path.join(releasePath, "*"));
const stableFormats = releaseFormatPaths.map(aPath => path.basename(aPath));
stableFormats.forEach(stableFormat => testSnapshots("stable", stableFormat));

type Category = "release" | "stable";

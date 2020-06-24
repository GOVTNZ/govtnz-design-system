import { testFormat } from "../test-utils";
// import { makeTemplates, Response } from "../../index";

describe("react ts styled components", () => {
  testFormat("react-ts-styled-components");
});

// describe("react ts styled components: basic <input>", () => {
//   it("makeIndexImports", async () => {
//     const response = await makeTemplates({
//       id: "inputblock1",
//       html: "<input>",
//       css: undefined
//     });
//     const data = find(response, "react-ts-styled-components/inputblock1.tsx");
//     expect(data).toMatchSnapshot();
//   });
// });

// describe("react ts styled components: basic <input> with single aria-describedby", () => {
//   it("makeIndexImports", async () => {
//     const response = await makeTemplates({
//       id: "inputblock1",
//       html: `<input aria-describedby="myId">`,
//       css: undefined
//     });
//     const data = find(response, "react-ts-styled-components/inputblock1.tsx");

//     // Single attributes should,
//     // 1) Not be in a template string or default to an empty string,
//     // 2) default to undefined, so that the attribute is not rendered by React
//     expect(data).toMatch("aria-describedby={myId}");
//   });
// });

// describe("react ts styled components: basic <input> with double aria-describedby", () => {
//   it("makeIndexImports", async () => {
//     const response = await makeTemplates({
//       id: "inputblock1",
//       html: `<input aria-describedby="myId myOtherId">`,
//       css: undefined
//     });
//     const data = find(response, "react-ts-styled-components/inputblock1.tsx");

//     // Single attributes should,
//     // 1) Be able to default to undefined if all dynamicKeys aren't provided
//     // 2) Put any dynamicKey values in a template string with appropriate spacing
//     // between values.
//     //
//     expect(data).toMatch(`aria-describedby={
//       myId !== undefined || myOtherId !== undefined
//         ? \`\${myId ? myId : \"\"}\${myOtherId ? \" \" + myOtherId : \"\"}\`
//         : undefined
//     }
// `);
//     // ...however this probably should be replaced with something like:
//     // attr={arrayOfDynamicKeyValues.some(val => val !== undefined) ? arrayOfDynamicKeyValues.filter(val => val !== undefined).join(" ") : undefined}
//   });
// });

// const find = (response: Response, path: string): string | undefined => {
//   const files = response.metaTemplates.map(mt => mt.files);
//   const match = files.find(fileObj => !!fileObj[path]);
//   if (match) return match[path];
// };

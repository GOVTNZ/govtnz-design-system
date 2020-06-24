import {
  makeTemplates,
  makeIndexImports,
  makeUsage,
  CSSVariablePattern,
  TemplateUsages,
  jsxToUsageCode,
} from "../index";

export const testFormat = (formatId: string) => {
  describe("Snapshots", () => {
    // it("makeIndexImports", () => {
    //   const files = { "react-ts/blah.js": 'console.log("html5zombo.com");' };
    //   const result = makeIndexImports({ fileKeys: Object.keys(files) });
    //   expect(result).toMatchSnapshot();
    // });

    // it(`${formatId}: Basic variables`, async () => {
    //   const metaTemplate = await makeTemplates(
    //     {
    //       html:
    //         '<p><mt-variable key="children">Some placeholder text</mt-variable></p>',
    //       css: "",
    //       id: "paragraph",
    //     },
    //     [formatId]
    //   );
    //   expect(metaTemplate).toMatchSnapshot();
    // });

    // it(`${formatId}: form input[text]`, async () => {
    //   const metaTemplate = await makeTemplates(
    //     {
    //       html:
    //         '<label for="textId">Label text</label><input id="textId" type="text">',
    //       css: "",
    //       id: "input",
    //     },
    //     [formatId]
    //   );
    //   expect(metaTemplate).toMatchSnapshot();
    // });

    // it(`${formatId}: <img src="pic.jpeg" class="frogs">`, async () => {
    //   const metaTemplate = await makeTemplates(
    //     {
    //       html: '<img src="../file.png" class="frogs">',
    //       css: ".frogs { background: green }",
    //       id: "imgSrc",
    //     },
    //     [formatId]
    //   );
    //   expect(metaTemplate).toMatchSnapshot();
    // });

    // it(`${formatId}: Form input[checked]`, async () => {
    //   const metaTemplate = await makeTemplates(
    //     {
    //       html: '<input id="textId" type="checkbox" >',
    //       css: "",
    //       id: "input",
    //     },
    //     [formatId]
    //   );
    //   expect(metaTemplate).toMatchSnapshot();
    // });

    // it(`${formatId}: H1 with configurable Id`, async () => {
    //   const metaTemplate = await makeTemplates(
    //     {
    //       html: '<h1 id="id">stuff</h1>',
    //       css: "",
    //       id: "h1Id",
    //     },
    //     [formatId]
    //   );
    //   expect(metaTemplate).toMatchSnapshot();
    // });

    // it(`${formatId}: Form label input[checked]`, async () => {
    //   const metaTemplate = await makeTemplates(
    //     {
    //       html:
    //         '<label for="textId"><input id="textId" type="checkbox" ></label>',
    //       css: "",
    //       id: "input",
    //     },
    //     [formatId]
    //   );
    //   expect(metaTemplate).toMatchSnapshot();
    // });

    // it(`${formatId}: Boolean attribute values`, async () => {
    //   const response = await makeTemplates(
    //     {
    //       html: `
    //       <div class="g-flex-row {{ isReversed?: g-flex-reverse }}">
    //         <mt-variable key="children">Columns</mt-variable>
    //       </div>`,
    //       css: `
    //       .g-flex-row {
    //         color:red;
    //       }
    //       .g-flex-row.g-flex-reverse {
    //         color: blue
    //       }
    //     `,
    //       id: "row",
    //     },
    //     [formatId]
    //   );
    //   expect(response.metaTemplates).toMatchSnapshot();
    // });

    // it(`${formatId}: Boolean attribute values`, async () => {
    //   const response = await makeTemplates(
    //     {
    //       html: `
    //       <div class="g-form-group {{ errorId?: g-form-group--error }}">
    //         <fieldset class="g-fieldset" aria-describedby="hintId errorId">
    //           <legend class="g-fieldset__legend">
    //             <mt-variable key="legend">Legend text</mt-variable>
    //           </legend>
    //           <mt-if key="hintId">
    //             <div class="g-hint" id="hintId">
    //               <mt-variable key="hint">Hint text</mt-variable>
    //             </div>
    //           </mt-if>
    //           <mt-if key="errorId">
    //             <div class="g-error-message" id="errorId">
    //               <span class="g-visually-hidden">
    //                 Error:
    //               </span>
    //               <mt-variable key="error">Error text</mt-variable>
    //             </div>
    //           </mt-if>
    //           <div><mt-variable key="children">Fieldset contents</mt-variable></div>
    //         </fieldset>
    //       </div>`,
    //       css: `
    //       .g-flex-row {
    //         color:red;
    //       }
    //       .g-flex-row.g-flex-reverse {
    //         color: blue
    //       }
    //     `,
    //       id: "row",
    //     },
    //     [formatId]
    //   );
    //   const templateFormats = response.metaTemplates.map(
    //     (templateFormat) => templateFormat.formatId
    //   );
    //   expect(response.metaTemplates).toMatchSnapshot();
    // });

    // it(`${formatId}: with it`, async () => {
    //   const response = await makeTemplates(
    //     {
    //       html: `
    //       <div>
    //         <label for="selectId">
    //           <mt-variable key="label">Example label text</mt-variable>
    //         </label>
    //         <select
    //            id="sedlectId"
    //           >
    //           <mt-variable key="children">
    //             <option>Options</option>
    //           </mt-variable>
    //         </select>
    //       </div>
    //       `,
    //       css: ``,
    //       id: "childrentest",
    //     },
    //     [formatId]
    //   );
    //   console.log(JSON.stringify(response, null, 2));
    //   if (formatId === "react-ts") {
    //     throw Error(JSON.stringify(response, null, 2));
    //   }
    //   expect(response.metaTemplates).toMatchSnapshot();
    // });

    // it(`${formatId}: with it`, async () => {
    //   const response = await makeTemplates(
    //     {
    //       html: `
    //       <a href="{{href}}" class="g-link {{class}}">
    //         <mt-variable key="children"></mt-variable>
    //       </a>
    //       `,
    //       css: ``,
    //       id: "childrentest",
    //     },
    //     [formatId]
    //   );
    //   if (formatId === "react-ts" || formatId === "vue-ts") {
    //     throw Error(JSON.stringify(response, null, 2));
    //   }
    //   expect(response.metaTemplates).toMatchSnapshot();
    // });

    // it(`${formatId}: multiple <mt-if> key comparison`, async () => {
    //   const response = await makeTemplates(
    //     {
    //       html: `
    //         <mt-if key="mode?=firstChoice">
    //           here
    //         </mt-if>
    //         <mt-if key="mode?!=firstChoice">
    //           not
    //         </mt-if>
    //       `,
    //       css: ``,
    //       id: "mtcomparison",
    //     },
    //     [formatId]
    //   );
    //   console.log(JSON.stringify(response, null, 2));
    //   if (formatId === "react-ts") {
    //     throw Error(JSON.stringify(response, null, 2));
    //   }
    //   expect(response.metaTemplates).toMatchSnapshot();
    // });

    // it(`${formatId}: aria-labelledby ids`, async () => {
    //   const response = await makeTemplates(
    //     {
    //       html: `
    //       <mt-if key="mode?=live">
    //         <div role="note" aria-live="polite" aria-atomic="true">
    //           <mt-variable key="children"> Example alert content </mt-variable>
    //         </div>
    //       </mt-if>
    //       <mt-if key="mode?!=live">
    //         <div role="note" tabindex="-1" aria-labelledby="headingId">
    //           <mt-variable key="children"> Example alert content </mt-variable>
    //         </div>
    //       </mt-if>
    //       `,
    //       css: ``,
    //       id: "labelledBy",
    //     },
    //     [formatId]
    //   );
    //   console.log(JSON.stringify(response, null, 2));
    //   if (formatId === "react-ts") {
    //     throw Error(JSON.stringify(response, null, 2));
    //   }
    //   expect(response.metaTemplates).toMatchSnapshot();
    // ?

    // it(`${formatId}: make-usage nested mt-if`, async () => {
    //   const code: TemplateUsages = [
    //     {
    //       templateId: "Alert",
    //       variables: {
    //         level: "info",
    //         mode: "live",
    //         headingId: "heading1",
    //         children: [],
    //       },
    //     },
    //   ];
    //   const usages = await makeUsage(
    //     code,
    //     {
    //       Alert: {
    //         id: "Alert",
    //         html: `
    //       <mt-if key="mode?=live">
    //         <div role="note" aria-live="polite" aria-atomic="true">
    //           <div
    //             class="g-alert {{ level: g-alert--info as info | g-alert--warning as warning | g-alert--success as success | g-alert--error as error }}"
    //           >
    //            <mt-if key="level?=info">
    //               A Nested If
    //            </mt-if>
    //             <mt-variable key="children"> Example alert content </mt-variable>
    //           </div>
    //         </div>
    //       </mt-if>
    //       `,
    //         css: "",
    //       },
    //     },
    //     [formatId]
    //   );
    //   console.log(JSON.stringify(usages, null, 2));
    //   expect(usages).toMatchSnapshot();
    // });

    it(`${formatId}: Link with class`, async () => {
      const code: TemplateUsages = await jsxToUsageCode(
        `<A href="http://html5zombo.com/" className="zero">thing</A>`
      );

      console.log(code);

      // const code: TemplateUsages = [
      //   {
      //     templateId: "A",
      //     variables: {
      //       href: "http://html5zombo.com/",
      //       class: "custom-class",
      //       children: [],
      //     },
      //   },
      // ];

      const usages = await makeUsage(
        code,
        {
          A: {
            id: "A",
            html: `
            <a class="g-link {{ isMuted?: g-link--muted }} {{ class? }}" href="#"
            ><mt-variable key="children">Example text</mt-variable></a>     `,
            css: "",
            cssVariables: [],
          },
        },
        [formatId]
      );
      console.log(JSON.stringify(usages, null, 2));
      expect(usages).toMatchSnapshot();
    });

    // it(`${formatId}: with it`, async () => {
    //   const response = await makeTemplates(
    //     {
    //       html: `
    //       <a href="{{href}}" class="g-link {{class}}">
    //         <mt-variable key="children"></mt-variable>
    //       </a>
    //       `,
    //       css: ``,
    //       id: "childrentest",
    //     },
    //     [formatId]
    //   );
    //   if (formatId === "react-ts" || formatId === "vue-ts") {
    //     throw Error(JSON.stringify(response, null, 2));
    //   }
    //   expect(response.metaTemplates).toMatchSnapshot();
    // });

    //     it(`${formatId}: complex make-usage nested mt-if`, async () => {
    //       const code: TemplateUsages = await jsxToUsageCode(`     <Alert mode="live" level="info" headingId="heading1">
    //       <H2 id="heading1">Info: You are alive</H2>
    //       <P>Some text describing what's going on 1.</P>
    //   </Alert>
    //    <Alert level="warning" headingId="heading2">
    //       <H2 id="heading2">Warning: You are alive</H2>
    //       <P>Some text describing what's going on 2.</P>
    //   </Alert>
    //    <Alert level="success" headingId="heading3">
    //       <H2 id="heading3">Success: You are alive</H2>
    //       <P>Some text describing what's going on 3.</P>
    //   </Alert>
    //    <Alert level="error" headingId="heading4">
    //       <H2 id="heading4">Error: You are alive</H2>
    //       <Ul bulleted>
    //           <li><a href="#">Error in this field 4</a></li>
    //       </Ul>
    //   </Alert>`);

    //       const usages = await makeUsage(
    //         code,
    //         {
    //           Alert: {
    //             id: "Alert",
    //             html: `

    //     <mt-if key="mode?=live">
    //     <div role="note" aria-live="polite" aria-atomic="true">
    //       <div<div class="{{ errorId?: g-form-group--error }}"></div>
    //   <label class="g-selectBlock-label" for="selectId">
    //     <mt-variable key="label">Example label text</mt-variable>
    //   </label>
    //   <select
    //     class="g-selectBlock-select {{ error: g-selectBlock-select--error }}"
    //     id="selectId"
    //   >
    //     <mt-variable key="children">
    //       <option>Options</option>
    //     </mt-variable>
    //   </select>
    // </div>

    //         class="g-alert {{ level: g-alert--info as info | g-alert--warning as warning | g-alert--success as success | g-alert--error as error }}"
    //       >
    //         <mt-variable key="children"> Example alert content </mt-variable>
    //         <mt-if key="level=info">
    //           <svg width="32" height="32" viewBox="0 0 32 32" class="g-alert__icon">
    //             <path
    //               d="M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zM16 14c-1.105 0-2 .895-2 2v8c0 1.105.895 2 2 2s2-.895 2-2v-8c0-1.105-.895-2-2-2zm-.003-8c-1.042.002-2 .727-1.997 2.015.002 1.265.962 1.987 2.003 1.985 1.042-.002 2-.727 1.997-1.992-.002-1.288-.962-2.01-2.003-2.008z"
    //             />
    //           </svg>
    //         </mt-if>
    //         <mt-if key="level=warning">
    //           <svg width="32" height="30" viewBox="0 0 32 30" class="g-alert__icon">
    //             <path
    //               d="M16.035 0c.746 0 1.424.387 1.778.995l13.95 26.233c.333.58.314 1.289-.05 1.851-.364.57-1.013.921-1.72.921H2.016c-.707 0-1.366-.349-1.73-.92-.362-.563-.383-1.273-.048-1.852L14.267.995C14.611.387 15.287 0 16.035 0zm-.006 22.938c-1.02 0-1.848.8-1.816 1.752 0 .92.86 1.691 1.847 1.691 1.019 0 1.847-.772 1.847-1.721-.031-.95-.86-1.722-1.878-1.722zm.477-14.015c-.892-.208-1.783.207-2.165.98-.127.266-.16.563-.128.8.063.86.095 1.722.159 2.583.096 1.366.159 2.701.255 4.037.03.415.03.831.063 1.247.033.742.606 1.276 1.37 1.276.732 0 1.337-.534 1.37-1.217.095-2.048.223-4.126.35-6.204l.096-1.662c.063-.86-.51-1.633-1.37-1.84z"
    //             />
    //           </svg>
    //         </mt-if>
    //         <mt-if key="level=success">
    //           <svg width="32" height="32" viewBox="0 0 32 32" class="g-alert__icon">
    //             <path
    //               d="M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zm15.047 7.004c-.96.878-5.696 5.559-5.996 5.735-.78-.703-2.039-1.99-2.878-2.809-.84-.76-1.379-.117-2.398.936-1.14 1.112 0 1.697 1.619 3.277l2.938 2.867c1.08.936 1.979-.468 3.417-1.814l5.877-5.792c1.858-1.756 2.278-1.756.779-3.16-1.32-1.346-1.26-1.346-3.358.76z"
    //             />
    //           </svg>
    //         </mt-if>
    //         <mt-if key="level=error">
    //           <svg width="32" height="32" viewBox="0 0 32 32" class="g-alert__icon">
    //             <path
    //               d="M27.314 27.314c6.248-6.248 6.248-16.38 0-22.628-6.248-6.248-16.38-6.248-22.628 0-6.248 6.248-6.248 16.38 0 22.628 6.248 6.248 16.38 6.248 22.628 0zM14.21 7.175c.405-.878 1.35-1.35 2.297-1.114.911.236 1.52 1.114 1.452 2.093l-.102 1.892c-.134 2.364-.27 4.728-.372 7.058-.034.777-.675 1.385-1.452 1.385-.81 0-1.418-.608-1.453-1.452-.034-.473-.034-.946-.067-1.419-.101-1.52-.169-3.04-.27-4.593-.068-.98-.102-1.96-.17-2.938-.032-.27.002-.609.137-.912zM16 21.873c1.08 0 1.959.879 1.992 1.96 0 1.08-.879 1.959-1.96 1.959-1.047 0-1.958-.88-1.958-1.925-.033-1.082.845-1.994 1.926-1.994z"
    //             />
    //           </svg>
    //         </mt-if>
    //       </div>
    //     </div>
    //   </mt-if>
    //   <mt-if key="mode?!=live">
    //     <div role="note" tabindex="-1" aria-labelledby="headingId">
    //       <div
    //         class="g-alert {{ level: g-alert--info as info | g-alert--warning as warning | g-alert--success as success | g-alert--error as error }}"
    //       >
    //         <mt-variable key="children"> Example alert content </mt-variable>
    //         <mt-if key="level=info">
    //           <svg width="32" height="32" viewBox="0 0 32 32" class="g-alert__icon">
    //             <path
    //               d="M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zM16 14c-1.105 0-2 .895-2 2v8c0 1.105.895 2 2 2s2-.895 2-2v-8c0-1.105-.895-2-2-2zm-.003-8c-1.042.002-2 .727-1.997 2.015.002 1.265.962 1.987 2.003 1.985 1.042-.002 2-.727 1.997-1.992-.002-1.288-.962-2.01-2.003-2.008z"
    //             />
    //           </svg>
    //         </mt-if>
    //         <mt-if key="level=warning">
    //           <svg width="32" height="30" viewBox="0 0 32 30" class="g-alert__icon">
    //             <path
    //               d="M16.035 0c.746 0 1.424.387 1.778.995l13.95 26.233c.333.58.314 1.289-.05 1.851-.364.57-1.013.921-1.72.921H2.016c-.707 0-1.366-.349-1.73-.92-.362-.563-.383-1.273-.048-1.852L14.267.995C14.611.387 15.287 0 16.035 0zm-.006 22.938c-1.02 0-1.848.8-1.816 1.752 0 .92.86 1.691 1.847 1.691 1.019 0 1.847-.772 1.847-1.721-.031-.95-.86-1.722-1.878-1.722zm.477-14.015c-.892-.208-1.783.207-2.165.98-.127.266-.16.563-.128.8.063.86.095 1.722.159 2.583.096 1.366.159 2.701.255 4.037.03.415.03.831.063 1.247.033.742.606 1.276 1.37 1.276.732 0 1.337-.534 1.37-1.217.095-2.048.223-4.126.35-6.204l.096-1.662c.063-.86-.51-1.633-1.37-1.84z"
    //             />
    //           </svg>
    //         </mt-if>
    //         <mt-if key="level=success">
    //           <svg width="32" height="32" viewBox="0 0 32 32" class="g-alert__icon">
    //             <path
    //               d="M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zm15.047 7.004c-.96.878-5.696 5.559-5.996 5.735-.78-.703-2.039-1.99-2.878-2.809-.84-.76-1.379-.117-2.398.936-1.14 1.112 0 1.697 1.619 3.277l2.938 2.867c1.08.936 1.979-.468 3.417-1.814l5.877-5.792c1.858-1.756 2.278-1.756.779-3.16-1.32-1.346-1.26-1.346-3.358.76z"
    //             />
    //           </svg>
    //         </mt-if>
    //         <mt-if key="level=error">
    //           <svg width="32" height="32" viewBox="0 0 32 32" class="g-alert__icon">
    //             <path
    //               d="M27.314 27.314c6.248-6.248 6.248-16.38 0-22.628-6.248-6.248-16.38-6.248-22.628 0-6.248 6.248-6.248 16.38 0 22.628 6.248 6.248 16.38 6.248 22.628 0zM14.21 7.175c.405-.878 1.35-1.35 2.297-1.114.911.236 1.52 1.114 1.452 2.093l-.102 1.892c-.134 2.364-.27 4.728-.372 7.058-.034.777-.675 1.385-1.452 1.385-.81 0-1.418-.608-1.453-1.452-.034-.473-.034-.946-.067-1.419-.101-1.52-.169-3.04-.27-4.593-.068-.98-.102-1.96-.17-2.938-.032-.27.002-.609.137-.912zM16 21.873c1.08 0 1.959.879 1.992 1.96 0 1.08-.879 1.959-1.96 1.959-1.047 0-1.958-.88-1.958-1.925-.033-1.082.845-1.994 1.926-1.994z"
    //             />
    //           </svg>
    //         </mt-if>
    //       </div>
    //     </div>
    //   </mt-if>

    //           `,
    //             css: "",
    //           },
    //           H2: {
    //             id: "H2",
    //             css: "",
    //             html: `<h2
    //           class="g-heading {{ styleSize: g-heading-xl as xlarge | g-heading-l as large | g-heading-m as medium | g-heading-s as small | g-heading-xs as xsmall | g-heading-xxs as xxsmall }}{{ marginBottom8?: g-heading-mb-8 }}{{ marginBottom0?: g-heading-mb-0 }}"
    //           id="id"
    //         >
    //           <mt-variable key="children">Example text</mt-variable>
    //         </h2>
    //         `,
    //           },

    //           Ul: {
    //             id: "Ul",
    //             html: `<ul class="g-list {{ bulleted?: g-list--bullet }}">
    //             <mt-variable key="children">Example text</mt-variable>
    //           </ul>
    //           `,
    //             css: "",
    //           },
    //           P: {
    //             id: "P",
    //             html: `<p class="{{ styleSize: g-body-l as large | g-body-m as medium | g-body-s as small | g-body-xs as x-small }}"><mt-variable key="children">Example text</mt-variable></p> `,
    //             css: "",
    //           },
    //         },
    //         [formatId]
    //       );
    //       expect(usages).toMatchSnapshot();
    //     });

    // it(`${formatId}: Enum attribute values`, async () => {
    //   const response = await makeTemplates(
    //     {
    //       html: `
    //     <div class="{{ containerType: g-flex-container | g-flex-container-fluid }}">
    //       <mt-variable key="children">Rows...</mt-variable>
    //     </div>
    //   `,
    //       css: `
    //     .g-flex-container,
    //     .g-flex-container-fluid {
    //         background: red;
    //       color: purple
    //     }
    //     .g-flex-container-fluid {
    //       color: red;
    //     }
    //     @media only screen and (min-width: 48em) {
    //       .g-flex-container {
    //         color: blue
    //       }
    //     }`,
    //       id: "container",
    //     },
    //     [formatId]
    //   );
    //   expect(response.metaTemplates).toMatchSnapshot();
    // });

    // it(`${formatId}: Lots of enum attribute values`, async () => {
    //   const response = await makeTemplates(
    //     {
    //       html: `
    //   <div
    //     class="g-flex-col
    //       {{ isReversed?: g-flex-reverse }}
    //       {{ columnXs: g-flex-col-xs | g-flex-col-xs-1 | g-flex-col-xs-2 | g-flex-col-xs-3 | g-flex-col-xs-4 | g-flex-col-xs-5 | g-flex-col-xs-6 | g-flex-col-xs-7 | g-flex-col-xs-8 | g-flex-col-xs-9 | g-flex-col-xs-10 | g-flex-col-xs-11 | g-flex-col-xs-12 }}
    //     "
    //   >
    //     <mt-variable key="children">Columns</mt-variable>
    //   </div>`,
    //       css: `
    //   .g-flex-col.g-flex-reverse {
    //       color: red;
    //   }
    //   .g-flex-reversed {
    //       color: green;
    //   }
    //   .g-flex-col-xs {
    //       color: blue;
    //   }`,
    //       id: "container",
    //     },
    //     [formatId]
    //   );
    //   expect(response.metaTemplates).toMatchSnapshot();
    // });

    // it(`${formatId}: Link with boolean class`, async () => {
    //   const response = await makeTemplates(
    //     {
    //       html:
    //         '<a class="g-link {{ isMuted?: g-link--muted }}" href="#"><mt-variable key="children">Example text</mt-variable></a>',
    //       css: ".g-link { color: white } .g-link--muted { opacity: 0.5 }",
    //       id: "a",
    //     },
    //     [formatId]
    //   );
    //   expect(response.metaTemplates).toMatchSnapshot();
    // });
  });

  // it(`${formatId}: CSS Configuration (CSS Variables and Scss Variables)`, async () => {
  //   const cssVariables: CSSVariablePattern[] = [
  //     {
  //       id: "theme-color-white",
  //       defaultValue: "#ffffff",
  //       valueSubstringMatch: "#ffffff",
  //     },
  //   ];
  //   const response = await makeTemplates(
  //     {
  //       html:
  //         '<a class="g-link {{ isMuted?: g-link--muted }}" href="#"><mt-variable key="children">Example text</mt-variable></a>',
  //       css:
  //         ".g-link { color: #ffffff !important } .g-link--muted { opacity: 0.5 }",
  //       id: "a",
  //       cssVariables,
  //     },
  //     [formatId]
  //   );

  //   const { metaTemplates } = response;

  //   expect(metaTemplates).toMatchSnapshot();

  //   const metaTemplatesJson = JSON.stringify(metaTemplates);
  //   if (["scss", "css"].includes(formatId)) {
  //     expect(metaTemplatesJson.indexOf("!important") !== -1).toEqual(true);
  //     expect(
  //       metaTemplatesJson.indexOf("var(--theme-color-white") !== -1
  //     ).toEqual(true);
  //   }
  //   if (["scss"].includes(formatId)) {
  //     expect(metaTemplatesJson.indexOf("$theme-color-white") !== -1).toEqual(
  //       true
  //     );
  //   }
  // });

  // it(`${formatId}: CSS Configuration of Fonts`, async () => {
  //   const cssVariables: CSSVariablePattern[] = [
  //     {
  //       id: "theme-font-family",
  //       defaultValue: "Thing",
  //       valueSubstringMatch: "Arial, sans-serif",
  //     },
  //   ];
  //   const response = await makeTemplates(
  //     {
  //       html:
  //         '<a class="g-link" href="#"><mt-variable key="children">Example text</mt-variable></a>',
  //       css: ".g-link { font-family: Arial, sans-serif }",
  //       id: "a",
  //       cssVariables,
  //     },
  //     [formatId]
  //   );
  //   const { metaTemplates } = response;
  //   expect(metaTemplates).toMatchSnapshot();

  //   const metaTemplatesJson = JSON.stringify(metaTemplates);
  //   if (["scss", "css"].includes(formatId)) {
  //     expect(
  //       metaTemplatesJson.indexOf("var(--theme-font-family") !== -1
  //     ).toEqual(true);
  //   }
  //   if (["scss"].includes(formatId)) {
  //     expect(metaTemplatesJson.indexOf("$theme-font-family") !== -1).toEqual(
  //       true
  //     );
  //   }
  // });

  // it(`${formatId}: CSS Configuration (CSS Variables and Scss Variables)`, async () => {
  //   const cssVariables: CSSVariablePattern[] = [
  //     {
  //       id: "theme-color-white",
  //       defaultValue: "#ffffff",
  //       valueSubstringMatch: "#ffffff",
  //     },
  //   ];
  //   const response = await makeTemplates(
  //     {
  //       html:
  //         '<a class="g-link {{ isMuted?: g-link--muted }}" href="#"><mt-variable key="children">Example text</mt-variable></a>',
  //       css:
  //         '.g-link { background: #ffffff url("big.gif") !important } .g-link--muted { opacity: 0.5 }',
  //       id: "a",
  //       cssVariables,
  //     },
  //     [formatId]
  //   );
  //   const { metaTemplates } = response;
  //   expect(metaTemplates).toMatchSnapshot();
  //   if (["scss", "css"].includes(formatId)) {
  //     // FIXME: update with Jest substring match so we get better
  //     // error messages about the strings we're comparing.
  //     expect(
  //       JSON.stringify(metaTemplates).indexOf("!important") !== -1
  //     ).toBeTruthy();
  //     expect(
  //       JSON.stringify(metaTemplates).indexOf("big.gif") !== -1
  //     ).toBeTruthy();
  //   }
  // });

  // it(`${formatId}: makeUsage`, async () => {
  //   const code: TemplateUsages = [
  //     {
  //       templateId: "H1",
  //       variables: {
  //         children: [
  //           {
  //             templateId: "A",
  //             variables: {
  //               href: "https://html5zombo.com/",
  //               children: "Click me",
  //               reversed: "On",
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   ];
  //   const usages = await makeUsage(
  //     code,
  //     {
  //       H1: {
  //         id: "H1",
  //         html: '<h1><mt-variable key="children"/></h1>',
  //         css: "",
  //       },
  //       A: {
  //         id: "A",
  //         html:
  //           '<a href="{{href}}" class="{{ reversed: g-on as On | g-off as Off }}"><mt-variable key="children"/></a>',
  //         css: "",
  //       },
  //     },
  //     [formatId]
  //   );
  //   expect(usages).toMatchSnapshot();
  // });

  // it(`${formatId}: makeUsage with booleans`, async () => {
  //   const code: TemplateUsages = [
  //     {
  //       templateId: "H1",
  //       variables: {
  //         children: [
  //           {
  //             templateId: "A",
  //             variables: {
  //               href: "https://html5zombo.com/",
  //               children: "Click me",
  //               isReversed: true,
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   ];
  //   const usages = await makeUsage(
  //     code,
  //     {
  //       H1: {
  //         id: "H1",
  //         html: '<h1><mt-variable key="children"/></h1>',
  //         css: "",
  //       },
  //       A: {
  //         id: "A",
  //         html:
  //           '<a href="{{href}}" class="{{ isReversed: g-on as On }}"><mt-variable key="children"/></a>',
  //         css: "",
  //       },
  //     },
  //     [formatId]
  //   );
  //   expect(usages).toMatchSnapshot();
  // });

  // it(`${formatId}: jsxToUsageCode`, async () => {
  //   const code: TemplateUsages = [
  //     {
  //       templateId: "H1",
  //       variables: {
  //         children: [
  //           {
  //             templateId: "A",
  //             variables: {
  //               href: "https://html5zombo.com/",
  //               children: "Click me",
  //               reversed: "On",
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   ];
  //   const usages = await jsxToUsageCode(
  //     '<H1><A href="https://html5zombo.com/">Click me</A></H1>'
  //   );

  //   expect(usages).toEqual([
  //     {
  //       templateId: "H1",
  //       variables: {
  //         children: [
  //           {
  //             templateId: "A",
  //             variables: {
  //               href: "https://html5zombo.com/",
  //               children: "Click me",
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   ]);
  // });

  // it(`${formatId}: jsxToUsageCode with boolean true`, async () => {
  //   const code: TemplateUsages = await jsxToUsageCode(
  //     `<Ul isBulleted>
  //       <Li>Unordered item one</Li>
  //       <Li>Unordered item two</Li>
  //     </Ul>`
  //   );

  //   expect(code).toEqual([
  //     {
  //       templateId: "Ul",
  //       variables: {
  //         isBulleted: true,
  //         children: [
  //           {
  //             templateId: "Li",
  //             variables: {
  //               children: "Unordered item one",
  //             },
  //           },
  //           {
  //             templateId: "Li",
  //             variables: {
  //               children: "Unordered item two",
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   ]);

  //   const usages = await makeUsage(
  //     code,
  //     {
  //       Ul: {
  //         id: "Ul",
  //         html:
  //           '<ul class="{{ isBulleted: g-on }}"><mt-variable key="children"/></ul>',
  //         css: "",
  //       },
  //       Li: {
  //         id: "Li",
  //         html: '<li><mt-variable key="children"/></li>',
  //         css: "",
  //       },
  //     },
  //     [formatId]
  //   );

  //   expect(usages).toMatchSnapshot();
  // });

  // it(`${formatId}: jsxToUsageCode with boolean false`, async () => {
  //   const code: TemplateUsages = await jsxToUsageCode(
  //     `<Ul isBulleted={false}>
  //       <Li>Unordered item one</Li>
  //       <Li>Unordered item two</Li>
  //     </Ul>`
  //   );

  //   expect(code).toEqual([
  //     {
  //       templateId: "Ul",
  //       variables: {
  //         isBulleted: "false",
  //         children: [
  //           {
  //             templateId: "Li",
  //             variables: {
  //               children: "Unordered item one",
  //             },
  //           },
  //           {
  //             templateId: "Li",
  //             variables: {
  //               children: "Unordered item two",
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   ]);

  //   const usages = await makeUsage(
  //     code,
  //     {
  //       Ul: {
  //         id: "Ul",
  //         html:
  //           '<ul class="{{ isBulleted: g-on }}"><mt-variable key="children"/></ul>',
  //         css: "",
  //       },
  //       Li: {
  //         id: "Li",
  //         html: '<li><mt-variable key="children"/></li>',
  //         css: "",
  //       },
  //     },
  //     [formatId]
  //   );

  //   expect(usages).toMatchSnapshot();
  // });

  // it(`${formatId}: jsxToUsageCode with boolean false and inline HTML`, async () => {
  //   const code: TemplateUsages = await jsxToUsageCode(
  //     `<Ul isBulleted={false}>
  //       <Li>Unordered <a href="http://zombo.com/">item one</a></Li>
  //       <Li>Unordered item two</Li>
  //     </Ul>`
  //   );

  //   const usages = await makeUsage(
  //     code,
  //     {
  //       Ul: {
  //         id: "Ul",
  //         html:
  //           '<ul class="{{ isBulleted: g-on }}"><mt-variable key="children"/></ul>',
  //         css: "",
  //       },
  //       Li: {
  //         id: "Li",
  //         html: '<li><mt-variable key="children"/></li>',
  //         css: "",
  //       },
  //     },
  //     [formatId]
  //   );

  //   expect(usages).toMatchSnapshot();
  // });

  // it(`${formatId}: jsxToUsageCode with enumerations`, async () => {
  //   const code: TemplateUsages = await jsxToUsageCode(
  //     `<Div containerType="fixed"></Div>`
  //   );

  //   const usages = await makeUsage(
  //     code,
  //     {
  //       Div: {
  //         id: "Ul",
  //         html:
  //           '<div class="{{ containerType: g-flex-container as fixed | g-flex-container-fluid as fluid }}">test</div>',
  //         css: "",
  //       },
  //     },
  //     [formatId]
  //   );

  //   expect(usages).toMatchSnapshot();
  // });

  // it(`${formatId}: CalculatedProps`, async () => {
  //   const metaTemplate = await makeTemplates(
  //     {
  //       html: "<input>",
  //       css: "",
  //       id: "textbox",
  //       calculatedDynamicKeys: [
  //         { key: "textValueLength", expression: "textValue.length" },
  //       ],
  //     },
  //     [formatId]
  //   );
  //   expect(metaTemplate).toMatchSnapshot();
  // });

  // it(`${formatId}: retains name prop`, async () => {
  //   const html = `
  //     <input id="yearId" name="yearName" type="text" maxlength="4" />
  //     <input id="monthId" name="monthName" value="value2" type="text" maxlength="2" />
  //     <input id="dayId" name="dayName" value="value3" type="text" maxlength="2" />
  //   `;
  //   const metaTemplate = await makeTemplates(
  //     {
  //       html,
  //       css: "",
  //       id: "textboxes",
  //     },
  //     [formatId]
  //   );

  //   expect(metaTemplate).toMatchSnapshot();
  // });

  // it(`${formatId}: renders aria-current`, async () => {
  //   const html = `
  //     <a aria-current="{{ ariaCurrent }}" href="#">test</a>
  //   `;
  //   const metaTemplate = await makeTemplates(
  //     {
  //       html,
  //       css: "",
  //       id: "ariacurrent",
  //     },
  //     [formatId]
  //   );
  //   console.log(JSON.stringify(metaTemplate, null, 2));

  //   expect(metaTemplate).toMatchSnapshot();
  // });

  // it(`${formatId}: renders aria-expanded`, async () => {
  //   const html = `
  //     <button aria-expanded="{{ isOpen }}">test</button>
  //   `;
  //   const metaTemplate = await makeTemplates(
  //     {
  //       html,
  //       css: "",
  //       id: "ariaexpanded",
  //     },
  //     [formatId]
  //   );
  //   console.log("aria-expanded", JSON.stringify(metaTemplate, null, 2));

  //   expect(metaTemplate).toMatchSnapshot();
  // });
};

import { camelCase } from "lodash";
import { TemplateFormat } from "./template-formats/template-format";
import { TemplateInput } from "./index";
import {
  TemplateAttribute,
  DynamicKey,
  DynamicKeyType,
  EnumOption,
  find,
} from "./common";
import { typeFromKey } from "./template-generator";

export const getTemplateAttributes = async (
  args: TemplateAttributesArgs
): Promise<TemplateAttribute[]> => {
  // Deciding which elements have attributes that
  // should be dynamic.
  // TODO: Make this optional
  const { tagName, node, format, template } = args;

  const keys = node.getAttributeNames();
  keys.sort(); // encourage deterministic template generation that doesn't vary by attribute order
  let templateAttributes: TemplateAttribute[] = await Promise.all(
    keys.map(async (key) => {
      const dynamicKeys: DynamicKey[] = [];
      // TODO: Switch to using common.ts's parseAttributeValue

      let value = await NodeGetAttribute(node, key);

      value = value
        .replace(/{{(.*?)}}/g, (match, variable) => {
          const indexOfColon = variable.indexOf(":");
          const endOfKeyIndex =
            indexOfColon !== -1 ? indexOfColon + 1 : variable.length;
          const optional = variable.substring(0, endOfKeyIndex).includes("?");
          const key = variable
            .substring(0, endOfKeyIndex)
            .replace("?", "")
            .replace(":", "")
            .trim();
          let shouldRegisterKey = true;

          let options: EnumOption[];
          if (indexOfColon !== -1) {
            const expression = variable.substring(indexOfColon + 1).trim();
            options = expression.split("|").map(
              (option): EnumOption => {
                // `option` is a string that looks like either,
                //    " valueAndName ", or
                //    " value as name "
                // so when split by " as " it will have either
                // 1 or 2 array items.
                const parts: string[] = option.split(" as ");
                const enumOption: EnumOption = {
                  value: parts[0].trim(),
                  comparison: "=",
                  name: parts.length === 2 ? parts[1].trim() : parts[0].trim(),
                };
                return enumOption;
              }
            );
          }

          let dynamicKey: DynamicKey;
          if (options && options.length > 0) {
            if (options.length === 1) {
              const dynamicKeyType = "boolean";
              const safeKey = format.registerDynamicKey(
                key,
                dynamicKeyType,
                optional,
                tagName
              );
              dynamicKey = {
                key: safeKey,
                optional,
                type: dynamicKeyType,
                ifTrueValue: options[0].value,
              };
            } else {
              const safeKey = shouldRegisterKey
                ? format.registerDynamicKey(key, options, optional, tagName)
                : key;
              dynamicKey = {
                key: safeKey,
                optional,
                type: options,
              };
            }
          } else {
            const booleanKeys = ["aria-expanded"];

            const theType = booleanKeys.includes(key) ? "boolean" : options;

            const safeKey = shouldRegisterKey
              ? format.registerDynamicKey(key, theType, optional, tagName)
              : key;
            dynamicKey = {
              key: safeKey,
              optional,
              type: "string",
            };
          }

          if (!dynamicKey.key || dynamicKey.key.trim().length === 0) {
            throw Error(
              `Unable to parse MetaTemplate attribute variable ${JSON.stringify(
                match
              )}. safeKey was parsed as ${JSON.stringify(
                dynamicKey.key
              )} from key=${JSON.stringify(
                key
              )} (${variable}). Did your template format not return a valid key from registerDynamicKey()?`
            );
          }
          dynamicKeys.push(dynamicKey);
          return "";
        })
        .trim();

      const templateAttribute: TemplateAttribute = {
        key,
        value,
        dynamicKeys,
        dataType: typeFromKey(tagName, key),
      };
      return templateAttribute;
    })
  );

  // TODO: Make this optional
  templateAttributes = await insertDefaultVariables(
    tagName,
    node,
    [...templateAttributes],
    format,
    args
  );

  validateTemplateAttributes(templateAttributes, args);

  return templateAttributes;
};

export const insertDefaultVariables = async (
  tagName: string,
  node: Element,
  oldAttributes: TemplateAttribute[],
  format: TemplateFormat,
  args: TemplateAttributesArgs
): Promise<TemplateAttribute[]> => {
  let attributes: TemplateAttribute[] = oldAttributes;
  const { template } = args;

  await Promise.all(
    ID_SYNONYMS.map(async (idSynonym) => {
      const targetId = find(attributes, idSynonym);
      if (targetId) {
        // Assume elements within a template using the same Id value refer to
        // the same thing, and so we'll give them a single shared dynamicKey
        // (essentially a variable)
        const dynamicKeyNames = targetId.value
          .split(" ")
          .filter((val) => !!val.trim())
          .map((val) => camelCase(val));

        dynamicKeyNames.forEach((dynamicKeyName) => {
          if (!dynamicKeyName || dynamicKeyName.trim().length === 0) {
            throw Error(
              `idSynonym ${idSynonym}="${dynamicKeyName}" is invalid from template id "${template.id}". There must be a value provided. This might be caused by ${idSynonym}="{{ someId }}" which is unnecessary, and should just be ${idSynonym}="someId". The value "someId" will be used for the dynamicKey.`
            );
          }
          format.registerDynamicKey(dynamicKeyName, "string", true, tagName);
        });
        const dynamicKeys = dynamicKeyNames.map(
          (dynamicKeyName): DynamicKey => {
            return {
              key: dynamicKeyName,
              type: "string",
              optional: true, // tempting to make required but when there are multiple keys
            };
          }
        );

        makeTemplateAttribute(
          idSynonym,
          attributes,
          format,
          tagName,
          dynamicKeys
        );
      }
    })
  );

  // because DOM has uppercase tagNames
  const tagNameLowercase = tagName.toLowerCase();

  // const ariaExpandedAttribute = getTemplateAttribute(
  //   "aria-expanded",
  //   attributes
  // );
  // if (ariaExpandedAttribute) {
  //   makeTemplateAttribute("aria-expanded", attributes, format, tagName, [
  //     {
  //       key: format.registerDynamicKey("ariaCurrent", "boolean", true, tagName),
  //       type: "boolean",
  //       optional: true,
  //     },
  //   ]);
  // }

  switch (tagNameLowercase) {
    case "html": {
      makeTemplateAttribute("lang", attributes, format, tagName, true);
      break;
    }
    case "link": {
      makeTemplateAttribute("href", attributes, format, tagName, false);
      makeTemplateAttribute("rel", attributes, format, tagName, true);
      break;
    }
    case "meta": {
      makeTemplateAttribute("name", attributes, format, tagName, true);
      makeTemplateAttribute("http-equiv", attributes, format, tagName, true);
      makeTemplateAttribute("charset", attributes, format, tagName, true);
      makeTemplateAttribute("content", attributes, format, tagName, true);
      break;
    }
    case "details": {
      makeTemplateAttribute("open", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("open", "boolean", true, tagName),
          type: "boolean",
          optional: true,
        },
      ]);
      break;
    }
    case "input": {
      const nameAttribute = getTemplateAttribute("name", attributes);
      const valueAttribute = getTemplateAttribute("value", attributes);

      makeTemplateAttribute("required", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("required", "boolean", true, tagName),
          type: "boolean",
          optional: true,
        },
      ]);

      makeTemplateAttribute("disabled", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("disabled", "boolean", true, tagName),
          type: "boolean",
          optional: true,
        },
      ]);
      makeTemplateAttribute("readonly", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("readOnly", "boolean", true, tagName),
          type: "boolean",
          optional: true,
        },
      ]);
      makeTemplateAttribute("autofocus", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("autoFocus", "boolean", true, tagName),
          type: "boolean",
          optional: true,
        },
      ]);

      const typeAttribute = getTemplateAttribute("type", attributes);

      const isButton =
        typeAttribute &&
        ["submit", "image", "button"].indexOf(typeAttribute.value) !== -1;

      const isNameOptional = !(
        // if there's no type it's implicitly type="text" so it requires a name
        (
          !typeAttribute ||
          // these submit buttons don't require a name
          !isButton
        )
      );

      if (nameAttribute && nameAttribute.value) {
        makeTemplateAttribute("name", attributes, format, tagName, [
          {
            key: format.registerDynamicKey(
              nameAttribute.value,
              "string",
              isNameOptional,
              "input"
            ),
            type: "string",
            optional: isNameOptional,
          },
        ]);
      } else {
        makeTemplateAttribute(
          "name",
          attributes,
          format,
          tagName,
          isNameOptional
        );
      }

      const isCheckedInput =
        typeAttribute && ["radio", "checkbox"].includes(typeAttribute.value);
      const isFileType = typeAttribute && typeAttribute.value === "file";

      if (!isFileType) {
        // Input[type=file] has value that can't be set, but everything else
        // can have a value.
        //
        // Value is dynamic for (eg) <input type="text" value="what you typed">
        // but also for <input type="checkbox" value="if 'checked' this is the value sent to server">
        if (valueAttribute && valueAttribute.value) {
          makeTemplateAttribute("value", attributes, format, tagName, [
            {
              key: format.registerDynamicKey(
                valueAttribute.value,
                "string",
                true,
                tagName
              ),
              type: "string",
              optional: true,
            },
          ]);
        } else {
          makeTemplateAttribute("value", attributes, format, tagName, true);
        }
      }

      if (isCheckedInput) {
        makeTemplateAttribute("checked", attributes, format, tagName, [
          {
            key: format.registerDynamicKey("checked", "boolean", true, tagName),
            type: "boolean",
            optional: true,
          },
        ]);
      } else if (!isFileType) {
        // Assume it's a text box

        if (!typeAttribute || typeAttribute.value === "number") {
          // if it could be a type=number then it might
          // need a min/max.
          makeTemplateAttribute("min", attributes, format, tagName, [
            {
              key: format.registerDynamicKey("min", "number", true, "input"),
              type: "number",
              optional: true,
            },
          ]);
          makeTemplateAttribute("max", attributes, format, tagName, [
            {
              key: format.registerDynamicKey("max", "number", true, "input"),
              type: "number",
              optional: true,
            },
          ]);
        }

        // if there is a provided type then retain that and don't
        // allow it to be configurable
        if (!typeAttribute) {
          makeTemplateAttribute("type", attributes, format, tagName, [
            {
              key: format.registerDynamicKey(
                "type",
                "INPUT_TYPE",
                false,
                "input"
              ),
              type: "string",
              optional: false,
            },
          ]);
        }

        makeTemplateAttribute("spellcheck", attributes, format, tagName, [
          {
            key: format.registerDynamicKey(
              "spellCheck",
              "boolean",
              true,
              tagName
            ),
            type: "boolean",
            optional: true,
          },
        ]);

        let maxLengthAttribute = getTemplateAttribute("maxlength", attributes);

        if (
          maxLengthAttribute &&
          typeAttribute &&
          !typesThatSupportMaxLength.includes(typeAttribute.value)
        ) {
          console.warn(
            `MetaTemplate warning: input type=${typeAttribute} and maxlength are incompatible. See http://w3c.github.io/html/sec-forms.html#apply and https://stackoverflow.com/a/18510925`
          );
        }

        if (
          !maxLengthAttribute &&
          (!typeAttribute ||
            (typeAttribute &&
              typesThatSupportMaxLength.includes(typeAttribute.value)))
        ) {
          maxLengthAttribute = makeTemplateAttribute(
            "maxlength",
            attributes,
            format,
            tagName,
            [
              {
                key: format.registerDynamicKey(
                  "maxLength",
                  "number",
                  true,
                  tagName
                ),
                type: "number",
                optional: true,
              },
            ]
          );
        }
        if (maxLengthAttribute) {
          maxLengthAttribute.isOmittedIfEmpty = true;
        }

        makeTemplateAttribute("autocomplete", attributes, format, tagName, [
          {
            key: format.registerDynamicKey(
              "autoComplete",
              "INPUT_AUTOCOMPLETE",
              false,
              "input"
            ),
            optional: false,
            type: "string",
          },
        ]);
      }
      break;
    }
    case "textarea": {
      makeTemplateAttribute("name", attributes, format, tagName, false);
      makeTemplateAttribute("required", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("required", "boolean", true, tagName),
          type: "boolean",
          optional: true,
        },
      ]);
      makeTemplateAttribute("disabled", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("disabled", "boolean", true, tagName),
          type: "boolean",
          optional: true,
        },
      ]);
      makeTemplateAttribute("readonly", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("readOnly", "boolean", true, tagName),
          type: "boolean",
          optional: true,
        },
      ]);
      makeTemplateAttribute("rows", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("rows", "number", true, tagName),
          type: "number",
          optional: true,
        },
      ]);
      makeTemplateAttribute("cols", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("cols", "number", true, tagName),
          type: "number",
          optional: true,
        },
      ]);
      makeTemplateAttribute("autofocus", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("autoFocus", "boolean", true, tagName),
          type: "boolean",
          optional: true,
        },
      ]);

      makeTemplateAttribute("spellcheck", attributes, format, tagName, [
        {
          key: format.registerDynamicKey(
            "spellCheck",
            "boolean",
            true,
            "textarea"
          ),
          type: "boolean",
          optional: true,
        },
      ]);
      makeTemplateAttribute("autocomplete", attributes, format, tagName, [
        {
          key: format.registerDynamicKey(
            "autoComplete",
            "INPUT_AUTOCOMPLETE",
            false,
            "input"
          ),
          optional: false,
          type: "string",
        },
      ]);

      makeTemplateAttribute("maxlength", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("maxLength", "number", true, tagName),
          type: "number",
          optional: true,
        },
      ]);

      // For a <textarea> setting a 'value' attribute rather than
      // childNodes is a React concept: https://reactjs.org/docs/forms.html#the-textarea-tag
      // but it's transferable to other template formats and I believe
      // it's an easier abstraction than childNodes.
      makeTemplateAttribute("value", attributes, format, tagName, true);
      break;
    }

    case "select": {
      makeTemplateAttribute("name", attributes, format, tagName, false);
      makeTemplateAttribute("required", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("required", "boolean", true, tagName),
          type: "boolean",
          optional: true,
        },
      ]);
      makeTemplateAttribute("multiple", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("multiple", "boolean", true, tagName),
          type: "boolean",
          optional: true,
        },
      ]);
      break;
    }
    case "option": {
      makeTemplateAttribute("selected", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("selected", "boolean", true, tagName),
          type: "boolean",
          optional: true,
        },
      ]);
      break;
    }
    case "a": {
      // because although it could be an anchor target <a id="blah"></a>
      // internal link without a href it's probably an unnecessary
      // use-case to consider because they can put an id="blah" on any
      // element, they don't need to use an 'a', so we can make href
      // a required property.
      makeTemplateAttribute("href", attributes, format, tagName, false);
      makeTemplateAttribute("rel", attributes, format, tagName, true);
      makeTemplateAttribute("target", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("target", "A_TARGET", true, "a"),
          type: "string",
          optional: true,
        },
      ]);

      const ariaCurrentAttribute = getTemplateAttribute(
        "aria-current",
        attributes
      );
      if (ariaCurrentAttribute) {
        makeTemplateAttribute("aria-current", attributes, format, tagName, [
          {
            key: format.registerDynamicKey(
              "ariaCurrent",
              "ARIA_CURRENT",
              true,
              "input"
            ),
            type: "ARIA_CURRENT",
            optional: true,
          },
        ]);
      }

      break;
    }
    case "label": {
      // 'for' already supported in 'idSynonyms'
      break;
    }
    case "abbr": {
      makeTemplateAttribute("title", attributes, format, tagName, false);
      break;
    }
    case "time": {
      makeTemplateAttribute("datetime", attributes, format, tagName, false);
      break;
    }
    case "img": {
      makeTemplateAttribute("src", attributes, format, tagName, false);
      makeTemplateAttribute("width", attributes, format, tagName, true);
      makeTemplateAttribute("height", attributes, format, tagName, true);
      makeTemplateAttribute("srcset", attributes, format, tagName, true);
      makeTemplateAttribute("crossorigin", attributes, format, tagName, [
        {
          key: format.registerDynamicKey(
            "crossorigin",
            "CROSS_ORIGIN",
            true,
            "img"
          ),
          type: "string",
          optional: true,
        },
      ]);
      break;
    }
    case "audio": {
      makeTemplateAttribute("src", attributes, format, tagName, true);

      makeTemplateAttribute("controls", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("control", "boolean", true, "audio"),
          type: "boolean",
          optional: true,
        },
      ]);
      makeTemplateAttribute("autoplay", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("autoplay", "boolean", true, "audio"),
          type: "boolean",
          optional: true,
        },
      ]);
      makeTemplateAttribute("muted", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("muted", "boolean", true, "audio"),
          type: "boolean",
          optional: true,
        },
      ]);
      makeTemplateAttribute("preload", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("preload", "boolean", true, "audio"),
          type: "boolean",
          optional: true,
        },
      ]);
      makeTemplateAttribute("loop", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("loop", "boolean", true, "audio"),
          type: "boolean",
          optional: true,
        },
      ]);
      break;
    }
    case "video": {
      makeTemplateAttribute("src", attributes, format, tagName, true);
      makeTemplateAttribute("width", attributes, format, tagName, true);
      makeTemplateAttribute("height", attributes, format, tagName, true);
      makeTemplateAttribute("poster", attributes, format, tagName, true);
      makeTemplateAttribute("controls", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("control", "boolean", true, "video"),
          type: "boolean",
          optional: true,
        },
      ]);
      makeTemplateAttribute("autoplay", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("autoplay", "boolean", true, "video"),
          type: "boolean",
          optional: true,
        },
      ]);
      makeTemplateAttribute("muted", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("muted", "boolean", true, "video"),
          type: "boolean",
          optional: true,
        },
      ]);
      makeTemplateAttribute("preload", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("preload", "boolean", true, "video"),
          type: "boolean",
          optional: true,
        },
      ]);
      makeTemplateAttribute("loop", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("loop", "boolean", true, "video"),
          type: "boolean",
          optional: true,
        },
      ]);
      makeTemplateAttribute("crossorigin", attributes, format, tagName, [
        {
          key: format.registerDynamicKey(
            "crossorigin",
            "CROSS_ORIGIN",
            true,
            "video"
          ),
          type: [
            { value: "anonymous", name: "anonymous" },
            { value: "use-credentials", name: "use-credentials" },
          ],
          optional: true,
        },
      ]);
      break;
    }
    case "iframe": {
      makeTemplateAttribute("src", attributes, format, tagName, true);
      makeTemplateAttribute("width", attributes, format, tagName, true);
      makeTemplateAttribute("height", attributes, format, tagName, true);
      makeTemplateAttribute("allow", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("allow", "string", true, "iframe"),
          type: "string",
          optional: true,
        },
      ]);
      // Legacy... still needed?
      makeTemplateAttribute("allowfullscreen", attributes, format, tagName, [
        {
          key: format.registerDynamicKey(
            "allowFullscreen",
            "boolean",
            true,
            "iframe"
          ),
          type: "boolean",
          optional: true,
        },
      ]);
      makeTemplateAttribute(
        "allowpaymentrequest",
        attributes,
        format,
        tagName,
        [
          {
            key: format.registerDynamicKey(
              "allowPaymentRequest",
              "boolean",
              true,
              "iframe"
            ),
            type: "boolean",
            optional: true,
          },
        ]
      );
      break;
    }
    case "td": {
      makeTemplateAttribute("colspan", attributes, format, tagName, true);
      makeTemplateAttribute("rowspan", attributes, format, tagName, true);
      break;
    }
    case "button": {
      makeTemplateAttribute("name", attributes, format, tagName, true);
      makeTemplateAttribute("type", attributes, format, tagName, [
        {
          key: format.registerDynamicKey("type", "BUTTON_TYPE", true, tagName),
          type: "string",
          optional: true,
        },
      ]);

      break;
    }
  }

  return attributes;
};

const makeTemplateAttribute = (
  key: string,
  attributes: TemplateAttribute[],
  format: TemplateFormat,
  tagName: string,
  // dynamicKeys is either literal dynamicKey[] or it's true or false,
  // and when given booleans it will automatically add a single dynamicKey
  // to set values based on the attribute key name, with that boolean used
  // to say whether the dynamicKey is 'optional'
  dynamicKeys?: boolean | DynamicKey[] | undefined
): TemplateAttribute => {
  let attribute: TemplateAttribute | undefined = getTemplateAttribute(
    key,
    attributes
  );
  let dataType: DynamicKeyType = "string";
  if (dynamicKeys && Array.isArray(dynamicKeys) && dynamicKeys.length > 0) {
    dataType = dynamicKeys[0].type === "string" ? "string" : "boolean";
  }
  if (!attribute) {
    attribute = {
      key,
      value: "",
      dataType: dataType,
    };
  }

  attribute.value = "";
  attribute.dataType = dataType;
  if (Array.isArray(dynamicKeys)) {
    attribute.dynamicKeys = dynamicKeys;
    attribute.isOmittedIfEmpty = true;
  } else if (dynamicKeys === true || dynamicKeys === false) {
    const isOptional = !!dynamicKeys;

    if (dataType === undefined) {
      throw Error(
        `Unknown data type ${key}, ${dataType}, ${isOptional}, ${tagName}`
      );
    }
    attribute.dynamicKeys = [
      {
        key: format.registerDynamicKey(key, dataType, isOptional, tagName),
        type: "string",
        optional: isOptional,
      },
    ];
    attribute.isOmittedIfEmpty = true;
  }

  setTemplateAttribute(attribute, attributes);

  return attribute;
};

const setTemplateAttribute = (
  attribute: TemplateAttribute,
  attributes: TemplateAttribute[]
) => {
  const index: number = attributes.findIndex(
    (item) => item.key === attribute.key
  );
  if (index === -1) {
    attributes.push(attribute);
  } else {
    attributes[index] = attribute;
  }
};

const getTemplateAttribute = (
  key: string,
  attributes: TemplateAttribute[]
): TemplateAttribute | undefined => attributes.find((item) => item.key === key);

const validateTemplateAttributes = (
  attributes: TemplateAttribute[],
  args: TemplateAttributesArgs
): void => {
  // Ensure all keys are unique because two attributes shouldn't share the same name
  const uniqueKeys = {};
  attributes.forEach((attribute) => {
    // if it was already taken
    if (uniqueKeys[attribute.key]) {
      throw Error(
        `MetaTemplate internal error: Duplicate attribute name "${attribute.key}" from ${args.template.id} and HTML ${args.template.html}`
      );
    }
    // key used
    uniqueKeys[attribute.key] = true;
  });
};

export type TemplateAttributesArgs = {
  tagName: string;
  node: Element;
  format: TemplateFormat;
  template: TemplateInput;
};

// DEVELOPER NOTE:

export const inputAutocomplete = "INPUT_AUTOCOMPLETE" as const;
export const inputType = "INPUT_TYPE" as const;
export const aTarget = "A_TARGET" as const;
export const ariaCurrent = "ARIA_CURRENT" as const;
export const crossOrigin = "CROSS_ORIGIN" as const;
export const buttonType = "BUTTON_TYPE" as const;
export const onChange = "ONCHANGE" as const;
export const onClick = "ONCLICK" as const;

export const DYNAMIC_ENUMERATION_TYPES = [
  inputAutocomplete,
  inputType,
  aTarget,
  ariaCurrent,
  crossOrigin,
  buttonType,
  onChange,
  onClick,
];

export type DynamicEnumerationTypes =
  | typeof inputAutocomplete
  | typeof inputType
  | typeof aTarget
  | typeof crossOrigin
  | typeof buttonType
  | typeof onChange
  | typeof onClick
  | typeof ariaCurrent;

// const byNames = (enumOptions: EnumOption[]) =>
//   enumOptions.map((enumOption) => enumOption.name);

export const NodeAddClass = async (node, className): Promise<Function> => {
  if (node.isPuppeteer) {
    await node.classList.add(className);
  } else {
    node.classList.add(className);
  }
  return async () => {
    if (node.isPuppeteer) {
      await node.classList.remove(className);
    } else {
      node.classList.remove(className);
    }
  };
};

export const NodeSetAttribute = async (
  node: any,
  name: string,
  value: string
): Promise<Function> => {
  let originalValue;
  if (name === "class") {
    if (node.isPuppeteer) {
      await node.classList_add(value);
    } else {
      node.classList.add(value);
    }
  } else {
    if (node.isPuppeteer) {
      originalValue = await node.getAttribute(name);
      await node.setAttribute(name, value);
    } else {
      originalValue = node.getAttribute(name);
      node.setAttribute(name, value);
    }
  }
  return async () => {
    if (node.isPuppeteer) {
      if (originalValue) {
        await node.setAttribute(name, originalValue);
      } else {
        await node.removeAttribute(name, value);
      }
    } else {
      if (originalValue) {
        node.setAttribute(name, originalValue);
      } else {
        node.removeAttribute(name, value);
      }
    }
  };
};

const typesThatSupportMaxLength = [
  "text",
  "email",
  "search",
  "password",
  "tel",
  "url",
];

export const NodeGetAttribute = async (node, name): Promise<string> => {
  return node.getOriginalAttribute(name) || node.getAttribute(name);
};

export const ID_SYNONYMS: string[] = [
  "id",
  "for",
  "aria-controls",
  "aria-labelledby",
  "aria-describedby",
];

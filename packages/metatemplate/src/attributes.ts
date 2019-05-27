import { camelCase } from "lodash";
import { TemplateInput } from "./index";
import {
  TemplateAttribute,
  DynamicKey,
  DynamicKeyType,
  EnumOption,
  find
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
    keys.map(async key => {
      const dynamicKeys: DynamicKey[] = [];
      // TODO: Switch to using common.ts's parseAttributeValue

      let value = await NodeGetAttribute(node, key);

      value = value
        .replace(/{{(.*?)}}/g, (match, variable) => {
          const indexOfColon = variable.indexOf(":");
          const endOfKeyIndex =
            indexOfColon !== -1 ? indexOfColon + 1 : variable.length;
          const stableKey = variable.substring(0, endOfKeyIndex).includes("!");
          const optional = variable.substring(0, endOfKeyIndex).includes("?");
          const key = variable
            .substring(0, endOfKeyIndex)
            .replace("!", "")
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
                  name: parts.length === 2 ? parts[1].trim() : parts[0].trim()
                };
                return enumOption;
              }
            );
          }

          const assignedKeys = format.getAssignedDynamicKeys();
          if (stableKey && assignedKeys.includes(key)) {
            shouldRegisterKey = false;
          }

          let dynamicKey: DynamicKey;
          if (options && options.length > 0) {
            if (options.length === 1) {
              const dynamicKeyType = "boolean";
              const safeKey = shouldRegisterKey
                ? format.registerDynamicKey(key, dynamicKeyType, optional)
                : key;
              dynamicKey = {
                key: safeKey,
                optional,
                type: dynamicKeyType,
                ifTrueValue: options[0].value
              };
            } else {
              const safeKey = shouldRegisterKey
                ? format.registerDynamicKey(key, options, optional)
                : key;
              dynamicKey = {
                key: safeKey,
                optional,
                type: options,
                stableKey
              };
            }
          } else {
            const safeKey = shouldRegisterKey
              ? format.registerDynamicKey(key, options, optional)
              : key;
            dynamicKey = {
              key: safeKey,
              optional,
              type: "string",
              stableKey
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
        dataType: typeFromKey(tagName, key)
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
  format: any,
  args: TemplateAttributesArgs
): Promise<TemplateAttribute[]> => {
  let attributes: TemplateAttribute[] = oldAttributes;
  const { template } = args;

  await Promise.all(
    ID_SYNONYMS.map(async idSynonym => {
      const targetId = find(attributes, idSynonym);
      if (targetId) {
        // Assume elements within a template using the same Id value refer to
        // the same thing, and so we'll give them a single shared dynamicKey
        // (essentially a variable)
        const dynamicKeyNames = targetId.value
          .split(" ")
          .filter(val => !!val.trim())
          .map(val => camelCase(val));

        dynamicKeyNames.forEach(dynamicKeyName => {
          if (!dynamicKeyName || dynamicKeyName.trim().length === 0) {
            throw Error(
              `idSynonym ${idSynonym}="${dynamicKeyName}" is invalid from template id "${
                template.id
              }". There must be a value provided. This might be caused by ${idSynonym}="{{ someId }}" which is unnecessary, and should just be ${idSynonym}="someId". The value "someId" will be used for the dynamicKey.`
            );
          }
          if (!format.getAssignedDynamicKeys().includes(dynamicKeyName)) {
            // then we're the first to register this id by value
            format.registerDynamicKey(dynamicKeyName, "string", true);
          }
        });
        const dynamicKeys = dynamicKeyNames.map(dynamicKeyName => {
          const dynamicKey: DynamicKey = {
            key: dynamicKeyName,
            type: "string",
            optional: true // tempting to make required but when there are multiple keys
          };
          return dynamicKey;
        });

        makeTemplateAttribute(idSynonym, attributes, format, dynamicKeys);
      }
    })
  );

  // because DOM has uppercase tagNames
  switch (tagName.toLowerCase()) {
    case "html": {
      makeTemplateAttribute("lang", attributes, format, true);
      break;
    }
    case "link": {
      makeTemplateAttribute("href", attributes, format, false);
      makeTemplateAttribute("rel", attributes, format, true);
      break;
    }
    case "meta": {
      makeTemplateAttribute("name", attributes, format, true);
      makeTemplateAttribute("http-equiv", attributes, format, true);
      makeTemplateAttribute("charset", attributes, format, true);
      makeTemplateAttribute("content", attributes, format, true);
      break;
    }
    case "details": {
      makeTemplateAttribute("open", attributes, format, [
        {
          key: format.registerDynamicKey("open", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);
      break;
    }
    case "input": {
      makeTemplateAttribute("name", attributes, format, false);

      makeTemplateAttribute("disabled", attributes, format, [
        {
          key: format.registerDynamicKey("disabled", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);
      makeTemplateAttribute("readonly", attributes, format, [
        {
          key: format.registerDynamicKey("readOnly", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);
      makeTemplateAttribute("autofocus", attributes, format, [
        {
          key: format.registerDynamicKey("autoFocus", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);

      const typeAttribute = getTemplateAttribute("type", attributes);

      const isCheckedInput =
        typeAttribute && ["radio", "checkbox"].includes(typeAttribute.value);
      const isFileType = typeAttribute && typeAttribute.value === "file";

      if (!isFileType) {
        // Input[type=file] has value that can't be set, but everything else
        // can have a value.
        // Value is dynamic for (eg) <input type="text" value="what you typed">
        // but also for <input type="checkbox" value="if checked this is value">
        makeTemplateAttribute("value", attributes, format, true);
      }

      if (isCheckedInput) {
        makeTemplateAttribute("checked", attributes, format, [
          {
            key: format.registerDynamicKey("checked", "boolean", true),
            type: "boolean",
            optional: true
          }
        ]);
      } else if (!isFileType) {
        // Assume it's a text box
        makeTemplateAttribute("type", attributes, format, [
          {
            key: format.registerDynamicKey("type", byNames(inputTypes), false),
            optional: false,
            type: inputTypes
          }
        ]);
        makeTemplateAttribute("spellcheck", attributes, format, [
          {
            key: format.registerDynamicKey("spellCheck", "boolean", true),
            type: "boolean",
            optional: true
          }
        ]);
        makeTemplateAttribute("autocomplete", attributes, format, [
          {
            key: format.registerDynamicKey(
              "autoComplete",
              byNames(autocompletes),
              false
            ),
            optional: false,
            type: autocompletes
          }
        ]);
      }
      break;
    }
    case "textarea": {
      makeTemplateAttribute("name", attributes, format, false);
      makeTemplateAttribute("disabled", attributes, format, [
        {
          key: format.registerDynamicKey("disabled", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);
      makeTemplateAttribute("readonly", attributes, format, [
        {
          key: format.registerDynamicKey("readOnly", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);
      makeTemplateAttribute("rows", attributes, format, [
        {
          key: format.registerDynamicKey("rows", "number", true),
          type: "number",
          optional: true
        }
      ]);
      makeTemplateAttribute("cols", attributes, format, [
        {
          key: format.registerDynamicKey("cols", "number", true),
          type: "number",
          optional: true
        }
      ]);
      makeTemplateAttribute("autofocus", attributes, format, [
        {
          key: format.registerDynamicKey("autoFocus", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);

      makeTemplateAttribute("spellcheck", attributes, format, [
        {
          key: format.registerDynamicKey("spellCheck", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);
      makeTemplateAttribute("autocomplete", attributes, format, [
        {
          key: format.registerDynamicKey(
            "autoComplete",
            byNames(autocompletes),
            false
          ),
          optional: false,
          type: autocompletes
        }
      ]);

      break;
    }

    case "select": {
      makeTemplateAttribute("name", attributes, format, false);
      makeTemplateAttribute("multiple", attributes, format, [
        {
          key: format.registerDynamicKey("multiple", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);
      break;
    }
    case "option": {
      makeTemplateAttribute("selected", attributes, format, [
        {
          key: format.registerDynamicKey("selected", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);
      break;
    }
    case "a": {
      // because although it could be an anchor target <a id="blah"></a>
      // internal link without a href it's probably an unnecessary
      // use-case to consider because they can put an id="blah" on any
      // element, they don't need to use an 'a', so we can make href
      // a required property.
      makeTemplateAttribute("href", attributes, format, false);

      makeTemplateAttribute("rel", attributes, format, true);
      makeTemplateAttribute("target", attributes, format, [
        {
          key: format.registerDynamicKey("target", byNames(aTargets), true),
          type: aTargets,
          optional: true
        }
      ]);
      break;
    }
    case "label": {
      // already supported in 'idSynonyms'
      break;
    }
    case "abbr": {
      makeTemplateAttribute("title", attributes, format, false);
      break;
    }
    case "time": {
      makeTemplateAttribute("datetime", attributes, format, false);
      break;
    }
    case "img": {
      makeTemplateAttribute("src", attributes, format, false);
      makeTemplateAttribute("width", attributes, format, true);
      makeTemplateAttribute("height", attributes, format, true);
      makeTemplateAttribute("srcset", attributes, format, true);
      makeTemplateAttribute("crossorigin", attributes, format, [
        {
          key: format.registerDynamicKey(
            "crossorigin",
            byNames(crossOrigins),
            true
          ),
          type: crossOrigins,
          optional: true
        }
      ]);
      break;
    }
    case "audio": {
      makeTemplateAttribute("src", attributes, format, true);

      makeTemplateAttribute("controls", attributes, format, [
        {
          key: format.registerDynamicKey("control", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);
      makeTemplateAttribute("autoplay", attributes, format, [
        {
          key: format.registerDynamicKey("autoplay", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);
      makeTemplateAttribute("muted", attributes, format, [
        {
          key: format.registerDynamicKey("muted", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);
      makeTemplateAttribute("preload", attributes, format, [
        {
          key: format.registerDynamicKey("preload", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);
      makeTemplateAttribute("loop", attributes, format, [
        {
          key: format.registerDynamicKey("loop", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);
      break;
    }
    case "video": {
      makeTemplateAttribute("src", attributes, format, true);
      makeTemplateAttribute("width", attributes, format, true);
      makeTemplateAttribute("height", attributes, format, true);
      makeTemplateAttribute("poster", attributes, format, true);
      makeTemplateAttribute("controls", attributes, format, [
        {
          key: format.registerDynamicKey("control", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);
      makeTemplateAttribute("autoplay", attributes, format, [
        {
          key: format.registerDynamicKey("autoplay", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);
      makeTemplateAttribute("muted", attributes, format, [
        {
          key: format.registerDynamicKey("muted", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);
      makeTemplateAttribute("preload", attributes, format, [
        {
          key: format.registerDynamicKey("preload", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);
      makeTemplateAttribute("loop", attributes, format, [
        {
          key: format.registerDynamicKey("loop", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);
      makeTemplateAttribute("crossorigin", attributes, format, [
        {
          key: format.registerDynamicKey("crossorigin", "string", true),
          type: [
            { value: "anonymous", name: "anonymous" },
            { value: "use-credentials", name: "use-credentials" }
          ],
          optional: true
        }
      ]);
      break;
    }
    case "iframe": {
      makeTemplateAttribute("src", attributes, format, true);
      makeTemplateAttribute("width", attributes, format, true);
      makeTemplateAttribute("height", attributes, format, true);
      makeTemplateAttribute("allow", attributes, format, [
        {
          key: format.registerDynamicKey("allow", "string", true),
          type: "string",
          optional: true
        }
      ]);
      // Legacy... still needed?
      makeTemplateAttribute("allowfullscreen", attributes, format, [
        {
          key: format.registerDynamicKey("allowFullscreen", "boolean", true),
          type: "boolean",
          optional: true
        }
      ]);
      makeTemplateAttribute("allowpaymentrequest", attributes, format, [
        {
          key: format.registerDynamicKey(
            "allowPaymentRequest",
            "boolean",
            true
          ),
          type: "boolean",
          optional: true
        }
      ]);
      break;
    }
    case "td": {
      makeTemplateAttribute("colspan", attributes, format, true);
      makeTemplateAttribute("rowspan", attributes, format, true);
      break;
    }
    case "button": {
      makeTemplateAttribute("name", attributes, format, true);
      makeTemplateAttribute("type", attributes, format, [
        {
          key: format.registerDynamicKey("type", byNames(buttonTypes), true),
          type: buttonTypes,
          optional: true
        }
      ]);

      break;
    }
  }

  return attributes;
};

const makeTemplateAttribute = (
  key: string,
  attributes: TemplateAttribute[],
  format,
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
      dataType: dataType
    };
  }

  attribute.value = "";
  attribute.dataType = dataType;
  if (Array.isArray(dynamicKeys)) {
    attribute.dynamicKeys = dynamicKeys;
    attribute.isOmittedIfEmpty = true;
  } else if (dynamicKeys === true || dynamicKeys === false) {
    const isOptional = !!dynamicKeys;
    attribute.dynamicKeys = [
      {
        key: format.registerDynamicKey(key, dataType, isOptional),
        type: "string",
        optional: isOptional
      }
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
    item => item.key === attribute.key
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
): TemplateAttribute | undefined => attributes.find(item => item.key === key);

const validateTemplateAttributes = (
  attributes: TemplateAttribute[],
  args: TemplateAttributesArgs
): void => {
  // Ensure all keys are unique because two attributes shouldn't share the same name
  const uniqueKeys = {};
  attributes.forEach(attribute => {
    // if it was already taken
    if (uniqueKeys[attribute.key]) {
      throw Error(
        `MetaTemplate internal error: Duplicate attribute name "${
          attribute.key
        }" from ${args.template.id} and HTML ${args.template.html}`
      );
    }
    // key used
    uniqueKeys[attribute.key] = true;
  });
};

export type TemplateAttributesArgs = {
  tagName: string;
  node: Element;
  format: any;
  template: TemplateInput;
};

// DEVELOPER NOTE:
// These are intended to be more readable versions of the W3C
// values, rather than words localised to New Zealand English,
// so please leave any American English (ie "z" in "organization")
// as such.

export const autocompletes: EnumOption[] = [
  // See DEVELOPER NOTE above
  { value: "off", name: "Off" },
  { value: "on", name: "On" },
  { value: "name", name: "Name" },
  { value: "honorific-prefix", name: "Honorific: Prefix" },
  { value: "given-name", name: "Given Name" },
  { value: "additional-name", name: "Additional Name" },
  { value: "family-name", name: "Family Name" },
  { value: "honorific-suffix", name: "Honorific: Suffix" },
  { value: "nickname", name: "Nickname" },
  { value: "email", name: "Email" },
  { value: "username", name: "Username" },
  { value: "new-password", name: "New Password" },
  { value: "current-password", name: "Current Password" },
  { value: "organization-title", name: "Organization Title" },
  { value: "organization", name: "Organization" },
  { value: "street-address", name: "Street Address" },
  { value: "address-line1", name: "Address Line 1" },
  { value: "address-line2", name: "Address Line 2" },
  { value: "address-line3", name: "Address Line 3" },
  { value: "address-level4", name: "Address Level 4" },
  { value: "address-level3", name: "Address Level 3" },
  { value: "address-level2", name: "Address Level 2" },
  { value: "address-level1", name: "Address Level 1" },
  { value: "country", name: "Country" },
  { value: "country-name", name: "Country Name" },
  { value: "postal-code", name: "Postal Code" },
  { value: "cc-name", name: "Credit Card: Name" },
  { value: "cc-given-name", name: "Credit Card: Given Name" },
  { value: "cc-additional-name", name: "Credit Card: Additional Name" },
  { value: "cc-family-name", name: "Credit Card: Family Name" },
  { value: "cc-number", name: "Credit Card: Number" },
  { value: "cc-exp", name: "Credit Card: Expiry" },
  { value: "cc-exp-month", name: "Credit Card: Expiry Month" },
  { value: "cc-exp-year", name: "Credit Card: Expiry Year" },
  { value: "cc-csc", name: "Credit Card: CSC" },
  { value: "cc-type", name: "Credit Card: Type" },
  { value: "transaction-currency", name: "Transaction: Currency" },
  { value: "transaction-amount", name: "Transaction: Amount" },
  { value: "language", name: "Language" },
  { value: "bday", name: "Birthday" },
  { value: "bday-day", name: "Birthday: Day" },
  { value: "bday-month", name: "Birthday: Month" },
  { value: "bday-year", name: "Birthday: Year" },
  { value: "sex", name: "Sex" },
  { value: "tel", name: "Telephone" },
  { value: "tel-country-code", name: "Telephone: Country Code" },
  { value: "tel-national", name: "Telephone: National" },
  { value: "tel-area-code", name: "Telephone: Area Code" },
  { value: "tel-local", name: "Telephone: Local" },
  { value: "tel-extension", name: "Telephone: Extension" },
  { value: "impp", name: "IMPP" },
  { value: "url", name: "URL" },
  { value: "photo", name: "Photo" }
];

export const inputTypes: EnumOption[] = [
  // See DEVELOPER NOTE above
  { value: "button", name: "Button" },
  { value: "checkbox", name: "Checkbox" },
  { value: "color", name: "Color" },
  { value: "date", name: "Date" },
  { value: "datetime-local", name: "DateTime: Local" },
  { value: "email", name: "Email" },
  { value: "file", name: "File" },
  { value: "hidden", name: "Hidden" },
  { value: "image", name: "Image" },
  { value: "month", name: "Month" },
  { value: "number", name: "Number" },
  { value: "password", name: "Password" },
  { value: "radio", name: "Radio" },
  { value: "range", name: "Range" },
  { value: "reset", name: "Reset" },
  { value: "search", name: "Search" },
  { value: "submit", name: "Submit" },
  { value: "tel", name: "Telephone" },
  { value: "text", name: "Text" },
  { value: "time", name: "Time" },
  { value: "url", name: "URL" },
  { value: "week", name: "Week" }
];

const aTargets: EnumOption[] = [
  // See DEVELOPER NOTE above
  { value: "_blank", name: "Blank" },
  { value: "_top", name: "Top" },
  { value: "_self", name: "Self" },
  { value: "_parent", name: "Parent" }
];

const crossOrigins: EnumOption[] = [
  // See DEVELOPER NOTE above
  { value: "anonymous", name: "Anonymous" },
  { value: "use-credentials", name: "Use Credentials" }
];

const buttonTypes: EnumOption[] = [
  // See DEVELOPER NOTE above
  { value: "submit", name: "Submit" },
  { value: "reset", name: "Reset" },
  { value: "button", name: "Button" }
];

const byNames = (enumOptions: EnumOption[]) =>
  enumOptions.map(enumOption => enumOption.name);

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
  node,
  name,
  value
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

export const NodeGetAttribute = async (node, name): Promise<string> => {
  return node.getOriginalAttribute(name) || node.getAttribute(name);
};

export const ID_SYNONYMS: string[] = [
  "id",
  "for",
  "aria-controls",
  "aria-labelledby",
  "aria-describedby"
];

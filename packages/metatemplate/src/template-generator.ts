import { AttributeDataType } from "./common";

// TODO: Migrate relevant bits from index.ts to here

export const typeFromKey = (
  tagName: string,
  // A tiny bit of future-proofing so we don't have to decide types based
  // on attribute name alone, so we can distinguish between <link href> vs <a href>.
  // I can't think of an HTML5 attribute that varies type based on element name though.
  attrName: string
): AttributeDataType => {
  const booleanAttrNames = ["aria-disabled", "disabled"];
  if (booleanAttrNames.includes(attrName)) return "boolean";
  return "string";
};

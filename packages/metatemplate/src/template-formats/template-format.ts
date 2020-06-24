import {
  TemplateUsages,
  TemplatesById,
  FormatUsageResponse,
  UsageOptions,
} from "../index";
import {
  OnElement,
  OnCloseElement,
  OnVariable,
  OnText,
  OnSerialize,
  DynamicKeyType,
} from "../common";

export interface TemplateFormat {
  dirname: string;
  constructor: Function;
  assignedDynamicKeys: {
    [key: string]: {
      type: DynamicKeyType;
      optional: boolean;
      tagName?: string;
    };
  };
  onElement: (element: OnElement) => Promise<string>;
  onText: (text: OnText) => Promise<void>;
  onVariable: (variable: OnVariable) => Promise<void>;
  onCloseElement: (closeElement: OnCloseElement) => Promise<void>;
  serialize: (options: OnSerialize) => Promise<Object>;
  registerDynamicKey: (
    key: string,
    type: DynamicKeyType,
    optional: boolean,
    tagName: string
  ) => string;
  generateIndex: (filesArr: string[]) => Object;
  makeUsage?: (
    code: TemplateUsages,
    templatesById: TemplatesById,
    options?: UsageOptions
  ) => Promise<FormatUsageResponse>;
}

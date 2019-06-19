import cssParser from "postcss-safe-parser";
import { CSSVariablePattern } from "./index";

const escapeRegexpString = (str: string): string => {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
};

export const replaceCSSVariables = (
  cssString: string,
  cssVariables: CSSVariablePattern[] | undefined,
  language: "css" | "scss" | "styled-components"
): string => {
  const cssProperty = (
    propertyName: string,
    propertyValue: string,
    cssVariables?: CSSVariablePattern[],
    isImportant?: boolean
  ) => {
    const important = isImportant ? " !important" : "";

    let v = `${propertyValue} ${important}`;

    if (cssVariables) {
      cssVariables.forEach((cssVariable: CSSVariablePattern) => {
        if (cssVariable.nameMatch && cssVariable.nameMatch !== propertyName) {
          // if there is a property name match and it doesn't exist
          return;
        } else if (cssVariable.valueMatch === propertyName) {
          if (language === "scss") {
            v = `$${cssVariable.id} ${important};`;
          }
          v += `${propertyName} ${important}; var(--${cssVariable.id}, ${
            cssVariable.defaultValue
          }) ${important}`;
        } else if (
          cssVariable.valueSubstringMatch &&
          propertyValue.indexOf(cssVariable.valueSubstringMatch) !== -1
        ) {
          if (language === "css") {
            v = `${propertyValue.replace(
              new RegExp(
                escapeRegexpString(cssVariable.valueSubstringMatch),
                "g"
              ),
              cssVariable.defaultValue
            )} ${important}`;
            v += ";";
            v += `${propertyName}: ${propertyValue.replace(
              new RegExp(
                escapeRegexpString(cssVariable.valueSubstringMatch),
                "g"
              ),
              `var(--${cssVariable.id}, ${cssVariable.defaultValue})`
            )} ${important}`;
          } else if (language === "scss") {
            const sassVariable = `$${cssVariable.id}`;
            v = propertyValue.replace(
              cssVariable.valueSubstringMatch, // will only replace first instance
              sassVariable
            );
            v += ` ${important};`;
            v += `${propertyName}: ${propertyValue.replace(
              new RegExp(
                escapeRegexpString(cssVariable.valueSubstringMatch),
                "g"
              ),
              `var(--${cssVariable.id}, ${sassVariable})`
            )} ${important}`;
          }
        }
      });
    }
    return v;
  };

  // Prettier maintains single and double but not triple linebreaks,
  // so to compare CSS files we need to increase spacing between CSS rules
  // and then use Prettier to standardise it again... hence closeCSSRule
  // being 3 linebreaks "}\n\n\n"
  const closeCSSRule = "}\n\n\n";

  const renderCSS = node => {
    let response: string = "";
    switch (node.type) {
      case "rule": {
        response += node.selector + "{";
        response += node.nodes ? node.nodes.map(renderCSS).join("\n") : "";
        response += closeCSSRule;
        break;
      }
      case "atrule": {
        response += `@${node.name} ${node.params} {`;
        response += node.nodes.map(renderCSS).join("\n");
        response += closeCSSRule;
        break;
      }
      case "decl": {
        response +=
          node.prop +
          node.raws.between +
          cssProperty(node.prop, node.value, cssVariables, node.important) +
          ";";
        break;
      }

      default: {
        throw Error(
          `MetaTemplate: Unrecognised CSS node type "${
            node.type
          }". Please contribute your CSS as a test case to the project.`
        );
      }
    }
    return response;
  };
  const cssNodes = [...cssParser(cssString).nodes];
  return cssNodes.map(node => renderCSS(node)).join("\n");
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postcss_safe_parser_1 = __importDefault(require("postcss-safe-parser"));
const lodash_1 = require("lodash");
const normalize_govuk_1 = require("./normalize-govuk");
const normalize_generic_1 = require("./normalize-generic");
const jsdom_1 = require("jsdom");
const css_sniff_1 = require("css-sniff");
const utils_1 = require("./utils");
exports.normalizeUpstream = async (sourceId, upstreamReleaseVersions) => {
    let releaseVersions;
    switch (sourceId) {
        case 'govuk': {
            releaseVersions = await Promise.all(upstreamReleaseVersions.map(async (upstreamReleaseVersion) => await normalize_govuk_1.normalizeReleaseVersionGovUk(upstreamReleaseVersion)));
            break;
        }
        case 'flexboxgrid':
        case 'govtnz': {
            // already in metatemplate format, but need to camelCase names
            releaseVersions = await Promise.all(upstreamReleaseVersions.map(async (upstreamReleaseVersion) => await normalize_generic_1.normalizeGeneric(upstreamReleaseVersion)));
            break;
        }
        default: {
            throw Error(`Unknown ${sourceId}`);
        }
    }
    releaseVersions.forEach(releaseVersion => {
        releaseVersion.components.forEach(component => {
            if (component.id !== exports.toId(component.id)) {
                throw new Error(`${__filename}: Component Id name check failure: "${component.id}" !== "${exports.toId(component.id)}"`);
            }
        });
    });
    return releaseVersions;
};
function wrapBody(bodyHTML) {
    return `<!DOCTYPE html><html><body>${bodyHTML}</body></html>`;
}
exports.insertVariableBySelector = async (html, selector, key, defaultValue = 'Example text') => {
    // Selector may be a CSS selector (just one, no comma-separated selectors),
    // but it may also include an XPath-like "/node()" suffix to select text nodes
    // because CSS Selectors can't select such nodes. ie "a/node()" will match text nodes
    // within "a" elements.
    const metaTemplateVariable = `<mt-variable key="${key}">${defaultValue}</mt-variable>`; // Note that JSDOM doesn't understand self-closing custom elements
    const dom = new jsdom_1.JSDOM(wrapBody(html));
    const body = dom.window.document.body;
    let lastParentNode;
    let removeTags;
    if (selector.includes('/node()')) {
        const newSelector = selector.replace(/\/node\(\)$/gi, '');
        const containers = body.querySelectorAll(newSelector);
        removeTags = [];
        [...containers].forEach(container => {
            removeTags = removeTags.concat([...container.childNodes]);
        });
    }
    else {
        removeTags = body.querySelectorAll(selector);
    }
    if (removeTags.length === 0) {
        throw Error(`Unable to find "${selector}" in ${html}`);
    }
    [...removeTags].forEach(removeTag => {
        lastParentNode = removeTag.parentNode;
        lastParentNode.removeChild(removeTag);
    });
    lastParentNode.innerHTML = metaTemplateVariable;
    const result = [...body.childNodes].map(childNode => childNode.outerHTML).join('');
    setTimeout(() => {
        dom.window.close();
        utils_1.gc();
    }, 10);
    return result;
};
exports.setAttributeBySelector = (html, selector, attributeName, defaultValue, dynamicKeys) => {
    // Selector may be a CSS selector
    const dom = new jsdom_1.JSDOM(wrapBody(html));
    const body = dom.window.document.body;
    const target = body.querySelector(selector);
    if (!target) {
        throw Error(`Unable to select node with "${selector}" in ${html}.`);
    }
    let value = defaultValue === undefined ? target.getAttribute(attributeName) || '' : defaultValue;
    if (dynamicKeys && dynamicKeys.length) {
        if (value.length > 0) {
            value += ' ';
        }
        value += dynamicKeys
            .map(dynamicKey => {
            let dk = '{{ ';
            dk += dynamicKey.key;
            if (dynamicKey.stableKey) {
                dk += '!';
            }
            if (Array.isArray(dynamicKey.type)) {
                dk += `${dynamicKey.optional ? '?' : ''}: `;
                dk += dynamicKey.type.map(anEnum => `${anEnum.value} as ${anEnum.name}`).join(' | ');
            }
            else if (dynamicKey.type === 'boolean') {
                // "?" because all booleans are optional ie, not provided=false, provided=true
                dk += `?: ${dynamicKey.ifTrueValue}`;
            }
            dk += ' }}';
            return dk;
        })
            .join(' ');
    }
    target.setAttribute(attributeName, value);
    const result = [...body.childNodes].map(childNode => childNode.outerHTML).join('');
    dom.window.close();
    utils_1.gc();
    return result;
};
exports.removeAttribute = (html, selector, attributeName) => {
    const dom = new jsdom_1.JSDOM(wrapBody(html));
    const body = dom.window.document.body;
    const target = body.querySelector(selector);
    if (!target) {
        throw Error(`Unable to select node with "${selector}" in ${html}.`);
    }
    target.removeAttribute(attributeName);
    const result = Array.from(body.childNodes)
        .map(childNode => childNode.outerHTML)
        .join('');
    dom.window.close();
    utils_1.gc();
    return result;
};
exports.removeElement = (html, selector) => {
    const dom = new jsdom_1.JSDOM(wrapBody(html));
    const body = dom.window.document.body;
    const target = body.querySelector(selector);
    if (!target) {
        throw Error(`Unable to select node with "${selector}" in ${html}.`);
    }
    target.parentNode.removeChild(target);
    const result = Array.from(body.childNodes)
        .map(childNode => childNode.outerHTML)
        .join('');
    dom.window.close();
    utils_1.gc();
    return result;
};
exports.select = (html, selector) => {
    // Selector may be a CSS selector
    const dom = new jsdom_1.JSDOM(wrapBody(html));
    const body = dom.window.document.body;
    const resultNode = body.querySelector(selector);
    if (!resultNode) {
        throw Error(`Couldn't find "${selector}" in: ${html}`);
    }
    const result = resultNode.outerHTML;
    dom.window.close();
    utils_1.gc();
    return result;
};
exports.replaceClass = (html, className, withValue) => {
    // TODO: Use a CSS Parser to rename the class
    if (html.indexOf(className) === -1) {
        throw Error(`Unable to find "${className}" in "${html}".`);
    }
    return html.replace(className, withValue);
};
exports.toId = (id) => {
    // Normalise component id to be camelCase except with the first
    // letter being a capital letter ie CamelCase.
    return id.substring(0, 1).toUpperCase() + lodash_1.camelCase(id.substring(1));
};
exports.filterCSSByClassName = async (className, css) => {
    const html = `<html><head><style>${css}</style></head><body><div class="${className}">text that doesn't matter</div></body></html>`;
    const dom = new jsdom_1.JSDOM(html, {
        resources: 'usable',
        pretendToBeVisual: true
    });
    const document = dom.window.document;
    // Wait for subresources (external CSS) to load so
    // that CSS detection will work
    await new Promise(resolve => {
        document.addEventListener('load', resolve);
    });
    const elements = document.querySelector('div');
    const matchedCSS = await css_sniff_1.getCSSRules([elements], {
        document
    });
    dom.window.close();
    utils_1.gc();
    return css_sniff_1.serializeCSSRules(matchedCSS);
};
exports.setCSSValues = (css, valueReplacer, selectorReplacer, addCallback) => {
    // Prettier maintains single and double but not triple linebreaks,
    // so to compare CSS files we need to increase spacing between CSS rules
    // and then use Prettier to standardise it again... hence closeCSSRule
    // being 3 linebreaks "}\n\n\n"
    const closeCSSRule = '} ';
    let lastAtRule = '';
    let lastSelector = '';
    const renderCSS = node => {
        let response = '';
        switch (node.type.trim() // strangely .trim() is required because node.type can be "@font-face " with a trailing space!
        ) {
            case 'rule': {
                lastSelector = node.selector;
                let callbackResponse;
                if (selectorReplacer) {
                    callbackResponse = selectorReplacer({ selector: node.selector });
                }
                response += callbackResponse !== undefined ? callbackResponse : node.selector;
                response += '{';
                response += node.nodes ? node.nodes.map(renderCSS).join('\n') : '';
                if (addCallback) {
                    const selectors = utils_1.splitSelectors(lastSelector);
                    for (let i = 0; i < selectors.length; i++) {
                        const newVal = addCallback({
                            atRule: lastAtRule,
                            selector: selectors[i]
                        });
                        if (newVal) {
                            response += `${newVal};`;
                        }
                    }
                }
                response += closeCSSRule;
                lastSelector = '';
                break;
            }
            case 'atrule': {
                lastAtRule = `@${node.name} ${node.params}`;
                response += `@${node.name} ${node.params} `;
                if (node.nodes) {
                    response += ' {';
                    response += node.nodes.map(renderCSS).join('\n');
                    response += closeCSSRule;
                }
                else {
                    response += ';';
                }
                lastAtRule = '';
                break;
            }
            case 'decl': {
                const defaultResponse = node.value;
                let callbackResponse;
                if (valueReplacer) {
                    const selectors = utils_1.splitSelectors(lastSelector);
                    for (let i = 0; i < selectors.length; i++) {
                        const newVal = valueReplacer({
                            atRule: lastAtRule,
                            selector: selectors[i],
                            name: node.prop,
                            value: node.value,
                            isImportant: !!node.important
                        });
                        if (callbackResponse && newVal) {
                            // two competing replacement values for this particular CSS property
                            throw Error(`replaceCSSValues error: two competing selectors replaced the value ${lastSelector}`);
                        }
                        callbackResponse = newVal;
                    }
                }
                response +=
                    node.prop +
                        node.raws.between +
                        (callbackResponse !== undefined ? callbackResponse : defaultResponse) +
                        (node.important ? ' !important' : '') +
                        ';';
                break;
            }
            case 'comment': {
                // ignore
                break;
            }
            case '@font-face': {
                throw Error(`${__filename}: Unrecognised CSS node type "${node.type}". Please contribute your CSS as a test case to the project.`);
                break;
            }
            default: {
                throw Error(`${__filename}: Unrecognised CSS node type "${node.type}". Please contribute your CSS as a test case to the project.`);
            }
        }
        return response;
    };
    const cssNodes = [...postcss_safe_parser_1.default(css).nodes];
    return cssNodes.map(node => renderCSS(node)).join('\n');
};
exports.wrapIfBySelector = (html, selector, key) => {
    const dom = new jsdom_1.JSDOM(wrapBody(html), {
        resources: 'usable',
        pretendToBeVisual: true
    });
    const document = dom.window.document;
    const mtIf = document.createElement('mt-if');
    mtIf.setAttribute('key', key);
    const element = document.querySelector(selector);
    element.parentNode.insertBefore(mtIf, element);
    mtIf.appendChild(element);
    const result = [...document.body.childNodes].map(childNode => childNode.outerHTML).join('');
    dom.window.close();
    utils_1.gc();
    return result;
};
//# sourceMappingURL=normalize.js.map
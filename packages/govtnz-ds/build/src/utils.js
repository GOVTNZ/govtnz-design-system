"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const postcss_safe_parser_1 = __importDefault(require("postcss-safe-parser"));
const lodash_1 = require("lodash");
exports.safeMergeCssVariables = (...cssVariableArrays) => {
    const usedIds = [];
    const newArr = [];
    for (let i = 0; i < cssVariableArrays.length; i++) {
        const cssVariableArray = cssVariableArrays[i];
        if (cssVariableArray && cssVariableArray.length) {
            for (let x = 0; x < cssVariableArray.length; x++) {
                const cssVariable = cssVariableArray[x];
                if (usedIds.includes(cssVariable.id)) {
                    const previousCssVariableWithSameId = newArr.find(cssVar => cssVar.id === cssVariable.id);
                    if (!lodash_1.isEqual(previousCssVariableWithSameId, cssVariable)) {
                        throw new Error(`Can't merge CSSVariable ${cssVariable.id} because different values. ${JSON.stringify(previousCssVariableWithSameId)} !== ${JSON.stringify(cssVariable)}`);
                    }
                }
                else {
                    usedIds.push(cssVariable.id);
                    newArr.push(cssVariable);
                }
            }
        }
    }
    return newArr;
};
// From NPM's split-css-selector
// Licenced under MIT
// Thanks to @joakimbeng for this useful function
function splitSelectors(selectors) {
    function isAtRule(selector) {
        return selector.indexOf('@') === 0;
    }
    if (isAtRule(selectors)) {
        return [selectors];
    }
    var splitted = [];
    var parens = 0;
    var angulars = 0;
    var soFar = '';
    for (var i = 0, len = selectors.length; i < len; i++) {
        var char = selectors[i];
        if (char === '(') {
            parens += 1;
        }
        else if (char === ')') {
            parens -= 1;
        }
        else if (char === '[') {
            angulars += 1;
        }
        else if (char === ']') {
            angulars -= 1;
        }
        else if (char === ',') {
            if (!parens && !angulars) {
                splitted.push(soFar.trim());
                soFar = '';
                continue;
            }
        }
        soFar += char;
    }
    splitted.push(soFar.trim());
    return splitted;
}
exports.splitSelectors = splitSelectors;
exports.cssPropertiesToObject = (propertiesString) => {
    const cssRoot = postcss_safe_parser_1.default(propertiesString);
    const properties = {};
    cssRoot.nodes.forEach(node => {
        if (node.type !== 'decl')
            throw Error(`replaceCSS given unknown CSS replacement string that was parsed as node type of "${node.type}" from "${propertiesString}"`);
        properties[node.prop] = node.value;
    });
    return properties;
};
exports.gc = () => {
    if (global && global.gc) {
        global.gc();
    }
    else {
        console.log('Manual GC inactive. Run Node with --inspect flag.');
    }
};
const mTTimingPath = path_1.default.join(os_1.default.tmpdir(), 'metatemplate-timings.json');
exports.getTimingBenchmarks = async () => {
    let timings;
    try {
        const timingsData = (await fs_1.default.promises.readFile(mTTimingPath, { encoding: 'utf-8' })).toString();
        if (timingsData && timingsData.includes('{')) {
            timings = JSON.parse(timingsData);
        }
        else {
            timings = {};
        }
    }
    catch (e) {
        // console.info(e);
        timings = {};
    }
    return timings;
};
exports.setTimingBenchmarks = async (timings) => {
    const timingsJSON = JSON.stringify(timings, null, 2);
    await fs_1.default.promises.writeFile(mTTimingPath, timingsJSON, { encoding: 'utf-8' });
};
//# sourceMappingURL=utils.js.map
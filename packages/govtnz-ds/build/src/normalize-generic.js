"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const progress_1 = __importDefault(require("progress"));
// import ProgressBar from 'progress';
const normalize_1 = require("./normalize");
exports.normalizeGeneric = async (upstreamReleaseVersion) => {
    const bar = new progress_1.default(`${upstreamReleaseVersion.sourceId}@${upstreamReleaseVersion.version} conversion to GovtNZ MetaTemplate Inputs... :bar :percent`, {
        total: upstreamReleaseVersion.components.length
    });
    const newComponents = upstreamReleaseVersion.components.map((component) => {
        bar.tick();
        return {
            ...component,
            id: normalize_1.toId(component.id)
        };
    });
    return {
        ...upstreamReleaseVersion,
        components: newComponents
    };
};
//# sourceMappingURL=normalize-generic.js.map
import { CSSVariablePattern } from '@springload/metatemplate';
export declare const safeMergeCssVariables: (...cssVariableArrays: CSSVariablePattern[][]) => CSSVariablePattern[];
export declare function splitSelectors(selectors: any): any[];
export declare const cssPropertiesToObject: (propertiesString: string) => AnyObject;
export declare type AnyObject = {
    [key: string]: string;
};
export declare const gc: () => void;
declare type TimingsData = {
    [numberOfJobs: number]: {
        [numberOfWorkers: number]: number;
    };
};
export declare const getTimingBenchmarks: () => Promise<TimingsData>;
export declare const setTimingBenchmarks: (timings: TimingsData) => Promise<void>;
export {};

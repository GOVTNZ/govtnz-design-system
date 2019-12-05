import * as React from "react";
declare type Props = {
    radioId?: string;
    hintId?: string;
    disabled?: boolean;
    readOnly?: boolean;
    autoFocus?: boolean;
    gov: string;
    value?: string;
    checked?: boolean;
    onChange: any;
    label?: React.ReactNode;
    hint?: React.ReactNode;
};
declare const RadioBlock: ({ radioId, hintId, disabled, readOnly, autoFocus, gov, value, checked, onChange, label, hint }: Props) => JSX.Element;
export default RadioBlock;

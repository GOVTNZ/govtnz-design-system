import * as React from "react";
declare type Props = {
    radioId?: string | undefined;
    hintId?: string | undefined;
    name: string;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    autoFocus?: boolean | undefined;
    value?: string | undefined;
    checked?: boolean | undefined;
    onChange: any;
    label?: React.ReactNode;
    hint?: React.ReactNode;
};
declare const RadioBlock: ({ radioId, hintId, name, disabled, readOnly, autoFocus, value, checked, onChange, label, hint }: Props) => JSX.Element;
export default RadioBlock;

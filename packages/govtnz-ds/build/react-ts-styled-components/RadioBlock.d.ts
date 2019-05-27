import * as React from "react";
declare type Props = {
    fakeFocus?: boolean | undefined;
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
};
declare const RadioBlock: {
    ({ fakeFocus, radioId, hintId, name, disabled, readOnly, autoFocus, value, checked, onChange, label }: Props): JSX.Element;
    props: string[];
};
export default RadioBlock;

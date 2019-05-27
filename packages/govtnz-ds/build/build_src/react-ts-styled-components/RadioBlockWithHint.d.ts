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
    hint?: React.ReactNode;
};
declare const RadioBlockWithHint: {
    ({ fakeFocus, radioId, hintId, name, disabled, readOnly, autoFocus, value, checked, onChange, label, hint }: Props): JSX.Element;
    props: string[];
};
export default RadioBlockWithHint;

import * as React from "react";
declare type Props = {
    checkboxId?: string;
    hintId?: string;
    disabled?: boolean;
    readOnly?: boolean;
    autoFocus?: boolean;
    name: string;
    value?: string;
    checked?: boolean;
    onChange: any;
    label?: React.ReactNode;
    hint?: React.ReactNode;
};
declare const CheckboxBlock: ({ checkboxId, hintId, disabled, readOnly, autoFocus, name, value, checked, onChange, label, hint }: Props) => JSX.Element;
export default CheckboxBlock;

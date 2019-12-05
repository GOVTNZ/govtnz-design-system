import * as React from "react";
declare type Props = {
    errorId?: string;
    id?: string;
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
    error?: React.ReactNode;
};
declare const CheckboxBlock: ({ errorId, id, hintId, disabled, readOnly, autoFocus, name, value, checked, onChange, label, hint, error }: Props) => JSX.Element;
export default CheckboxBlock;

import React from "react";
declare type Props = {
    id?: string;
    hintId?: string;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    autoFocus?: boolean;
    name: string;
    value?: string;
    checked?: boolean;
    onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
    ref?: React.RefObject<HTMLInputElement>;
    label?: React.ReactNode;
    hint?: React.ReactNode;
};
declare const RadioBlock: ({ id, hintId, required, disabled, readOnly, autoFocus, name, value, checked, onChange, ref, label, hint }: Props) => JSX.Element;
export default RadioBlock;

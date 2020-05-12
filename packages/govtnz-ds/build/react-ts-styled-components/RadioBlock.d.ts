import React from "react";
declare type Props = {
    errorId?: boolean;
    id?: string;
    hintId?: string;
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
declare const RadioBlock: ({ errorId, id, hintId, disabled, readOnly, autoFocus, name, value, checked, onChange, ref, label, hint }: Props) => JSX.Element;
export default RadioBlock;

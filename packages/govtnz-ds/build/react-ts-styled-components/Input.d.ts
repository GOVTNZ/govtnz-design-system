import React from "react";
declare type Props = {
    width?: "30" | "20" | "10" | "5" | "4" | "3" | "2";
    error?: boolean;
    id?: string;
    describedBy?: string;
    disabled?: boolean;
    readOnly?: boolean;
    autoFocus?: boolean;
    name: string;
    value?: string;
    spellCheck?: boolean;
    maxLength?: number;
    autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
    ref?: React.RefObject<HTMLInputElement>;
};
declare const Input: ({ width, error, id, describedBy, disabled, readOnly, autoFocus, name, value, spellCheck, maxLength, autoComplete, onChange, ref }: Props) => JSX.Element;
export default Input;

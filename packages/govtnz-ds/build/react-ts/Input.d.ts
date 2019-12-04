import * as React from "react";
declare type Props = {
    width?: "30" | "20" | "10" | "5" | "4" | "3" | "2" | undefined;
    error?: boolean | undefined;
    id?: string | undefined;
    describedBy?: string | undefined;
    name: string;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    autoFocus?: boolean | undefined;
    value?: string | undefined;
    spellCheck?: boolean | undefined;
    maxLength?: number | undefined;
    autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    onChange: any;
};
declare const Input: ({ width, error, id, describedBy, name, disabled, readOnly, autoFocus, value, spellCheck, maxLength, autoComplete, onChange }: Props) => JSX.Element;
export default Input;

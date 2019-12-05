import * as React from "react";
declare type Props = {
    id?: string;
    describedById?: string;
    name: string;
    disabled?: boolean;
    readOnly?: boolean;
    rows?: number;
    cols?: number;
    autoFocus?: boolean;
    spellCheck?: boolean;
    autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    maxLength?: number;
    value?: string;
    onChange: any;
};
declare const Textarea: ({ id, describedById, name, disabled, readOnly, rows, cols, autoFocus, spellCheck, autoComplete, maxLength, value, onChange }: Props) => JSX.Element;
export default Textarea;

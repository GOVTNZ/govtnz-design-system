import React from "react";
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
    onChange?: React.TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"];
    ref?: React.RefObject<HTMLTextAreaElement>;
};
declare const Textarea: ({ id, describedById, name, disabled, readOnly, rows, cols, autoFocus, spellCheck, autoComplete, maxLength, value, onChange, ref }: Props) => JSX.Element;
export default Textarea;

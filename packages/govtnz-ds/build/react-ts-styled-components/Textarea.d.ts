import * as React from "react";
declare type Props = {
    moreDetail?: string | undefined;
    moreDetailHint?: string | undefined;
    name: string;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    rows?: number | undefined;
    cols?: number | undefined;
    autoFocus?: boolean | undefined;
    spellCheck?: boolean | undefined;
    autoComplete: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    maxLength?: number | undefined;
    value?: string | undefined;
    onChange: any;
};
declare const Textarea: ({ moreDetail, moreDetailHint, name, disabled, readOnly, rows, cols, autoFocus, spellCheck, autoComplete, maxLength, value, onChange }: Props) => JSX.Element;
export default Textarea;

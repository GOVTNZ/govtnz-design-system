import React from "react";
declare type Props = {
    id?: string;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    autoFocus?: boolean;
    name: string;
    onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
    ref?: React.RefObject<HTMLInputElement>;
};
declare const FileUpload: ({ id, required, disabled, readOnly, autoFocus, name, onChange, ref }: Props) => JSX.Element;
export default FileUpload;

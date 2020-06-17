import React from "react";
declare type Props = {
    selectId?: string;
    name: string;
    required?: boolean;
    multiple?: boolean;
    onChange?: React.SelectHTMLAttributes<HTMLSelectElement>["onChange"];
    ref?: React.RefObject<HTMLSelectElement>;
    children?: React.ReactNode;
};
declare const Select: ({ selectId, name, required, multiple, onChange, ref, children }: Props) => JSX.Element;
export default Select;

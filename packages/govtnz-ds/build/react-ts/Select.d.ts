import React from "react";
declare type Props = {
    selectId?: string;
    name: string;
    multiple?: boolean;
    onChange?: React.SelectHTMLAttributes<HTMLSelectElement>["onChange"];
    ref?: React.RefObject<HTMLSelectElement>;
    children?: React.ReactNode;
};
declare const Select: ({ selectId, name, multiple, onChange, ref, children }: Props) => JSX.Element;
export default Select;

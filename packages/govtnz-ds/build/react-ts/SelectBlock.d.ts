import React from "react";
declare type Props = {
    errorId?: boolean;
    selectId?: string;
    label?: React.ReactNode;
    error: boolean;
    name: string;
    required?: boolean;
    multiple?: boolean;
    onChange?: React.SelectHTMLAttributes<HTMLSelectElement>["onChange"];
    ref?: React.RefObject<HTMLSelectElement>;
    children?: React.ReactNode;
};
declare const SelectBlock: ({ errorId, selectId, label, error, name, required, multiple, onChange, ref, children }: Props) => JSX.Element;
export default SelectBlock;

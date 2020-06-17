import React from "react";
declare type Props = {
    errorId?: boolean;
    selectId?: string;
    label?: React.ReactNode;
    error: boolean;
    name: string;
    multiple?: boolean;
    onChange?: React.SelectHTMLAttributes<HTMLSelectElement>["onChange"];
    ref?: React.RefObject<HTMLSelectElement>;
};
declare const SelectBlock: ({ errorId, selectId, label, error, name, multiple, onChange, ref }: Props) => JSX.Element;
export default SelectBlock;

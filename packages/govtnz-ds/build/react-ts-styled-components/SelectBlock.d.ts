import * as React from "react";
declare type Props = {
    selectId?: string;
    label?: React.ReactNode;
    error: boolean;
    name: string;
    multiple?: boolean;
    onChange: any;
    children?: React.ReactNode;
};
declare const SelectBlock: ({ selectId, label, error, name, multiple, onChange, children }: Props) => JSX.Element;
export default SelectBlock;

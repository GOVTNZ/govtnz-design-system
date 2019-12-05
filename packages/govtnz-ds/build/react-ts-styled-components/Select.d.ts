import * as React from "react";
declare type Props = {
    selectId?: string;
    name: string;
    multiple?: boolean;
    onChange: any;
    children?: React.ReactNode;
};
declare const Select: ({ selectId, name, multiple, onChange, children }: Props) => JSX.Element;
export default Select;

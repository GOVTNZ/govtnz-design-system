import * as React from "react";
declare type Props = {
    selectId?: string | undefined;
    name: string;
    multiple?: boolean | undefined;
    onChange: any;
    children?: React.ReactNode;
};
declare const Select: ({ selectId, name, multiple, onChange, children }: Props) => JSX.Element;
export default Select;

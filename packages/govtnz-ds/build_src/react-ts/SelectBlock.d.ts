import * as React from "react";
declare type Props = {
    selectId?: string | undefined;
    label?: React.ReactNode;
    hasError: boolean;
    name: string;
    multiple?: boolean | undefined;
    onChange: any;
    children?: React.ReactNode;
};
declare const SelectBlock: {
    ({ selectId, label, hasError, name, multiple, onChange, children }: Props): JSX.Element;
    props: string[];
};
export default SelectBlock;

/// <reference types="react" />
declare type Props = {
    select1?: string | undefined;
    name: string;
    multiple?: boolean | undefined;
    onChange: any;
    selected?: boolean | undefined;
    selected2?: boolean | undefined;
    selected3?: boolean | undefined;
};
declare const SelectWithFullWidthOverride: {
    ({ select1, name, multiple, onChange, selected, selected2, selected3 }: Props): JSX.Element;
    props: string[];
};
export default SelectWithFullWidthOverride;

/// <reference types="react" />
declare type Props = {
    select2?: string | undefined;
    select2Hint?: string | undefined;
    select2Error?: string | undefined;
    name: string;
    multiple?: boolean | undefined;
    onChange: any;
};
declare const SelectWithHintTextAndErrorMessage: {
    ({ select2, select2Hint, select2Error, name, multiple, onChange }: Props): JSX.Element;
    props: string[];
};
export default SelectWithHintTextAndErrorMessage;

/// <reference types="react" />
declare type Props = {
    fakeFocus?: boolean | undefined;
    gov1?: string | undefined;
    hintId?: string | undefined;
    name: string;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    autoFocus?: boolean | undefined;
    value?: string | undefined;
    checked?: boolean | undefined;
    onChange: any;
};
declare const Radio: ({ fakeFocus, gov1, hintId, name, disabled, readOnly, autoFocus, value, checked, onChange }: Props) => JSX.Element;
export default Radio;
